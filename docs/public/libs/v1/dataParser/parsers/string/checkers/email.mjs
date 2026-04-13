import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerEmailKind = createDataParserKind("checker-email");
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
function checkerEmail(definition = {}) {
    return dataParserCheckerInit(checkerEmailKind, {
        definition: {
            ...definition,
            regex: emailRegex,
        },
    }, (data, error, self) => self.definition.regex.test(data)
        ? data
        : addIssue(error, "email", data, self.definition.errorMessage));
}
function email(definition) {
    return string({
        checkers: [checkerEmail(definition)],
    });
}

export { checkerEmail, checkerEmailKind, email };
