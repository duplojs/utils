import { type Kind, type IsEqual, type Or, type GetKindValue } from "../common";
import { type Entity } from "./entity";
declare const flagHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag-handler", unknown>>;
export declare const flagKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag", Record<string, unknown>>>;
export interface FlagHandler<GenericEntity extends Entity = Entity, GenericName extends string = string, GenericValue extends Record<string, unknown> = never> extends Kind<typeof flagHandlerKind.definition> {
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
     * 				MajorFlag.append(entity, { age: entity.age }),
     * 			);
     * ```
     * 
     */
    append<GenericInputEntity extends GenericEntity, const GenericInputValue extends GenericValue>(...args: IsEqual<GenericValue, never> extends true ? [] : [GenericInputValue]): (entity: GenericInputEntity) => (GenericInputEntity & Flag<GenericName, GenericInputValue>);
    append<GenericInputEntity extends GenericEntity, const GenericInputValue extends GenericValue>(entity: GenericInputEntity, ...args: IsEqual<GenericValue, never> extends true ? [] : [GenericInputValue]): (GenericInputEntity & Flag<GenericName, GenericInputValue>);
    /**
     * Retrieves the value carried by the flag.
     * 
     * ```ts
     * const flagged = User.MajorFlag.append(user, { age: user.age });
     * const value = User.MajorFlag.getValue(flagged);
     * ```
     * 
     */
    getValue<GenericInputEntity extends GenericEntity & Flag<GenericName, GenericValue>>(entity: GenericInputEntity): GetKindValue<typeof flagKind, GenericInputEntity>[GenericName];
    /**
     * Checks whether the entity has this state and narrows its type to include the flag.
     * 
     * ```ts
     * User.MajorFlag.has(user); // false
     * User.MajorFlag.has(flagged); // true
     * ```
     * 
     */
    has<GenericInputEntity extends GenericEntity>(entity: GenericInputEntity): entity is Extract<GenericInputEntity, Flag<GenericName, any>>;
}
export interface Flag<GenericName extends string = string, GenericValue extends unknown = never> extends Kind<typeof flagKind.definition, Record<GenericName, GenericValue>> {
}
/**
 * Creates a handler for assigning a typed business state to an entity.
 * 
 * **Supported call styles:**
 * - Classic: `createFlag(name)` -> returns a handler
 * 
 * Use flags to make an entity state part of a precise type contract. Functions can require an entity combined with one or more flags, while the same entity keeps its original business properties and can reuse its repositories, mappers, and other supporting code. A flag can optionally carry data associated with its state.
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
 * 		{ age: Age } // optional
 * 	>("majorUser");
 * 	export type MajorFlag = C.GetFlag<typeof MajorFlag>;
 * 
 * 	export function isMajor(entity: Entity) {
 * 		if (C.greaterThan(entity.age, 18)) {
 * 			return E.success(
 * 				MajorFlag.append(entity, { age: entity.age }),
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
 * const flagged = User.MajorFlag.append(user, { age: user.age });
 * const value = User.MajorFlag.getValue(flagged);
 * 
 * User.MajorFlag.has(user); // false
 * User.MajorFlag.has(flagged); // true
 * ```
 * 
 * @remarks
 * A flag avoids defining and maintaining a separate entity variation for every possible state. `append` enriches the entity's type with that state, `has` checks and narrows it at runtime, and `getValue` retrieves the data carried by the state.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/flag
 * 
 * @namespace C
 * 
 */
export declare function createFlag<GenericEntity extends Entity = never, GenericName extends string = never, GenericValue extends Record<string, unknown> = never>(name: Or<[
    IsEqual<GenericEntity, never>,
    IsEqual<GenericName, never>
]> extends true ? never : NoInfer<GenericName>): FlagHandler<GenericEntity, GenericName, GenericValue>;
export declare namespace createFlag {
    var overrideHandler: import("../common").OverrideHandler<FlagHandler<Entity<string>, string, never>>;
}
export type GetFlag<GenericHandler extends FlagHandler<any, any, any>> = Extract<Flag<GenericHandler["name"], ReturnType<GenericHandler["getValue"]>>, any>;
export {};
