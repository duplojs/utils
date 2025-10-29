'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var templateLiteral$1 = require('../parsers/templateLiteral.cjs');

function templateLiteral(template, definition) {
    return baseExtended.dataParserExtendedInit(templateLiteral$1.templateLiteral(template, definition), {});
}

exports.templateLiteral = templateLiteral;
