'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const emptyKind = kind.createDataParserKind("empty");
class DataParserEmpty extends base.DataParserBase.init(emptyKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserEmpty);
    }
    static execParse(self, data, error$1) {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return error.addIssue(error$1, "undefined", data, self.definition.errorMessage, self);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(definition) {
        return {
            ...definition,
            coerce: definition?.coerce ?? false,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/empty/index.md}
     */
    static create(definition) {
        return new DataParserEmpty(this.prepareDefinition(definition));
    }
}
const empty = detachObjectMethod.detachObjectMethod(DataParserEmpty, "create");

exports.DataParserEmpty = DataParserEmpty;
exports.empty = empty;
exports.emptyKind = emptyKind;
