'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var object$1 = require('../parsers/object.cjs');
require('../../pattern/result.cjs');

function object(shape, definition) {
    return baseExtended.dataParserExtendedInit(object$1.object(shape, definition), {});
}

exports.object = object;
