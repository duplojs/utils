import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../either/bool/falsy.mjs';
import '../../either/bool/truthy.mjs';
import '../../either/bool/base.mjs';
import '../../either/left/create.mjs';
import '../../either/left/error.mjs';
import '../../either/left/fail.mjs';
import '../../either/kind.mjs';
import '../../either/right/success.mjs';
import '../../either/right/create.mjs';
import '../../either/right/ok.mjs';
import '../../either/future/success.mjs';
import '../../either/future/error.mjs';
import '../../either/future/base.mjs';
import '../../either/nullable/empty.mjs';
import '../../either/nullable/filled.mjs';
import '../../either/nullable/base.mjs';
import '../../either/nullish/empty.mjs';
import '../../either/nullish/filled.mjs';
import '../../either/nullish/base.mjs';
import '../../either/optional/empty.mjs';
import '../../either/optional/filled.mjs';
import '../../either/optional/base.mjs';
import { createOverride } from '../../common/override.mjs';
import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const recoverKind = createDataParserKind("recover");
function recover(inner, recoveredValue, definition) {
    const self = dataParserInit(recoverKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            recoveredValue,
        },
    }, {
        sync: (data, error, self) => {
            const result = self.definition.inner.exec(data, error);
            return result === SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
        async: async (data, error, self) => {
            const result = await self.definition.inner.asyncExec(data, error);
            return result === SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
    });
    return recover.overrideHandler.apply(self);
}
recover.overrideHandler = createOverride("@duplojs/utils/data-parser/recover");

export { recover, recoverKind };
