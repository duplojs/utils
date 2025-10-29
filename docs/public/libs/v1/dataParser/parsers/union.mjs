import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserUnionKind = createDataParserKind("union");
function union(options, definition) {
    return dataParserInit(dataParserUnionKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            options,
        },
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
    });
}

export { dataParserUnionKind, union };
