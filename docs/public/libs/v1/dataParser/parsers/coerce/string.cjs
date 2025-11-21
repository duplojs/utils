'use strict';

var index = require('../string/index.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../base.cjs');
require('../../../pattern/result.cjs');

function string(definition) {
    return index.string({
        ...definition,
        coerce: true,
    });
}

exports.string = string;
