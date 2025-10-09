import { type TupleHasSpread } from "@scripts/array";
import { type AnyTuple, type IsEqual } from "@scripts/common";

export type FlatObject<
	GenericObject extends object,
	GenericPath extends string = "",
> = GenericObject extends object
	? (
		| (
			Exclude<GenericObject, readonly any[]> extends infer InferredObject extends object
				? IsEqual<InferredObject, never> extends true
					? never
					: {
						[Prop in Extract<keyof InferredObject, string | number>]: InferredObject[Prop] extends object
							? FlatObject<
								InferredObject[Prop],
								`${GenericPath}.${Prop}`
							>
							: {
								path: `${GenericPath}.${Prop}`;
								value: InferredObject[Prop];
							}
					}[Extract<keyof InferredObject, string | number>]
				: never
		)
		| (
			GenericObject extends AnyTuple
				? TupleHasSpread<GenericObject> extends true
					? never
					: GenericObject extends readonly [
						...infer InferredRest,
						infer InferredLast,
					]
						? (
							| (
								InferredLast extends object
									? FlatObject<
										InferredLast,
										`${GenericPath}.[${InferredRest["length"]}]`
									>
									: {
										path: `${GenericPath}.[${InferredRest["length"]}]`;
										value: InferredLast;
									}
							)
							| (
								IsEqual<InferredRest, []> extends true
									? never
									: FlatObject<
										InferredRest,
										GenericPath
									>
							)
						)
						: never
				: never
		)
		| (
			GenericObject extends AnyTuple
				? TupleHasSpread<GenericObject> extends true
					? GenericObject[number] extends infer InferredValue
						? InferredValue extends object
							? FlatObject<
								InferredValue,
								`${GenericPath}.[number]`
							>
							: {
								path: `${GenericPath}.[number]`;
								value: InferredValue;
							}
						: never
					: never
				: never
		)
		| (
			Exclude<Extract<GenericObject, readonly any[]>, AnyTuple> extends infer InferredArray extends readonly any[]
				? IsEqual<InferredArray, never> extends true
					? never
					: InferredArray[number] extends infer InferredValue
						? InferredValue extends object
							? FlatObject<
								InferredValue,
								`${GenericPath}.[number]`
							>
							: {
								path: `${GenericPath}.[number]`;
								value: InferredValue;
							}
						: never
				: never
		)
	) extends infer InferredResult extends {
		path: string;
		value: any;
	}
		? IsEqual<GenericPath, ""> extends true
			? IsEqual<InferredResult, never> extends true
				? {}
				: {
					[Result in InferredResult as Result["path"] extends `.${infer inferredPath}` ? inferredPath : never]: Result["value"]
				}
			: InferredResult
		: never
	: never;
