import { type SimplifyTopLevel, type Kind, unwrap, kindHeritage, createErrorKind, pipe, forward, type RemoveKind, type RemoveReadonly, createOverride, type AnyFunction, type GetKindValue, keyWrappedValue, memo } from "@scripts/common";
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
			"createEntity",
			Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		>
		| DEither.Left<
			"createEntityError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createEntity/mapOrThrow.md}
	 */
	mapOrThrow(
		rawProperties: PropertiesToMapOfEntity<GenericPropertiesDefinition>
	): Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>;

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

export class CreateEntityError extends kindHeritage(
	"create-entity-error",
	createErrorKind("create-entity-error"),
	Error,
) {
	public constructor(
		public rawProperties: PropertiesToMapOfEntity,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, ["Error when create entity."]);
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

	function map(rawProperties: PropertiesToMapOfEntity) {
		const result = mapDataParser.value.parse(rawProperties);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createEntityError",
				unwrap(result),
			);
		}

		return DEither.right(
			"createEntity",
			unwrap(result),
		);
	}

	function mapOrThrow(rawProperties: PropertiesToMapOfEntity) {
		const result = mapDataParser.value.parse(rawProperties);

		if (DEither.isLeft(result)) {
			throw new CreateEntityError(rawProperties, unwrap(result));
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
