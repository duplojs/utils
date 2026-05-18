import { unwrap, type AnyFunction, type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "@scripts/common";
import { isRight, type Right } from "../right";
import { isLeft } from "./is";
import { type Left } from "./create";

type Either = Right | Left;

/**
 * {@include either/whenIsLeftElse/index.md}
 */
export function whenIsLeftElse<
	const GenericInput extends unknown,
	const GenericOutput1 extends AnyValue | EscapeVoid,
	const GenericOutput2 extends AnyValue | EscapeVoid,
>(
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Left
			>
		>
	) => GenericOutput1,
	elseFunction: (
		value: (
			| Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
			| Exclude<GenericInput, Either>
		)
	) => GenericOutput2,
): (input: GenericInput) => (
	| BreakGenericLink<GenericOutput1>
	| BreakGenericLink<GenericOutput2>
);

export function whenIsLeftElse<
	const GenericInput extends unknown,
	const GenericOutput1 extends AnyValue | EscapeVoid,
	const GenericOutput2 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				Left
			>
		>
	) => GenericOutput1,
	elseFunction: (
		value: (
			| Extract<
				BreakGenericLink<GenericInput>,
				Right
			>
			| Exclude<GenericInput, Either>
		)
	) => GenericOutput2,
): (
	| BreakGenericLink<GenericOutput1>
	| BreakGenericLink<GenericOutput2>
);

export function whenIsLeftElse(
	...args: [unknown, AnyFunction, AnyFunction]
	| [AnyFunction, AnyFunction]
) {
	if (args.length === 2) {
		const [theFunction, elseFunction] = args;

		return (input: unknown) => whenIsLeftElse(
			input,
			theFunction,
			elseFunction,
		);
	}

	const [input, theFunction, elseFunction] = args;

	if (isLeft(input)) {
		return theFunction(unwrap(input));
	} else if (isRight(input)) {
		return elseFunction(input);
	} else {
		return elseFunction(input);
	}
}
