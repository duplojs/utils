import { makeSafeTimestamp } from "./makeSafeTimestamp";
import { type TheDate } from "./types";

export function createTheDate(timestamp: number): TheDate {
	const safeTimestamp = makeSafeTimestamp(timestamp);

	return `date${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}
