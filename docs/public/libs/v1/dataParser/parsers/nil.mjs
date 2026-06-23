import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const nilKind = createDataParserKind("nil");
class DataParserNil extends DataParserBase.init(nilKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNil);
    }
    static execParse(self, data, error) {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return addIssue(error, "null", data, self.definition.errorMessage, self);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(definition) {
        return {
            ...definition,
            coerce: definition?.coerce ?? false,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/nil/index.md}
     */
    static create(definition) {
        return new DataParserNil(this.prepareDefinition(definition));
    }
}
const nil = detachObjectMethod(DataParserNil, "create");

export { DataParserNil, nil, nilKind };
