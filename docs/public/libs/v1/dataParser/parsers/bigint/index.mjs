import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';

const bigIntKind = createDataParserKind("bigint");
class DataParserBigInt extends DataParserBase.init(bigIntKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserBigInt);
    }
    static execParse(self, data, error) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = BigInt(data);
            }
            catch { }
        }
        if (typeof data === "bigint") {
            return data;
        }
        return addIssue(error, "bigint", inputData, self.definition.errorMessage);
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
     * {@include dataParser/classic/bigint/index.md}
     */
    static create(definition) {
        return new DataParserBigInt(this.prepareDefinition(definition));
    }
}
const bigint = detachObjectMethod(DataParserBigInt, "create");

export { DataParserBigInt, bigIntKind, bigint };
