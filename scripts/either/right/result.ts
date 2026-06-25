import { type Kind } from "@scripts/common";
import { createEitherKind } from "../kind";
import { right, type Right } from "./create";

export const resultKind = createEitherKind("result");

type _Result<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> = (
	& Right<GenericInformation, GenericValue>
	& Kind<typeof resultKind.definition>
);

export interface Result<
	GenericInformation extends string = string,
	GenericValue extends unknown = unknown,
> extends _Result<
		GenericInformation,
		GenericValue
	> {

}

/**
 * {@include either/result/index.md}
 */
export function result<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
): (value: GenericValue) => Result<
	GenericInformation,
	GenericValue
>;

export function result<
	GenericInformation extends string,
	const GenericValue extends unknown = undefined,
>(
	information: GenericInformation,
	value: GenericValue,
): Result<
	GenericInformation,
	GenericValue
>;

export function result(
	...args: [string, unknown]
		| [string]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (value: unknown) => result(information, value);
	}

	const [information, value] = args;

	return resultKind.setTo(
		right(information, value),
	);
}
