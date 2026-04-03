'use strict';

var throttling$1 = require('./theFlow/throttling.cjs');

/**
 * {@include flow/throttling/index.md}
 */
function throttling(time, params) {
    if (params?.keepLast === true) {
        return (async function* () {
            yield throttling$1.createThrottling({
                time,
                returnValue: params?.returnValue,
                keepLast: true,
            });
        })();
    }
    return (function* () {
        yield throttling$1.createThrottling({
            time,
            returnValue: params?.returnValue,
            keepLast: false,
        });
    })();
}

exports.throttling = throttling;
