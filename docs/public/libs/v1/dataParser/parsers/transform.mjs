import { dataParserInit } from '../base.mjs';
import { SymbolDataParserError, addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { createOverride } from '../../common/override.mjs';

const transformKind = createDataParserKind("transform");
/**
 * {@include dataParser/classic/transform/index.md}
 */
function transform(inner, theFunction, definition) {
    const self = dataParserInit(transformKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        theFunction,
    }, {
        sync: (data, error, self) => {
            const innerResult = self.definition.inner.exec(data, error);
            if (innerResult === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            const result = self.definition.theFunction(innerResult, error);
            if (result instanceof Promise) {
                return addIssue(error, "non-promise transform result", result, self.definition.errorMessage);
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
                result = await result.catch(() => addIssue(error, "successful async transform result", result, self.definition.errorMessage));
            }
            return result;
        },
        isAsynchronous: (self) => self.definition.theFunction.constructor.name === "AsyncFunction",
    }, transform.overrideHandler);
    return self;
}
transform.overrideHandler = createOverride("@duplojs/utils/data-parser/transform");

export { transform, transformKind };
