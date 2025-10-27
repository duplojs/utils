import { createKind } from '../../../common/kind.mjs';
import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';

const dataParserNumberKind = createKind("data-parser-number");
function number(definition) {
    return dataParserInit(dataParserNumberKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { dataParserNumberKind, number };
