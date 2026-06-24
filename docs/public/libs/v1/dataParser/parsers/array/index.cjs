'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var callThen = require('../../../common/callThen.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');

const arrayKind = kind.createDataParserKind("array");
class DataParserArray extends base.DataParserBase.init(arrayKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserArray);
    }
    static execParse(self, data, error$1) {
        if (!(data instanceof Array)) {
            return error.addIssue(error$1, "array", data, self.definition.errorMessage, self);
        }
        const currentIndexPath = error$1.currentPath.length;
        const output = data.reduce((accumulator, element, index) => callThen.callThen(accumulator, (awaitedAccumulator) => {
            error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
            return callThen.callThen(self.definition.element.exec(element, error$1), (awaitedResult) => {
                if (awaitedResult === error.SymbolDataParserError
                    || awaitedAccumulator === error.SymbolDataParserError) {
                    return error.SymbolDataParserError;
                }
                awaitedAccumulator.push(awaitedResult);
                return awaitedAccumulator;
            });
        }), []);
        void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.element.isAsynchronous();
    }
    static prepareDefinition(element, definition) {
        return {
            ...definition,
            element,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/array/index.md}
     */
    static create(element, definition) {
        return new DataParserArray(this.prepareDefinition(element, definition));
    }
}
/**
 * {@include dataParser/classic/array/index.md}
 */
const array = detachObjectMethod.detachObjectMethod(DataParserArray, "create");

exports.DataParserArray = DataParserArray;
exports.array = array;
exports.arrayKind = arrayKind;
