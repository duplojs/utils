'use strict';

var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

function exhaustive(result) {
    return unwrap.unwrap(result);
}

exports.exhaustive = exhaustive;
