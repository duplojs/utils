import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { createOverride } from '../../common/override.mjs';

const literalKind = createDataParserKind("literal");
/**
 * {@include dataParser/classic/literal/index.md}
 */
function literal(value, definition) {
    const self = dataParserInit(literalKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        value: coalescing(value),
    }, (data, _error, self) => {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    }, literal.overrideHandler);
    return self;
}
literal.overrideHandler = createOverride("@duplojs/utils/data-parser/literal");

export { literal, literalKind };
