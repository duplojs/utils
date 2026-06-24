'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const optionalKind = kind.createDataParserKind("optional");
class DataParserOptional extends base.DataParserBase.init(optionalKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserOptional);
    }
    static execParse(self, data, error) {
        if (data === undefined) {
            return self.definition.coalescingValue;
        }
        return self.definition.inner.exec(data, error);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.inner.isAsynchronous();
    }
    static prepareDefinition(inner, definition) {
        return {
            ...definition,
            inner,
            coalescingValue: definition?.coalescingValue,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/optional/index.md}
     */
    static create(inner, definition) {
        return new DataParserOptional(this.prepareDefinition(inner, definition));
    }
}
/**
 * {@include dataParser/classic/optional/index.md}
 */
const optional = detachObjectMethod.detachObjectMethod(DataParserOptional, "create");

exports.DataParserOptional = DataParserOptional;
exports.optional = optional;
exports.optionalKind = optionalKind;
