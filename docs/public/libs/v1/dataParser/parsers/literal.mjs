import { createKind } from '../../common/kind.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';

const dataParserLiteralKind = createKind("data-parser-literal");
function literal(value, definition) {
    return dataParserInit(dataParserLiteralKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            value: coalescing(value),
        },
    }, (data, _error, self) => {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { dataParserLiteralKind, literal };
