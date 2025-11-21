'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var optional$1 = require('../parsers/optional.cjs');

function optional(inner, definition) {
    return baseExtended.dataParserExtendedInit(optional$1.optional(inner, definition), {});
}

exports.optional = optional;
