import { type AnyFunction, type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap, unwrap } from "@scripts/common";
import { type Left, isLeft } from "../left";
import { type Right, isRight } from "../right";
import { nullable } from "./create";
import { type NullableEmpty, isNullableEmpty } from "./empty";

type Either = Right | Left;
type ToEither<GenericValue extends unknown> = GenericValue extends Either
	? GenericValue
	: ReturnType<typeof nullable<GenericValue>>;
type MatchingInput<GenericInput> = GenericInput extends unknown
	? [ToEither<GenericInput>] extends [NullableEmpty] ? GenericInput : never
	: never;
type OtherwiseInput<GenericInput> = Exclude<
	BreakGenericLink<GenericInput>,
	MatchingInput<BreakGenericLink<GenericInput>>
>;

/**
 * {@include either/whenIsNullableEmptyOtherwise/index.md}
 */
export function whenIsNullableEmptyOtherwise<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
	const GenericOtherwiseOutput extends AnyValue | EscapeVoid,
>(
	theFunction: (
		eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>
	) => GenericOutput,
	otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput,
): (input: GenericInput) => BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export function whenIsNullableEmptyOtherwise<
	const GenericInput extends unknown,
	const GenericOutput extends AnyValue | EscapeVoid,
	const GenericOtherwiseOutput extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>
	) => GenericOutput,
	otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput,
): BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export function whenIsNullableEmptyOtherwise(
	...args: [unknown, AnyFunction, AnyFunction] | [AnyFunction, AnyFunction]
): any {
	if (args.length === 2) {
		const [theFunction, otherwiseFunction] = args;
		return (input: unknown) => whenIsNullableEmptyOtherwise(input, theFunction, otherwiseFunction);
	}

	const [input, theFunction, otherwiseFunction] = args;
	const either = isRight(input) || isLeft(input) ? input : nullable(input);

	return isNullableEmpty(either)
		? theFunction(unwrap(either))
		: otherwiseFunction(input);
}
