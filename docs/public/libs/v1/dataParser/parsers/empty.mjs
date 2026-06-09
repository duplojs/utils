import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const emptyKind = createDataParserKind("empty");
class DataParserEmpty extends DataParserBase.init(emptyKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserEmpty);
    }
    static execParse(self, data, error) {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return addIssue(error, "undefined", data, self.definition.errorMessage);
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
     * {@include dataParser/classic/empty/index.md}
     */
    static create(definition) {
        return new DataParserEmpty(this.prepareDefinition(definition));
    }
}
const empty = detachObjectMethod(DataParserEmpty, "create");

export { DataParserEmpty, empty, emptyKind };
