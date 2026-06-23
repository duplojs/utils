'use strict';

var kind = require('../../kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var detachObjectMethod = require('../../../common/detachObjectMethod.cjs');
var constants = require('../../../date/constants.cjs');
var createTime = require('../../../date/createTime.cjs');
var is = require('../../../either/left/is.cjs');
var unwrap = require('../../../common/unwrap.cjs');
var theTime = require('../../../date/theTime.cjs');
var isSerializedTheTime = require('../../../date/isSerializedTheTime.cjs');
var toTimeValue = require('../../../date/toTimeValue.cjs');
var isSafeTimeValue = require('../../../date/isSafeTimeValue.cjs');

const timeKind = kind.createDataParserKind("time");
class DataParserTime extends base.DataParserBase.init(timeKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserTime);
    }
    static execParse(self, data, error$1) {
        if (self.definition.coerce) {
            if (typeof data === "string" && constants.isoTimeRegex.test(data)) {
                const result = createTime.createTime({ value: data });
                if (is.isLeft(result)) {
                    return error.addIssue(error$1, "time", data, self.definition.errorMessage, self);
                }
                return unwrap.unwrap(result);
            }
        }
        if (data instanceof theTime.TheTime) {
            return data;
        }
        else if (typeof data === "string" && isSerializedTheTime.isSerializedTheTime(data)) {
            return theTime.TheTime.new(toTimeValue.toTimeValue(data));
        }
        else if (typeof data === "number") {
            if (!isSafeTimeValue.isSafeTimeValue(data)) {
                return error.addIssue(error$1, "time", data, self.definition.errorMessage, self);
            }
            return theTime.TheTime.new(data);
        }
        return error.addIssue(error$1, "time", data, self.definition.errorMessage, self);
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
     * {@include dataParser/classic/time/index.md}
     */
    static create(definition) {
        return new DataParserTime(this.prepareDefinition(definition));
    }
}
const time = detachObjectMethod.detachObjectMethod(DataParserTime, "create");

exports.DataParserTime = DataParserTime;
exports.time = time;
exports.timeKind = timeKind;
