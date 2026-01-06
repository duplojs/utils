import { makeSafeTimestamp } from "./makeSafeTimestamp";
import { type TheTime } from "./types";

export function createTheTime(timestamp: number): TheTime {
	const safeTimestamp = makeSafeTimestamp(timestamp);

	return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}
