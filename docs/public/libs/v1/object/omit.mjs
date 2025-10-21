function omit(...args) {
    if (args.length === 1) {
        const [omitValue] = args;
        return (input) => omit(input, omitValue);
    }
    const [input, omitValue] = args;
    const formattedOmitValue = omitValue instanceof Array
        ? omitValue.reduce((acc, value) => {
            acc[value] = true;
            return acc;
        }, {})
        : omitValue;
    return Object.entries(input)
        .reduce((acc, [key, value]) => {
        if (formattedOmitValue[key] !== true) {
            acc[key] = value;
        }
        return acc;
    }, {});
}

export { omit };
