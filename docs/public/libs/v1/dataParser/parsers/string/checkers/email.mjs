import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerEmailKind = createDataParserKind("checker-string-email");
const emailPattern = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
function checkerEmail(definition = {}) {
    return dataParserCheckerInit(checkerEmailKind, {
        definition: {
            ...definition,
            pattern: emailPattern,
        },
    }, (input, error, self) => {
        if (!self.definition.pattern.test(input)) {
            return addIssue(error, "email", input, self.definition.errorMessage);
        }
        return self.definition.normalize ? input.toLowerCase() : input;
    });
}
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}

export { checkerEmail, checkerEmailKind, email };
