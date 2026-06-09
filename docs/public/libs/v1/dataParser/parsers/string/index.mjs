import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';

const stringKind = createDataParserKind("string");
class DataParserString extends DataParserBase.init(stringKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserString);
    }
    static execParse(self, data, error) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return addIssue(error, "string", inputData, self.definition.errorMessage);
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
     * {@include dataParser/classic/string/index.md}
     */
    static create(definition) {
        return new DataParserString(this.prepareDefinition(definition));
    }
}
const string = detachObjectMethod(DataParserString, "create");

export { DataParserString, string, stringKind };
