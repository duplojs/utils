import { type SimplifyTopLevel, type Kind, type Unwrap, unwrap, kindHeritage, createErrorKind, pipe, innerPipe, isType, forward, wrapValue, justReturn, when, type IsEqual, type IsExtends, type Or, type NeverCoalescing, type RemoveKind, type RemoveReadonly } from "@scripts/common";
import { createCleanKind } from "./kind";
import { type GetNewType, type NewTypeHandler, newTypeHandlerKind, newTypeKind } from "./newType";
import { constrainedTypeKind } from "./constraint";
import * as DEither from "../either";
import * as DDataParser from "../dataParser";
import * as DObject from "../object";
import * as DArray from "../array";
import * as DPattern from "../pattern";

export type EntitySimplePropertyDefinition = NewTypeHandler<string, unknown, readonly any[]>;
export type EntityUnionPropertyDefinition = readonly [
	EntitySimplePropertyDefinition,
	...EntitySimplePropertyDefinition[],
];

export interface EntityAdvancedArrayPropertyDefinition {
	min?: number;
	max?: number;
}

export interface EntityAdvancedPropertyDefinition {
	type: (
		| EntitySimplePropertyDefinition
		| EntityUnionPropertyDefinition
	);
	nullable?: true;
	inArray?: true | EntityAdvancedArrayPropertyDefinition;
}

export type EntityPropertyDefinition = (
	| EntitySimplePropertyDefinition
	| EntityUnionPropertyDefinition
	| EntityAdvancedPropertyDefinition
);

export type EntityPropertiesDefinition = Readonly<
	Record<
		string,
		EntityPropertyDefinition
	>
>;

export type EntityProperties<
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> = SimplifyTopLevel<{
	readonly [Prop in keyof GenericPropertiesDefinition]: (
		GenericPropertiesDefinition[Prop] extends EntitySimplePropertyDefinition
			? GetNewType<GenericPropertiesDefinition[Prop]>
			: GenericPropertiesDefinition[Prop] extends EntityUnionPropertyDefinition
				? GetNewType<GenericPropertiesDefinition[Prop][number]>
				: GenericPropertiesDefinition[Prop] extends EntityAdvancedPropertyDefinition
					? GetNewType<
						GenericPropertiesDefinition[Prop]["type"] extends EntityUnionPropertyDefinition
							? GenericPropertiesDefinition[Prop]["type"][number]
							: GenericPropertiesDefinition[Prop]["type"] extends EntitySimplePropertyDefinition
								? GenericPropertiesDefinition[Prop]["type"]
								: never
					> extends infer InferredValue
						? (
							IsEqual<GenericPropertiesDefinition[Prop]["inArray"], true> extends true
								? readonly InferredValue[]
								: GenericPropertiesDefinition[Prop]["inArray"] extends object
									? GenericPropertiesDefinition[Prop]["inArray"]["min"] extends number
										? readonly [
											...DArray.CreateTuple<
												InferredValue,
												GenericPropertiesDefinition[Prop]["inArray"]["min"]
											>,
											...InferredValue[],
										]
										: readonly InferredValue[]
									: InferredValue
						) extends infer InferredValueWithArray
							? IsEqual<GenericPropertiesDefinition[Prop]["nullable"], true> extends true
								? InferredValueWithArray | null
								: InferredValueWithArray
							: never
						: never
					: unknown
	)
}>;

export type EntityRawProperties<
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> = SimplifyTopLevel<{
	readonly [Prop in keyof GenericPropertiesDefinition]: (
		GenericPropertiesDefinition[Prop] extends EntitySimplePropertyDefinition
			? Unwrap<GetNewType<GenericPropertiesDefinition[Prop]>>
			: GenericPropertiesDefinition[Prop] extends EntityUnionPropertyDefinition
				? Unwrap<GetNewType<GenericPropertiesDefinition[Prop][number]>>
				: GenericPropertiesDefinition[Prop] extends EntityAdvancedPropertyDefinition
					? Unwrap<
						GetNewType<
							GenericPropertiesDefinition[Prop]["type"] extends EntityUnionPropertyDefinition
								? GenericPropertiesDefinition[Prop]["type"][number]
								: GenericPropertiesDefinition[Prop]["type"] extends EntitySimplePropertyDefinition
									? GenericPropertiesDefinition[Prop]["type"]
									: never
						>
					> extends infer InferredValue
						? (
							Or<[
								IsEqual<GenericPropertiesDefinition[Prop]["inArray"], true>,
								IsExtends<GenericPropertiesDefinition[Prop]["inArray"], object>,
							]> extends true
								? readonly InferredValue[]
								: InferredValue
						) extends infer InferredValueWithArray
							? IsEqual<GenericPropertiesDefinition[Prop]["nullable"], true> extends true
								? InferredValueWithArray | null
								: InferredValueWithArray
							: never
						: never
					: never
	)
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

	/**
	 * {@include clean/createEntity/mapDataParser.md}
	 */
	readonly mapDataParser: DDataParser.Contract<
		EntityProperties<GenericPropertiesDefinition>,
		EntityRawProperties<GenericPropertiesDefinition>
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
		rawProperties: EntityRawProperties<GenericPropertiesDefinition>
	): (
		| DEither.EitherRight<
			"createEntity",
			Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>
		>
		| DEither.EitherLeft<
			"createEntityError",
			DDataParser.DataParserError
		>
	);

	/**
	 * {@include clean/createEntity/mapOrThrow.md}
	 */
	mapOrThrow(
		rawProperties: EntityRawProperties<GenericPropertiesDefinition>
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
		public rawProperties: EntityRawProperties,
		public dataParserError: DDataParser.DataParserError,
	) {
		super({}, ["Error when create entity."]);
	}
}

export interface PropertiesDefinitionParams {
	union<
		const GenericUnionPropertyDefinition extends EntityUnionPropertyDefinition,
	>(
		...type: GenericUnionPropertyDefinition
	): { type: GenericUnionPropertyDefinition };
	nullable<
		const GenericPropertyDefinition extends EntityPropertyDefinition,
	>(
		definition: GenericPropertyDefinition,
	): GenericPropertyDefinition extends EntityAdvancedPropertyDefinition
		? DObject.AssignObjects<
			GenericPropertyDefinition,
			{ nullable: true }
		>
		: {
			type: GenericPropertyDefinition;
			nullable: true;
		};
	array<
		const GenericPropertyDefinition extends EntityPropertyDefinition,
		const GenericAdvancedArrayPropertyDefinition extends EntityAdvancedArrayPropertyDefinition = never,
	>(
		definition: GenericPropertyDefinition,
		params?: GenericAdvancedArrayPropertyDefinition,
	): GenericPropertyDefinition extends EntityAdvancedPropertyDefinition
		? DObject.AssignObjects<
			GenericPropertyDefinition,
			{ inArray: NeverCoalescing<GenericAdvancedArrayPropertyDefinition, true> }
		>
		: {
			type: GenericPropertyDefinition;
			inArray: NeverCoalescing<GenericAdvancedArrayPropertyDefinition, true>;
		};
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
		params: PropertiesDefinitionParams
	) => GenericPropertiesDefinition & DObject.ForbiddenKey<
		GenericPropertiesDefinition,
			"_entityName" | "_flags"
	>,
): EntityHandler<
		GenericName,
		GenericPropertiesDefinition
	> {
	function theNew(properties: EntityProperties) {
		return entityKind.addTo(properties, name);
	}

	function simplePropertyDefinitionToDataParser(
		simplePropertyDefinition: EntitySimplePropertyDefinition,
	) {
		const constraintKindValue = pipe(
			simplePropertyDefinition.constrains,
			DArray.map(({ name }) => DObject.entry(name, null)),
			DObject.fromEntries,
		);

		return DDataParser.transform(
			simplePropertyDefinition.dataParser,
			(value) => constrainedTypeKind.setTo(
				newTypeKind.setTo(
					wrapValue(value),
					simplePropertyDefinition.name,
				),
				constraintKindValue,
			),
		);
	}

	function unionPropertyDefinitionToDataParser(
		unionPropertyDefinition: EntityUnionPropertyDefinition,
	): DDataParser.DataParser | null {
		return pipe(
			unionPropertyDefinition,
			DArray.map(
				simplePropertyDefinitionToDataParser,
			),
			DPattern.when(
				DArray.minElements(1),
				DDataParser.union,
			),
			DPattern.otherwise(justReturn(null)),
		);
	}

	const params: PropertiesDefinitionParams = {
		union: (...type) => ({ type }),
		array: (definition, params) => (
			newTypeHandlerKind.has(definition) || definition instanceof Array
				? {
					type: definition,
					inArray: params ?? true,
				}
				: {
					...definition,
					inArray: params ?? true,
				}
		) as never,
		nullable: (definition) => (
			newTypeHandlerKind.has(definition) || definition instanceof Array
				? {
					type: definition,
					nullable: true,
				}
				: {
					...definition,
					nullable: true,
				}
		) as never,
	};

	const propertiesDefinition = getPropertiesDefinition(params);

	const mapDataParser = pipe(
		forward<EntityPropertiesDefinition>(propertiesDefinition),
		DObject.entries,
		DArray.map(
			DArray.toTuple([
				DArray.first,
				innerPipe(
					DArray.last,
					DPattern.when(
						newTypeHandlerKind.has,
						simplePropertyDefinitionToDataParser,
					),
					DPattern.when(
						isType("array"),
						unionPropertyDefinitionToDataParser,
					),
					DPattern.when(
						isType("object"),
						(definition) => pipe(
							definition.type,
							DPattern.when(
								newTypeHandlerKind.has,
								simplePropertyDefinitionToDataParser,
							),
							DPattern.when(
								isType("array"),
								unionPropertyDefinitionToDataParser,
							),
							DPattern.exhaustive,
							when(
								DDataParser.dataParserKind.has,
								innerPipe(
									(dataParser) => {
										if (definition.inArray) {
											return pipe(
												DDataParser.array(dataParser),
												(dataParser) => typeof definition.inArray === "object"
													&& definition.inArray.min !== undefined
													? dataParser.addChecker(
														DDataParser.checkerArrayMin(definition.inArray.min),
													)
													: dataParser,
												(dataParser) => typeof definition.inArray === "object"
													&& definition.inArray.max !== undefined
													? dataParser.addChecker(
														DDataParser.checkerArrayMax(definition.inArray.max),
													)
													: dataParser,
											);
										}

										return dataParser;
									},
									when(
										() => definition.nullable === true,
										DDataParser.nullable,
									),
								),
							),
						),
					),
					DPattern.exhaustive,
				),
			]),
		),
		DArray.map(
			([key, value]) => value !== null && DObject.entry(key, value),
		),
		DArray.filter(isType("array")),
		DObject.fromEntries,
		DDataParser.object,
		(dataParser) => DDataParser.transform(
			dataParser,
			(value) => entityKind.setTo(value, name),
		),
	);

	function map(rawProperties: EntityRawProperties) {
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

	function mapOrThrow(rawProperties: EntityRawProperties) {
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

	return entityHandlerKind.setTo({
		name,
		propertiesDefinition,
		mapDataParser,
		new: theNew,
		map,
		mapOrThrow,
		is,
		update,
	}) as never;
}

export type GetEntity<
	GenericEntityHandler extends EntityHandler<string, any>,
> = Extract<
	ReturnType<GenericEntityHandler["new"]>,
	any
>;
