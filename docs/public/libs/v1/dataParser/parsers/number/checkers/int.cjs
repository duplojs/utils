'use strict';

var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerIntKind = kind.createDataParserKind("checker-number-int");
class DataParserCheckerInt extends baseChecker.DataParserCheckerBase.init(checkerIntKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerInt);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        if (Number.isInteger(data)) {
            return data;
        }
        return error.addIssue(error$1, "integer", data, self.definition.errorMessage ?? dataParser.definition.errorMessage, self);
    }
    static create(definition = {}) {
        return new DataParserCheckerInt(definition);
    }
}
const checkerInt = detachObjectMethod.detachObjectMethod(DataParserCheckerInt, "create");
function int(definition) {
    return index.number({
        checkers: [checkerInt(definition)],
    });
}

exports.DataParserCheckerInt = DataParserCheckerInt;
exports.checkerInt = checkerInt;
exports.checkerIntKind = checkerIntKind;
exports.int = int;
