import * as DEither from "../either";
import { type Entity, entityKind } from "./entity";
import { type GetKindValue } from "../common";
export interface Some<GenericEntity extends Entity = Entity> extends DEither.Right<`some-${GetKindValue<typeof entityKind, GenericEntity>}`, GenericEntity> {
}
export interface None<GenericEntityName extends string = string> extends DEither.Left<`none-${GenericEntityName}`, null> {
}
/**
 * Union type that represents an optional entity in business flows.
 * 
 * **Supported usage style:**
 * - Type contract: `Maybe<Entity>`
 * 
 * Use `Maybe` to define a business contract before implementation details. Then produce values with `some(entity)` when data exists, or `none(entityName)` when it does not.
 * 
 * ```ts
 * const UserId = C.createNewType("userId", DPE.number());
 * const User = C.createEntity("User", () => ({
 * 	id: UserId,
 * }));
 * 
 * type UserMaybe = C.Maybe<
 * 	C.GetEntity<typeof User>
 * >;
 * 
 * const availableUser = User.new({
 * 	id: UserId.createOrThrow(1 as number),
 * });
 * 
 * const foundUser: UserMaybe = C.some(availableUser);
 * const missingUser: UserMaybe = C.none("User");
 * 
 * type checkFound = ExpectType<
 * 	typeof foundUser,
 * 	C.Some<typeof availableUser>,
 * 	"strict"
 * >;
 * 
 * type checkMissing = ExpectType<
 * 	typeof missingUser,
 * 	C.None<"User">,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * `Maybe` helps keep use-case signatures explicit: a function can return a typed optional entity without exposing null/undefined at the domain boundary.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/maybe
 * 
 * @namespace C
 * 
 */
export type Maybe<GenericEntity extends Entity = Entity> = (Some<GenericEntity> | None<GetKindValue<typeof entityKind, GenericEntity>>);
/**
 * Constructor that creates a `Maybe` success branch from an entity.
 * 
 * **Supported call styles:**
 * - Classic: `some(entity)` -> returns `Some<Entity>`
 * - Pipe-compatible: `pipe(entity, some)`
 * 
 * Use `some` when the expected entity is available and must satisfy a `Maybe<Entity>` contract.
 * 
 * ```ts
 * const UserId = C.createNewType("userId", DPE.number());
 * const User = C.createEntity("User", () => ({
 * 	id: UserId,
 * }));
 * 
 * const firstUser = User.new({
 * 	id: UserId.createOrThrow(1),
 * });
 * const firstMaybe = C.some(firstUser);
 * // firstMaybe: C.Some<typeof firstUser>
 * 
 * const secondUser = User.new({
 * 	id: UserId.createOrThrow(2),
 * });
 * const secondMaybe = C.some(secondUser);
 * // secondMaybe: C.Some<typeof secondUser>
 * 
 * const pipedMaybe = pipe(
 * 	firstUser,
 * 	C.some,
 * );
 * 
 * type check = ExpectType<
 * 	typeof pipedMaybe,
 * 	C.Some<typeof firstUser>,
 * 	"strict"
 * >;
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/maybe
 * 
 * @namespace C
 * 
 */
export declare function some<GenericEntity extends Entity>(entity: GenericEntity): Some<GenericEntity>;
/**
 * Constructor that creates a `Maybe` empty branch from an entity name.
 * 
 * **Supported call styles:**
 * - Classic: `none(entityName)` -> returns `None<entityName>`
 * - Pipe-compatible: `pipe(entityName, none)`
 * 
 * Use `none` when an entity is absent but you still want to keep a precise business contract with `Maybe<Entity>`.
 * 
 * ```ts
 * const noUser = C.none("User");
 * // noUser: C.None<"User">
 * 
 * const noOrder = C.none("Order");
 * // noOrder: C.None<"Order">
 * 
 * const pipedNone = pipe(
 * 	"Invoice",
 * 	C.none,
 * );
 * 
 * type check = ExpectType<
 * 	typeof pipedNone,
 * 	C.None<"Invoice">,
 * 	"strict"
 * >;
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/maybe
 * 
 * @namespace C
 * 
 */
export declare function none<GenericEntityName extends string>(entityName: GenericEntityName): None<GenericEntityName>;
