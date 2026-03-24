'use strict';

var defer$1 = require('./theFlow/defer.cjs');

/**
 * {@include flow/defer/index.md}
 */
function* defer(theFunction) {
    yield defer$1.createDefer(theFunction);
}

exports.defer = defer;
