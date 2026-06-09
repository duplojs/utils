import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const unknownKind = createDataParserKind("unknown");
class DataParserUnknown extends DataParserBase.init(unknownKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnknown);
    }
    static execParse(_self, data, _error) {
        return data;
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(definition) {
        return {
            ...definition,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/unknown/index.md}
     */
    static create(definition) {
        return new DataParserUnknown(this.prepareDefinition(definition));
    }
}
const unknown = detachObjectMethod(DataParserUnknown, "create");

export { DataParserUnknown, unknown, unknownKind };
