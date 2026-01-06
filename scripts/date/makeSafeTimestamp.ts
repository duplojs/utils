import { maxTimestamp, minTimestamp } from "./constants";

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

	return timestamp;
}
