import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerUrlKind = createDataParserKind("checker-string-url");
const regexRemoveDote = /:$/;
function checkerUrl(definition = {}) {
    return dataParserCheckerInit(checkerUrlKind, {
        definition: definition,
    }, (input, self) => {
        try {
            const url = new URL(input);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return SymbolDataParserErrorIssue;
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return SymbolDataParserErrorIssue;
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
            return SymbolDataParserErrorIssue;
        }
    });
}
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}

export { checkerUrl, checkerUrlKind, url };
