import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerUrlKind = createDataParserKind("checker-string-url");
const regexRemoveDote = /:$/;
function checkerUrl(definition = {}) {
    return dataParserCheckerInit(checkerUrlKind, {
        definition: definition,
    }, (input, error, self) => {
        try {
            const url = new URL(input);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return addIssue(error, `URL with hostname matching ${self.definition.hostname.source}`, input, self.definition.errorMessage);
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return addIssue(error, `URL with protocol matching ${self.definition.protocol.source}`, input, self.definition.errorMessage);
                }
            }
            if (self.definition.normalize) {
                return url.href;
            }
            else {
                return input;
            }
        }
        catch {
            return addIssue(error, "valid URL", input, self.definition.errorMessage);
        }
    });
}
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}

export { checkerUrl, checkerUrlKind, url };
