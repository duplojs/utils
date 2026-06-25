'use strict';

var baseChecker = require('../baseChecker.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');

const dataParserCheckerRefineKind = kind.createDataParserKind("refine");
class DataParserCheckerRefine extends baseChecker.DataParserCheckerBase.init(dataParserCheckerRefineKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerRefine);
    }
    isAsynchronous() {
        return this.definition.theFunction.constructor.name === "AsyncFunction";
    }
    static execCheck(value, error$1, self, dataParser) {
        return callThen.callThen(self.definition.theFunction(value), (awaitedResult) => awaitedResult
            ? value
            : error.addIssue(error$1, "value matching refine predicate", value, self.definition.errorMessage ?? dataParser.definition.errorMessage, self), (catchError) => error.addIssue(error$1, "successful refine result", catchError, self.definition.errorMessage ?? dataParser.definition.errorMessage, self));
    }
    static create(theFunction, definition) {
        return new DataParserCheckerRefine({
            ...definition,
            theFunction,
        });
    }
}
/**
 * {@include dataParser/classic/checkerRefine/index.md}
 */
const checkerRefine = detachObjectMethod.detachObjectMethod(DataParserCheckerRefine, "create");

exports.DataParserCheckerRefine = DataParserCheckerRefine;
exports.checkerRefine = checkerRefine;
exports.dataParserCheckerRefineKind = dataParserCheckerRefineKind;
