import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../either/bool/falsy.mjs';
import '../../either/bool/truthy.mjs';
import '../../either/bool/base.mjs';
import '../../either/left/create.mjs';
import '../../either/left/error.mjs';
import '../../either/left/fail.mjs';
import '../../either/kind.mjs';
import '../../either/right/success.mjs';
import '../../either/right/create.mjs';
import '../../either/right/ok.mjs';
import '../../either/future/success.mjs';
import '../../either/future/error.mjs';
import '../../either/future/base.mjs';
import '../../either/nullable/empty.mjs';
import '../../either/nullable/filled.mjs';
import '../../either/nullable/base.mjs';
import '../../either/nullish/empty.mjs';
import '../../either/nullish/filled.mjs';
import '../../either/nullish/base.mjs';
import '../../either/optional/empty.mjs';
import '../../either/optional/filled.mjs';
import '../../either/optional/base.mjs';
import { createOverride } from '../../common/override.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import '../../date/types/timezone.mjs';
import { theDateRegex } from '../../date/constants.mjs';
import { isSafeTimestamp } from '../../date/isSafeTimestamp.mjs';
import '../../date/toTimestamp.mjs';
import '../../date/createOrThrow.mjs';

const dateKind = createDataParserKind("date");
function date(definition) {
    const self = dataParserInit(dateKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (data instanceof Date) {
                const timestamp = data.getTime();
                if (!isSafeTimestamp(timestamp)) {
                    return SymbolDataParserErrorIssue;
                }
                const isNegative = timestamp < 0;
                return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
            }
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return SymbolDataParserErrorIssue;
                }
                const isNegative = data < 0;
                return `date${Math.abs(data)}${isNegative ? "-" : "+"}`;
            }
        }
        const theDateMatch = typeof data === "string" && data.match(theDateRegex);
        if (theDateMatch) {
            if (!isSafeTimestamp(Number(theDateMatch.groups?.value))) {
                return SymbolDataParserErrorIssue;
            }
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
    return date.overrideHandler.apply(self);
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser/date");

export { date, dateKind };
