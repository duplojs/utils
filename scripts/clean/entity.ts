import { type SimplifyTopLevel, type Kind, type Unwrap, unwrap, kindHeritage, createErrorKind, pipe, innerPipe, isType, forward, wrapValue, justReturn, when, type IsEqual, type IsExtends, type Or } from "@scripts/common";
import { createCleanKind } from "./kind";
import { type GetNewType, type NewTypeHandler, newTypeHandlerKind, newTypeKind } from "./newType";
import { constrainedTypeKind } from "./constraint";
import * as DEither from "../either";
import * as DDataParser from "../dataParser";
import * as DObject from "../object";
import * as DArray from "../array";
import * as DPattern from "../pattern";

export type EntitySimplePropertyDefinition = NewTypeHandler;
export type EntityUnionPropertyDefinition = [NewTypeHandler, ...NewTypeHandler[]];
export interface EntityAdvancedPropertyDefinition {
	type: (
		| EntitySimplePropertyDefinition
		| EntityUnionPropertyDefinition
	);
	nullable?: true;
	inArray?: true | {
		min?: number;
		max?: number;
	};
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
							true extends GenericPropertiesDefinition[Prop]["inArray"]
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

export type Entity<
	GenericName extends string = string,
	GenericProperties extends EntityProperties = EntityProperties,
> = (
	& Kind<typeof entityKind.definition, GenericName>
	& GenericProperties
);

const entityHandlerKind = createCleanKind("entity-handler");

export interface EntityHandler<
	GenericName extends string = string,
	GenericPropertiesDefinition extends EntityPropertiesDefinition = EntityPropertiesDefinition,
> extends Kind<typeof entityHandlerKind.definition> {
	readonly name: GenericName;

	readonly propertiesDefinition: GenericPropertiesDefinition;

	readonly mapDataParser: DDataParser.Contract<
		EntityProperties<GenericPropertiesDefinition>,
		EntityRawProperties<GenericPropertiesDefinition>
	>;

	"new"<
		GenericProperties extends EntityProperties<GenericPropertiesDefinition>,
	>(
		properties: GenericProperties
	): Entity<GenericName, GenericProperties>;

	map(
		rawProperties: EntityRawProperties<GenericPropertiesDefinition>
	): (
		| DEither.EitherRight<
			"createEntity",
			Entity<
				GenericName,
				EntityProperties<GenericPropertiesDefinition>
			>
		>
		| DEither.EitherLeft<
			"createEntityError",
			DDataParser.DataParserError
		>
	);

	mapOrThrow(
		rawProperties: EntityRawProperties<GenericPropertiesDefinition>
	): Entity<
		GenericName,
		EntityProperties<GenericPropertiesDefinition>
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

export function createEntity<
	GenericName extends string,
	const GenericPropertiesDefinition extends EntityPropertiesDefinition,
>(
	name: GenericName,
	propertiesDefinition: GenericPropertiesDefinition,
): EntityHandler<
		GenericName,
		GenericPropertiesDefinition
	> {
	function create(properties: EntityProperties) {
		return entityKind.addTo(properties, name);
	}

	function simplePropertyDefinitionToDataParser(simplePropertyDefinition: EntitySimplePropertyDefinition) {
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

	function unionPropertyDefinitionToDataParser(unionPropertyDefinition: EntityUnionPropertyDefinition) {
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
			([key, value]) => value === null
				? null
				: DObject.entry(key, value),
		),
		DArray.filter(isType("array")),
		DObject.fromEntries,
		DDataParser.object,
	);

	function map(rawProperties: EntityRawProperties) {
		const result = mapDataParser.parse(rawProperties);

		if (DEither.isLeft(result)) {
			return DEither.left(
				"createEntityError",
				unwrap(result),
			);
		}

		return unwrap(result);
	}

	function mapOrThrow(rawProperties: EntityRawProperties) {
		const result = mapDataParser.parse(rawProperties);

		if (DEither.isLeft(result)) {
			throw new CreateEntityError(rawProperties, unwrap(result));
		}

		return unwrap(result);
	}

	return entityHandlerKind.setTo({
		name,
		propertiesDefinition,
		mapDataParser,
		create,
		map,
		mapOrThrow,
	}) as never;
}

export type GetEntity<
	GenericEntityHandler extends EntityHandler<string, any>,
> = Extract<
	ReturnType<GenericEntityHandler["new"]>,
	any
>;
