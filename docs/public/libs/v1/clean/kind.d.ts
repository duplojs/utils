/**
 * Creates a kind namespace scoped to the Clean domain.
 * 
 * **Supported call styles:**
 * - Classic: `createCleanKind(name)` -> returns a kind handler
 * 
 * Use it to define Clean-specific kinds so domain tags do not collide with other namespaces.
 * 
 * ```ts
 * const customKind = C.createCleanKind("my-kind");
 * 
 * const holder = customKind.setTo({
 * 	value: 123,
 * });
 * 
 * customKind.has(holder); // true
 * 
 * const tagged = customKind.addTo(
 * 	{ name: "Ada" },
 * 	"my-kind",
 * );
 * customKind.has(tagged); // true
 * 
 * const secondKind = C.createCleanKind("other-kind");
 * secondKind.has(holder); // false
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/createCleanKind
 * 
 * @namespace C
 * 
 */
export declare const createCleanKind: <GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName & import("../string").ForbiddenString<GenericName, "@" | "/">) => import("../common").KindHandler<import("../common").KindDefinition<`@DuplojsUtilsClean/${GenericName}`, GenericKindValue>>;
