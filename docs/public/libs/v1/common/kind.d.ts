import { type ForbiddenString } from "../string";
import { type Or, type IsEqual, type BreakGenericLink, type Adaptor, type UnionToIntersection, type AnyConstructor, type And } from "./types";
import { type GetPropsWithValue, type PartialKeys } from "../object";
export interface KindHandler<GenericKindDefinition extends KindDefinition = KindDefinition> {
    definition: GenericKindDefinition;
    runTimeKey: string;
    has<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Kind<GenericKindDefinition, GenericKindDefinition["value"]>>;
    addTo<GenericInput extends {}, GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"]>(...args: Or<[
        IsEqual<GenericValue, never>,
        IsEqual<GenericValue, unknown>,
        IsEqual<GenericValue, any>
    ]> extends true ? [input: GenericInput, value?: GenericValue] : [input: GenericInput, value: GenericValue]): Kind<GenericKindDefinition, GenericValue> & BreakGenericLink<GenericInput>;
    /**
     * @deprecated This method make mutation.
     */
    setTo<GenericInput extends {}, GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"]>(...args: Or<[
        IsEqual<GenericValue, never>,
        IsEqual<GenericValue, unknown>,
        IsEqual<GenericValue, any>
    ]> extends true ? [input: GenericInput, value?: GenericValue] : [input: GenericInput, value: GenericValue]): Kind<GenericKindDefinition, GenericValue> & BreakGenericLink<GenericInput>;
    getValue<GenericKind extends Kind<GenericKindDefinition, GenericKindDefinition["value"]>>(input: GenericKind): GenericKind[SymbolKind][GenericKindDefinition["name"]];
}
export interface KindDefinition<GenericName extends string = string, GenericValue extends unknown = unknown> {
    name: GenericName;
    value: GenericValue;
}
declare const SymbolKind: unique symbol;
type SymbolKind = typeof SymbolKind;
export interface Kind<GenericKindDefinition extends KindDefinition, GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"]> {
    [SymbolKind]: {
        [Prop in GenericKindDefinition["name"]]: GenericValue;
    };
}
export type RemoveKind<GenericObject extends Kind<any>> = Omit<GenericObject, SymbolKind>;
export type GetKindValue<GenericKindHandler extends KindHandler, GenericObject extends Kind<any>> = GenericObject[SymbolKind][GenericKindHandler["definition"]["name"]];
export type GetKindHandler<GenericObject extends Kind<any>> = {
    [Prop in keyof GenericObject[SymbolKind]]: KindHandler<KindDefinition<Adaptor<Prop, string>, GenericObject[SymbolKind][Prop]>>;
}[keyof GenericObject[SymbolKind]];
export interface GetKind<GenericObject extends Kind<any>> {
    [SymbolKind]: GenericObject[SymbolKind];
}
export declare const keyKindPrefix = "@duplojs/utils/kind/";
type ForbiddenKindCharacters<GenericValue extends string> = ForbiddenString<GenericValue, "@" | "/">;
/**
 * Kinds are a discrimination (type narrowing) mechanism based on adding a marker to an object, but with a few constraints we wanted in our projects:
 * 
 * Signature: `createKind(name)` and `createKindNamespace(namespace)` → returns a value
 * 
 * ```ts
 * const userKind = createKind<"user", { id: string }>("user");
 * 
 * interface User extends Kind<typeof userKind.definition> {
 * 	name: string;
 * }
 * 
 * const User = {
 * 	new(params: {
 * 		id: string;
 * 		name: string;
 * 	}): User {
 * 		return userKind.addTo(
 * 			{ name: params.name },
 * 			{ id: params.id },
 * 		);
 * 	},
 * 	is(input: unknown): input is User {
 * 		return userKind.has(input);
 * 	},
 * };
 * 
 * const user = User.new({
 * 	id: "u_1",
 * 	name: "Ada",
 * });
 * 
 * if (User.is(user)) {
 * 	const userId = userKind.getValue(user).id;
 * }
 * 
 * const received: unknown = JSON.parse(JSON.stringify(user));
 * if (User.is(received)) {
 * 	const userId = userKind.getValue(received).id;
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/kind
 * 
 */
export declare function createKind<GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName & ForbiddenKindCharacters<GenericName>): KindHandler<KindDefinition<GenericName, GenericKindValue>>;
export interface ReservedKindNamespace {
    DuplojsUtilsEither: true;
    DuplojsUtilsDataParser: true;
    DuplojsUtilsBuilder: true;
    DuplojsUtilsError: true;
    DuplojsUtilsClean: true;
    DuplojsUtilsDate: true;
}
type ForbiddenKindNamespace<GenericValue extends string> = (ForbiddenKindCharacters<GenericValue> & ForbiddenString<GenericValue, GetPropsWithValue<ReservedKindNamespace, true>>);
/**
 * Kinds are a discrimination (type narrowing) mechanism based on adding a marker to an object, but with a few constraints we wanted in our projects:
 * 
 * Signature: `createKind(name)` and `createKindNamespace(namespace)` → returns a value
 * 
 * ```ts
 * const userKind = createKind<"user", { id: string }>("user");
 * 
 * interface User extends Kind<typeof userKind.definition> {
 * 	name: string;
 * }
 * 
 * const User = {
 * 	new(params: {
 * 		id: string;
 * 		name: string;
 * 	}): User {
 * 		return userKind.addTo(
 * 			{ name: params.name },
 * 			{ id: params.id },
 * 		);
 * 	},
 * 	is(input: unknown): input is User {
 * 		return userKind.has(input);
 * 	},
 * };
 * 
 * const user = User.new({
 * 	id: "u_1",
 * 	name: "Ada",
 * });
 * 
 * if (User.is(user)) {
 * 	const userId = userKind.getValue(user).id;
 * }
 * 
 * const received: unknown = JSON.parse(JSON.stringify(user));
 * if (User.is(received)) {
 * 	const userId = userKind.getValue(received).id;
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/kind
 * 
 */
export declare function createKindNamespace<GenericNamespace extends string>(namespace: GenericNamespace & ForbiddenKindNamespace<GenericNamespace>): <GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName & ForbiddenKindCharacters<GenericName>) => KindHandler<KindDefinition<`@${GenericNamespace}/${GenericName}`, GenericKindValue>>;
export type KindHeritageConstructorParams<GenericKindHandler extends KindHandler> = {
    [KindHandler in GenericKindHandler as KindHandler["definition"]["name"]]: KindHandler["definition"]["value"];
} extends infer InferredResult extends object ? PartialKeys<InferredResult, GetPropsWithValue<InferredResult, unknown>> : never;
export declare function kindHeritage<GenericUniqueName extends string, GenericKindHandler extends KindHandler, GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>>(uniqueName: GenericUniqueName & ForbiddenKindCharacters<GenericUniqueName>, kind: GenericKindHandler | GenericKindHandler[], parent?: GenericParent): new (...args: And<[IsEqual<GenericKindHandler extends KindHandler ? IsEqual<GenericKindHandler["definition"]["value"], unknown> : never, true>, IsEqual<InstanceType<GenericParent>, never>]> extends true ? [params?: KindHeritageConstructorParams<GenericKindHandler>] : [params: KindHeritageConstructorParams<GenericKindHandler>, ...parentArgs: IsEqual<ConstructorParameters<GenericParent>, unknown[]> extends true ? [parentParams?: readonly [...ConstructorParameters<GenericParent>]] : [parentParams: readonly [...ConstructorParameters<GenericParent>]]]) => UnionToIntersection<(GenericKindHandler extends KindHandler ? Kind<GenericKindHandler["definition"]> : never) | Kind<KindDefinition<GenericUniqueName, unknown>> | InstanceType<GenericParent>>;
export declare function isRuntimeKind(value: string): boolean;
export {};
