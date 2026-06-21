import { type SimplifyTopLevel, type Kind, type RemoveKind, type GetKindValue, type IsEqual } from "../../common";
import * as DEither from "../../either";
import * as DDataParser from "../../dataParser";
import * as DObject from "../../object";
import { type EntityPropertyDefinition, type EntityProperty, type EntityRawProperty, type EntityInputRawProperty, entityPropertyDefinitionTools } from "./property";
export * from "./property";
export * from "./unwrap";
export type EntityPropertiesDefinition = Readonly<Record<string, EntityPropertyDefinition>>;
export type EntityProperties<GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> = SimplifyTopLevel<{
    readonly [Prop in keyof GenericPropertiesDefinition]: EntityProperty<GenericPropertiesDefinition[Prop]>;
}>;
export type EntityRawProperties<GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> = SimplifyTopLevel<{
    readonly [Prop in keyof GenericPropertiesDefinition]: EntityRawProperty<GenericPropertiesDefinition[Prop]>;
}>;
export type PropertiesToMapOfEntity<GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> = SimplifyTopLevel<{
    readonly [Prop in keyof GenericPropertiesDefinition]: EntityInputRawProperty<GenericPropertiesDefinition[Prop]>;
}>;
type EntityRefinerResult<GenericEntity extends Entity = Entity> = DEither.Right<string, GenericEntity> | DEither.Left<string, unknown>;
export declare const entityKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity", string>>;
export interface Entity<GenericName extends string = string> extends Kind<typeof entityKind.definition, GenericName> {
}
export declare const entityHandlerKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-handler", unknown>>;
export interface EntityHandler<GenericName extends string = string, GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> extends Kind<typeof entityHandlerKind.definition> {
    /**
     * The entity name used as a runtime identifier (for example "User").
     * 
     */
    readonly name: GenericName;
    /**
     * The properties schema returned by the definition callback.
     * 
     */
    readonly propertiesDefinition: GenericPropertiesDefinition;
    /**
     * @deprecated
     */
    readonly mapDataParser: DDataParser.DataParser<EntityProperties<GenericPropertiesDefinition>, unknown>;
    readonly internal: {
        /**
         * The DataParser used internally to map raw properties into an entity.
         * 
         */
        readonly mapDataParser: DDataParser.DataParser<EntityProperties<GenericPropertiesDefinition>, unknown>;
    };
    /**
     * Builds an entity from already typed properties.
     * 
     * ```ts
     * 		nick: nullable(Name),
     * 		preferences: structure({
     * 			theme: PreferencesTheme,
     * 			pinnedNick: nullable(Name),
     * 		}),
     * 	}));
     * 	export type Entity = C.GetEntity<typeof Entity>;
     * 
     * 	const defaultRole = Role.createOrThrow("client");
     * ```
     * 
     */
    "new"<const GenericProperties extends EntityProperties<GenericPropertiesDefinition>>(properties: GenericProperties): Entity<GenericName> & GenericProperties;
    /**
     * Validates raw properties and returns an Either containing the hydrated entity or a DataParser error.
     * 
     * **Supported call styles:**
     * - Classic: `handler.map(rawProperties)`
     * - Classic with refinement: `handler.map(rawProperties, refineEntity)`
     * - Curried refinement: `handler.map(refineEntity)(rawProperties)`
     * 
     * After hydration, an optional refiner can apply business rules or add flags. Its Right or Left result is forwarded while preserving its precise type. Hydration failures return a `Left<"hydrateEntityError", DataParserError>` before the refiner is called.
     * 
     * ```ts
     * const User = C.createEntity("User", ({ nullable }) => ({
     * 	id: C.createNewType("user-id", DP.number(), C.Positive),
     * 	name: C.createNewType("user-name", DP.string()),
     * 	nickname: nullable(C.createNewType("user-nickname", DP.string())),
     * }));
     * 
     * // Hydrate raw properties into an entity.
     * const result = User.map({
     * 	id: 1,
     * 	name: "Ada",
     * 	nickname: null,
     * });
     * // E.Right<"hydratedEntity", C.GetEntity<typeof User>>
     * // | E.Left<"hydrateEntityError", DP.DataParserError>
     * 
     * // Refine the hydrated entity with a business rule.
     * const refinedResult = User.map(
     * 	{
     * 		id: 1,
     * 		name: "Ada",
     * 		nickname: "A",
     * 	},
     * 	(entity) => entity.nickname !== null
     * 		? E.success(entity)
     * 		: E.left("nickname.required"),
     * );
     * 
     * // Use the curried form in a pipe.
     * const pipedResult = pipe(
     * 	{
     * 		id: 1,
     * 		name: "Ada",
     * 		nickname: "A",
     * 	},
     * 	User.map((entity) => entity.nickname !== null
     * 		? E.success(entity)
     * 		: E.left("nickname.required")),
     * );
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/clean/entity
     * 
     * @namespace C
     * 
     */
    map(rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>): (DEither.Right<"hydratedEntity", Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>> | DEither.Left<"hydrateEntityError", DDataParser.DataParserError>);
    map<const GenericEntityRefinerResult extends EntityRefinerResult<Entity<GenericName>>>(refineEntity: (entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>) => GenericEntityRefinerResult): (rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>) => (DEither.Left<"hydrateEntityError", DDataParser.DataParserError> | GenericEntityRefinerResult);
    map<const GenericEntityRefinerResult extends EntityRefinerResult<Entity<GenericName>>>(rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>, refineEntity?: (entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>) => GenericEntityRefinerResult): (DEither.Left<"hydrateEntityError", DDataParser.DataParserError> | (IsEqual<GenericEntityRefinerResult, EntityRefinerResult<Entity<GenericName>>> extends true ? DEither.Right<"hydratedEntity", Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>> : GenericEntityRefinerResult));
    /**
     * Validates raw properties and returns the hydrated entity, throwing when hydration or refinement fails.
     * 
     * **Supported call styles:**
     * - Classic: `handler.mapOrThrow(rawProperties)`
     * - Classic with refinement: `handler.mapOrThrow(rawProperties, refineEntity)`
     * - Curried refinement: `handler.mapOrThrow(refineEntity)(rawProperties)`
     * 
     * After hydration, an optional refiner can apply business rules or add flags. A hydration failure throws `HydrateEntityError`; a Left returned by the refiner throws `RefineEntityError`. A successful refinement returns its unwrapped value with its precise type.
     * 
     * ```ts
     * const User = C.createEntity("User", ({ nullable }) => ({
     * 	id: C.createNewType("user-id", DP.number(), C.Positive),
     * 	name: C.createNewType("user-name", DP.string()),
     * 	nickname: nullable(C.createNewType("user-nickname", DP.string())),
     * }));
     * 
     * // Hydrate raw properties or throw HydrateEntityError.
     * const user = User.mapOrThrow({
     * 	id: 1,
     * 	name: "Ada",
     * 	nickname: null,
     * });
     * 
     * // Refine the hydrated entity or throw RefineEntityError on Left.
     * const refinedUser = User.mapOrThrow(
     * 	{
     * 		id: 1,
     * 		name: "Ada",
     * 		nickname: "A",
     * 	},
     * 	(entity) => entity.nickname !== null
     * 		? E.success(entity)
     * 		: E.left("nickname.required"),
     * );
     * 
     * // Use the curried form in a pipe.
     * const pipedUser = pipe(
     * 	{
     * 		id: 1,
     * 		name: "Ada",
     * 		nickname: "A",
     * 	},
     * 	User.mapOrThrow((entity) => entity.nickname !== null
     * 		? E.success(entity)
     * 		: E.left("nickname.required")),
     * );
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/clean/entity
     * 
     * @namespace C
     * 
     */
    mapOrThrow(rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>): Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>;
    mapOrThrow<const GenericEntityRefinerResult extends EntityRefinerResult<Entity<GenericName>>>(refineEntity: (entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>) => GenericEntityRefinerResult): (rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>) => (GenericEntityRefinerResult extends DEither.Right<string, infer GenericValue> ? GenericValue : never);
    mapOrThrow<const GenericEntityRefinerResult extends EntityRefinerResult<Entity<GenericName>>>(rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>, refineEntity?: (entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>) => GenericEntityRefinerResult): (IsEqual<GenericEntityRefinerResult, EntityRefinerResult<Entity<GenericName>>> extends true ? Entity<GenericName> & EntityProperties<GenericPropertiesDefinition> : (GenericEntityRefinerResult extends DEither.Right<string, infer GenericValue> ? GenericValue : never));
    /**
    * Checks if a value is an entity of this handler (type guard).
    * 
    * ```ts
    * 			preferences: {
    * 				theme: PreferencesTheme.createOrThrow("light"),
    * 				pinnedNick: null,
    * 			},
    * ```
    * 
    */
    is<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Entity<GenericName>>;
    /**
     * Updates an entity by merging typed properties into an existing entity.
     * 
     * ```ts
     * 	},
     * });
     * 
     * const result = true ? mapped : null;
     * ```
     * 
     */
    update<const GenericEntity extends Entity<GenericName>, const GenericProperties extends Partial<EntityProperties<GenericPropertiesDefinition>>>(properties: GenericProperties): (entity: GenericEntity) => EntityUpdate<GenericEntity, GenericProperties>;
    update<const GenericEntity extends Entity<GenericName>, const GenericProperties extends Partial<EntityProperties<GenericPropertiesDefinition>>>(entity: GenericEntity, properties: GenericProperties): EntityUpdate<GenericEntity, GenericProperties>;
}
declare const HydrateEntityError_base: import("../../common").KindClass<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsError/hydrate-entity-error", unknown>>, ErrorConstructor>;
export declare class HydrateEntityError extends HydrateEntityError_base {
    rawProperties: PropertiesToMapOfEntity;
    dataParserError: DDataParser.DataParserError;
    constructor(rawProperties: PropertiesToMapOfEntity, dataParserError: DDataParser.DataParserError);
}
declare const RefineEntityError_base: import("../../common").KindClass<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsError/refine-entity-error", unknown>>, ErrorConstructor>;
export declare class RefineEntityError extends RefineEntityError_base {
    rawProperties: PropertiesToMapOfEntity;
    entity: Entity;
    information: string;
    error: unknown;
    constructor(rawProperties: PropertiesToMapOfEntity, entity: Entity, information: string, error: unknown);
}
/**
 * Creates an entity handler from a property definition.
 * 
 * **Supported call styles:**
 * - Classic: `createEntity(name, getPropertiesDefinition)` -> returns a handler
 * 
 * Entities model business structures by composing NewTypes. The handler builds entities from typed properties or from raw inputs with validation.
 * 
 * ```ts
 * namespace User {
 * 	export const Id = C.createNewType("user-id", DP.number(), C.Positive);
 * 	export type Id = C.GetNewType<typeof Id>;
 * 	export const Name = C.createNewType("user-name", DP.string());
 * 	export type Name = C.GetNewType<typeof Name>;
 * 	export const Role = C.createNewType("UserRole", DP.literal(["admin", "client", "manager"]));
 * 
 * 	export const PreferencesTheme = C.createNewType(
 * 		"user-preferences-theme",
 * 		DP.literal(["light", "dark"]),
 * 	);
 * 
 * 	export const Entity = C.createEntity("User", ({ array, nullable, structure, identifier }) => ({
 * 		kind: identifier("user"),
 * 		id: Id,
 * 		name: Name,
 * 		roles: array(Role, { min: 1 }),
 * 		nick: nullable(Name),
 * 		preferences: structure({
 * 			theme: PreferencesTheme,
 * 			pinnedNick: nullable(Name),
 * 		}),
 * 	}));
 * 	export type Entity = C.GetEntity<typeof Entity>;
 * 
 * 	const defaultRole = Role.createOrThrow("client");
 * 
 * 	export function create(params: {
 * 		id: Id;
 * 		name: Name;
 * 	}) {
 * 		return Entity.new({
 * 			...params,
 * 			kind: "user",
 * 			nick: null,
 * 			roles: [defaultRole],
 * 			preferences: {
 * 				theme: PreferencesTheme.createOrThrow("light"),
 * 				pinnedNick: null,
 * 			},
 * 		});
 * 	}
 * }
 * 
 * const mapped = User.Entity.mapOrThrow({
 * 	kind: "user",
 * 	id: 2,
 * 	name: "Bob",
 * 	roles: ["client"],
 * 	nick: "Bobby",
 * 	preferences: {
 * 		theme: "dark",
 * 		pinnedNick: null,
 * 	},
 * });
 * 
 * const result = true ? mapped : null;
 * 
 * if (User.Entity.is(result)) {
 * 	// result: C.Entity<"User">
 * }
 * 
 * const mappedResult = User.Entity.map({
 * 	kind: "user",
 * 	id: 3,
 * 	name: "Eve",
 * 	roles: ["manager"],
 * 	nick: null,
 * 	preferences: {
 * 		theme: "light",
 * 		pinnedNick: "Evy",
 * 	},
 * });
 * 
 * if (E.isRight(mappedResult)) {
 * 	// mappedResult: E.Right<"hydratedEntity", C.Entity<"User">>
 * }
 * 
 * const updated = User.Entity.update(mapped, {
 * 	name: User.Name.createOrThrow("Bobby"),
 * 	nick: null,
 * });
 * ```
 * 
 * @remarks
 * - The definition callback can use helpers like `array`, `nullable`, `union`, `structure`, and `identifier` to enrich properties.
 * - `identifier` is intended for technical string literals (discriminators/tags), not free-form business text values.
 * - Use `map`/`mapOrThrow` to build from raw inputs (with runtime constraint checks); `new` expects already typed values.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/entity
 * 
 * @namespace C
 * 
 */
export declare function createEntity<GenericName extends string, const GenericPropertiesDefinition extends EntityPropertiesDefinition>(name: GenericName, getPropertiesDefinition: (params: typeof entityPropertyDefinitionTools) => GenericPropertiesDefinition & DObject.ForbiddenKey<GenericPropertiesDefinition, "_entityName" | "_flags">): EntityHandler<GenericName, GenericPropertiesDefinition>;
export declare namespace createEntity {
    var overrideHandler: import("../../common").OverrideHandler<EntityHandler<string, Readonly<Record<string, EntityPropertyDefinition>>>>;
}
export type GetEntity<GenericEntityHandler extends EntityHandler<string, any>> = Extract<ReturnType<GenericEntityHandler["new"]>, any>;
export type EntityUpdate<GenericEntity extends Entity, GenericNewProperties extends Partial<RemoveKind<Entity>>> = Extract<(Entity<GetKindValue<typeof entityKind, GenericEntity>> & SimplifyTopLevel<RemoveKind<GenericEntity> extends infer InferredProperties ? {
    [Prop in keyof InferredProperties]: Prop extends keyof GenericNewProperties ? GenericNewProperties[Prop] extends infer InferredNewValue ? InferredNewValue extends undefined ? InferredProperties[Prop] : InferredNewValue : never : InferredProperties[Prop];
} : never>), any>;
