import { maxTimestamp, minTimestamp } from "./constants";

/**
 * {@include date/isSafeTimestamp/index.md}
 */
export function isSafeTimestamp(timestamp: number) {
	if (!Number.isSafeInteger(timestamp)) {
		return false;
	}

	if (timestamp <= minTimestamp || timestamp >= maxTimestamp) {
		return false;
	}

	return true;
}
