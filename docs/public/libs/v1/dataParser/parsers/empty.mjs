import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const emptyKind = createDataParserKind("empty");
function empty(definition) {
    const self = dataParserInit(emptyKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return SymbolDataParserErrorIssue;
    });
    return empty.overrideHandler.apply(self);
}
empty.overrideHandler = createOverride("@duplojs/utils/data-parser/empty");

export { empty, emptyKind };
