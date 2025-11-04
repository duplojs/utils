'use strict';

require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var index = require('../number/index.cjs');
require('../../../pattern/result.cjs');

function number(definition) {
    return index.number({
        ...definition,
        coerce: true,
    });
}

exports.number = number;
