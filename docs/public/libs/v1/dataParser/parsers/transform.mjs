import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorPromiseIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const transformKind = createDataParserKind("transform");
function transform(inner, theFunction, definition) {
    const self = dataParserInit(transformKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            theFunction,
        },
    }, {
        sync: (data, error, self) => {
            const innerResult = self.definition.inner.exec(data, error);
            if (innerResult === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            const result = self.definition.theFunction(innerResult, error);
            if (result instanceof Promise) {
                return SymbolDataParserErrorPromiseIssue;
            }
            return result;
        },
        async: async (data, error, self) => {
            const innerResult = await self.definition.inner.asyncExec(data, error);
            if (innerResult === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            let result = self.definition.theFunction(innerResult, error);
            if (result instanceof Promise) {
                result = result.catch(() => SymbolDataParserErrorPromiseIssue);
            }
            return result;
        },
    });
    return transform.overrideHandler.apply(self);
}
transform.overrideHandler = createOverride("@duplojs/utils/data-parser/transform");

export { transform, transformKind };
