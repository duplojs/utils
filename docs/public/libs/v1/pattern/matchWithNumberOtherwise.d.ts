import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type OnlyLiteralNumber } from "../common";
import { type GetPropsWithValueExtends } from "../object";
type ComputeMatcher<GenericInput extends number> = {
    [Prop in GenericInput]?: (value: Prop) => unknown;
};
type ForbiddenMoreKey<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, GenericInput> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, number>}" is forbidden.`> : never;
type HandledKeys<GenericMatcher extends object> = Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, number>;
/** Performs partial pattern matching on a number literal union and delegates unhandled values to an `otherwise` callback.
/** 
/** **Supported call styles:**
/** - Classic: `matchWithNumberOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
/** - Curried: `matchWithNumberOtherwise(matcher, otherwise)` -> returns a function waiting for the input
/** 
/** Matcher keys must belong to the input union, but they do not need to cover it exhaustively. Each handler receives its matching literal, while `otherwise` receives the precise union of unhandled literals.
/** 
/** ```ts
/** const status = 200 as 200 | 404 | 500;
/** 
/** P.matchWithNumberOtherwise(
/** 	status,
/** 	{
/** 		200: () => "success",
/** 	},
/** 	(value) => `unhandled: ${value}`,
/** ); // string
/** 
/** pipe(
/** 	status,
/** 	P.matchWithNumberOtherwise(
/** 		{
/** 			404: () => "missing",
/** 		},
/** 		(value) => value,
/** 	),
/** ); // "missing" | 200 | 500
/** 
/** const message = P.matchWithNumberOtherwise(
/** 	status,
/** 	{
/** 		200: (value) => `handled: ${value}`,
/** 		404: undefined,
/** 	},
/** 	(value) => `fallback: ${value}`,
/** ); // string
/** ```
/** 
/** @remarks Non-literal `number` inputs are rejected because their remaining cases cannot be represented as a finite literal union.
/** 
/** @see https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumberOtherwise
/** @see [`P.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber)
/** 
/** @namespace P
/**  */
export declare function matchWithNumberOtherwise<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(matcher: GenericMatcher & ComputeMatcher<NoInfer<GenericInput>> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>, otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput): (input: GenericInput & OnlyLiteralNumber<GenericInput>) => (ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export declare function matchWithNumberOtherwise<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(input: GenericInput & OnlyLiteralNumber<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>, otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput): (ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export {};
