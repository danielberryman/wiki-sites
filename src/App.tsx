import { useEffect, useState } from 'react';
import './App.css';
import { HeaderTitleConfig } from './components/HeaderTitle';
import { produce } from 'immer';
import { CSS_PROPERTIES } from './CssProperties';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import SelectControl from './controls/Select';

// When you get even more atomic
// Each css property has character groupings
// for example with gridTemplateColumns is 1fr or repeat(3, 1fr) or other combo
// With border is 1px solid red
// So I need to way to create each of these for each property
// And enforce ordering rules

// I think you could create each of these css atoms with functions
// So if each property had a set of functions that produced it's atoms
// And then I'd need rules to enforce the values

// Example for border
// 3 functions
// 1. setWidth('px', 1); => { type: 'width', measure: 'px', value: 1 } 
// 2. setType('solid'); => { type: 'type', value: 1 }
// 3. setColor('red'); => { type: 'color', value: 'red' }
// RULE: order 'width', 'type', 'color'
// SORT and CONSTRUCT the value

// Example for gridTemplateColumns
// 3 functions
// 1. set('fr', 1); => { type: 'default', measure: 'fr', value: 1 } 
// 1. set('repeat', 1, 'fr', 1); => { type: 'default', measure: 'repeat', value: 1 } 
// RULE: order 'width', 'type', 'color'
// SORT and CONSTRUCT the value

// so the basic premise is designing a system that works at an atomic level
// for all css properties and their possible value combos
// and for this to be manipulated at any level of the elements
// This is WikiCss or WikiSites
// So the first thing I'd need to do would basically be to build these tiny componenets
// And each one would be responsible for it's own little value
// Then I'd enable each property on each element and construct pages that way.
// The end result would be a json file that structures a page.
// So, you add a base component
// You style it by enabling
// Presets of enabled + value css properties

// Ok what's the little MVP I can make
// Sidebar with component library
// Sidebar css property library
// Base container component
// Enable 1 css property on that container component
// Component that holds a div
// H1 Title component
// Enable 1 css property on that H1 Title component

const componentDatabase = {
  [HeaderTitleConfig.name]: HeaderTitleConfig,
};

function App() {
  const [state, setState] = useState<{
    components: { [key: string]: any }
  }>({
    components: {
      root: {
        config: {
          component: '',
          controls: {},
          css: {
            child: {},
            parent: {},
          },
          name: 'root',
        },
        position: 1,
      }
    },
  });
  const [componentBeingEdited, setComponentBeingEdited] = useState("");
  const [componentBeingEditedCssProps, setComponentBeingEditedCssProps] = useState<any[]>([]);
  const [showComponentEditing, setShowComponentEditing] = useState(false);
  const [importedJsonString, setImportedJsonString] = useState("");
  const [showGridLines, setShowGridLines] = useState(false);

  useEffect(() => {
    console.log("state: ", state);
  }, [state]) 

  useEffect(() => {    
    if (state.components[componentBeingEdited]) {
      console.log("componentBeingEdited: ", state.components[componentBeingEdited]);
      const cssKeys = Object.keys(state.components[componentBeingEdited].config.css.parent);
      const cssProps = cssKeys.map(k => {
        return { value: k, label: CSS_PROPERTIES[k].label };
      });
      setComponentBeingEditedCssProps(cssProps);
    }
  }, [componentBeingEdited]);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const stringIsJson = (): boolean => {
    try {
      const parsed = JSON.parse(importedJsonString);
      // Optionally ensure it's an object or array (not just a string or number)
      return typeof parsed === 'object' && parsed !== null;
    } catch (e) {
      return false;
    }
  }

  const addComponentToJson = () => {
    const json = JSON.parse(importedJsonString);
    Object.keys(json).map((k) => {
      if (k !== 'root') {
        json[k].config.component = componentDatabase[json[k].config.name].component;
      }
    });
    return json;
  }

  return (
    <div className='App'>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <h1 className='me-3'>Wiki Sites</h1>
        <h2>Project By: Daniel Berryman</h2>
      </div>
      <div style={{ backgroundColor: 'lightgrey', padding: '0.5em' }}>
        <div style={{ display: 'flex', gap: '2em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label><strong>Select To Add:</strong></label>
            <select
              value={""}
              onChange={(e) => {
                if (e.target.value) {
                  const config = componentDatabase[e.target.value];
                  setState(prev =>
                    produce(prev, draft => {
                      const componentKey = e.target.value + getRandomInt(1, 100);
                      draft.components[componentKey] = {
                        config,
                        position: 1
                      };
                    })
                  );
                }
              }}
            >
              <option></option>
              {Object.keys(componentDatabase).map((k) => {
                return <option key={k} value={k}>{componentDatabase[k].name}</option>;
              })}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label><strong>Select To Edit:</strong></label>
            <select
              onChange={(e) => setComponentBeingEdited(e.target.value)}
            >
              <option></option>
              {Object.keys(state.components).map((k) => {
                return <option key={k} value={k}>{state.components[k].config.name}: {k}</option>;
              })}
            </select>
          </div>
          {componentBeingEdited && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label><strong>CSS Properties:</strong></label>
              <Select
                isMulti
                value={componentBeingEditedCssProps}
                options={Object.keys(CSS_PROPERTIES).map(cssKey => {
                  return { value: cssKey, label: CSS_PROPERTIES[cssKey].label };
                })}
                onChange={(
                  newValue: OnChangeValue<any, true>,
                  actionMeta: ActionMeta<any>
                ) => {
                  console.log(newValue, actionMeta);
                  let newCssProps = [];

                  switch (actionMeta.action) {
                    case 'select-option':
                      newCssProps = [
                        ...componentBeingEditedCssProps,
                        actionMeta.option
                      ];
                      setState(prev =>
                        produce(prev, draft => {
                          draft.components[componentBeingEdited].config.css.parent[actionMeta.option.value] = {
                            options: CSS_PROPERTIES[actionMeta.option.value].options,
                            value: CSS_PROPERTIES[actionMeta.option.value].default,
                          };
                          draft.components[componentBeingEdited].config.css.child[actionMeta.option.value] = {
                            options: CSS_PROPERTIES[actionMeta.option.value].options,
                            value: CSS_PROPERTIES[actionMeta.option.value].default,
                          };
                        })
                      );
                      break;
                    case 'remove-value':
                    case 'pop-value':
                      newCssProps = componentBeingEditedCssProps.filter(({ value }) => {
                        return actionMeta.removedValue.value !== value;
                      });
                      setState(prev =>
                        produce(prev, draft => {
                          delete draft.components[componentBeingEdited].config.css.parent[actionMeta.removedValue.value];
                          delete draft.components[componentBeingEdited].config.css.child[actionMeta.removedValue.value];
                        })
                      );
                      break;
                    case 'clear':
                      break;
                  }
                  setComponentBeingEditedCssProps(newCssProps);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className='mt-2'
        style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}
      >
        {componentBeingEdited ? (
          <div style={{ backgroundColor: 'lightgrey', padding: '0.5em', gridColumn: '1', overflow: 'hidden' }}>
            <h3><strong>{state.components[componentBeingEdited].config.name}</strong></h3>
            <button 
              className='mb-2 me-2'
              onClick={() => {
                setShowComponentEditing(!showComponentEditing);
              }}
            >{showComponentEditing ? 'Hide' : 'Edit'} Styles</button>
            <button
              className='mb-2'
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => {
                setComponentBeingEdited('');
                setState(prev =>
                  produce(prev, draft => {
                    delete draft.components[componentBeingEdited];
                  })
                );
              }}
            >Remove Component</button>
            {showComponentEditing && (
              <div style={{
                backgroundColor: 'white',
                padding: '0.5rem',
              }}>
                {Object.keys(state.components[componentBeingEdited].config.controls).map((k: string) => {
                  const controls = state.components[componentBeingEdited].config.controls;
                  switch (controls[k].control) {
                    case 'select':
                      return <div key={k} className='mb-2' style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <label><strong>{k}</strong></label>
                        <SelectControl
                          value={controls[k].value}
                          options={controls[k].options}
                          setter={(value: string) => {
                            setState(prev =>
                              produce(prev, draft => {
                                draft.components[componentBeingEdited].config.controls = {
                                  ...controls,
                                  [k]: {
                                    ...controls[k],
                                    value,
                                  }
                                };
                              })
                            );
                          }}
                        />
                      </div>
                    default:
                      return <div key={k} className='mb-2' style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <label><strong>{k}</strong></label>
                        <input
                          type='text'
                          value={controls[k].value}
                          onChange={(e: any) => {
                            setState(prev =>
                              produce(prev, draft => {
                                draft.components[componentBeingEdited].config.controls = {
                                  ...controls,
                                  [k]: {
                                    ...controls[k],
                                    value: e.target.value,
                                  }
                                }
                              })
                            )
                          }}
                        />
                      </div>
                  }
                })}
                {Object.keys(state.components[componentBeingEdited].config.css.parent).map((p: string) => {
                  const cssProps = state.components[componentBeingEdited].config.css;
                  return <div key={p} className='mb-2' style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h6><strong>{p}:</strong></h6>
                    <label>Parent: </label>
                    <SelectControl
                      value={cssProps.parent[p].value}
                      options={cssProps.parent[p].options}
                      setter={(value: string) => {
                        setState(prev =>
                          produce(prev, draft => {
                            draft.components[componentBeingEdited].config.css = {
                              ...cssProps,
                              parent: {
                                ...cssProps.parent,
                                [p]: {
                                  ...cssProps.parent[p],
                                  value,
                                }
                              }
                            };
                          })
                        );
                      }}
                    />
                    <label>Child: </label>
                    <SelectControl
                      value={cssProps.child[p].value}
                      options={cssProps.child[p].options}
                      setter={(value: string) => {
                        setState(prev =>
                          produce(prev, draft => {
                            draft.components[componentBeingEdited].config.css = {
                              ...cssProps,
                              child: {
                                ...cssProps.child,
                                [p]: {
                                  ...cssProps.child[p],
                                  value,
                                }
                              }
                            };
                          })
                        );
                      }}
                    />
                  </div>
                })}
              </div>
            )}
          </div>
        ) : (
          <div style={{ backgroundColor: 'lightgrey', padding: '0.5em' }}>
            <h3>Side Bar</h3>
            <h4>Import/Export Components</h4>
            <textarea onChange={(e) => {
              setImportedJsonString(e.target.value);
            }} />
            <button
              disabled={!stringIsJson()}
              onClick={() => {
                const finalJson = addComponentToJson();
                setState({
                  ...state,
                  components: finalJson || {},
                });
              }}
            >
              Import
            </button>
            <button onClick={() => {
              console.log(JSON.stringify(state.components));
            }}>
              Export
            </button>
          </div>
        )}
        <div className='ms-2' style={{ backgroundColor: 'lightgrey', padding: '0.5em' }}>
          <div 
            className='mb-2'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <h3 className='m-0 pe-3'>Your Wiki Site</h3>
            <button
              disabled={Object.keys(state.components).length === 0}
              onClick={() => setShowGridLines(!showGridLines)}
            >Toggle Grid Lines</button>
          </div>
          <div
            style={{
              ...Object.fromEntries(
                Object.entries(state.components['root'].config.css.parent).map(([key, val]) => [key, (val as any).value])
              ),
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
            }}>
              {Object.keys(state.components).map((k: string) => {
                console.log(state.components['root'].config.css.parent);
                
                if (k === 'root') {
                  return;
                }

                const Component = state.components[k].config.component;
                const controls = state.components[k].config.controls;
                const style: { [key:string]: string } = {};
                Object.keys(state.components[k].config.css.parent).map((property: string) => {
                    return style[property] = state.components[k].config.css.parent[property].value;
                });

                return (
                  <div style={{
                    ...style,
                    outline: showGridLines ? '1px dashed magenta' : 'none'
                  }}>
                    <Component {...controls} css={state.components[k].config.css.child} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
