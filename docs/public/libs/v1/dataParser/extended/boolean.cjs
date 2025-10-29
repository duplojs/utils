'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var boolean$1 = require('../parsers/boolean.cjs');
require('../../pattern/result.cjs');

function boolean(definition) {
    return baseExtended.dataParserExtendedInit(boolean$1.boolean(definition), {});
}

exports.boolean = boolean;
