import { type GetPropsWithValueExtends } from "../object";
import { type IsEqual, type Adaptor, type AnyFunction, type ObjectKey } from "./types";
import { type Kind, type GetKindValue } from "./kind";
import { type WrappedValue } from "./wrapValue";
declare const SymbolBuilderStore: unique symbol;
declare module "./globalStore" {
    interface GlobalStore {
        [SymbolBuilderStore]: Record<string, Record<string, Parameters<BuilderHandler["set"]>[1]>>;
    }
}
export declare const builderKind: import("./kind").KindHandler<import("./kind").KindDefinition<"@DuplojsUtilsBuilder/base", object>>;
export interface Builder<GenericAccumulator extends object = object, GenericIdentifier extends ObjectKey = never> extends Kind<typeof builderKind.definition, GenericAccumulator> {
}
declare const builderNextKind: import("./kind").KindHandler<import("./kind").KindDefinition<"@DuplojsUtilsBuilder/next", unknown>>;
interface BuilderNext<GenericValue extends object = object> extends WrappedValue<GenericValue>, Kind<typeof builderNextKind.definition> {
}
export interface BuilderHandlerSetFunctionParams<GenericArgs extends unknown[], GenericValue extends object> {
    args: GenericArgs;
    accumulator: GenericValue;
    next(newAccumulator: GenericValue): BuilderNext<GenericValue>;
}
export interface BuilderHandler<GenericBuilder extends Builder = Builder> {
    set<GenericMethodName extends GetPropsWithValueExtends<GenericBuilder, AnyFunction>, GenericMethod extends Adaptor<GenericBuilder[GenericMethodName], AnyFunction>>(method: GenericMethodName, theFunction: (params: BuilderHandlerSetFunctionParams<Parameters<GenericMethod>, GetKindValue<typeof builderKind, GenericBuilder>>) => IsEqual<keyof ReturnType<GenericMethod>, keyof GenericBuilder> extends true ? BuilderNext<GetKindValue<typeof builderKind, GenericBuilder>> : ReturnType<GenericMethod>): BuilderHandler<GenericBuilder>;
    use<GenericCurrentBuilder extends GenericBuilder>(accumulator: GetKindValue<typeof builderKind, GenericBuilder>): GenericCurrentBuilder;
}
declare const MissingBuilderMethodsError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown> & Kind<import("./kind").KindDefinition<"missing-builder-methods-error", unknown>, unknown>;
export declare class MissingBuilderMethodsError extends MissingBuilderMethodsError_base {
    method: string;
    constructor(method: string);
}
/**
 * The createBuilder() function lets you create a builder whose methods can be defined after declaration (and even redefined) while keeping strict typing.
 * 
 * Signature: `createBuilder(builderName)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * interface UrlAccumulator {
 * 	base: string;
 * 	path: string[];
 * 	query: Record<string, string>;
 * }
 * 
 * interface UrlBuilder extends Builder<UrlAccumulator> {
 * 	path(segment: string): UrlBuilder;
 * 	query(key: string, value: string): UrlBuilder;
 * 	build(): string;
 * }
 * 
 * const urlBuilderHandler = createBuilder<UrlBuilder>("urlBuilder");
 * 
 * urlBuilderHandler
 * 	.set("path", ({ args, accumulator, next }) => {
 * 		const [segment] = args;
 * 		return next({
 * 			...accumulator,
 * 			path: [...accumulator.path, segment],
 * 		});
 * 	})
 * 	.set("query", ({ args, accumulator, next }) => {
 * 		const [key, value] = args;
 * 		return next({
 * 			...accumulator,
 * 			query: {
 * 				...accumulator.query,
 * 				[key]: value,
 * 			},
 * 		});
 * 	})
 * 	.set("build", ({ accumulator }) => pipe(
 * 		accumulator,
 * 		DObject.to({
 * 			base: DObject.getProperty("base"),
 * 			path: ({ path }) => DArray.join(path, "/"),
 * 			query: ({ query }) => DObject.entries(query),
 * 		}),
 * 		({ base, path, query }) => {
 * 			const url = new URL(base);
 * 			url.pathname = path;
 * 			DArray.map(
 * 				query,
 * 				([key, value]) => void url.searchParams.set(key, value),
 * 			);
 * 			return url.toString();
 * 		},
 * 	));
 * 
 * // "https://example.com/users?page=1"
 * const url = urlBuilderHandler
 * 	.use({
 * 		base: "https://example.com",
 * 		path: [],
 * 		query: {},
 * 	})
 * 	.path("users")
 * 	.query("page", "1")
 * 	.build();
 * 
 * // Override (le dernier set gagne)
 * urlBuilderHandler.set("build", ({ accumulator }) => `${accumulator.base}/${accumulator.path.join("/")}`);
 * 
 * // "https://example.com/docs"
 * const overridden = urlBuilderHandler
 * 	.use({
 * 		base: "https://example.com",
 * 		path: [],
 * 		query: {},
 * 	})
 * 	.path("docs")
 * 	.build();
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/builder
 * 
 */
export declare function createBuilder<GenericBuilder extends Builder>(builderName: string): BuilderHandler<GenericBuilder>;
export {};
