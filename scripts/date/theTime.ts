import { kindHeritage } from "@scripts/common/kind";
import { createDateKind } from "./kind";
import { makeSafeTimeValue } from "./makeSafeTimeValue";
import { type SerializedTheTime } from "./types";
import { serialize } from "./serialize";

const defaultKindValue = {};

/**
 * {@include date/theTime/index.md}
 */
export class TheTime extends kindHeritage(
	"the-time",
	createDateKind("the-time"),
) {
	private constructor(
		private timeValue: number,
	) {
		super(defaultKindValue);
	}

	public toNative() {
		return this.timeValue;
	}

	public override toString(): SerializedTheTime {
		return serialize(this);
	}

	public toJSON(): SerializedTheTime {
		return serialize(this);
	}

	/**
	 * @internal
	 * @deprecated use DDate.createTime | DDate.createTimeOrThrow function
	 */
	public static "new"(time: number) {
		return new TheTime(makeSafeTimeValue(time));
	}
}
