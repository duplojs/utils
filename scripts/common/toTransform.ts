import { type AnyFunction } from "./types/anyFunction";
import { type IsEqual } from "./types/isEqual";

export type ToTransform<
	GenericValue extends unknown,
> = GenericValue extends number | string | null | undefined
	? GenericValue
	: GenericValue extends ({ toTransform: AnyFunction })
		? ReturnType<GenericValue["toTransform"]>
		: GenericValue extends [infer InferredFirst, ...infer InferredRest]
			? [
				ToTransform<InferredFirst>,
				...(
					ToTransform<InferredRest> extends infer InferredSubRest extends any[]
						? IsEqual<InferredSubRest, never[]> extends false
							? InferredSubRest
							: []
						: []
				),
			]
			: GenericValue extends any[]
				? ToTransform<GenericValue[number]>[]
				: GenericValue extends Record<number, unknown>
					? {
						[Prop in keyof GenericValue]: ToTransform<GenericValue[Prop]>
					}
					: GenericValue;

export function toTransform<
	GenericValue extends unknown,
>(
	value: GenericValue,
): ToTransform<GenericValue> {
	if (
		typeof value === "string"
		|| typeof value === "number"
		|| value === null
		|| value === undefined
	) {
		return value as never;
	} else if (
		value
		&& typeof value === "object"
		&& "toTransform" in value
		&& typeof value.toTransform === "function"
	) {
		return (
			(value.toTransform as AnyFunction)()
		) as never;
	} else if (
		typeof value === "object"
		&& (
			!value.constructor
			|| value.constructor.name === "Object"

		)
	) {
		return Object.entries(value)
			.reduce(
				(pv, [key, value]) => ({
					...pv,
					[key]: toTransform<unknown>(value),
				}),
				{},
			) as never;
	} else if (
		value instanceof Array
		&& value.constructor.name === "Array"
	) {
		return value.map((subValue) => toTransform<unknown>(subValue)) as never;
	} else {
		return value as never;
	}
}
