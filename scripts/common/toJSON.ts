import { type ObjectKey } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type IsEqual } from "./types/isEqual";

export type ToJSON<
	GenericValue extends unknown,
> = GenericValue extends number | string | null | undefined
	? GenericValue
	: GenericValue extends ({ toJSON: AnyFunction })
		? ReturnType<GenericValue["toJSON"]>
		: GenericValue extends [infer InferredFirst, ...infer InferredRest]
			? [
				ToJSON<InferredFirst>,
				...(
					ToJSON<InferredRest> extends infer InferredSubRest extends any[]
						? IsEqual<InferredSubRest, never[]> extends false
							? InferredSubRest
							: []
						: []
				),
			]
			: GenericValue extends any[]
				? ToJSON<GenericValue[number]>[]
				: GenericValue extends object
					? {
						[
						Prop in keyof GenericValue as GenericValue[Prop] extends AnyFunction
							? never
							: Prop
						]: ToJSON<GenericValue[Prop]>
					}
					: undefined;

export function toJSON<
	GenericValue extends unknown,
>(
	value: GenericValue,
): ToJSON<GenericValue> {
	if (
		typeof value === "string"
		|| typeof value === "number"
		|| value === null
		|| value === undefined
	) {
		return value as never;
	} else if (
		typeof value === "object"
		&& "toJSON" in value
		&& typeof value.toJSON === "function"
	) {
		return (value.toJSON as AnyFunction)();
	} else if (
		typeof value === "object"
		&& (
			!value.constructor
			|| value.constructor.name === "Object"

		)
	) {
		return Object
			.entries(value)
			.reduce(
				(pv, [key, value]) => ({
					...pv,
					[key]: toJSON(value),
				}),
				{},
			) as never;
	} else if (
		value instanceof Array
		&& value.constructor.name === "Array"
	) {
		return value.map(toJSON) as never;
	} else {
		return undefined as never;
	}
}
