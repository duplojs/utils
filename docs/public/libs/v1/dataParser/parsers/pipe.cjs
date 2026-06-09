'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');

const pipeKind = kind.createDataParserKind("pipe");
class DataParserPipe extends base.DataParserBase.init(pipeKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserPipe);
    }
    static execParse(self, data, error$1) {
        const currentIndexPath = error$1.currentPath.length;
        error.setErrorPath(error$1, "(pipeIn)", currentIndexPath);
        return callThen.callThen(self.definition.input.exec(data, error$1), (resultIn) => {
            if (resultIn === error.SymbolDataParserError) {
                error.popErrorPath(error$1);
                return error.SymbolDataParserError;
            }
            error.setErrorPath(error$1, "(pipeOut)", currentIndexPath);
            return callThen.callThen(self.definition.output.exec(resultIn, error$1), (resultOut) => {
                error.popErrorPath(error$1);
                return resultOut;
            });
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous();
    }
    static prepareDefinition(input, output, definition) {
        return {
            ...definition,
            input,
            output,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/pipe/index.md}
     */
    static create(input, output, definition) {
        return new DataParserPipe(this.prepareDefinition(input, output, definition));
    }
}
const pipe = detachObjectMethod.detachObjectMethod(DataParserPipe, "create");

exports.DataParserPipe = DataParserPipe;
exports.pipe = pipe;
exports.pipeKind = pipeKind;
