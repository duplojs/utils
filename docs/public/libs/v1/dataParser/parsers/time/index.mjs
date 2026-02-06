import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
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
    const self = dataParserInit(timeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "string" && isoTimeRegex.test(data)) {
                const result = createTime({ value: data });
                if (isLeft(result)) {
                    return SymbolDataParserErrorIssue;
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
                return SymbolDataParserErrorIssue;
            }
            return TheTime.new(data);
        }
        return SymbolDataParserErrorIssue;
    }, time.overrideHandler);
    return self;
}
time.overrideHandler = createOverride("@duplojs/utils/data-parser/time");

export { time, timeKind };
