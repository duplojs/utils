'use strict';

var pipe = require('../../../common/pipe.cjs');
require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../../either/bool/falsy.cjs');
require('../../../either/bool/truthy.cjs');
require('../../../either/bool/base.cjs');
require('../../../either/left/create.cjs');
require('../../../either/left/error.cjs');
require('../../../either/left/fail.cjs');
require('../../../either/kind.cjs');
require('../../../either/right/success.cjs');
require('../../../either/right/create.cjs');
require('../../../either/right/ok.cjs');
require('../../../either/future/success.cjs');
require('../../../either/future/error.cjs');
require('../../../either/future/base.cjs');
require('../../../either/nullable/empty.cjs');
require('../../../either/nullable/filled.cjs');
require('../../../either/nullable/base.cjs');
require('../../../either/nullish/empty.cjs');
require('../../../either/nullish/filled.cjs');
require('../../../either/nullish/base.cjs');
require('../../../either/optional/empty.cjs');
require('../../../either/optional/filled.cjs');
require('../../../either/optional/base.cjs');
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
