import { dataParserInit } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
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
    }, (data, error, self) => {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return addIssue(error, `string matching template literal pattern ${self.definition.pattern.source}`, data, self.definition.errorMessage);
    }, templateLiteral.overrideHandler);
    return self;
}
templateLiteral.overrideHandler = createOverride("@duplojs/utils/data-parser/templateLiteral");

export { createTemplateLiteralPattern, templateLiteral, templateLiteralKind };
