import { createKind } from '../../../../common/kind.mjs';
import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { string } from '../index.mjs';

const dataParserCheckerEmailKind = createKind("data-parser-checker-email");
const emailPattern = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
function checkerEmail(definition = {}) {
    return dataParserCheckerInit(dataParserCheckerEmailKind, {
        definition: {
            ...definition,
            pattern: emailPattern,
        },
    }, (input, self) => {
        if (!self.definition.pattern.test(input)) {
            return SymbolDataParserErrorIssue;
        }
        return self.definition.normalize ? input.toLowerCase() : input;
    });
}
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}

export { checkerEmail, dataParserCheckerEmailKind, email };
