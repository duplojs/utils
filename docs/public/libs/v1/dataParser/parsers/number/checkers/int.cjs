'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');

const dataParserCheckerIntKind = kind.createKind("data-parser-checker-int");
function checkerInt(definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerIntKind, {
        definition,
    }, (data) => {
        if (Number.isInteger(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}
function int(definition) {
    return index.number({
        checkers: [checkerInt(definition)],
    });
}

exports.checkerInt = checkerInt;
exports.dataParserCheckerIntKind = dataParserCheckerIntKind;
exports.int = int;
