'use strict';

/**
 * {@include common/pipeCall/index.md}
 */
function pipeCall(theFunction) {
    return (input) => theFunction(input);
}

exports.pipeCall = pipeCall;
