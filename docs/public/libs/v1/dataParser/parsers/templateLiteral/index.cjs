'use strict';

var pipe = require('../../../common/pipe.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var createTemplateLiteralPattern = require('./createTemplateLiteralPattern.cjs');

const templateLiteralKind = kind.createDataParserKind("template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe.pipe(createTemplateLiteralPattern.createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
    return base.dataParserInit(templateLiteralKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            template,
            pattern,
        },
    }, (data, _error, self) => {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.createTemplateLiteralPattern = createTemplateLiteralPattern.createTemplateLiteralPattern;
exports.templateLiteral = templateLiteral;
exports.templateLiteralKind = templateLiteralKind;
