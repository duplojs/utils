'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');

const dataParserCheckerUrlKind = kind.createKind("data-parser-checker-url");
const regexRemoveDote = /:$/;
function checkerUrl(definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerUrlKind, {
        definition: definition,
    }, (input, self) => {
        try {
            const url = new URL(input);
            if (self.definition.hostname) {
                self.definition.hostname.lastIndex = 0;
                if (!self.definition.hostname.test(url.hostname)) {
                    return error.SymbolDataParserErrorIssue;
                }
            }
            if (self.definition.protocol) {
                self.definition.protocol.lastIndex = 0;
                if (!self.definition.protocol.test(url.protocol.replace(regexRemoveDote, ""))) {
                    return error.SymbolDataParserErrorIssue;
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
            return error.SymbolDataParserErrorIssue;
        }
    });
}
function url(definition) {
    return index.string({
        checkers: [checkerUrl(definition)],
    });
}

exports.checkerUrl = checkerUrl;
exports.dataParserCheckerUrlKind = dataParserCheckerUrlKind;
exports.url = url;
