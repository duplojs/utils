import { type SimplifyTopLevel, type Kind, type Unwrap, type IsEqual, type IsExtends, type Or, type NeverCoalescing, type RemoveKind } from "../common";
import { type GetNewType, type NewTypeHandler } from "./newType";
import * as DEither from "../either";
import * as DDataParser from "../dataParser";
import * as DObject from "../object";
import * as DArray from "../array";
export type EntitySimplePropertyDefinition = NewTypeHandler<string, unknown, readonly any[]>;
export type EntityUnionPropertyDefinition = readonly [
    EntitySimplePropertyDefinition,
    ...EntitySimplePropertyDefinition[]
];
export interface EntityAdvancedArrayPropertyDefinition {
    min?: number;
    max?: number;
}
export interface EntityAdvancedPropertyDefinition {
    type: (EntitySimplePropertyDefinition | EntityUnionPropertyDefinition);
    nullable?: true;
    inArray?: true | EntityAdvancedArrayPropertyDefinition;
}
export type EntityPropertyDefinition = (EntitySimplePropertyDefinition | EntityUnionPropertyDefinition | EntityAdvancedPropertyDefinition);
export type EntityPropertiesDefinition = Readonly<Record<string, EntityPropertyDefinition>>;
export type EntityProperties<GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> = SimplifyTopLevel<{
    readonly [Prop in keyof GenericPropertiesDefinition]: (GenericPropertiesDefinition[Prop] extends EntitySimplePropertyDefinition ? GetNewType<GenericPropertiesDefinition[Prop]> : GenericPropertiesDefinition[Prop] extends EntityUnionPropertyDefinition ? GetNewType<GenericPropertiesDefinition[Prop][number]> : GenericPropertiesDefinition[Prop] extends EntityAdvancedPropertyDefinition ? GetNewType<GenericPropertiesDefinition[Prop]["type"] extends EntityUnionPropertyDefinition ? GenericPropertiesDefinition[Prop]["type"][number] : GenericPropertiesDefinition[Prop]["type"] extends EntitySimplePropertyDefinition ? GenericPropertiesDefinition[Prop]["type"] : never> extends infer InferredValue ? (IsEqual<GenericPropertiesDefinition[Prop]["inArray"], true> extends true ? readonly InferredValue[] : GenericPropertiesDefinition[Prop]["inArray"] extends object ? GenericPropertiesDefinition[Prop]["inArray"]["min"] extends number ? readonly [
        ...DArray.CreateTuple<InferredValue, GenericPropertiesDefinition[Prop]["inArray"]["min"]>,
        ...InferredValue[]
    ] : readonly InferredValue[] : InferredValue) extends infer InferredValueWithArray ? IsEqual<GenericPropertiesDefinition[Prop]["nullable"], true> extends true ? InferredValueWithArray | null : InferredValueWithArray : never : never : unknown);
}>;
export type EntityRawProperties<GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition> = SimplifyTopLevel<{
    readonly [Prop in keyof GenericPropertiesDefinition]: (GenericPropertiesDefinition[Prop] extends EntitySimplePropertyDefinition ? Unwrap<GetNewType<GenericPropertiesDefinition[Prop]>> : GenericPropertiesDefinition[Prop] extends EntityUnionPropertyDefinition ? Unwrap<GetNewType<GenericPropertiesDefinition[Prop][number]>> : GenericPropertiesDefinition[Prop] extends EntityAdvancedPropertyDefinition ? Unwrap<GetNewType<GenericPropertiesDefinition[Prop]["type"] extends EntityUnionPropertyDefinition ? GenericPropertiesDefinition[Prop]["type"][number] : GenericPropertiesDefinition[Prop]["type"] extends EntitySimplePropertyDefinition ? GenericPropertiesDefinition[Prop]["type"] : never>> extends infer InferredValue ? (Or<[
        IsEqual<GenericPropertiesDefinition[Prop]["inArray"], true>,
        IsExtends<GenericPropertiesDefinition[Prop]["inArray"], object>
    ]> extends true ? readonly InferredValue[] : InferredValue) extends infer InferredValueWithArray ? IsEqual<GenericPropertiesDefinition[Prop]["nullable"], true> extends true ? InferredValueWithArray | null : InferredValueWithArray : never : never : never);
}>;
export declare const entityKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/entity", string>>;
export interface Entity<GenericName extends string = string> extends Kind<typeof entityKind.definition, GenericName> {
}
declare const entityHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/entity-handler", unknown>>;
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
     * The DataParser derived from the properties definition. Useful to reuse validation outside entity creation.
     * 
     */
    readonly mapDataParser: DDataParser.Contract<EntityProperties<GenericPropertiesDefinition>, EntityRawProperties<GenericPropertiesDefinition>>;
    /**
     * Builds an entity from already typed properties.
     * 
     * ```ts
     * 	export function create(params: {
     * 		id: Id;
     * 		name: Name;
     * 	}) {
     * 		return Entity.new({
     * 			...params,
     * 			nick: null,
     * 			roles: [defaultRole],
     * 		});
     * ```
     * 
     */
    "new"<const GenericProperties extends EntityProperties<GenericPropertiesDefinition>>(properties: GenericProperties): Entity<GenericName> & GenericProperties;
    /**
     * Validates raw properties and returns an Either with the typed entity.
     * 
     * ```ts
     * if (User.Entity.is(result)) {
     * 	// result: C.Entity<"User">
     * }
     * 
     * const mappedResult = User.Entity.map({
     * 	id: 3,
     * 	name: "Eve",
     * 	roles: ["manager"],
     * 	nick: null,
     * ```
     * 
     */
    map(rawProperties: EntityRawProperties<GenericPropertiesDefinition>): (DEither.EitherRight<"createEntity", Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>> | DEither.EitherLeft<"createEntityError", DDataParser.DataParserError>);
    /**
     * Validates raw properties and throws on error.
     * 
     * ```ts
     * const mapped = User.Entity.mapOrThrow({
     * 	id: 2,
     * 	name: "Bob",
     * 	roles: ["client"],
     * 	nick: "Bobby",
     * });
     * ```
     * 
     */
    mapOrThrow(rawProperties: EntityRawProperties<GenericPropertiesDefinition>): Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>;
    /**
    * Checks if a value is an entity of this handler (type guard).
    * 
    * ```ts
    * const result = true ? mapped : null;
    * 
    * if (User.Entity.is(result)) {
    * 	// result: C.Entity<"User">
    * ```
    * 
    */
    is<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Entity<GenericName>>;
    /**
     * Updates an entity by merging typed properties into an existing entity.
     * 
     * ```ts
     * const updated = User.Entity.update(mapped, {
     * 	name: User.Name.createOrThrow("Bobby"),
     * 	nick: null,
     * });
     * ```
     * 
     */
    update<const GenericEntity extends Entity<GenericName>, const GenericProperties extends Partial<EntityProperties<GenericPropertiesDefinition>>>(entity: GenericEntity, properties: GenericProperties): Entity<GenericName> & DObject.AssignObjects<RemoveKind<GenericEntity>, GenericProperties>;
}
declare const CreateEntityError_base: new (params: {
    "@DuplojsUtilsError/create-entity-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../common").KindDefinition<"create-entity-error", unknown>, unknown> & Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-entity-error", unknown>, unknown>;
export declare class CreateEntityError extends CreateEntityError_base {
    rawProperties: EntityRawProperties;
    dataParserError: DDataParser.DataParserError;
    constructor(rawProperties: EntityRawProperties, dataParserError: DDataParser.DataParserError);
}
export interface PropertiesDefinitionParams {
    union<const GenericUnionPropertyDefinition extends EntityUnionPropertyDefinition>(...type: GenericUnionPropertyDefinition): {
        type: GenericUnionPropertyDefinition;
    };
    nullable<const GenericPropertyDefinition extends EntityPropertyDefinition>(definition: GenericPropertyDefinition): GenericPropertyDefinition extends EntityAdvancedPropertyDefinition ? DObject.AssignObjects<GenericPropertyDefinition, {
        nullable: true;
    }> : {
        type: GenericPropertyDefinition;
        nullable: true;
    };
    array<const GenericPropertyDefinition extends EntityPropertyDefinition, const GenericAdvancedArrayPropertyDefinition extends EntityAdvancedArrayPropertyDefinition = never>(definition: GenericPropertyDefinition, params?: GenericAdvancedArrayPropertyDefinition): GenericPropertyDefinition extends EntityAdvancedPropertyDefinition ? DObject.AssignObjects<GenericPropertyDefinition, {
        inArray: NeverCoalescing<GenericAdvancedArrayPropertyDefinition, true>;
    }> : {
        type: GenericPropertyDefinition;
        inArray: NeverCoalescing<GenericAdvancedArrayPropertyDefinition, true>;
    };
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
 * 	export const Entity = C.createEntity("User", ({ array, nullable }) => ({
 * 		id: Id,
 * 		name: Name,
 * 		roles: array(Role, { min: 1 }),
 * 		nick: nullable(Name),
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
 * 			nick: null,
 * 			roles: [defaultRole],
 * 		});
 * 	}
 * }
 * 
 * const mapped = User.Entity.mapOrThrow({
 * 	id: 2,
 * 	name: "Bob",
 * 	roles: ["client"],
 * 	nick: "Bobby",
 * });
 * 
 * const result = true ? mapped : null;
 * 
 * if (User.Entity.is(result)) {
 * 	// result: C.Entity<"User">
 * }
 * 
 * const mappedResult = User.Entity.map({
 * 	id: 3,
 * 	name: "Eve",
 * 	roles: ["manager"],
 * 	nick: null,
 * });
 * 
 * if (E.isRight(mappedResult)) {
 * 	// mappedResult: E.EitherRight<"createEntity", C.Entity<"User">>
 * }
 * 
 * ```
 * 
 * @remarks
 * - The definition callback can use helpers like `array`, `nullable`, and `union` to enrich properties.
 * - Use `map`/`mapOrThrow` to build from raw inputs; `new` expects already typed values.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/entity
 * 
 * @namespace C
 * 
 */
export declare function createEntity<GenericName extends string, const GenericPropertiesDefinition extends EntityPropertiesDefinition>(name: GenericName, getPropertiesDefinition: (params: PropertiesDefinitionParams) => GenericPropertiesDefinition & DObject.ForbiddenKey<GenericPropertiesDefinition, "_entityName" | "_flags">): EntityHandler<GenericName, GenericPropertiesDefinition>;
export type GetEntity<GenericEntityHandler extends EntityHandler<string, any>> = Extract<ReturnType<GenericEntityHandler["new"]>, any>;
export {};
