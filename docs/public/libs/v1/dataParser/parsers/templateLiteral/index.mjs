import { pipe } from '../../../common/pipe.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createTemplateLiteralPattern } from './createTemplateLiteralPattern.mjs';

const templateLiteralKind = createDataParserKind("template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe(createTemplateLiteralPattern(template), (result) => new RegExp(`^${result}$`));
    return dataParserInit(templateLiteralKind, {
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
}

export { createTemplateLiteralPattern, templateLiteral, templateLiteralKind };
