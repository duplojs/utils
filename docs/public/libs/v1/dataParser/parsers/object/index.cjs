'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var memo = require('../../../common/memo.cjs');
var forward = require('../../../common/forward.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');
var callThen = require('../../../common/callThen.cjs');
var pipe = require('../../../common/pipe.cjs');
var map = require('../../../array/map.cjs');
var filter = require('../../../array/filter.cjs');
var entries = require('../../../object/entries.cjs');

const objectKind = kind.createDataParserKind("object");
class DataParserObject extends base.DataParserBase.init(objectKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserObject);
    }
    static execParse(self, data, error$1) {
        if (!data
            || typeof data !== "object"
            || data instanceof Array) {
            return error.addIssue(error$1, "object", data, self.definition.errorMessage, self);
        }
        const currentIndexPath = error$1.currentPath.length;
        const output = self.definition.optimizedShape.value.reduce((accumulator, entry) => callThen.callThen(accumulator, (awaitedAccumulator) => {
            error.setErrorPath(error$1, entry.key, currentIndexPath);
            return callThen.callThen(entry.value.exec(data[entry.key], error$1), (awaitedResult) => {
                if (awaitedResult === error.SymbolDataParserError
                    || awaitedAccumulator === error.SymbolDataParserError) {
                    return error.SymbolDataParserError;
                }
                if (awaitedResult !== undefined) {
                    awaitedAccumulator[entry.key] = awaitedResult;
                }
                return awaitedAccumulator;
            });
        }), {});
        void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.optimizedShape.value.some((entry) => entry.value.isAsynchronous());
    }
    static prepareDefinition(shape, definition) {
        return {
            ...definition,
            shape,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
            optimizedShape: memo.memo(() => pipe.pipe(forward.forward(shape), entries.entries, filter.filter((entry) => base.dataParserKind.has(entry[1])), map.map(([key, value]) => ({
                key,
                value,
            })))),
        };
    }
    /**
     * {@include dataParser/classic/object/index.md}
     */
    static create(shape, definition) {
        return new DataParserObject(this.prepareDefinition(shape, definition));
    }
}
const object = detachObjectMethod.detachObjectMethod(DataParserObject, "create");

exports.DataParserObject = DataParserObject;
exports.object = object;
exports.objectKind = objectKind;
