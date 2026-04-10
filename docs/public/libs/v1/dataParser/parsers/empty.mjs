import { dataParserInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const emptyKind = createDataParserKind("empty");
/**
 * {@include dataParser/classic/empty/index.md}
 */
function empty(definition) {
    const self = dataParserInit(emptyKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return addIssue(error, "undefined", data, self.definition.errorMessage);
    }, empty.overrideHandler);
    return self;
}
empty.overrideHandler = createOverride("@duplojs/utils/data-parser/empty");

export { empty, emptyKind };
