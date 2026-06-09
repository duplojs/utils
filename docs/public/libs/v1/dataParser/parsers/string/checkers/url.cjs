'use strict';

var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerUrlKind = kind.createDataParserKind("checker-url");
const regexRemoveDote = /:$/;
class DataParserCheckerUrl extends baseChecker.DataParserCheckerBase.init(checkerUrlKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerUrl);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        try {
            const url = new URL(data);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return error.addIssue(error$1, `URL with hostname matching ${self.definition.hostname.source}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return error.addIssue(error$1, `URL with protocol matching ${self.definition.protocol.source}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
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
            return error.addIssue(error$1, "valid URL", data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
        }
    }
    static create(definition = {}) {
        return new DataParserCheckerUrl(definition);
    }
}
const checkerUrl = detachObjectMethod.detachObjectMethod(DataParserCheckerUrl, "create");
function url(definition) {
    return index.string({
        checkers: [checkerUrl(definition)],
    });
}

exports.DataParserCheckerUrl = DataParserCheckerUrl;
exports.checkerUrl = checkerUrl;
exports.checkerUrlKind = checkerUrlKind;
exports.url = url;
