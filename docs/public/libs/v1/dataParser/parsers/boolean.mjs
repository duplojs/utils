import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';

const dataParserBooleanKind = createKind("data-parser-boolean");
function boolean(definition) {
    return dataParserInit(dataParserBooleanKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (typeof data === "boolean") {
            return data;
        }
        else if (self.definition.coerce) {
            if (typeof data === "string") {
                const lower = data.trim().toLowerCase();
                if (lower === "true" || lower === "false") {
                    return lower === "true";
                }
                else {
                    return SymbolDataParserErrorIssue;
                }
            }
            else if (typeof data === "number"
                && (data === 0
                    || data === 1)) {
                return data === 1;
            }
        }
        return SymbolDataParserErrorIssue;
    });
}

export { boolean, dataParserBooleanKind };
