import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const nullableKind = createDataParserKind("nullable");
/**
 * {@include dataParser/classic/nullable/index.md}
 */
function nullable(inner, definition) {
    const self = dataParserInit(nullableKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        coalescingValue: definition?.coalescingValue ?? null,
    }, {
        sync: (data, error, self) => {
            if (data === null) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === null) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    }, nullable.overrideHandler);
    return self;
}
nullable.overrideHandler = createOverride("@duplojs/utils/data-parser/nullable");

export { nullable, nullableKind };
