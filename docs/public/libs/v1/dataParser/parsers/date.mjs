import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
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
    const self = dataParserInit(dateKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp(data)) {
                    return SymbolDataParserErrorIssue;
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
                return SymbolDataParserErrorIssue;
            }
            return TheDate.new(timestamp);
        }
        return SymbolDataParserErrorIssue;
    }, date.overrideHandler);
    return self;
}
date.overrideHandler = createOverride("@duplojs/utils/data-parser/date");

export { date, dateKind };
