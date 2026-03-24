'use strict';

var finalizer$1 = require('./theFlow/finalizer.cjs');

/**
 * {@include flow/finalizer/index.md}
 */
function* finalizer(theFunction) {
    yield finalizer$1.createFinalizer(theFunction);
}

exports.finalizer = finalizer;
