import { type SimplifyTopLevel, type Kind, unwrap, createErrorKind, pipe, forward, type RemoveKind, type RemoveReadonly, createOverride, type AnyFunction, type GetKindValue, keyWrappedValue, memo, kindClass, type IsNever, type IsEqual } from "@scripts/common";
import { createCleanKind } from "../kind";
import { newTypeKind } from "../newType";
import { constrainedTypeKind } from "../constraint";
import * as DEither from "../../either";
import * as DDataParser from "../../dataParser";
import * as DObject from "../../object";
import * as DArray from "../../array";
import { type EntityPropertyDefinition, type EntityProperty, type EntityRawProperty, type EntityInputRawProperty, entityPropertyDefinitionTools, entityPropertyDefinitionToDataParser } from "./property";

export * from "./property";
export * from "./unwrap";

export type EntityPropertiesDefinition = Readonly<
	Record<
		string,
		EntityPropertyDefinition
	>
>;

export type EntityProperties<
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> = SimplifyTopLevel<{
	readonly [Prop in keyof GenericPropertiesDefinition]: EntityProperty<
		GenericPropertiesDefinition[Prop]
	>
}>;

export type EntityRawProperties<
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> = SimplifyTopLevel<{
	readonly [Prop in keyof GenericPropertiesDefinition]: EntityRawProperty<
		GenericPropertiesDefinition[Prop]
	>
}>;

export type PropertiesToMapOfEntity<
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> = SimplifyTopLevel<{
	readonly [Prop in keyof GenericPropertiesDefinition]: EntityInputRawProperty<
		GenericPropertiesDefinition[Prop]
	>
}>;

type EntityRefinerResult<
	GenericEntity extends Entity = Entity,
> = DEither.Right<string, GenericEntity> | DEither.Left<string, unknown>;

export const entityKind = createCleanKind<
	"entity",
	string
>("entity");

export interface Entity<
	GenericName extends string = string,
> extends Kind<
		typeof entityKind.definition,
		GenericName
	> {
}

export const entityHandlerKind = createCleanKind("entity-handler");

export interface EntityHandler<
	GenericName extends string = string,
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> extends Kind<typeof entityHandlerKind.definition> {

	/**
	 * {@include clean/createEntity/name.md}
	 */
	readonly name: GenericName;

	/**
	 * {@include clean/createEntity/propertiesDefinition.md}
	 */
	readonly propertiesDefinition: GenericPropertiesDefinition;

	/**
	 * @deprecated
	 */
	readonly mapDataParser: DDataParser.DataParser<
		EntityProperties<GenericPropertiesDefinition>,
		unknown
	>;

	readonly internal: {

		/**
		 * {@include clean/createEntity/mapDataParser.md}
		 */
		readonly mapDataParser: DDataParser.DataParser<
			EntityProperties<GenericPropertiesDefinition>,
			unknown
		>;
	};

	/**
	 * {@include clean/createEntity/new.md}
	 */
	"new"<
		const GenericProperties extends EntityProperties<GenericPropertiesDefinition>,
	>(
		properties: GenericProperties
	): Entity<GenericName> & GenericProperties;

	/**
	 * {@include clean/createEntity/map.md}
	 */
	map(
		rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>
	): (
		| DEither.Right<
			"hydratedEntity",
			Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		>
		| DEither.Left<
			"hydrateEntityError",
			DDataParser.DataParserError
		>
	);

	map<
		const GenericEntityRefinerResult extends EntityRefinerResult<
			Entity<GenericName>
		>,
	>(
		refineEntity: (
			entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		) => GenericEntityRefinerResult
	): (rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>) => (
		| DEither.Left<
			"hydrateEntityError",
			DDataParser.DataParserError
		>
		| GenericEntityRefinerResult
	);

	map<
		const GenericEntityRefinerResult extends EntityRefinerResult<
			Entity<GenericName>
		>,
	>(
		rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>,
		refineEntity?: (
			entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		) => GenericEntityRefinerResult
	): (
		| DEither.Left<
			"hydrateEntityError",
			DDataParser.DataParserError
		>
		| (
			IsEqual<
				GenericEntityRefinerResult,
				EntityRefinerResult<Entity<GenericName>>
			> extends true
				? DEither.Right<
					"hydratedEntity",
					Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
				>
				: GenericEntityRefinerResult
		)
	);

	/**
	 * {@include clean/createEntity/mapOrThrow.md}
	 */
	mapOrThrow(
		rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>
	): Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>;

	mapOrThrow<
		const GenericEntityRefinerResult extends EntityRefinerResult<
			Entity<GenericName>
		>,
	>(
		refineEntity: (
			entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		) => GenericEntityRefinerResult
	): (rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>) => (
		GenericEntityRefinerResult extends DEither.Right<string, infer GenericValue>
			? GenericValue
			: never
	);

	mapOrThrow<
		const GenericEntityRefinerResult extends EntityRefinerResult<
			Entity<GenericName>
		>,
	>(
		rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>,
		refineEntity?: (
			entity: Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		) => GenericEntityRefinerResult
	): (
		IsEqual<
			GenericEntityRefinerResult,
			EntityRefinerResult<Entity<GenericName>>
		> extends true
			? Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
			: (
				GenericEntityRefinerResult extends DEither.Right<string, infer GenericValue>
					? GenericValue
					: never
			)
	);

	/**
 	* {@include clean/createEntity/is.md}
 	*/
	is<
		GenericInput extends unknown,
	>(
		input: GenericInput
	): input is Extract<
		GenericInput,
		Entity<GenericName>
	>;

	/**
	 * {@include clean/createEntity/update.md}
	 */
	update<
		const GenericEntity extends Entity<GenericName>,
		const GenericProperties extends Partial<EntityProperties<GenericPropertiesDefinition>>,
	>(
		properties: GenericProperties,
	): (entity: GenericEntity) => EntityUpdate<GenericEntity, GenericProperties>;

	update<
		const GenericEntity extends Entity<GenericName>,
		const GenericProperties extends Partial<EntityProperties<GenericPropertiesDefinition>>,
	>(
		entity: GenericEntity,
		properties: GenericProperties,
	): EntityUpdate<GenericEntity, GenericProperties>;
}

export class HydrateEntityError extends kindClass(
	createErrorKind("hydrate-entity-error"),
	Error,
) {
	public constructor(
		public rawProperties: PropertiesToMapOfEntity,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, "Error when hydrate entity.");
	}
}

export class RefineEntityError extends kindClass(
	createErrorKind("refine-entity-error"),
	Error,
) {
	public constructor(
		public rawProperties: PropertiesToMapOfEntity,
		public entity: Entity,
		public information: string,
		public error: unknown,
	) {
		super({}, "Error when refine entity.");
	}
}

/**
 * {@include clean/createEntity/index.md}
 */
export function createEntity<
	GenericName extends string,
	const GenericPropertiesDefinition extends EntityPropertiesDefinition,
>(
	name: GenericName,
	getPropertiesDefinition: (
		params: typeof entityPropertyDefinitionTools
	) => GenericPropertiesDefinition & DObject.ForbiddenKey<
		GenericPropertiesDefinition,
			"_entityName" | "_flags"
	>,
): EntityHandler<
		GenericName,
		GenericPropertiesDefinition
	> {
	function theNew(properties: object) {
		return entityKind.addTo(properties, name);
	}

	const propertiesDefinition = memo(
		() => getPropertiesDefinition(entityPropertyDefinitionTools),
	);

	const mapDataParser = memo(
		() => pipe(
			forward<EntityPropertiesDefinition>(propertiesDefinition.value),
			DObject.entries,
			DArray.map(
				([key, property]) => DObject.entry(
					key,
					entityPropertyDefinitionToDataParser(
						property,
						(newTypeHandler) => {
							const allKind = {
								...constrainedTypeKind.setTo(
									{},
									newTypeHandler.internal.constraintKindValue,
								),
								...newTypeKind.setTo(
									{},
									newTypeHandler.name,
								),
							};

							return DDataParser.transform(
								newTypeHandler.internal.dataParser,
								(value) => ({
									...allKind,
									[keyWrappedValue]: value,
								}),
							);
						},
					),
				),
			),
			DObject.fromEntries,
			DDataParser.object,
			(dataParser) => DDataParser.transform(
				dataParser,
				(value) => entityKind.setTo(value, name),
			),
		),
	);

	function map(
		maybeRawProperties: PropertiesToMapOfEntity | ((entity: Entity) => EntityRefinerResult),
		refineEntity?: (entity: Entity) => EntityRefinerResult,
	) {
		if (typeof maybeRawProperties === "function") {
			return (rawProperties: PropertiesToMapOfEntity) => map(rawProperties, maybeRawProperties as never);
		}

		const result = mapDataParser.value.parse(maybeRawProperties);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"hydrateEntityError",
				unwrap(result),
			);
		}

		if (refineEntity) {
			const refineResult = refineEntity(unwrap(result) as Entity);

			return refineResult;
		}

		return DEither.right(
			"hydratedEntity",
			unwrap(result),
		);
	}

	function mapOrThrow(
		maybeRawProperties: PropertiesToMapOfEntity | ((entity: Entity) => EntityRefinerResult),
		refineEntity?: (entity: Entity) => EntityRefinerResult,
	) {
		if (typeof maybeRawProperties === "function") {
			return (rawProperties: PropertiesToMapOfEntity) => mapOrThrow(rawProperties, maybeRawProperties as never);
		}

		const result = mapDataParser.value.parse(maybeRawProperties);

		if (DEither.isLeft(result)) {
			throw new HydrateEntityError(
				maybeRawProperties,
				unwrap(result),
			);
		}

		if (refineEntity) {
			const refineResult = refineEntity(unwrap(result) as Entity);

			if (DEither.isLeft(refineResult)) {
				throw new RefineEntityError(
					maybeRawProperties,
					unwrap(result),
					DEither.informationKind.getValue(refineResult),
					unwrap(refineResult),
				);
			}

			return unwrap(refineResult);
		}

		return unwrap(result);
	}

	function is(input: unknown) {
		return entityKind.has(input) && entityKind.getValue(input) === name;
	}

	function update(
		...args: [Partial<EntityProperties>]
		| [EntityProperties, Partial<EntityProperties>]
	) {
		if (args.length === 1) {
			const [newProperties] = args;
			return (entity: EntityProperties) => update(entity, newProperties);
		}
		const [entity, newProperties] = args;
		const updatedEntity: RemoveReadonly<EntityProperties> = {};

		for (const key in propertiesDefinition.value) {
			updatedEntity[key] = newProperties[key] !== undefined
				? newProperties[key]
				: entity[key];
		}

		return entityKind.setTo(updatedEntity, name);
	}

	return pipe(
		{
			name,
			get propertiesDefinition() {
				return propertiesDefinition.value;
			},
			get mapDataParser() {
				return mapDataParser.value;
			},
			internal: {
				get mapDataParser() {
					return mapDataParser.value;
				},
			},
			new: theNew,
			map,
			mapOrThrow,
			is,
			update,
		} satisfies Record<keyof RemoveKind<EntityHandler>, unknown>,
		entityHandlerKind.setTo,
		createEntity.overrideHandler.apply as AnyFunction,
	);
}

createEntity.overrideHandler = createOverride<EntityHandler>("@duplojs/utils/clean/entity");

export type GetEntity<
	GenericEntityHandler extends EntityHandler<string, any>,
> = Extract<
	ReturnType<GenericEntityHandler["new"]>,
	any
>;

export type EntityUpdate<
	GenericEntity extends Entity,
	GenericNewProperties extends Partial<RemoveKind<Entity>>,
> = Extract<
	(
		& Entity<GetKindValue<typeof entityKind, GenericEntity>>
		& SimplifyTopLevel<
			RemoveKind<GenericEntity> extends infer InferredProperties
				? {
					[Prop in keyof InferredProperties]: Prop extends keyof GenericNewProperties
						? GenericNewProperties[Prop] extends infer InferredNewValue
							? InferredNewValue extends undefined
								? InferredProperties[Prop]
								: InferredNewValue
							: never
						: InferredProperties[Prop]
				}
				: never
		>
	),
	any
>;
