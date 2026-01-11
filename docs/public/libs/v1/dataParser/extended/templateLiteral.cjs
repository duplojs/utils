'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/templateLiteral/index.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/templateLiteral/index.md}
 */
function templateLiteral(template, definition) {
    const self = baseExtended.dataParserExtendedInit(index.templateLiteral(template, definition), {});
    return templateLiteral.overrideHandler.apply(self);
}
templateLiteral.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/templateLiteral");

exports.templateLiteral = templateLiteral;
