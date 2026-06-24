'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var memo = require('../../common/memo.cjs');

const lazyKind = kind.createDataParserKind("lazy");
class DataParserLazy extends base.DataParserBase.init(lazyKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserLazy);
    }
    static execParse(self, data, error) {
        return self.definition.getter.value.exec(data, error);
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.getter.value.isAsynchronous();
    }
    static prepareDefinition(getter, definition) {
        return {
            ...definition,
            getter: memo.memo(getter),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/lazy/index.md}
     */
    static create(getter, definition) {
        return new DataParserLazy(this.prepareDefinition(getter, definition));
    }
}
/**
 * {@include dataParser/classic/lazy/index.md}
 */
const lazy = detachObjectMethod.detachObjectMethod(DataParserLazy, "create");

exports.DataParserLazy = DataParserLazy;
exports.lazy = lazy;
exports.lazyKind = lazyKind;
