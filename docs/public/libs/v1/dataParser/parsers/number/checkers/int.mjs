import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { number } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerIntKind = createDataParserKind("checker-number-int");
function checkerInt(definition = {}) {
    return dataParserCheckerInit(checkerIntKind, {
        definition,
    }, (data, error, self) => {
        if (Number.isInteger(data)) {
            return data;
        }
        return addIssue(error, "integer", data, self.definition.errorMessage);
    });
}
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { checkerInt, checkerIntKind, int };
