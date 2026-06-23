import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';

const numberKind = createDataParserKind("number");
class DataParserNumber extends DataParserBase.init(numberKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNumber);
    }
    static execParse(self, data, error) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && Number.isFinite(data)) {
            return data;
        }
        return addIssue(error, "number", inputData, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/number/index.md}
     */
    static create(definition) {
        return new DataParserNumber(this.prepareDefinition(definition));
    }
}
const number = detachObjectMethod(DataParserNumber, "create");

export { DataParserNumber, number, numberKind };
