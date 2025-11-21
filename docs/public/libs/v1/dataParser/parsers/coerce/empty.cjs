'use strict';

require('../../base.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var empty$1 = require('../empty.cjs');
require('../../../pattern/result.cjs');

function empty(definition) {
    return empty$1.empty({
        ...definition,
        coerce: true,
    });
}

exports.empty = empty;
