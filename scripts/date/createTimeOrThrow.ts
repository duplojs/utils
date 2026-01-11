import { createErrorKind, kindHeritage, unwrap } from "@scripts/common";
import type { SpoolingTime, TheTime } from "./types";
import * as DEither from "@scripts/either";
import { createTime } from "./createTime";

export class CreateTheTimeError extends kindHeritage(
	"create-the-time-error",
	createErrorKind("create-the-time-error"),
	Error,
) {
	public constructor(public input: TheTime | number | SpoolingTime) {
		const value = typeof input === "object"
			? JSON.stringify(input)
			: input.toString();

		super({}, [`Invalid date input: ${value}`]);
	}
}

/**
 * {@include date/createTimeOrThrow/index.md}
 */
export function createTimeOrThrow(
	input: number | TheTime | SpoolingTime,
): TheTime {
	const result = createTime(input as never);

	if (DEither.isLeft(result)) {
		throw new CreateTheTimeError(
			input,
		);
	}

	return unwrap(result);
}
