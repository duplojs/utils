import { dataParserBaseInit } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { isoTimeRegex } from '../../../date/constants.mjs';
import { createTime } from '../../../date/createTime.mjs';
import { isLeft } from '../../../either/left/is.mjs';
import { unwrap } from '../../../common/unwrap.mjs';
import { TheTime } from '../../../date/theTime.mjs';
import { isSerializedTheTime } from '../../../date/isSerializedTheTime.mjs';
import { toTimeValue } from '../../../date/toTimeValue.mjs';
import { isSafeTimeValue } from '../../../date/isSafeTimeValue.mjs';
import { createOverride } from '../../../common/override.mjs';

const timeKind = createDataParserKind("time");
/**
 * {@include dataParser/classic/time/index.md}
 */
function time(definition) {
    const self = dataParserBaseInit(timeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "string" && isoTimeRegex.test(data)) {
                const result = createTime({ value: data });
                if (isLeft(result)) {
                    return addIssue(error, "time", data, self.definition.errorMessage);
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
                return addIssue(error, "time", data, self.definition.errorMessage);
            }
            return TheTime.new(data);
        }
        return addIssue(error, "time", data, self.definition.errorMessage);
    }, time.overrideHandler);
    return self;
}
time.overrideHandler = createOverride("@duplojs/utils/data-parser/time");

export { time, timeKind };
