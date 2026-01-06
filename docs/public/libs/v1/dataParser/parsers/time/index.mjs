import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { isSafeTimestamp } from '../../../date/isSafeTimestamp.mjs';
import { createTheTime } from '../../../date/createTheTime.mjs';
import { isoTimeRegex } from '../../../date/constants.mjs';
import { createTime } from '../../../date/createTime.mjs';
import { isTime } from '../../../date/isTime.mjs';
import { createOverride } from '../../../common/override.mjs';

const timeKind = createDataParserKind("time");
function time(definition) {
    const self = dataParserInit(timeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return SymbolDataParserErrorIssue;
                }
                return createTheTime(data);
            }
            if (typeof data === "string" && isoTimeRegex.test(data)) {
                return createTime({ value: data });
            }
        }
        if (typeof data === "string" && isTime(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
    return time.overrideHandler.apply(self);
}
time.overrideHandler = createOverride("@duplojs/utils/data-parser/time");

export { time, timeKind };
