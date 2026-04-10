import { dataParserInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const booleanKind = createDataParserKind("boolean");
/**
 * {@include dataParser/classic/boolean/index.md}
 */
function boolean(definition) {
    const self = dataParserInit(booleanKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
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
                    return addIssue(error, "boolean", data, self.definition.errorMessage);
                }
            }
            else if (typeof data === "number"
                && (data === 0
                    || data === 1)) {
                return data === 1;
            }
        }
        return addIssue(error, "boolean", data, self.definition.errorMessage);
    }, boolean.overrideHandler);
    return self;
}
boolean.overrideHandler = createOverride("@duplojs/utils/data-parser/boolean");

export { boolean, booleanKind };
