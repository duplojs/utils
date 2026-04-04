'use strict';

var run = require('./run.cjs');

/**
 * {@include flow/toFunction/index.md}
 */
function toFunction(flow, ...[params]) {
    return (input) => run.run(flow, {
        ...params,
        input,
    });
}

exports.toFunction = toFunction;
