'use strict';

var calledByNext$1 = require('./theFlow/calledByNext.cjs');

/* eslint-disable @typescript-eslint/require-await */
/**
 * {@include flow/calledByNext/index.md}
 */
async function* calledByNext(theFunction) {
    yield calledByNext$1.createCalledByNext(theFunction);
}

exports.calledByNext = calledByNext;
