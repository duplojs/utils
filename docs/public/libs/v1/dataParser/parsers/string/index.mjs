import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createOverride } from '../../../common/override.mjs';

const stringKind = createDataParserKind("string");
function string(definition) {
    const self = dataParserInit(stringKind, {
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
    return string.overrideHandler.apply(self);
}
string.overrideHandler = createOverride("@duplojs/utils/data-parser/string");

export { string, stringKind };
