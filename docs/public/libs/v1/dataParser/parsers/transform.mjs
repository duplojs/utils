import { createKind } from '../../common/kind.mjs';
import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorPromiseIssue } from '../error.mjs';

const dataParserTransformKind = createKind("data-parser-transform");
function transform(inner, theFunction, definition) {
    return dataParserInit(dataParserTransformKind, {
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
}

export { dataParserTransformKind, transform };
