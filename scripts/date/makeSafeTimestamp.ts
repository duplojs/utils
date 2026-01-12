import { maxTimestamp, minTimestamp } from "./constants";

/**
 * {@include date/makeSafeTimestamp/index.md}
 */
export function makeSafeTimestamp(timestamp: number) {
	if (Number.isNaN(timestamp)) {
		return 0;
	}

	if (timestamp > maxTimestamp) {
		return maxTimestamp;
	}

	if (timestamp < minTimestamp) {
		return minTimestamp;
	}

	return Number.isInteger(timestamp)
		? timestamp
		: Math.round(timestamp);
}
