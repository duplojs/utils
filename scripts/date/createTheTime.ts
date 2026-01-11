import { makeSafeTimeValue } from "./makeSafeTimeValue";
import { type TheTime } from "./types";

/**
 * {@include date/createTheTime/index.md}
 */
export function createTheTime(timestamp: number): TheTime {
	const safeTimestamp = makeSafeTimeValue(timestamp);

	return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}
