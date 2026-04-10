import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerStringMaxKind = createDataParserKind("checker-string-max");
function checkerStringMax(max, definition = {}) {
    return dataParserCheckerInit(checkerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error, self) => value.length <= self.definition.max
        ? value
        : addIssue(error, `string.length <= ${self.definition.max}`, value, self.definition.errorMessage));
}

export { checkerStringMax, checkerStringMaxKind };
