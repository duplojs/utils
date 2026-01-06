import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { isSafeTimestamp } from '../../date/isSafeTimestamp.mjs';
import { createTheDate } from '../../date/createTheDate.mjs';
import { is } from '../../date/is.mjs';
import { createOverride } from '../../common/override.mjs';

const dateKind = createDataParserKind("date");
function date(definition) {
    const self = dataParserInit(dateKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (data instanceof Date) {
                const timestamp = data.getTime();
                if (!isSafeTimestamp(timestamp)) {
                    return SymbolDataParserErrorIssue;
                }
                return createTheDate(timestamp);
            }
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return SymbolDataParserErrorIssue;
                }
                return createTheDate(data);
            }
            if (typeof data === "string") {
                const date = new Date(data);
                const timestamp = date.getTime();
                if (isSafeTimestamp(timestamp)) {
                    return createTheDate(timestamp);
                }
            }
        }
        if (typeof data === "string" && is(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
    return date.overrideHandler.apply(self);
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser/date");

export { date, dateKind };
