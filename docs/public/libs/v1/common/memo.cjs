'use strict';

/**
 * {@include common/memo/index.md}
 */
function memo(theFunction) {
    const payload = {
        get value() {
            const value = theFunction();
            Object.defineProperty(payload, "value", {
                value,
            });
            return value;
        },
    };
    return payload;
}

exports.memo = memo;
