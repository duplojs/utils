import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { isSafeTimestamp } from '../../date/isSafeTimestamp.mjs';
import { TheDate } from '../../date/theDate.mjs';
import { isSerializedTheDate } from '../../date/isSerializedTheDate.mjs';
import { toTimestamp } from '../../date/toTimestamp.mjs';

const dateKind = createDataParserKind("date");
class DataParserDate extends DataParserBase.init(dateKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserDate);
    }
    static execParse(self, data, error) {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return addIssue(error, "date", data, self.definition.errorMessage, self);
                }
                return TheDate.new(data);
            }
            if (typeof data === "string") {
                const date = new Date(data);
                const timestamp = date.getTime();
                if (isSafeTimestamp(timestamp)) {
                    return TheDate.new(timestamp);
                }
            }
        }
        if (data instanceof TheDate) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheDate(data)) {
            return TheDate.new(toTimestamp(data));
        }
        else if (data instanceof Date) {
            const timestamp = data.getTime();
            if (!isSafeTimestamp(timestamp)) {
                return addIssue(error, "date", data, self.definition.errorMessage, self);
            }
            return TheDate.new(timestamp);
        }
        return addIssue(error, "date", data, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/date/index.md}
     */
    static create(definition) {
        return new DataParserDate(this.prepareDefinition(definition));
    }
}
const date = detachObjectMethod(DataParserDate, "create");

export { DataParserDate, date, dateKind };
