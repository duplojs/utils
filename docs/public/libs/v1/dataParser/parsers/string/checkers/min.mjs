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
    }, (data, error, self) => data.length >= self.definition.min
        ? data
        : addIssue(error, `string.length >= ${self.definition.min}`, data, self.definition.errorMessage));
}

export { checkerStringMin, checkerStringMinKind };
