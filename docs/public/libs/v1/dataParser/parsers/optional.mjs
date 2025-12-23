import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const optionalKind = createDataParserKind("optional");
function optional(inner, definition) {
    const self = dataParserInit(optionalKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        coalescingValue: definition?.coalescingValue,
    }, {
        sync: (data, error, self) => {
            if (data === undefined) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === undefined) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    });
    return optional.overrideHandler.apply(self);
}
optional.overrideHandler = createOverride("@duplojs/utils/data-parser/optional");

export { optional, optionalKind };
