import { maxTimeValue, minTimeValue } from "./constants";

/**
 * {@include date/isSafeTimeValue/index.md}
 */
export function isSafeTimeValue(timeValue: number) {
	if (!Number.isSafeInteger(timeValue)) {
		return false;
	}

	if (timeValue <= minTimeValue || timeValue >= maxTimeValue) {
		return false;
	}

	return true;
}
