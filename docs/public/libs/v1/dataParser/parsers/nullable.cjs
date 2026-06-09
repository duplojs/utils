'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const nullableKind = kind.createDataParserKind("nullable");
class DataParserNullable extends base.DataParserBase.init(nullableKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNullable);
    }
    static execParse(self, data, error) {
        if (data === null) {
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
            coalescingValue: definition?.coalescingValue ?? null,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/nullable/index.md}
     */
    static create(inner, definition) {
        return new DataParserNullable(this.prepareDefinition(inner, definition));
    }
}
const nullable = detachObjectMethod.detachObjectMethod(DataParserNullable, "create");

exports.DataParserNullable = DataParserNullable;
exports.nullable = nullable;
exports.nullableKind = nullableKind;
