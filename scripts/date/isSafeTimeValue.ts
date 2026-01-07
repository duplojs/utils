import { maxTimeValue, minTimeValue } from "./constants";

export function isSafeTimeValue(timeValue: number) {
	if (!Number.isSafeInteger(timeValue)) {
		return false;
	}

	if (timeValue <= minTimeValue || timeValue >= maxTimeValue) {
		return false;
	}

	return true;
}
