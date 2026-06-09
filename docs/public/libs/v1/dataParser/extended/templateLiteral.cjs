'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/templateLiteral/index.cjs');

class DataParserTemplateLiteralExtended extends base.DataParserBaseExtended.initExtended(index.DataParserTemplateLiteral) {
    get classConstructor() {
        return this.checkConstructor(DataParserTemplateLiteralExtended);
    }
    /**
     * {@include dataParser/extended/templateLiteral/index.md}
     */
    static create(template, definition) {
        return new DataParserTemplateLiteralExtended(this.prepareDefinition(template, definition));
    }
}
const templateLiteral = detachObjectMethod.detachObjectMethod(DataParserTemplateLiteralExtended, "create");

exports.DataParserTemplateLiteralExtended = DataParserTemplateLiteralExtended;
exports.templateLiteral = templateLiteral;
