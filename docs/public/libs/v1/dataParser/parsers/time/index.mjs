import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { isSafeTimeValue } from '../../../date/isSafeTimeValue.mjs';
import { createTheTime } from '../../../date/createTheTime.mjs';
import { isoTimeRegex } from '../../../date/constants.mjs';
import { createTime } from '../../../date/createTime.mjs';
import { isLeft } from '../../../either/left/is.mjs';
import { unwrap } from '../../../common/unwrap.mjs';
import { isTime } from '../../../date/isTime.mjs';
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
            if (typeof data === "number") {
                if (!isSafeTimeValue(data)) {
                    return SymbolDataParserErrorIssue;
                }
                return createTheTime(data);
            }
            if (typeof data === "string" && isoTimeRegex.test(data)) {
                const result = createTime({ value: data });
                if (isLeft(result)) {
                    return SymbolDataParserErrorIssue;
                }
                return unwrap(result);
            }
        }
        if (typeof data === "string" && isTime(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    }, time.overrideHandler);
    return self;
}
time.overrideHandler = createOverride("@duplojs/utils/data-parser/time");

export { time, timeKind };
