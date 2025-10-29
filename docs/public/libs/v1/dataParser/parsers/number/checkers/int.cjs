'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var index = require('../index.cjs');
var kind = require('../../../kind.cjs');

const dataParserCheckerIntKind = kind.createDataParserKind("checker-number-int");
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
