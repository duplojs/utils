import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const nullableKind = createDataParserKind("nullable");
class DataParserNullable extends DataParserBase.init(nullableKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNullable);
    }
    static execParse(self, data, error) {
        if (data === null) {
            return self.definition.coalescingValue;
        }
        return self.definition.inner.exec(data, error);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous();
    }
    static prepareDefinition(inner, definition) {
        return {
            ...definition,
            inner,
            coalescingValue: definition?.coalescingValue ?? null,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/nullable/index.md}
     */
    static create(inner, definition) {
        return new DataParserNullable(this.prepareDefinition(inner, definition));
    }
}
/**
 * {@include dataParser/classic/nullable/index.md}
 */
const nullable = detachObjectMethod(DataParserNullable, "create");

export { DataParserNullable, nullable, nullableKind };
