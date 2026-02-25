import { type SimplifyTopLevel, type Kind, unwrap, kindHeritage, createErrorKind, pipe, forward, wrapValue, type RemoveKind, type RemoveReadonly, createOverride, type AnyFunction } from "@scripts/common";
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
	GenericPropertiesDefinition extends EntityPropertiesDefinition = any,
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

const entityHandlerKind = createCleanKind("entity-handler");

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

	readonly mapDataParser: DDataParser.Contract<
		EntityProperties<GenericPropertiesDefinition>,
		unknown
	>;

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
		entity: GenericEntity,
		properties: GenericProperties,
	): Entity<GenericName> & DObject.AssignObjects<
		RemoveKind<GenericEntity>,
		GenericProperties
	>;
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

	const propertiesDefinition = getPropertiesDefinition(entityPropertyDefinitionTools);

	const mapDataParser = pipe(
		forward<EntityPropertiesDefinition>(propertiesDefinition),
		DObject.entries,
		DArray.map(
			([key, property]) => DObject.entry(
				key,
				entityPropertyDefinitionToDataParser(
					property,
					(newTypeHandler) => {
						const constraintKindValue = pipe(
							newTypeHandler.constraints,
							DArray.map(({ name }) => DObject.entry(name, null)),
							DObject.fromEntries,
						);

						return DDataParser.transform(
							newTypeHandler.dataParser,
							(value) => constrainedTypeKind.setTo(
								newTypeKind.setTo(
									wrapValue(value),
									newTypeHandler.name,
								),
								constraintKindValue,
							),
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
	);

	function map(rawProperties: PropertiesToMapOfEntity) {
		const result = mapDataParser.parse(rawProperties);

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
		const result = mapDataParser.parse(rawProperties);

		if (DEither.isLeft(result)) {
			throw new CreateEntityError(rawProperties, unwrap(result));
		}

		return unwrap(result);
	}

	function is(input: unknown) {
		return entityKind.has(input) && entityKind.getValue(input) === name;
	}

	function update(
		entity: EntityProperties,
		newProperties: Partial<EntityProperties>,
	) {
		const updatedEntity: RemoveReadonly<EntityProperties> = {};

		for (const key in propertiesDefinition) {
			updatedEntity[key] = newProperties[key] !== undefined
				? newProperties[key]
				: entity[key];
		}

		return entityKind.setTo(updatedEntity, name);
	}

	return pipe(
		{
			name,
			propertiesDefinition,
			mapDataParser,
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
