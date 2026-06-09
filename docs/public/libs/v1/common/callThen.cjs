'use strict';

/**
 * {@include common/callThen/index.md}
 */
function callThen(input, theFunction, catchFunction) {
    if (catchFunction) {
        try {
            if (input instanceof Promise) {
                return input
                    .then(theFunction)
                    .catch(catchFunction);
            }
            return theFunction(input);
        }
        catch (error) {
            return catchFunction(error);
        }
    }
    if (input instanceof Promise) {
        return input
            .then(theFunction);
    }
    return theFunction(input);
}

exports.callThen = callThen;
