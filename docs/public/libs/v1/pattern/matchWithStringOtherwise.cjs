'use strict';

function execute(input, matcher, otherwise) {
    const callback = matcher[input];
    return callback === undefined ? otherwise(input) : callback(input);
}
function matchWithStringOtherwise(...args) {
    if (args.length === 2) {
        const [matcher, otherwise] = args;
        return (input) => execute(input, matcher, otherwise);
    }
    const [input, matcher, otherwise] = args;
    return execute(input, matcher, otherwise);
}

exports.matchWithStringOtherwise = matchWithStringOtherwise;
