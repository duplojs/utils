import { type Kind, type IsEqual, type Or, type GetKindValue } from "../common";
import { type Entity } from "./entity";
declare const flagHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag-handler", unknown>>;
export declare const flagKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag", Record<string, unknown>>>;
export interface FlagHandler<GenericEntity extends Entity = Entity, GenericName extends string = string, GenericValue extends unknown = never> extends Kind<typeof flagHandlerKind.definition> {
    /**
     * The flag name stored as the key on the entity.
     * 
     */
    readonly name: GenericName;
    /**
     * Adds the flag to an entity and returns the enriched entity.
     * 
     * ```ts
     * 	export function isMajor(entity: Entity) {
     * 		if (C.greaterThan(entity.age, 18)) {
     * 			return E.success(
     * 				MajorFlag.append(entity, entity.age),
     * 			);
     * ```
     * 
     */
    append<GenericInputEntity extends GenericEntity, GenericInputValue extends GenericValue>(entity: GenericInputEntity, ...args: IsEqual<GenericValue, never> extends true ? [] : [GenericInputValue]): (GenericInputEntity & Flag<GenericName, GenericInputValue>);
    /**
     * Retrieves the value carried by the flag.
     * 
     * ```ts
     * const flagged = User.MajorFlag.append(user, user.age);
     * const value = User.MajorFlag.getValue(flagged);
     * ```
     * 
     */
    getValue<GenericInputEntity extends GenericEntity & Flag<GenericName, GenericValue>>(entity: GenericInputEntity): GetKindValue<typeof flagKind, GenericInputEntity>[GenericName];
    has<GenericInputEntity extends GenericEntity>(entity: GenericInputEntity): Extract<GenericInputEntity, Flag<GenericName, any>>;
}
export interface Flag<GenericName extends string = string, GenericValue extends unknown = never> extends Kind<typeof flagKind.definition, Record<GenericName, GenericValue>> {
}
/**
 * Creates a flag handler that can attach typed metadata to an entity.
 * 
 * **Supported call styles:**
 * - Classic: `createFlag(name)` -> returns a handler
 * 
 * Flags let you mark an entity after creation without changing its shape. The mark can optionally carry a value.
 * 
 * ```ts
 * namespace User {
 * 	export const Name = C.createNewType("UserName", DP.string());
 * 	export type Name = C.GetNewType<typeof Name>;
 * 
 * 	export const Age = C.createNewType("UserAge", DP.number(), C.Positive);
 * 	export type Age = C.GetNewType<typeof Age>;
 * 
 * 	export const Entity = C.createEntity("UserEntity", () => ({
 * 		name: Name,
 * 		age: Age,
 * 	}));
 * 	export type Entity = C.GetEntity<typeof Entity>;
 * 
 * 	export const MajorFlag = C.createFlag<
 * 		Entity, // mandatory
 * 		"majorUser", // mandatory
 * 		Age // optional
 * 	>("majorUser");
 * 	export type MajorFlag = C.GetFlag<typeof MajorFlag>;
 * 
 * 	export function isMajor(entity: Entity) {
 * 		if (C.greaterThan(entity.age, 18)) {
 * 			return E.success(
 * 				MajorFlag.append(entity, entity.age),
 * 			);
 * 		}
 * 		return E.left("not-major");
 * 	}
 * }
 * 
 * function drinkAlcohol(userEntity: User.Entity & User.MajorFlag) {
 * 	// ...
 * 	return E.right("not-thirsty-anymore");
 * }
 * 
 * const user = User.Entity.new({
 * 	name: User.Name.createOrThrow("Julie"),
 * 	age: User.Age.createOrThrow(35),
 * });
 * 
 * const result = pipe(
 * 	user,
 * 	User.isMajor,
 * 	E.whenIsRight(
 * 		drinkAlcohol,
 * 	),
 * );
 * // E.Left<"not-major", undefined> | E.Right<"not-thirsty-anymore", undefined>
 * 
 * const flagged = User.MajorFlag.append(user, user.age);
 * const value = User.MajorFlag.getValue(flagged);
 * 
 * ```
 * 
 * @remarks
 * A flag lets you add a marker on an entity after its creation. Its purpose is to indicate that a verification has taken place, or that a particular operation has been performed, without modifying the structure of the entity. If the flag carries a value, `append` requires it and `getValue` retrieves it.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/flag
 * 
 * @namespace C
 * 
 */
export declare function createFlag<GenericEntity extends Entity = never, GenericName extends string = never, GenericValue extends unknown = never>(name: Or<[
    IsEqual<GenericEntity, never>,
    IsEqual<GenericName, never>
]> extends true ? never : NoInfer<GenericName>): FlagHandler<GenericEntity, GenericName, GenericValue>;
export type GetFlag<GenericHandler extends FlagHandler<any, any, any>> = Extract<Flag<GenericHandler["name"], ReturnType<GenericHandler["getValue"]>>, any>;
export {};
