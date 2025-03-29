import { CompConfig } from "../interfaces/CompConfig";

export const HeaderTitleConfig: CompConfig = {
    name: 'HeaderTitle',
    component: HeaderTitle,
    controls: {
        type: {
            control: 'select',
            value: 'h1',
            options: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
            ],
        },
        header: {
            control: 'text',
            value: 'Title',
        },
    },
    css: {
        parent: {},
        child: {},
    },
}

export type HeaderTitleProps = {
    type: {
        control: string;
        value: any;
        options?: string[];
    };
    header: {
        control: string;
        value: string;
    };
    css: {
        [key: string]: {
            options: string[];
            value: string;
        }
    };
}

function HeaderTitle({ type, header, css }: HeaderTitleProps) {
    console.log('HeaderTitleProps: ', type, header, css);

    const style: { [key:string]: string } = {};
    Object.keys(css).map((property: string) => {
        return style[property] = css[property].value;
    });
    return <type.value style={style}>{header.value}</type.value>;
}

export default HeaderTitle;
