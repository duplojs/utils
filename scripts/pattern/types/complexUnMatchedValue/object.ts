import { type Adaptor, type SimplifyTopLevel, type IsEqual, type IsUnion, type NeverCoalescing, type RemoveReadonly } from "@scripts/common";
import { type ComplexUnMatchedValue } from ".";

export type ComplexUnMatchedObject<
	GenericInput extends unknown,
	GenericPatternValue extends unknown,
> = (
		[
			Exclude<Extract<GenericInput, object>, readonly any[]>,
			Exclude<Extract<GenericPatternValue, object>, readonly any[]>,
		] extends [
			infer InferredInput,
			infer InferredPatternValue,
		]
			// (pattern: string, input: object) -> object
			? IsEqual<InferredPatternValue, never> extends true
				? InferredInput
				: IsUnion<InferredPatternValue> extends true
					? never
					// each inferredInput
					: InferredInput extends any
						// remove type obviously extends with pattern
						? InferredInput extends InferredPatternValue
							? never
							// if inferredInput have fewer keys, un match then
							: IsEqual<
								Extract<keyof InferredInput, keyof InferredPatternValue>,
								keyof InferredPatternValue
							> extends false
								? InferredInput
								: (
									IsEqual<
										{
											[Prop in keyof InferredPatternValue]:
											ComplexUnMatchedValue<
												InferredInput[Adaptor<Prop, keyof InferredInput>],
												InferredPatternValue[Prop]
											>
										} extends infer InferredObjectArray extends object
											? InferredObjectArray[keyof InferredObjectArray]
											: never,
										never
									> extends true
										? never
										: (
											& {
												-readonly [Prop in keyof InferredPatternValue]: NeverCoalescing<
													Extract<
														ComplexUnMatchedValue<
															InferredInput[Adaptor<Prop, keyof InferredInput>],
															InferredPatternValue[Prop]
														>,
														any
													>,
													InferredInput[Adaptor<Prop, keyof InferredInput>]
												>
											}
											& Omit<InferredInput, keyof InferredPatternValue>
										) extends infer InferredObject extends object
											// {prop: string | undefined} -> {prop?: string | undefined}
											// (no perfect but most safety)
											? (
													& {
														[
														Prop in keyof InferredObject as
														undefined extends InferredObject[Prop]
															? Prop
															: never
														]?: InferredObject[Prop]
													}
													& {
														[
														Prop in keyof InferredObject as
														undefined extends InferredObject[Prop]
															? never
															: Prop
														]: InferredObject[Prop]
													}
											) extends infer InferredResult
												// priority to opaque type
												? IsEqual<
													RemoveReadonly<InferredResult>,
													RemoveReadonly<InferredInput>
												> extends true
													? InferredInput
													: SimplifyTopLevel<InferredResult>
												: never
											: never
								)
						: never
			: never
	);
