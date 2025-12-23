import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { isSafeTimestamp } from '../../date/isSafeTimestamp.mjs';
import { theDateRegex } from '../../date/constants.mjs';
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
