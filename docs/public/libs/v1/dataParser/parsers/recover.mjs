import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const recoverKind = createDataParserKind("recover");
/**
 * {@include dataParser/classic/recover/index.md}
 */
function recover(inner, recoveredValue, definition) {
    const self = dataParserInit(recoverKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        recoveredValue,
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
        isAsynchronous: (self) => self.definition.inner.isAsynchronous(),
    }, recover.overrideHandler);
    return self;
}
recover.overrideHandler = createOverride("@duplojs/utils/data-parser/recover");

export { recover, recoverKind };
