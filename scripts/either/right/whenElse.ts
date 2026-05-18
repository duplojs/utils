import { unwrap, type AnyFunction, type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "@scripts/common";
import { type Right } from "./create";
import { isRight } from "./is";
import { isLeft, type Left } from "../left";

type Either = Right | Left;

/**
 * {@include either/whenIsRightElse/index.md}
 */
export function whenIsRightElse<
	const GenericInput extends unknown,
	const GenericOutput1 extends AnyValue | EscapeVoid,
	const GenericOutput2 extends AnyValue | EscapeVoid,
>(
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
		>
	) => GenericOutput1,
	elseFunction: (
		value: (
			| Extract<
				BreakGenericLink<GenericInput>,
				Left
			>
			| Exclude<GenericInput, Either>
		)
	) => GenericOutput2,
): (input: GenericInput) => (
	| BreakGenericLink<GenericOutput1>
	| BreakGenericLink<GenericOutput2>
);

export function whenIsRightElse<
	const GenericInput extends unknown,
	const GenericOutput1 extends AnyValue | EscapeVoid,
	const GenericOutput2 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
		>
	) => GenericOutput1,
	elseFunction: (
		value: (
			| Extract<
				BreakGenericLink<GenericInput>,
				Left
			>
			| Exclude<GenericInput, Either>
		)
	) => GenericOutput2,
): (
	| BreakGenericLink<GenericOutput1>
	| BreakGenericLink<GenericOutput2>
);

export function whenIsRightElse(
	...args: [unknown, AnyFunction, AnyFunction]
	| [AnyFunction, AnyFunction]
) {
	if (args.length === 2) {
		const [theFunction, elseFunction] = args;

		return (input: unknown) => whenIsRightElse(
			input,
			theFunction,
			elseFunction,
		);
	}

	const [input, theFunction, elseFunction] = args;

	if (isRight(input)) {
		return theFunction(unwrap(input));
	} else if (isLeft(input)) {
		return elseFunction(input);
	} else {
		return elseFunction(input);
	}
}
