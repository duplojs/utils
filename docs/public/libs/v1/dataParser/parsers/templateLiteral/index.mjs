import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createTemplateLiteralPattern } from './createTemplateLiteralPattern.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { createOverride } from '../../../common/override.mjs';

const templateLiteralKind = createDataParserKind("template-literal");
/**
 * {@include dataParser/classic/templateLiteral/index.md}
 */
function templateLiteral(template, definition) {
    const pattern = pipe(createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
    const self = dataParserInit(templateLiteralKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        template,
        pattern,
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
