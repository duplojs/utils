import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { SymbolDataParserError } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { callThen } from '../../common/callThen.mjs';

const recoverKind = createDataParserKind("recover");
class DataParserRecover extends DataParserBase.init(recoverKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecover);
    }
    static execParse(self, data, error) {
        return callThen(self.definition.inner.exec(data, error), (result) => result === SymbolDataParserError
            ? self.definition.recoveredValue
            : result);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous();
    }
    static prepareDefinition(inner, recoveredValue, definition) {
        return {
            ...definition,
            inner,
            recoveredValue,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/recover/index.md}
     */
    static create(inner, recoveredValue, definition) {
        return new DataParserRecover(this.prepareDefinition(inner, recoveredValue, definition));
    }
}
const recover = detachObjectMethod(DataParserRecover, "create");

export { DataParserRecover, recover, recoverKind };
