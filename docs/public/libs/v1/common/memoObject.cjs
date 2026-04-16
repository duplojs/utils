'use strict';

var memo = require('./memo.cjs');

/**
 * {@include common/memoObject/index.md}
 */
function memoObject(getter) {
    const memoizedValue = memo.memo(getter);
    let memoizedKeys = memo.memo(() => Object.keys(memoizedValue.value));
    return new Proxy({}, {
        get: (_target, prop) => memoizedValue.value[prop],
        set: (_target, prop, value) => {
            memoizedValue.value[prop] = value;
            memoizedKeys = memo.memo(() => Object.keys(memoizedValue.value));
            return true;
        },
        ownKeys() {
            return memoizedKeys.value;
        },
        has(_target, prop) {
            return memoizedKeys.value.includes(prop);
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: true,
                configurable: true,
            };
        },
    });
}

exports.memoObject = memoObject;
