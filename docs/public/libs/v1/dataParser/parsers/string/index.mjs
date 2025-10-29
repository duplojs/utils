import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';

const dataParserStringKind = createDataParserKind("string");
function string(definition) {
    return dataParserInit(dataParserStringKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { dataParserStringKind, string };
