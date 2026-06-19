import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap } from "../../../common";
import { type GetPropsWithValueExtends } from "../../../object";
import { type OnlyLiteralPrimitiveNumber } from "../../../clean/types/onlyLiteral";
import { type Primitive } from "../base";
type ComputeMatcher<GenericInput extends Primitive<number>> = {
    [Prop in Unwrap<GenericInput>]?: (value: GenericInput & Primitive<Prop>) => unknown;
};
type ForbiddenMoreKey<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, number>}" is forbidden.`> : never;
type HandledKeys<GenericMatcher extends object> = Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, number>;
type OtherwiseValue<GenericInput extends Primitive<number>, GenericMatcher extends object> = Extract<GenericInput & Primitive<Exclude<Unwrap<GenericInput>, HandledKeys<GenericMatcher>>>, any>;
/** Performs partial pattern matching on a Clean number primitive and delegates unhandled values to an `otherwise` callback.
/** 
/** **Supported call styles:**
/** - Classic: `matchWithNumberOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
/** - Curried: `matchWithNumberOtherwise(matcher, otherwise)` -> returns a function waiting for the primitive
/** 
/** Raw number values are used as matcher keys. Handlers receive the original primitive narrowed to their key, and `otherwise` receives the same original primitive narrowed to all remaining values.
/** 
/** ```ts
/** const status = C.Number.createOrThrow(
/** 	200 as 200 | 404 | 500,
/** );
/** 
/** C.matchWithNumberOtherwise(
/** 	status,
/** 	{
/** 		200: () => "success",
/** 	},
/** 	() => "error",
/** ); // string
/** 
/** pipe(
/** 	status,
/** 	C.matchWithNumberOtherwise(
/** 		{
/** 			404: () => "missing",
/** 		},
/** 		(value) => value,
/** 	),
/** ); // "missing" | C.Primitive<200 | 500>
/** 
/** const result = C.matchWithNumberOtherwise(
/** 	status,
/** 	{
/** 		200: (value) => value,
/** 		404: undefined,
/** 	},
/** 	(value) => value,
/** ); // C.Primitive<200 | 404 | 500>
/** ```
/** 
/** @remarks Constraints and `NewType` metadata remain attached to the primitive passed to every callback.
/** 
/** @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumberOtherwise
/** @see [`C.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumber)
/** 
/** @namespace C
/**  */
export declare function matchWithNumberOtherwise<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(matcher: FixDeepFunctionInfer<ComputeMatcher<NoInfer<GenericInput>>, GenericMatcher> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>, otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput): (input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>) => (ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export declare function matchWithNumberOtherwise<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>, GenericOutput>(input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>, otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput): (ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>> | GenericOutput);
export {};
