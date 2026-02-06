import { kindHeritage } from "@scripts/common/kind";
import { createDateKind } from "./kind";
import type { SerializedTheDate } from "./types/serializedTheDate";
import { makeSafeTimestamp } from "./makeSafeTimestamp";
import { serialize } from "./serialize";

const defaultKindValue = {};

/**
 * {@include date/theDate/index.md}
 */
export class TheDate extends kindHeritage(
	"the-date",
	createDateKind("the-date"),
	Date,
) {
	private constructor(timestamp: number) {
		super(defaultKindValue, [timestamp]);
	}

	public toNative() {
		return new Date(this.getTime());
	}

	public override toString(): SerializedTheDate {
		return serialize(this);
	}

	public override toJSON(): SerializedTheDate {
		return serialize(this);
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setDate(_date: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setFullYear(_year: number, _month?: number, _date?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setHours(_hours: number, _min?: number, _sec?: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setMilliseconds(_ms: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setMinutes(_min: number, _sec?: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setMonth(_month: number, _date?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setSeconds(_sec: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setTime(_time: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCDate(_date: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCFullYear(_year: number, _month?: number, _date?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCHours(_hours: number, _min?: number, _sec?: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCMilliseconds(_ms: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCMinutes(_min: number, _sec?: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCMonth(_month: number, _date?: number) {
		return this.getTime();
	}

	/**
	 * @deprecated this method does not work on ImmutableDate
	 */
	public override setUTCSeconds(_sec: number, _ms?: number) {
		return this.getTime();
	}

	/**
	 * @internal
	 * @deprecated use DDate.create | DDate.createOrThrow function
	 */
	public static "new"(timestamp: number) {
		return new TheDate(makeSafeTimestamp(timestamp));
	}
}
