'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');

const checkerIntKind = kind.createDataParserKind("checker-number-int");
function checkerInt(definition = {}) {
    return base.dataParserCheckerInit(checkerIntKind, {
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
exports.checkerIntKind = checkerIntKind;
exports.int = int;
