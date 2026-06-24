'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');

const bigIntKind = kind.createDataParserKind("bigint");
class DataParserBigInt extends base.DataParserBase.init(bigIntKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserBigInt);
    }
    static execParse(self, data, error$1) {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = BigInt(data);
            }
            catch { }
        }
        if (typeof data === "bigint") {
            return data;
        }
        return error.addIssue(error$1, "bigint", inputData, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/bigint/index.md}
     */
    static create(definition) {
        return new DataParserBigInt(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/classic/bigint/index.md}
 */
const bigint = detachObjectMethod.detachObjectMethod(DataParserBigInt, "create");

exports.DataParserBigInt = DataParserBigInt;
exports.bigIntKind = bigIntKind;
exports.bigint = bigint;
