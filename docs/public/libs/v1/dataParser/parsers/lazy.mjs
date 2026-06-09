import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { memo } from '../../common/memo.mjs';

const lazyKind = createDataParserKind("lazy");
class DataParserLazy extends DataParserBase.init(lazyKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserLazy);
    }
    static execParse(self, data, error) {
        return self.definition.getter.value.exec(data, error);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.getter.value.isAsynchronous();
    }
    static prepareDefinition(getter, definition) {
        return {
            ...definition,
            getter: memo(getter),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/lazy/index.md}
     */
    static create(getter, definition) {
        return new DataParserLazy(this.prepareDefinition(getter, definition));
    }
}
const lazy = detachObjectMethod(DataParserLazy, "create");

export { DataParserLazy, lazy, lazyKind };
