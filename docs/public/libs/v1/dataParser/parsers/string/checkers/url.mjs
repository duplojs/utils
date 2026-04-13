import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerUrlKind = createDataParserKind("checker-url");
const regexRemoveDote = /:$/;
function checkerUrl(definition = {}) {
    return dataParserCheckerInit(checkerUrlKind, {
        definition: definition,
    }, (data, error, self) => {
        try {
            const url = new URL(data);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return addIssue(error, `URL with hostname matching ${self.definition.hostname.source}`, data, self.definition.errorMessage);
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return addIssue(error, `URL with protocol matching ${self.definition.protocol.source}`, data, self.definition.errorMessage);
                }
            }
            if (self.definition.normalize) {
                return url.href;
            }
            else {
                return data;
            }
        }
        catch {
            return addIssue(error, "valid URL", data, self.definition.errorMessage);
        }
    });
}
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}

export { checkerUrl, checkerUrlKind, url };
