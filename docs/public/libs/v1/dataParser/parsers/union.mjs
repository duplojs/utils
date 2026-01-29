import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { some } from '../../array/some.mjs';
import { createOverride } from '../../common/override.mjs';

const unionKind = createDataParserKind("union");
/**
 * {@include dataParser/classic/union/index.md}
 */
function union(options, definition) {
    const self = dataParserInit(unionKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        options,
    }, {
        sync: (data, error, self) => {
            for (const dataParser of self.definition.options) {
                const result = dataParser.exec(data, error);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            return SymbolDataParserErrorIssue;
        },
        async: async (data, error, self) => {
            for (const dataParser of self.definition.options) {
                const result = await dataParser.asyncExec(data, error);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            return SymbolDataParserErrorIssue;
        },
        isAsynchronous: (self) => some(self.definition.options, (element) => element.isAsynchronous()),
    }, union.overrideHandler);
    return self;
}
union.overrideHandler = createOverride("@duplojs/utils/data-parser/union");

export { union, unionKind };
