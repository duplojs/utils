'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var lazy$1 = require('../parsers/lazy.cjs');

function lazy(getter, definition) {
    return baseExtended.dataParserExtendedInit(lazy$1.lazy(getter, definition), {});
}

exports.lazy = lazy;
