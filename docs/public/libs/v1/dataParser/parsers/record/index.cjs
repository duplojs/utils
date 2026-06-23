'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var findRecordRequiredKey = require('./findRecordRequiredKey.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');
var callThen = require('../../../common/callThen.cjs');
var pipe = require('../../../common/pipe.cjs');
var fromEntries = require('../../../object/fromEntries.cjs');
var map = require('../../../array/map.cjs');
var entry = require('../../../object/entry.cjs');

const recordKind = kind.createDataParserKind("record");
class DataParserRecord extends base.DataParserBase.init(recordKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecord);
    }
    static execParse(self, data, error$1) {
        if (!data || typeof data !== "object" || data instanceof Array) {
            return error.addIssue(error$1, "record object", data, self.definition.errorMessage, self);
        }
        const fromData = {
            ...self.definition.baseData,
            ...data,
        };
        const entries = Object.entries(fromData);
        const currentIndexPath = error$1.currentPath.length;
        const output = entries.reduce((accumulator, entry) => callThen.callThen(accumulator, (awaitedAccumulator) => {
            error.setErrorPath(error$1, `(recordKey: ${entry[0]})`, currentIndexPath);
            return callThen.callThen(self.definition.key.exec(entry[0], error$1), (awaitedKeyResult) => {
                error.setErrorPath(error$1, `(recordValue: ${entry[0]})`, currentIndexPath);
                return callThen.callThen(self.definition.value.exec(entry[1], error$1), (awaitedValueResult) => {
                    if (awaitedAccumulator === error.SymbolDataParserError
                        || awaitedKeyResult === error.SymbolDataParserError
                        || awaitedValueResult === error.SymbolDataParserError) {
                        return error.SymbolDataParserError;
                    }
                    if (awaitedValueResult !== undefined) {
                        awaitedAccumulator[awaitedKeyResult] = awaitedValueResult;
                    }
                    return awaitedAccumulator;
                });
            });
        }), {});
        void (currentIndexPath !== error$1.currentPath.length && error.popErrorPath(error$1));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.key.isAsynchronous() || self.definition.value.isAsynchronous();
    }
    static prepareDefinition(key, value, definition) {
        const requireKey = findRecordRequiredKey.findRecordRequiredKey(key);
        return {
            ...definition,
            key,
            value,
            baseData: pipe.pipe(requireKey, map.map((key) => entry.entry(key, undefined)), fromEntries.fromEntries),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/record/index.md}
     */
    static create(key, value, definition) {
        return new DataParserRecord(this.prepareDefinition(key, value, definition));
    }
}
const record = detachObjectMethod.detachObjectMethod(DataParserRecord, "create");

exports.findRecordRequiredKey = findRecordRequiredKey.findRecordRequiredKey;
exports.findRecordRequiredKeyOnTemplateLiteralPart = findRecordRequiredKey.findRecordRequiredKeyOnTemplateLiteralPart;
exports.DataParserRecord = DataParserRecord;
exports.record = record;
exports.recordKind = recordKind;
