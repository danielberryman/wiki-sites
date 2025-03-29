function SelectControl({ 
    value,
    options,
    setter,
}:{ 
    value: string,
    options: string[],
    setter: any,
}) {
    return (
        <div>
            <select
                onChange={(e: any) => setter(e.target.value)}
                value={value}
            >
                {options.map((o: string, i: number) => {
                    return <option key={o+i} value={o}>{o.slice(-10)}</option>;
                })}
            </select>
        </div>
    );
}

export default SelectControl;
