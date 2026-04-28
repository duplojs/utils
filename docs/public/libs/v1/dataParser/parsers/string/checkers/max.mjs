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
    }, (data, error, self, dataParser) => data.length <= self.definition.max
        ? data
        : addIssue(error, `string.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

export { checkerStringMax, checkerStringMaxKind };
