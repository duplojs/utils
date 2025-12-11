import { theDateRegex } from "./constants";
import { type TheDate } from "./types";

export function is(
	input: string,
): input is TheDate {
	return theDateRegex.test(input);
}
