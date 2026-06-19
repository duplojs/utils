'use strict';

var unwrap = require('../../../common/unwrap.cjs');

function execute(input, matcher, otherwise) {
    const callback = matcher[unwrap.unwrap(input)];
    return callback === undefined ? otherwise(input) : callback(input);
}
function matchWithNumberOtherwise(...args) {
    if (args.length === 2) {
        const [matcher, otherwise] = args;
        return (input) => execute(input, matcher, otherwise);
    }
    const [input, matcher, otherwise] = args;
    return execute(input, matcher, otherwise);
}

exports.matchWithNumberOtherwise = matchWithNumberOtherwise;
