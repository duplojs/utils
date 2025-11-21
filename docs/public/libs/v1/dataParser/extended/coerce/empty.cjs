'use strict';

require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../base.cjs');
require('../../../pattern/result.cjs');
var empty$1 = require('../empty.cjs');

function empty(definition) {
    return empty$1.empty({
        ...definition,
        coerce: true,
    });
}

exports.empty = empty;
