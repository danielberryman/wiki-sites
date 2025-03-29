export const CSS_PROPERTIES: {
    [key: string]: {
        label: string,
        options: string[],
        default: string,
    }
} = {
    'backgroundColor': {
        label: 'Background Color',
        options: ['transparent', 'blue', 'red', 'green'],
        default: 'transparent',
    },
    'color': {
        label: 'Color',
        options: ['white', 'black'],
        default: 'black',
    },
    gridColumnStart: {
        label: 'Column Start',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        default: '1',
    },
    gridColumnEnd: {
        label: 'Column End',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        default: '13',
    },
    gridRowStart: {
        label: 'Row Start',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        default: '1',
    },
    gridRowEnd: {
        label: 'Row End',
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        default: '13',
    },
    fontSize: {
        label: 'Font Size',
        options: ['12px', '14px', '16px', '18px', '24px', '32px'],
        default: '16px',
    },
    fontFamily: {
        label: 'Font Family',
        options: ['Arial', 'Georgia', 'Helvetica', 'Times New Roman', 'Courier New', 'sans-serif'],
        default: 'Arial',
    },
    textAlign: {
        label: 'Text Align',
        options: ['left', 'center', 'right', 'justify', 'start', 'end'],
        default: 'left',
    },
    marginTop: {
        label: 'Margin Top',
        options: ['0px', '4px', '8px', '12px', '16px', '24px', '32px', '40px'],
        default: '0px',
    },
    marginBottom: {
        label: 'Margin Bottom',
        options: ['0px', '4px', '8px', '12px', '16px', '24px', '32px', '40px'],
        default: '0px',
    },
    marginLeft: {
        label: 'Margin Left',
        options: ['0px', '4px', '8px', '12px', '16px', '24px', '32px', '40px'],
        default: '0px',
    },
    marginRight: {
        label: 'Margin Right',
        options: ['0px', '4px', '8px', '12px', '16px', '24px', '32px', '40px'],
        default: '0px',
    },
}