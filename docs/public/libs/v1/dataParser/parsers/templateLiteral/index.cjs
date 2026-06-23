'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var createTemplateLiteralPattern = require('./createTemplateLiteralPattern.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');
var pipe = require('../../../common/pipe.cjs');

const templateLiteralKind = kind.createDataParserKind("template-literal");
class DataParserTemplateLiteral extends base.DataParserBase.init(templateLiteralKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTemplateLiteral);
    }
    static execParse(self, data, error$1) {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return error.addIssue(error$1, `string matching template literal pattern ${self.definition.pattern.source}`, data, self.definition.errorMessage, self);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(template, definition) {
        const pattern = pipe.pipe(createTemplateLiteralPattern.createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
        return {
            ...definition,
            template,
            pattern,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/templateLiteral/index.md}
     */
    static create(template, definition) {
        return new DataParserTemplateLiteral(this.prepareDefinition(template, definition));
    }
}
const templateLiteral = detachObjectMethod.detachObjectMethod(DataParserTemplateLiteral, "create");

exports.createTemplateLiteralPattern = createTemplateLiteralPattern.createTemplateLiteralPattern;
exports.DataParserTemplateLiteral = DataParserTemplateLiteral;
exports.templateLiteral = templateLiteral;
exports.templateLiteralKind = templateLiteralKind;
