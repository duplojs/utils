import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap } from "../../../common";
import { type GetPropsWithValueExtends } from "../../../object";
import { type OnlyLiteralPrimitiveString } from "../../../clean/types/onlyLiteral";
import { type Primitive } from "../base";
type ComputeMatcher<GenericInput extends Primitive<string>> = {
    [Prop in Unwrap<GenericInput>]?: (value: GenericInput & Primitive<Prop>) => unknown;
};
type ForbiddenMoreKey<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, string>}" is forbidden.`> : never;
type HandledKeys<GenericMatcher extends object> = Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, string>;
type OtherwiseValue<GenericInput extends Primitive<string>, GenericMatcher extends object> = Extract<GenericInput & Primitive<Exclude<Unwrap<GenericInput>, HandledKeys<GenericMatcher>>>, any>;
/** Performs partial pattern matching on a Clean string primitive and delegates unhandled values to an `otherwise` callback.
/** 
/** **Supported call styles:**
/** - Classic: `matchWithStringOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
/** - Curried: `matchWithStringOtherwise(matcher, otherwise)` -> returns a function waiting for the primitive
/** 
/** Raw string values are used as matcher keys. Handlers receive the original primitive narrowed to their key, and `otherwise` receives the same original primitive narrowed to all remaining values.
/** 
/** ```ts
/** const status = C.String.createOrThrow(
/** 	"success" as "success" | "failure" | "pending",
/** );
/** 
/** C.matchWithStringOtherwise(
/** 	status,
/** 	{
/** 		success: () => 200,
/** 	},
/** 	() => 500,
/** ); // number
/** 
/** pipe(
/** 	status,
/** 	C.matchWithStringOtherwise(
/** 		{
/** 			failure: () => "retry",
/** 		},
/** 		(value) => value,
/** 	),
/** ); // "retry" | C.Primitive<"success" | "pending">
/** 
/** const result = C.matchWithStringOtherwise(
/** 	status,
/** 	{
/** 		success: (value) => value,
/** 		failure: undefined,
/** 	},
/** 	(value) => value,
/** ); // C.Primitive<"success" | "failure" | "pending">
/** ```
/** 
/** @remarks Constraints and `NewType` metadata remain attached to the primitive passed to every callback.
/** 
/** @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithStringOtherwise
/** @see [`C.matchWithString`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithString)
/** 
/** @namespace C
/**  */
export declare function matchWithStringOtherwise<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(matcher: FixDeepFunctionInfer<ComputeMatcher<NoInfer<GenericInput>>, GenericMatcher> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>, otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput): (input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>) => (ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export declare function matchWithStringOtherwise<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>, otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput): (ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export {};
