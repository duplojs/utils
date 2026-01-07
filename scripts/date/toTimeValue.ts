import { theTimeRegex } from "./constants";
import { makeSafeTimeValue } from "./makeSafeTimeValue";
import { type TheTime } from "./types";

export function toTimeValue<
	GenericInput extends TheTime,
>(input: GenericInput) {
	const match = input.match(theTimeRegex);
	const { value, sign } = match!.groups as Record<"value" | "sign", string>;

	return makeSafeTimeValue(
		Number(
			sign === "-"
				? `-${value}`
				: value,
		),
	);
}
