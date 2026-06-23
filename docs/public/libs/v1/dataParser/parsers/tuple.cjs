'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');

const tupleKind = kind.createDataParserKind("tuple");
class DataParserTuple extends base.DataParserBase.init(tupleKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTuple);
    }
    static execParse(self, data, error$1) {
        if (!(data instanceof Array)) {
            return error.addIssue(error$1, "tuple array", data, self.definition.errorMessage, self);
        }
        const currentIndexPath = error$1.currentPath.length;
        const output = data.reduce((accumulator, value, index) => callThen.callThen(accumulator, (awaitedAccumulator) => {
            const dataParser = self.definition.shape[index] ?? self.definition.rest;
            error.setErrorPath(error$1, dataParser === self.definition.rest
                ? `[tupleRest: ${index}]`
                : `[tuple: ${index}]`, currentIndexPath);
            if (!dataParser) {
                error.addIssue(error$1, "empty", data, self.definition.errorMessage, self);
                return error.SymbolDataParserError;
            }
            return callThen.callThen(dataParser.exec(value, error$1), (result) => {
                if (result === error.SymbolDataParserError
                    || awaitedAccumulator === error.SymbolDataParserError) {
                    return error.SymbolDataParserError;
                }
                awaitedAccumulator.push(result);
                return awaitedAccumulator;
            });
        }), []);
        void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.shape.some((element) => element.isAsynchronous()) || !!self.definition.rest?.isAsynchronous();
    }
    static prepareDefinition(shape, definition) {
        return {
            ...definition,
            shape,
            rest: definition?.rest,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/tuple/index.md}
     */
    static create(shape, definition) {
        return new DataParserTuple(this.prepareDefinition(shape, definition));
    }
}
const tuple = detachObjectMethod.detachObjectMethod(DataParserTuple, "create");

exports.DataParserTuple = DataParserTuple;
exports.tuple = tuple;
exports.tupleKind = tupleKind;
