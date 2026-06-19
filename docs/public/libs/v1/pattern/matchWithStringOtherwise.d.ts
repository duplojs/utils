import { type AnyFunction, type FixDeepFunctionInfer, type OnlyLiteralString } from "../common";
import { type ForbiddenKey, type GetPropsWithValueExtends } from "../object";
type ComputeMatcher<GenericInput extends string> = {
    [Prop in GenericInput]?: (value: Prop) => unknown;
};
type ForbiddenMoreKey<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>> = ForbiddenKey<GenericMatcher, Extract<Exclude<keyof GenericMatcher, GenericInput>, string>>;
type HandledKeys<GenericMatcher extends object> = Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, string>;
/** Performs partial pattern matching on a string literal union and delegates unhandled values to an `otherwise` callback.
/** 
/** **Supported call styles:**
/** - Classic: `matchWithStringOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
/** - Curried: `matchWithStringOtherwise(matcher, otherwise)` -> returns a function waiting for the input
/** 
/** Matcher keys must belong to the input union, but they do not need to cover it exhaustively. Each handler receives its matching literal, while `otherwise` receives the precise union of unhandled literals.
/** 
/** ```ts
/** const status = "success" as "success" | "failure" | "pending";
/** 
/** P.matchWithStringOtherwise(
/** 	status,
/** 	{
/** 		success: () => 200,
/** 	},
/** 	(value) => `unhandled: ${value}`,
/** ); // number | string
/** 
/** pipe(
/** 	status,
/** 	P.matchWithStringOtherwise(
/** 		{
/** 			failure: () => "retry",
/** 		},
/** 		(value) => value,
/** 	),
/** ); // "retry" | "success" | "pending"
/** 
/** const message = P.matchWithStringOtherwise(
/** 	status,
/** 	{
/** 		success: (value) => `handled: ${value}`,
/** 		failure: undefined,
/** 	},
/** 	(value) => `fallback: ${value}`,
/** ); // string
/** ```
/** 
/** @remarks Non-literal `string` inputs are rejected because their remaining cases cannot be represented as a finite literal union.
/** 
/** @see https://utils.duplojs.dev/en/v1/api/pattern/matchWithStringOtherwise
/** @see [`P.matchWithString`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithString)
/** 
/** @namespace P
/**  */
export declare function matchWithStringOtherwise<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(matcher: GenericMatcher & ComputeMatcher<NoInfer<GenericInput>> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>, otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput): (input: GenericInput & OnlyLiteralString<GenericInput>) => (ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export declare function matchWithStringOtherwise<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(input: GenericInput & OnlyLiteralString<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>, otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput): (ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export {};
