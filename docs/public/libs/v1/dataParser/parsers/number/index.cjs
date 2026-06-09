'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');

const numberKind = kind.createDataParserKind("number");
class DataParserNumber extends base.DataParserBase.init(numberKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserNumber);
    }
    static execParse(self, data, error$1) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return error.addIssue(error$1, "number", inputData, self.definition.errorMessage);
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
     * {@include dataParser/classic/number/index.md}
     */
    static create(definition) {
        return new DataParserNumber(this.prepareDefinition(definition));
    }
}
const number = detachObjectMethod.detachObjectMethod(DataParserNumber, "create");

exports.DataParserNumber = DataParserNumber;
exports.number = number;
exports.numberKind = numberKind;
