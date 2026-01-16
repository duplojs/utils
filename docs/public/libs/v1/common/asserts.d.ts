declare const AssertsError_base: new (params: {
    "@DuplojsUtilsError/asserts-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"asserts-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/asserts-error", unknown>, unknown>;
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
export {};
