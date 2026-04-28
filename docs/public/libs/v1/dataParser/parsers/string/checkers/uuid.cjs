'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var index = require('../index.cjs');

const checkerUuidKind = kind.createDataParserKind("checker-uuid");
const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
function checkerUuid(definition = {}) {
    return base.dataParserCheckerInit(checkerUuidKind, {
        definition: {
            ...definition,
            regex: uuidRegex,
        },
    }, (data, error$1, self, dataParser) => uuidRegex.test(data)
        ? data
        : error.addIssue(error$1, "uuid", data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}
/**
 * {@include dataParser/classic/uuid/index.md}
 */
function uuid(definition) {
    return index.string({
        checkers: [checkerUuid(definition)],
    });
}

exports.checkerUuid = checkerUuid;
exports.checkerUuidKind = checkerUuidKind;
exports.uuid = uuid;
