import { pipe } from '../../../common/pipe.mjs';
import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../either/bool/falsy.mjs';
import '../../../either/bool/truthy.mjs';
import '../../../either/bool/base.mjs';
import '../../../either/left/create.mjs';
import '../../../either/left/error.mjs';
import '../../../either/left/fail.mjs';
import '../../../either/kind.mjs';
import '../../../either/right/success.mjs';
import '../../../either/right/create.mjs';
import '../../../either/right/ok.mjs';
import '../../../either/future/success.mjs';
import '../../../either/future/error.mjs';
import '../../../either/future/base.mjs';
import '../../../either/nullable/empty.mjs';
import '../../../either/nullable/filled.mjs';
import '../../../either/nullable/base.mjs';
import '../../../either/nullish/empty.mjs';
import '../../../either/nullish/filled.mjs';
import '../../../either/nullish/base.mjs';
import '../../../either/optional/empty.mjs';
import '../../../either/optional/filled.mjs';
import '../../../either/optional/base.mjs';
import { createOverride } from '../../../common/override.mjs';
import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createTemplateLiteralPattern } from './createTemplateLiteralPattern.mjs';

const templateLiteralKind = createDataParserKind("template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe(createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
    const self = dataParserInit(templateLiteralKind, {
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
        return SymbolDataParserErrorIssue;
    });
    return templateLiteral.overrideHandler.apply(self);
}
templateLiteral.overrideHandler = createOverride("@duplojs/utils/data-parser/templateLiteral");

export { createTemplateLiteralPattern, templateLiteral, templateLiteralKind };
