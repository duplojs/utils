import { createBuilder, createErrorKind, kindHeritage, type Builder, type FixDeepFunctionInfer, type IsEqual } from "@scripts/common";
import { type ComplexMatchedValue, type ComplexUnMatchedValue, type Pattern, type PatternValue } from "../types";
import { isMatch } from "../isMatch";

export interface BuilderMatcher {
	isMatch(value: unknown): boolean;
	theFunction(value: unknown): unknown;
}

export interface MatchBuilderDefinition {
	input: unknown;
	matchers: BuilderMatcher[];
}

declare const SymbolErrorMatchExhaustive: unique symbol;

export interface MatchBuilder<
	GenericValue extends unknown = never,
	GenericResult extends unknown = never,
> extends Builder<MatchBuilderDefinition> {
	with<
		const GenericPattern extends Pattern<GenericValue>,
		GenericOutput extends unknown,
	>(
		pattern: FixDeepFunctionInfer<
			Pattern<GenericValue>,
			GenericPattern
		>,
		theFunction: (
			value: ComplexMatchedValue<
				GenericValue,
				PatternValue<GenericPattern>
			>
		) => GenericOutput
	): MatchBuilder<
		ComplexUnMatchedValue<
			GenericValue,
			PatternValue<GenericPattern>
		>,
		GenericOutput | GenericResult
	>;

	when<
		GenericPredicatedInput extends GenericValue,
		GenericOutput extends unknown,
	>(
		predicate: (
			input: GenericValue
		) => input is GenericPredicatedInput,
		theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
	): MatchBuilder<
		Exclude<GenericValue, GenericPredicatedInput>,
		GenericOutput | GenericResult
	>;

	when<
		GenericOutput extends unknown,
	>(
		predicate: (
			input: GenericValue
		) => boolean,
		theFunction: (predicatedInput: GenericValue) => GenericOutput
	): MatchBuilder<
		GenericValue,
		GenericOutput | GenericResult
	>;

	whenNot<
		GenericPredicatedInput extends GenericValue,
		GenericOutput extends unknown,
	>(
		predicate: (
			input: GenericValue
		) => input is GenericPredicatedInput,
		theFunction: (predicatedInput: Exclude<GenericValue, GenericPredicatedInput>) => GenericOutput
	): MatchBuilder<
		Extract<GenericValue, GenericPredicatedInput>,
		GenericOutput | GenericResult
	>;

	whenNot<
		GenericOutput extends unknown,
	>(
		predicate: (
			input: GenericValue
		) => boolean,
		theFunction: (predicatedInput: GenericValue) => GenericOutput
	): MatchBuilder<
		GenericValue,
		GenericOutput | GenericResult
	>;

	exhaustive: IsEqual<GenericValue, never> extends true
		? () => GenericResult
		: {
			[SymbolErrorMatchExhaustive]: "Pattern are not exhaustive.";
			restValue: GenericValue;
		};

	otherwise<GenericOtherwiseResult extends unknown>(
		theFunction: (value: GenericValue) => GenericOtherwiseResult
	): GenericResult | GenericOtherwiseResult;
}

export class InvalidExhaustivePatternError extends kindHeritage(
	"invalid-exhaustive-pattern-error",
	createErrorKind("invalid-exhaustive-pattern-error"),
	Error,
) {
	public constructor(
		public input: unknown,
	) {
		super({}, ["Invalid exhaustive pattern. If typing is correct, report your situation on github."]);
	}
}

export const matchBuilder = createBuilder<
	MatchBuilder<unknown, unknown> & Pick<MatchBuilder<never, unknown>, "exhaustive">
>("@duplojs/utils/pattern/match");

matchBuilder.set(
	"with",
	({
		args: [pattern, theFunction],
		accumulator,
		next,
	}) => next({
		...accumulator,
		matchers: [
			...accumulator.matchers,
			{
				isMatch: isMatch(pattern),
				theFunction,
			},
		],
	}),
);

matchBuilder.set(
	"when",
	({
		args: [predicate, theFunction],
		accumulator,
		next,
	}) => next({
		...accumulator,
		matchers: [
			...accumulator.matchers,
			{
				isMatch: predicate,
				theFunction,
			},
		],
	}),
);

matchBuilder.set(
	"whenNot",
	({
		args: [predicate, theFunction],
		accumulator,
		next,
	}) => next({
		...accumulator,
		matchers: [
			...accumulator.matchers,
			{
				isMatch: (value) => !predicate(value),
				theFunction,
			},
		],
	}),
);

matchBuilder.set(
	"exhaustive",
	({
		accumulator: {
			input,
			matchers,
		},
	}) => {
		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let index = 0; index < matchers.length; index++) {
			if (matchers[index]!.isMatch(input)) {
				return matchers[index]!.theFunction(input);
			}
		}

		throw new InvalidExhaustivePatternError(input);
	},
);

matchBuilder.set(
	"otherwise",
	({
		args: [theFunction],
		accumulator: {
			input,
			matchers,
		},
	}) => {
		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let index = 0; index < matchers.length; index++) {
			if (matchers[index]!.isMatch(input)) {
				return matchers[index]!.theFunction(input);
			}
		}

		return theFunction(input);
	},
);
