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
	value: GenericValue = undefined as GenericValue,
): Result<
		GenericInformation,
		GenericValue
	> {
	return resultKind.setTo(
		right(information, value),
	);
}
