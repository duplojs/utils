import { maxTimestamp, minTimestamp } from "./constants";

export function isSafeTimestamp(input: number) {
	if (!Number.isSafeInteger(input)) {
		return false;
	}

	if (input <= minTimestamp || input >= maxTimestamp) {
		return false;
	}

	return true;
}
