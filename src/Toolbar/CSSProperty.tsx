import { useEffect, useState } from "react";

interface CSSPropertyOptions {
    options?: { [key: string]: CSSPropertyOptions };
    setter?: any;
};

interface CSSPropertyProps extends CSSPropertyOptions {
    name: string;
    value: string;
};

export default function CSSProperty({
    name,
    value,
    options,
    setter,
}: CSSPropertyProps) {    
    const [localValue, setLocalValue] = useState(value);
    const [optionKey, setOptionKey] = useState("");

    useEffect(() => {
        setter(name, localValue);
    }, [localValue])

    useEffect(() => {
        setter(name, optionKey);
    }, [optionKey]);

    useEffect(() => {
        setter(name, localValue);
    }, [localValue])

    const cap = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
        <div>
            <label>{cap(name)}: </label>
            { options && Object.keys(options).length === 0 && (
                <input type="text" value={value} onChange={(e) => {
                    console.log("e.target.value): ", e.target.value);
                    
                    setLocalValue(e.target.value)
                }} />
            )}
            { options && Object.keys(options).length >= 1 && (
                <select
                    onChange={(e) => setOptionKey(e.target.value)} // replace with your state handler
                    defaultValue="block"
                >
                    { Object.keys(options).map((k: string) => {
                        return <option key={k} value={k}>{cap(k)}</option>
                    })}
                </select>
            )}
            {/* { optionKey && Object.keys(options[optionKey].options).map((kk: string) => {
                return <CSSProperty key={kk} name={kk} value={} options={options[optionKey].options} setter={() => {}} />
            })} */}
        </div>
    );
}