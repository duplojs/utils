import { kindHeritage } from '../common/kind.mjs';
import { createDateKind } from './kind.mjs';
import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';
import { serialize } from './serialize.mjs';

const defaultKindValue = {};
/**
 * {@include date/theDate/index.md}
 */
class TheDate extends kindHeritage("the-date", createDateKind("the-date"), Date) {
    constructor(timestamp) {
        super(defaultKindValue, [timestamp]);
    }
    toNative() {
        return new Date(this.getTime());
    }
    toString() {
        return serialize(this);
    }
    toJSON() {
        return serialize(this);
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setDate(_date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setFullYear(_year, _month, _date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setHours(_hours, _min, _sec, _ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMilliseconds(_ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMinutes(_min, _sec, _ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setMonth(_month, _date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setSeconds(_sec, _ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setTime(_time) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCDate(_date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCFullYear(_year, _month, _date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCHours(_hours, _min, _sec, _ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMilliseconds(_ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMinutes(_min, _sec, _ms) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCMonth(_month, _date) {
        return this.getTime();
    }
    /**
     * @deprecated this method does not work on ImmutableDate
     */
    setUTCSeconds(_sec, _ms) {
        return this.getTime();
    }
    /**
     * @internal
     * @deprecated use DDate.create | DDate.createOrThrow function
     */
    static "new"(timestamp) {
        return new TheDate(makeSafeTimestamp(timestamp));
    }
}

export { TheDate };
