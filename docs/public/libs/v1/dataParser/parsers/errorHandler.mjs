import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

function createErrorMessageTransformer(kindHandler, theFunction) {
    return (source) => {
        if (kindHandler.has(source)) {
            return theFunction(source);
        }
        return null;
    };
}
const errorHandlerKind = createDataParserKind("error-handler");
class DataParserErrorHandler extends DataParserBase.init(errorHandlerKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserErrorHandler);
    }
    static execParse(self, data, error) {
        return callThen(self.definition.inner.exec(data, error), (result) => {
            for (const issues of error.issues) {
                for (const errorMessageTransformer of self.definition.errorMessageTransformers) {
                    const transformedMessage = errorMessageTransformer(issues.getSource());
                    if (transformedMessage) {
                        issues.message = transformedMessage;
                    }
                }
            }
            return result;
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous();
    }
    static prepareDefinition(inner, errorMessageTransformers, definition) {
        return {
            ...definition,
            inner,
            errorMessageTransformers,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/errorHandler/index.md}
     */
    static create(inner, errorMessageTransformers, definition) {
        return new DataParserErrorHandler(this.prepareDefinition(inner, errorMessageTransformers instanceof Array
            ? errorMessageTransformers
            : [errorMessageTransformers], definition));
    }
}
/**
 * {@include dataParser/classic/errorHandler/index.md}
 */
const errorHandler = detachObjectMethod(DataParserErrorHandler, "create");

export { DataParserErrorHandler, createErrorMessageTransformer, errorHandler, errorHandlerKind };
