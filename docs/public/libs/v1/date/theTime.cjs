'use strict';

var kind = require('../common/kind.cjs');
var kind$1 = require('./kind.cjs');
var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');
var serialize = require('./serialize.cjs');

const defaultKindValue = {};
/**
 * {@include date/theTime/index.md}
 */
class TheTime extends kind.kindHeritage("the-time", kind$1.createDateKind("the-time")) {
    timeValue;
    constructor(timeValue) {
        super(defaultKindValue);
        this.timeValue = timeValue;
    }
    toNative() {
        return this.timeValue;
    }
    toString() {
        return serialize.serialize(this);
    }
    toJSON() {
        return serialize.serialize(this);
    }
    /**
     * @internal
     * @deprecated use DDate.createTime | DDate.createTimeOrThrow function
     */
    static "new"(time) {
        return new TheTime(makeSafeTimeValue.makeSafeTimeValue(time));
    }
}

exports.TheTime = TheTime;
