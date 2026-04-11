import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMinKind = createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return dataParserCheckerInit(checkerNumberMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error, self) => value >= self.definition.min
        ? value
        : addIssue(error, `number >= ${self.definition.min}`, value, self.definition.errorMessage));
}

export { checkerNumberMin, checkerNumberMinKind };
