import { addIssue } from '../../../error.mjs';
import { string } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerUrlKind = createDataParserKind("checker-url");
const regexRemoveDote = /:$/;
class DataParserCheckerUrl extends DataParserCheckerBase.init(checkerUrlKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerUrl);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        try {
            const url = new URL(data);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return addIssue(error, `URL with hostname matching ${self.definition.hostname.source}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return addIssue(error, `URL with protocol matching ${self.definition.protocol.source}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
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
            return addIssue(error, "valid URL", data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
        }
    }
    static create(definition = {}) {
        return new DataParserCheckerUrl(definition);
    }
}
const checkerUrl = detachObjectMethod(DataParserCheckerUrl, "create");
function url(definition) {
    return string({
        checkers: [checkerUrl(definition)],
    });
}

export { DataParserCheckerUrl, checkerUrl, checkerUrlKind, url };
