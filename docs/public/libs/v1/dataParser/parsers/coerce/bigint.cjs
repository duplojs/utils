'use strict';

require('../../base.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var index = require('../bigint/index.cjs');
require('../../../pattern/result.cjs');

function bigint(definition) {
    return index.bigint({
        ...definition,
        coerce: true,
    });
}

exports.bigint = bigint;
