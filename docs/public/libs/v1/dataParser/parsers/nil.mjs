import { createKind } from '../../common/kind.mjs';
import { dataParserInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';

const dataParserNilKind = createKind("data-parser-nil");
function nil(definition) {
    return dataParserInit(dataParserNilKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return SymbolDataParserErrorIssue;
    });
}

export { dataParserNilKind, nil };
