'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');

const booleanKind = kind.createDataParserKind("boolean");
class DataParserBoolean extends base.DataParserBase.init(booleanKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserBoolean);
    }
    static execParse(self, data, error$1) {
        if (typeof data === "boolean") {
            return data;
        }
        else if (self.definition.coerce) {
            if (typeof data === "string") {
                const lower = data.trim().toLowerCase();
                if (lower === "true" || lower === "false") {
                    return lower === "true";
                }
            }
            else if (typeof data === "number" && (data === 0 || data === 1)) {
                return data === 1;
            }
        }
        return error.addIssue(error$1, "boolean", data, self.definition.errorMessage);
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
     * {@include dataParser/classic/boolean/index.md}
     */
    static create(definition) {
        return new DataParserBoolean(this.prepareDefinition(definition));
    }
}
const boolean = detachObjectMethod.detachObjectMethod(DataParserBoolean, "create");

exports.DataParserBoolean = DataParserBoolean;
exports.boolean = boolean;
exports.booleanKind = booleanKind;
