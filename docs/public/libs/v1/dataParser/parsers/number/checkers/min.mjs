import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMinKind = createDataParserKind("checker-number-min");
function checkerNumberMin(min, definition = {}) {
    return dataParserCheckerInit(checkerNumberMinKind, {
        definition: {
            ...definition,
            exclusive: definition.exclusive ?? false,
            min,
        },
    }, (value, error, self, dataParser) => {
        const isValid = self.definition.exclusive
            ? value > self.definition.min
            : value >= self.definition.min;
        if (isValid) {
            return value;
        }
        return addIssue(error, `number ${self.definition.exclusive ? ">" : ">="} ${self.definition.min}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    });
}

export { checkerNumberMin, checkerNumberMinKind };
