'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var createTemplateLiteralPattern = require('./createTemplateLiteralPattern.cjs');
var pipe = require('../../../common/pipe.cjs');
var override = require('../../../common/override.cjs');

const templateLiteralKind = kind.createDataParserKind("template-literal");
/**
 * {@include dataParser/classic/templateLiteral/index.md}
 */
function templateLiteral(template, definition) {
    const pattern = pipe.pipe(createTemplateLiteralPattern.createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
    const self = base.dataParserBaseInit(templateLiteralKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        template,
        pattern,
    }, (data, error$1, self) => {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return error.addIssue(error$1, `string matching template literal pattern ${self.definition.pattern.source}`, data, self.definition.errorMessage);
    }, templateLiteral.overrideHandler);
    return self;
}
templateLiteral.overrideHandler = override.createOverride("@duplojs/utils/data-parser/templateLiteral");

exports.createTemplateLiteralPattern = createTemplateLiteralPattern.createTemplateLiteralPattern;
exports.templateLiteral = templateLiteral;
exports.templateLiteralKind = templateLiteralKind;
