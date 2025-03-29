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
    backgroundImage: {
        label: 'Background Image',
        options: [
            'none',
            'url("https://images.unsplash.com/photo-1742201934199-750a39f4c277?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            'url("https://example.com/image2.png")',
            'url("https://example.com/pattern.svg")'
        ],
        default: 'none'
    },
    backgroundSize: {
        label: 'Background Size',
        options: ['auto', 'cover', 'contain', '100% 100%'],
        default: 'cover',
    },
    backgroundPosition: {
        label: 'Background Position',
        options: ['left top', 'center center', 'right bottom', 'left center', 'center top', 'right center'],
        default: 'center center',
    },
    height: {
        label: 'Height',
        options: ['auto', '100%', '50vh', '100vh', '200px', '400px', '600px'],
        default: 'auto',
    },

    width: {
        label: 'Width',
        options: ['auto', '100%', '50vw', '100vw', '200px', '400px', '600px'],
        default: 'auto',
    },
}

// {"root":{"config":{"component":"","controls":{},"css":{"child":{"backgroundImage":{"options":["none","url(\"https://images.unsplash.com/photo-1742201934199-750a39f4c277?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")","url(\"https://example.com/image2.png\")","url(\"https://example.com/pattern.svg\")"],"value":"none"},"height":{"options":["auto","100%","50vh","100vh","200px","400px","600px"],"value":"auto"},"width":{"options":["auto","100%","50vw","100vw","200px","400px","600px"],"value":"auto"},"backgroundSize":{"options":["auto","cover","contain","100% 100%"],"value":"cover"},"color":{"options":["white","black"],"value":"black"}},"parent":{"backgroundImage":{"options":["none","url(\"https://images.unsplash.com/photo-1742201934199-750a39f4c277?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")","url(\"https://example.com/image2.png\")","url(\"https://example.com/pattern.svg\")"],"value":"url(\"https://images.unsplash.com/photo-1742201934199-750a39f4c277?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")"},"height":{"options":["auto","100%","50vh","100vh","200px","400px","600px"],"value":"100vh"},"width":{"options":["auto","100%","50vw","100vw","200px","400px","600px"],"value":"auto"},"backgroundSize":{"options":["auto","cover","contain","100% 100%"],"value":"cover"},"color":{"options":["white","black"],"value":"white"}}},"name":"root"},"position":1},"HeaderTitle44":{"config":{"name":"HeaderTitle","controls":{"type":{"control":"select","value":"h1","options":["h1","h2","h3","h4","h5","h6"]},"header":{"control":"text","value":"Daniel's Website"}},"css":{"parent":{"gridColumnStart":{"options":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"value":"1"},"gridColumnEnd":{"options":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"value":"13"},"textAlign":{"options":["left","center","right","justify","start","end"],"value":"left"},"marginTop":{"options":["0px","4px","8px","12px","16px","24px","32px","40px"],"value":"24px"}},"child":{"gridColumnStart":{"options":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"value":"1"},"gridColumnEnd":{"options":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"value":"13"},"textAlign":{"options":["left","center","right","justify","start","end"],"value":"center"},"marginTop":{"options":["0px","4px","8px","12px","16px","24px","32px","40px"],"value":"0px"}}}},"position":1}}