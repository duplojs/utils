'use strict';

require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../base.cjs');
require('../../../pattern/result.cjs');
var number$1 = require('../number.cjs');

function number(definition) {
    return number$1.number({
        ...definition,
        coerce: true,
    });
}

exports.number = number;
