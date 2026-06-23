'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var callThen = require('../../common/callThen.cjs');
var forward = require('../../common/forward.cjs');

const transformKind = kind.createDataParserKind("transform");
class DataParserTransform extends base.DataParserBase.init(transformKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTransform);
    }
    static execParse(self, data, error$1) {
        return callThen.callThen(self.definition.inner.exec(data, error$1), (innerResult) => {
            if (innerResult === error.SymbolDataParserError) {
                return error.SymbolDataParserError;
            }
            return callThen.callThen(self.definition.theFunction(innerResult, error$1), forward.forward, (catchError) => error.addIssue(error$1, "successful transform result", catchError, self.definition.errorMessage, self));
        });
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous()
            || self.definition.theFunction.constructor.name === "AsyncFunction";
    }
    static prepareDefinition(inner, theFunction, definition) {
        return {
            ...definition,
            inner,
            theFunction,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/transform/index.md}
     */
    static create(inner, theFunction, definition) {
        return new DataParserTransform(this.prepareDefinition(inner, theFunction, definition));
    }
}
const transform = detachObjectMethod.detachObjectMethod(DataParserTransform, "create");

exports.DataParserTransform = DataParserTransform;
exports.transform = transform;
exports.transformKind = transformKind;
