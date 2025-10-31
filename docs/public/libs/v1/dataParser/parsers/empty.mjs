import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserEmptyKind = createDataParserKind("empty");
function empty(definition) {
    return dataParserInit(dataParserEmptyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { dataParserEmptyKind, empty };
