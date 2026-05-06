import { dataParserBaseInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { createOverride } from '../../common/override.mjs';

const literalKind = createDataParserKind("literal");
/**
 * {@include dataParser/classic/literal/index.md}
 */
function literal(value, definition) {
    const self = dataParserBaseInit(literalKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        value: coalescing(value),
    }, (data, error, self) => {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return addIssue(error, `one of ${self.definition.value.map((value) => String(value)).join(", ")}`, data, self.definition.errorMessage);
    }, literal.overrideHandler);
    return self;
}
literal.overrideHandler = createOverride("@duplojs/utils/data-parser/literal");

export { literal, literalKind };
