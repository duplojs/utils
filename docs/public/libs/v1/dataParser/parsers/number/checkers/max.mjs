import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMaxKind = createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            exclusive: definition.exclusive ?? false,
            max,
        },
    }, (value, error, self, dataParser) => {
        const isValid = self.definition.exclusive
            ? value < self.definition.max
            : value <= self.definition.max;
        if (isValid) {
            return value;
        }
        return addIssue(error, `number ${self.definition.exclusive ? "<" : "<="} ${self.definition.max}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    });
}

export { checkerNumberMax, checkerNumberMaxKind };
