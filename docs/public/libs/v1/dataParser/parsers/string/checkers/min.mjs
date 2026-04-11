import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerStringMinKind = createDataParserKind("checker-string-min");
function checkerStringMin(min, definition = {}) {
    return dataParserCheckerInit(checkerStringMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error, self) => value.length >= self.definition.min
        ? value
        : addIssue(error, `string.length >= ${self.definition.min}`, value, self.definition.errorMessage));
}

export { checkerStringMin, checkerStringMinKind };
