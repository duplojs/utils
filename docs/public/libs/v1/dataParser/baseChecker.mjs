import { createDataParserKind } from './kind.mjs';
import { kindClass } from '../common/kindClass.mjs';
import { bindPrototypeMethods } from '../common/bindPrototypeMethods.mjs';
import { simpleClone } from '../common/simpleClone.mjs';

const checkerKind = createDataParserKind("checker");
class DataParserCheckerBase extends kindClass(checkerKind) {
    definition;
    constructor(definition) {
        super(null);
        this.definition = definition;
        bindPrototypeMethods(this);
    }
    execCheck(data, error, dataParser) {
        const execCheck = this.classConstructor.execCheck;
        const self = this;
        this.execCheck = (data, error, dataParser) => execCheck(data, error, self, dataParser);
        return this.execCheck(data, error, dataParser);
    }
    exec(data, error, dataParser) {
        return this.execCheck(data, error, dataParser);
    }
    clone() {
        return new this.classConstructor(simpleClone(this.definition));
    }
    /**
     * {@include dataParser/classic/baseChecker/setErrorMessage/index.md}
     */
    setErrorMessage(errorMessage) {
        this.definition.errorMessage = errorMessage;
        return this;
    }
    /**
     * {@include dataParser/classic/baseChecker/addErrorMessage/index.md}
     */
    addErrorMessage(errorMessage) {
        const newSchema = this.clone();
        newSchema.setErrorMessage(errorMessage);
        return newSchema;
    }
    static init(kindHandler) {
        class _DataParserCheckerBaseInit extends kindClass(kindHandler, DataParserCheckerBase) {
            constructor(definition) {
                super(null, definition);
            }
            checkConstructor(constructor) {
                return constructor;
            }
            static specificKindHandler = kindHandler;
        }
        return _DataParserCheckerBaseInit;
    }
}

export { DataParserCheckerBase, checkerKind };
