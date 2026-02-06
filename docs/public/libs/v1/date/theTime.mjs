import { kindHeritage } from '../common/kind.mjs';
import { createDateKind } from './kind.mjs';
import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';
import { serialize } from './serialize.mjs';

const defaultKindValue = {};
/**
 * {@include date/theTime/index.md}
 */
class TheTime extends kindHeritage("the-time", createDateKind("the-time")) {
    timeValue;
    constructor(timeValue) {
        super(defaultKindValue);
        this.timeValue = timeValue;
    }
    toNative() {
        return this.timeValue;
    }
    toString() {
        return serialize(this);
    }
    toJSON() {
        return serialize(this);
    }
    /**
     * @internal
     * @deprecated use DDate.createTime | DDate.createTimeOrThrow function
     */
    static "new"(time) {
        return new TheTime(makeSafeTimeValue(time));
    }
}

export { TheTime };
