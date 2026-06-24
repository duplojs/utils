import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { SymbolDataParserError, addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';
import { forward } from '../../common/forward.mjs';

const transformKind = createDataParserKind("transform");
class DataParserTransform extends DataParserBase.init(transformKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTransform);
    }
    static execParse(self, data, error) {
        return callThen(self.definition.inner.exec(data, error), (innerResult) => {
            if (innerResult === SymbolDataParserError) {
                return SymbolDataParserError;
            }
            return callThen(self.definition.theFunction(innerResult, error), forward, (catchError) => addIssue(error, "successful transform result", catchError, self.definition.errorMessage, self));
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous()
            || self.definition.theFunction.constructor.name === "AsyncFunction";
    }
    static prepareDefinition(inner, theFunction, definition) {
        return {
            ...definition,
            inner,
            theFunction,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/transform/index.md}
     */
    static create(inner, theFunction, definition) {
        return new DataParserTransform(this.prepareDefinition(inner, theFunction, definition));
    }
}
/**
 * {@include dataParser/classic/transform/index.md}
 */
const transform = detachObjectMethod(DataParserTransform, "create");

export { DataParserTransform, transform, transformKind };
