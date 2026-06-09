'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const nilKind = kind.createDataParserKind("nil");
class DataParserNil extends base.DataParserBase.init(nilKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNil);
    }
    static execParse(self, data, error$1) {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return error.addIssue(error$1, "null", data, self.definition.errorMessage);
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
     * {@include dataParser/classic/nil/index.md}
     */
    static create(definition) {
        return new DataParserNil(this.prepareDefinition(definition));
    }
}
const nil = detachObjectMethod.detachObjectMethod(DataParserNil, "create");

exports.DataParserNil = DataParserNil;
exports.nil = nil;
exports.nilKind = nilKind;
