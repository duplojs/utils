declare const AssertsError_base: new (params: {
    "@DuplojsUtilsError/asserts-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/asserts-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"asserts-error", unknown>, unknown>;
export declare class AssertsError extends AssertsError_base {
    value: unknown;
    constructor(value: unknown);
}
/**
 * The asserts() function throws when a predicate fails and narrows the input type when it passes.
 * 
 * **Supported call styles:**
 * - Classic: `asserts(input, predicate)` → narrows the input type or throws
 * 
 * It throws an `AssertsError` with the failing input value.
 * 
 * ```ts
 * const input: string | number = "demo";
 * asserts(input, isType("string"));
 * 
 * const payload: { id?: number } = { id: 1 };
 * asserts(payload.id, isType("undefined"));
 * 
 * try {
 * 	asserts(42 as string | number, isType("string"));
 * } catch (error) {
 * 	if (error instanceof AssertsError) {
 * 		const failedValue = error.value;
 * 	}
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/asserts
 * 
 */
export declare function asserts<GenericInput extends unknown, GenericPredicate extends GenericInput>(input: GenericInput, predicate: (input: GenericInput) => input is GenericPredicate): asserts input is GenericPredicate;
/**
 * The forwardAsserts() function throws when a predicate fails and returns the validated input. It supports classic and curried forms, with type-guard and boolean predicates.
 * 
 * **Supported call styles:**
 * - Classic: `forwardAsserts(input, predicate)` → returns the narrowed input or throws
 * - Curried: `forwardAsserts(predicate)(input)` → returns the validated input or throws
 * 
 * It is useful when you want both runtime validation and a returned value you can keep using directly, especially inside `pipe()`. With a type guard predicate, the return type is narrowed. With a boolean predicate, the original input type is preserved. It throws an `AssertsError` with the failing input value.
 * 
 * ```ts
 * const input = "demo" as string | number;
 * const result = forwardAsserts(input, isType("string"));
 * 
 * const pipedResult = pipe(
 * 	"admin" as string | number,
 * 	forwardAsserts(isType("string")),
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/forwardAsserts
 * 
 */
export declare function forwardAsserts<GenericInput extends unknown, GenericPredicate extends GenericInput>(predicate: (input: GenericInput) => input is GenericPredicate): (input: GenericInput) => GenericPredicate;
export declare function forwardAsserts<GenericInput extends unknown>(predicate: (input: GenericInput) => boolean): (input: GenericInput) => GenericInput;
export declare function forwardAsserts<GenericInput extends unknown, GenericPredicate extends GenericInput>(input: GenericInput, predicate: (input: GenericInput) => input is GenericPredicate): GenericPredicate;
export declare function forwardAsserts<GenericInput extends unknown>(input: GenericInput, predicate: (input: GenericInput) => boolean): GenericInput;
export {};
