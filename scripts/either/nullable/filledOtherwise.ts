import { type AnyFunction, type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap, unwrap } from "@scripts/common";
import { type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";
import { nullable } from "./create";
import { type NullableFilled, isNullableFilled } from "./filled";

type Either = Right | Left;
type ToEither<GenericValue extends unknown> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullable<GenericValue>>;
type MatchingInput<GenericInput> = GenericInput extends unknown
	? [ToEither<GenericInput>] extends [NullableFilled] ? GenericInput : never
	: never;
type OtherwiseInput<GenericInput> = Exclude<
	BreakGenericLink<GenericInput>,
	MatchingInput<BreakGenericLink<GenericInput>>
>;

/**
 * {@include either/whenIsNullableFilledOtherwise/index.md}
 */
export function whenIsNullableFilledOtherwise<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
	const GenericOtherwiseOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>>
	) => GenericOutput,
	otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput,
): (input: GenericInput) => BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export function whenIsNullableFilledOtherwise<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
	const GenericOtherwiseOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>>
	) => GenericOutput,
	otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput,
): BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export function whenIsNullableFilledOtherwise(
	...args: [unknown, AnyFunction, AnyFunction] | [AnyFunction, AnyFunction]
): any {
	if (args.length === 2) {
		const [theFunction, otherwiseFunction] = args;
		return (input: unknown) => whenIsNullableFilledOtherwise(input, theFunction, otherwiseFunction);
	}

	const [input, theFunction, otherwiseFunction] = args;
	const either = isRight(input) || isLeft(input) ? input : nullable(input);

	return isNullableFilled(either)
		? theFunction(unwrap(either))
		: otherwiseFunction(input);
}
