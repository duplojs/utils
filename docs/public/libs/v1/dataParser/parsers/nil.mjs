import { dataParserInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const nilKind = createDataParserKind("nil");
/**
 * {@include dataParser/classic/nil/index.md}
 */
function nil(definition) {
    const self = dataParserInit(nilKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return addIssue(error, "null", data, self.definition.errorMessage);
    }, nil.overrideHandler);
    return self;
}
nil.overrideHandler = createOverride("@duplojs/utils/data-parser/nil");

export { nil, nilKind };
