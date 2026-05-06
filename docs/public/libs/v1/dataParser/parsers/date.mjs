import { dataParserBaseInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { isSafeTimestamp } from '../../date/isSafeTimestamp.mjs';
import { TheDate } from '../../date/theDate.mjs';
import { isSerializedTheDate } from '../../date/isSerializedTheDate.mjs';
import { toTimestamp } from '../../date/toTimestamp.mjs';
import { createOverride } from '../../common/override.mjs';

const dateKind = createDataParserKind("date");
/**
 * {@include dataParser/classic/date/index.md}
 */
function date(definition) {
    const self = dataParserBaseInit(dateKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return addIssue(error, "date", data, self.definition.errorMessage);
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
                return addIssue(error, "date", data, self.definition.errorMessage);
            }
            return TheDate.new(timestamp);
        }
        return addIssue(error, "date", data, self.definition.errorMessage);
    }, date.overrideHandler);
    return self;
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser/date");

export { date, dateKind };
