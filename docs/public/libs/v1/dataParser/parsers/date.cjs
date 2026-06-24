'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var isSafeTimestamp = require('../../date/isSafeTimestamp.cjs');
var theDate = require('../../date/theDate.cjs');
var isSerializedTheDate = require('../../date/isSerializedTheDate.cjs');
var toTimestamp = require('../../date/toTimestamp.cjs');

const dateKind = kind.createDataParserKind("date");
class DataParserDate extends base.DataParserBase.init(dateKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserDate);
    }
    static execParse(self, data, error$1) {
        if (self.definition.coerce) {
            if (typeof data === "number") {
                if (!isSafeTimestamp.isSafeTimestamp(data)) {
                    return error.addIssue(error$1, "date", data, self.definition.errorMessage, self);
                }
                return theDate.TheDate.new(data);
            }
            if (typeof data === "string") {
                const date = new Date(data);
                const timestamp = date.getTime();
                if (isSafeTimestamp.isSafeTimestamp(timestamp)) {
                    return theDate.TheDate.new(timestamp);
                }
            }
        }
        if (data instanceof theDate.TheDate) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheDate.isSerializedTheDate(data)) {
            return theDate.TheDate.new(toTimestamp.toTimestamp(data));
        }
        else if (data instanceof Date) {
            const timestamp = data.getTime();
            if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
                return error.addIssue(error$1, "date", data, self.definition.errorMessage, self);
            }
            return theDate.TheDate.new(timestamp);
        }
        return error.addIssue(error$1, "date", data, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/date/index.md}
     */
    static create(definition) {
        return new DataParserDate(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/classic/date/index.md}
 */
const date = detachObjectMethod.detachObjectMethod(DataParserDate, "create");

exports.DataParserDate = DataParserDate;
exports.date = date;
exports.dateKind = dateKind;
