import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';
import { isoTimeRegex } from '../../../date/constants.mjs';
import { createTime } from '../../../date/createTime.mjs';
import { isLeft } from '../../../either/left/is.mjs';
import { unwrap } from '../../../common/unwrap.mjs';
import { TheTime } from '../../../date/theTime.mjs';
import { isSerializedTheTime } from '../../../date/isSerializedTheTime.mjs';
import { toTimeValue } from '../../../date/toTimeValue.mjs';
import { isSafeTimeValue } from '../../../date/isSafeTimeValue.mjs';

const timeKind = createDataParserKind("time");
class DataParserTime extends DataParserBase.init(timeKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTime);
    }
    static execParse(self, data, error) {
        if (self.definition.coerce) {
            if (typeof data === "string" && isoTimeRegex.test(data)) {
                const result = createTime({ value: data });
                if (isLeft(result)) {
                    return addIssue(error, "time", data, self.definition.errorMessage, self);
                }
                return unwrap(result);
            }
        }
        if (data instanceof TheTime) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheTime(data)) {
            return TheTime.new(toTimeValue(data));
        }
        else if (typeof data === "number") {
            if (!isSafeTimeValue(data)) {
                return addIssue(error, "time", data, self.definition.errorMessage, self);
            }
            return TheTime.new(data);
        }
        return addIssue(error, "time", data, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/time/index.md}
     */
    static create(definition) {
        return new DataParserTime(this.prepareDefinition(definition));
    }
}
const time = detachObjectMethod(DataParserTime, "create");

export { DataParserTime, time, timeKind };
