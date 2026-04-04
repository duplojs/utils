'use strict';

var debounce$1 = require('./theFlow/debounce.cjs');

/* eslint-disable @typescript-eslint/require-await */
/**
 * {@include flow/debounce/index.md}
 */
async function* debounce(time, params) {
    yield debounce$1.createDebounce({
        time,
        returnValue: params?.returnValue,
    });
}

exports.debounce = debounce;
