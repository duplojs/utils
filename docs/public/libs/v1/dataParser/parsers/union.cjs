'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');

const unionKind = kind.createDataParserKind("union");
class DataParserUnion extends base.DataParserBase.init(unionKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnion);
    }
    static execParse(self, data, error$1) {
        const unionError = {
            ...error$1,
            currentPath: [...error$1.currentPath],
            issues: [],
        };
        const currentIndexPath = unionError.currentPath.length;
        const output = self.definition.options.reduce((accumulator, dataParser, index) => callThen.callThen(accumulator, (awaitedAccumulator) => {
            if (awaitedAccumulator !== error.SymbolDataParserError) {
                return awaitedAccumulator;
            }
            error.setErrorPath(unionError, `(option: ${index})`, currentIndexPath);
            return dataParser.exec(data, unionError);
        }), error.SymbolDataParserError);
        void (currentIndexPath !== unionError.currentPath.length && error.popErrorPath(unionError));
        return callThen.callThen(output, (awaitedOutput) => {
            if (awaitedOutput !== error.SymbolDataParserError) {
                return awaitedOutput;
            }
            error$1.issues.push(...unionError.issues);
            return error.addIssue(error$1, "respect at least one union value", data, self.definition.errorMessage, self);
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.options.some((element) => element.isAsynchronous());
    }
    static prepareDefinition(options, definition) {
        return {
            ...definition,
            options,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/union/index.md}
     */
    static create(options, definition) {
        return new DataParserUnion(this.prepareDefinition(options, definition));
    }
}
const union = detachObjectMethod.detachObjectMethod(DataParserUnion, "create");

exports.DataParserUnion = DataParserUnion;
exports.union = union;
exports.unionKind = unionKind;
