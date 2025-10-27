import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { number } from '../index.mjs';

const dataParserCheckerIntKind = createKind("data-parser-checker-int");
function checkerInt(definition = {}) {
    return dataParserCheckerInit(dataParserCheckerIntKind, {
        definition,
    }, (data) => {
        if (Number.isInteger(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { checkerInt, dataParserCheckerIntKind, int };
