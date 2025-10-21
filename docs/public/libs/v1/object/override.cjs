'use strict';

function override(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (input) => override(input, value);
    }
    const [input, value] = args;
    return Object.entries(value)
        .reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, { ...input });
}

exports.override = override;
