'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');

const stringKind = kind.createDataParserKind("string");
class DataParserString extends base.DataParserBase.init(stringKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserString);
    }
    static execParse(self, data, error$1) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return error.addIssue(error$1, "string", inputData, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/string/index.md}
     */
    static create(definition) {
        return new DataParserString(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/classic/string/index.md}
 */
const string = detachObjectMethod.detachObjectMethod(DataParserString, "create");

exports.DataParserString = DataParserString;
exports.string = string;
exports.stringKind = stringKind;
