// this is the container for each component
// it's responsible for managing all components
// this means it's responsible for toggling display and edit views
// it's also responsible for managing any data
// a component is passed to this container
// that component config needs to have what?
    // the component reference
    // detailed info about what's passed to it so maybe props type

import { useEffect, useState } from "react";
import { CompConfig } from "../interfaces/CompConfig";
import Select from "../controls/Select";

type CompContainerProps = {
    name: string,
    Component: React.ElementType,
    controls: any,
    setControls: any,
    cssProps: any,
    setCssProps: any,
    position: number;
    isBeingEdited: boolean;
    setAsBeingEdited: any;
    remove: any;
}

function CompContainer({
    name,
    Component,
    controls,
    setControls,
    cssProps,
    setCssProps,
    position,
    isBeingEdited,
    remove,
}: CompContainerProps) {
    console.log(cssProps);
    const style: { [key:string]: string } = {};
    Object.keys(cssProps.parent).map((property: string) => {
        return style[property] = cssProps.parent[property].value;
    });
    
    return (
        <div style={{
            ...style,
            position: 'relative',
        }}>
            <Component {...controls} css={cssProps.child} />
            {isBeingEdited && (
                <div style={{
                    backgroundColor: 'white',
                    padding: '0.5rem',
                    position: 'absolute',
                    overflow: 'scroll',
                }}>
                    <h3>{name}</h3>
                    {Object.keys(controls).map((k: string) => {
                        switch (controls[k].control) {
                            case 'select':
                                return <div key={k} className='mb-2' style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <label><strong>{k}</strong></label>
                                    <Select
                                        value={controls[k].value}
                                        options={controls[k].options}
                                        setter={(value: string) => {
                                            setControls({
                                                ...controls,
                                                [k]: {
                                                    ...controls[k],
                                                    value,
                                                }
                                            });
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
                                        onChange={(e: any) => setControls({
                                            ...controls,
                                            [k]: {
                                                ...controls[k],
                                                value: e.target.value,
                                            }
                                        })}
                                    />
                                </div>
                        }
                    })}
                    {Object.keys(cssProps.parent).map((p: string) => {
                        return <div key={p} className='mb-2' style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <h6><strong>{p}:</strong></h6>
                            <div style={{ display: 'flex' }}>
                                <label>Parent: </label>
                                <Select
                                    value={cssProps.parent[p].value}
                                    options={cssProps.parent[p].options}
                                    setter={(value: string) => {
                                        setCssProps({
                                            ...cssProps,
                                            parent: {
                                                ...cssProps.parent,
                                                [p]: {
                                                    ...cssProps.parent[p],
                                                    value,
                                                }
                                            }
                                        });
                                    }}
                                />
                                <label className='ms-4'>Child: </label>
                                <Select 
                                    value={cssProps.child[p].value}
                                    options={cssProps.child[p].options}
                                    setter={(value: string) => {
                                        setCssProps({
                                            ...cssProps,
                                            child: {
                                                ...cssProps.child,
                                                [p]: {
                                                    ...cssProps.child[p],
                                                    value,
                                                }
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    })}
                    <button onClick={remove}>Remove</button>
                </div>
            )}
        </div>
    );
}

export default CompContainer;