'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var index = require('../parsers/templateLiteral/index.cjs');
require('../../pattern/result.cjs');

function templateLiteral(template, definition) {
    return baseExtended.dataParserExtendedInit(index.templateLiteral(template, definition), {});
}

exports.templateLiteral = templateLiteral;
