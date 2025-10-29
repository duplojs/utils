import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserLiteralKind = createDataParserKind("literal");
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
