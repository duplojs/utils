'use strict';

var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var index = require('../index.cjs');
var baseChecker = require('../../../baseChecker.cjs');
var detachObjectMethod = require('../../../../common/detachObjectMethod.cjs');

const checkerUuidKind = kind.createDataParserKind("checker-uuid");
const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
class DataParserCheckerUuid extends baseChecker.DataParserCheckerBase.init(checkerUuidKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerUuid);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error$1, self, dataParser) {
        return uuidRegex.test(data)
            ? data
            : error.addIssue(error$1, "uuid", data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(definition = {}) {
        return new DataParserCheckerUuid({
            ...definition,
            regex: uuidRegex,
        });
    }
}
const checkerUuid = detachObjectMethod.detachObjectMethod(DataParserCheckerUuid, "create");
/**
 * {@include dataParser/classic/uuid/index.md}
 */
function uuid(definition) {
    return index.string({
        checkers: [checkerUuid(definition)],
    });
}

exports.DataParserCheckerUuid = DataParserCheckerUuid;
exports.checkerUuid = checkerUuid;
exports.checkerUuidKind = checkerUuidKind;
exports.uuid = uuid;
