import { isSerializedTheTime } from "../isSerializedTheTime";
import { TheDate } from "../theDate";
import { TheTime } from "../theTime";
import { toTimestamp } from "../toTimestamp";
import { toTimeValue } from "../toTimeValue";
import type { SerializedTheDate, SerializedTheTime } from "../types";

/**
 * {@include date/addTime/index.md}
 */
export function addTime<
	GenericInput extends TheDate | SerializedTheDate,
>(
	time: TheTime | SerializedTheTime,
): (input: GenericInput) => TheDate;

export function addTime<
	GenericInput extends TheTime | SerializedTheTime,
>(
	time: TheTime | SerializedTheTime,
): (input: GenericInput) => TheTime;

export function addTime<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime,
): TheDate;

export function addTime<
	GenericInput extends TheTime | SerializedTheTime,
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime,
): TheTime;

export function addTime(
	...args:
    | [TheDate | SerializedTheDate | TheTime | SerializedTheTime, TheTime | SerializedTheTime]
    | [TheTime | SerializedTheTime]
): any {
	if (args.length === 1) {
		const [time] = args;
		return (input: TheDate | SerializedTheDate | TheTime | SerializedTheTime) => addTime(input as never, time);
	}

	const [input, time] = args;
	const timeValue = toTimeValue(time);

	if (input instanceof TheDate) {
		const timestamp = toTimestamp(input);

		return TheDate.new(timestamp + timeValue);
	}

	if (input instanceof TheTime || isSerializedTheTime(input)) {
		const inputTimeValue = toTimeValue(input);

		return TheTime.new(inputTimeValue + timeValue);
	}

	const timestamp = toTimestamp(input);

	return TheDate.new(timestamp + timeValue);
}
