'use strict';

const regexExtractProperty = /([^.]*)(?:\.([^]*))?/;
function getDeepProperty(...args) {
    if (args.length === 1) {
        const [path] = args;
        return (input) => getDeepProperty(input, path);
    }
    const [input, path] = args;
    const [_match, first, rest] = path.match(regexExtractProperty);
    const currentValue = input[first];
    if (rest) {
        return getDeepProperty(currentValue, rest);
    }
    return currentValue;
}

exports.getDeepProperty = getDeepProperty;
