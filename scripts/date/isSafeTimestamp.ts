import { maxTimestamp, minTimestamp } from "./constants";

export function isSafeTimestamp(timestamp: number) {
	if (!Number.isSafeInteger(timestamp)) {
		return false;
	}

	if (timestamp <= minTimestamp || timestamp >= maxTimestamp) {
		return false;
	}

	return true;
}
