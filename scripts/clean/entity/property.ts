import { newTypeHandlerKind, type GetNewType, type NewTypeHandler } from "../newType";
import { createCleanKind } from "../kind";
import { type WrappedValue, type Kind, type AnyTuple, type Unwrap, type GetKindValue, type IsEqual, pipe, unwrap, wrapValue, type Or } from "@scripts/common";
import * as DDataParser from "../../dataParser";
import * as DArray from "../../array";
import * as DPattern from "../../pattern";
import * as DObject from "../../object";

export type EntityPropertyDefinition = (
	| NewTypeHandler
	| EntityPropertyDefinitionUnion
	| EntityPropertyDefinitionNullable
	| EntityPropertyDefinitionArray
	| EntityPropertyDefinitionStructure
);

export const entityPropertyUnionKind = createCleanKind("entity-property-union");

export interface EntityPropertyDefinitionUnion<
	GenericPropertyDefinition extends AnyTuple<EntityPropertyDefinition> = AnyTuple<EntityPropertyDefinition>,
> extends
	Kind<typeof entityPropertyUnionKind.definition>,
	WrappedValue<GenericPropertyDefinition> {

}

export const entityPropertyNullableKind = createCleanKind("entity-property-nullable");

export interface EntityPropertyDefinitionNullable<
	GenericPropertyDefinition extends EntityPropertyDefinition = EntityPropertyDefinition,
> extends
	Kind<typeof entityPropertyNullableKind.definition>,
	WrappedValue<GenericPropertyDefinition> {

}

export interface EntityPropertyDefinitionArrayParams {
	readonly min?: number;
	readonly max?: number;
}

export const entityPropertyArrayKind = createCleanKind<
	"entity-property-array",
	EntityPropertyDefinitionArrayParams
>("entity-property-array");

export interface EntityPropertyDefinitionArray<
	GenericPropertyDefinition extends EntityPropertyDefinition = EntityPropertyDefinition,
	GenericParams extends EntityPropertyDefinitionArrayParams = EntityPropertyDefinitionArrayParams,
> extends
	Kind<typeof entityPropertyArrayKind.definition, GenericParams>,
	WrappedValue<GenericPropertyDefinition> {

}

export const entityPropertyStructureKind = createCleanKind("entity-property-structure");

export interface EntityPropertyDefinitionStructure<
	GenericPropertyDefinition extends Record<string, EntityPropertyDefinition>
	= Record<string, EntityPropertyDefinition>,
> extends
	Kind<typeof entityPropertyStructureKind.definition>,
	WrappedValue<GenericPropertyDefinition> {

}

export type EntityProperty<
	GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition,
> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true
	? unknown
	: GenericProperty extends NewTypeHandler
		? GetNewType<GenericProperty>
		: GenericProperty extends EntityPropertyDefinitionUnion
			? EntityProperty<Unwrap<GenericProperty>[number]>
			: GenericProperty extends EntityPropertyDefinitionNullable
				? EntityProperty<Unwrap<GenericProperty>> | null
				: GenericProperty extends EntityPropertyDefinitionArray
					? GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"] extends number
						? EntityProperty<Unwrap<GenericProperty>> extends infer InferredEntityProperty
							? readonly [
								...DArray.CreateTuple<
									InferredEntityProperty,
									GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"]
								>,
								...InferredEntityProperty[],
							]
							: never
						: readonly EntityProperty<Unwrap<GenericProperty>>[]
					: GenericProperty extends EntityPropertyDefinitionStructure
						? Unwrap<GenericProperty> extends infer InferredShape extends Record<string, any>
							? {
								readonly [Prop in keyof InferredShape]: EntityProperty<
									InferredShape[Prop]
								>
							}
							: never
						: never;

export type EntityRawProperty<
	GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition,
> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true
	? any
	: GenericProperty extends NewTypeHandler
		? Unwrap<GetNewType<GenericProperty>>
		: GenericProperty extends EntityPropertyDefinitionUnion
			? EntityRawProperty<Unwrap<GenericProperty>[number]>
			: GenericProperty extends EntityPropertyDefinitionNullable
				? EntityRawProperty<Unwrap<GenericProperty>> | null
				: GenericProperty extends EntityPropertyDefinitionArray
					? GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"] extends number
						? EntityRawProperty<Unwrap<GenericProperty>> extends infer InferredEntityProperty
							? readonly [
								...DArray.CreateTuple<
									InferredEntityProperty,
									GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"]
								>,
								...InferredEntityProperty[],
							]
							: never
						: readonly EntityRawProperty<Unwrap<GenericProperty>>[]
					: GenericProperty extends EntityPropertyDefinitionStructure
						? Unwrap<GenericProperty> extends infer InferredEntityShape extends Record<string, any>
							? {
								readonly [Prop in keyof InferredEntityShape]: EntityRawProperty<
									InferredEntityShape[Prop]
								>
							}
							: never
						: never;

export type EntityInputRawProperty<
	GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition,
> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true
	? any
	: GenericProperty extends NewTypeHandler<any, infer InferredValue, any, infer InferredInput>
		? IsEqual<InferredInput, never> extends true
			? InferredValue
			: InferredInput
		: GenericProperty extends EntityPropertyDefinitionUnion
			? EntityInputRawProperty<Unwrap<GenericProperty>[number]>
			: GenericProperty extends EntityPropertyDefinitionNullable
				? EntityInputRawProperty<Unwrap<GenericProperty>> | null
				: GenericProperty extends EntityPropertyDefinitionArray
					? readonly EntityInputRawProperty<Unwrap<GenericProperty>>[]
					: GenericProperty extends EntityPropertyDefinitionStructure
						? Unwrap<GenericProperty> extends infer InferredShape extends Record<string, any>
							? {
								readonly [Prop in keyof InferredShape]: EntityInputRawProperty<
									InferredShape[Prop]
								>
							}
							: never
						: never;

export const entityPropertyDefinitionTools = {
	union<
		const GenericDefinitionValue extends AnyTuple<EntityPropertyDefinition>,
	>(
		...definitions: GenericDefinitionValue
	): EntityPropertyDefinitionUnion<GenericDefinitionValue> {
		return pipe(
			definitions,
			wrapValue,
			entityPropertyUnionKind.setTo,
		);
	},

	nullable<
		const GenericDefinitionValue extends EntityPropertyDefinition,
	>(
		definition: GenericDefinitionValue,
	): EntityPropertyDefinitionNullable<GenericDefinitionValue> {
		return pipe(
			definition,
			wrapValue,
			entityPropertyNullableKind.setTo,
		);
	},

	array<
		const GenericDefinitionValue extends EntityPropertyDefinition,
		const GenericParams extends EntityPropertyDefinitionArrayParams = {},
	>(
		definition: GenericDefinitionValue,
		params: GenericParams = {} as GenericParams,
	): EntityPropertyDefinitionArray<GenericDefinitionValue, GenericParams> {
		return pipe(
			definition,
			wrapValue,
			(value) => entityPropertyArrayKind.setTo(
				value,
				params,
			),
		);
	},

	structure<
		const GenericDefinitionValue extends Record<string, EntityPropertyDefinition>,
	>(
		definition: GenericDefinitionValue,
	): EntityPropertyDefinitionStructure<GenericDefinitionValue> {
		return pipe(
			definition,
			wrapValue,
			entityPropertyStructureKind.setTo,
		);
	},
};

export function entityPropertyDefinitionToDataParser(
	propertyDefinition: EntityPropertyDefinition,
	treatNewTypeHandler: (newTypeHandler: NewTypeHandler) => DDataParser.DataParser,
): DDataParser.DataParser {
	return pipe(
		propertyDefinition,
		DPattern.when(
			newTypeHandlerKind.has,
			treatNewTypeHandler,
		),
		DPattern.when(
			entityPropertyUnionKind.has,
			(union) => {
				const [firstInnerProperty, ...restInnerProperty] = unwrap(union);
				return DDataParser.union([
					entityPropertyDefinitionToDataParser(
						firstInnerProperty,
						treatNewTypeHandler,
					),
					...DArray.map(
						restInnerProperty,
						(innerProperty) => entityPropertyDefinitionToDataParser(
							innerProperty,
							treatNewTypeHandler,
						),
					),
				]);
			},
		),
		DPattern.when(
			entityPropertyNullableKind.has,
			(nullable) => DDataParser.nullable(
				entityPropertyDefinitionToDataParser(
					unwrap(nullable),
					treatNewTypeHandler,
				),
			),
		),
		DPattern.when(
			entityPropertyArrayKind.has,
			(array) => {
				const params = entityPropertyArrayKind.getValue(array);

				return DDataParser.array(
					entityPropertyDefinitionToDataParser(
						unwrap(array),
						treatNewTypeHandler,
					),
					{
						checkers: [
							...(
								params.min !== undefined
									? [DDataParser.checkerArrayMin(params.min)]
									: []
							),
							...(
								params.max !== undefined
									? [DDataParser.checkerArrayMax(params.max)]
									: []
							),
						],
					},
				);
			},
		),
		DPattern.when(
			entityPropertyStructureKind.has,
			(structure) => pipe(
				structure,
				unwrap,
				DObject.entries,
				DArray.map(
					([key, value]) => DObject.entry(
						key,
						entityPropertyDefinitionToDataParser(
							value,
							treatNewTypeHandler,
						),
					),
				),
				DObject.fromEntries,
				DDataParser.object,
			),
		),
		DPattern.exhaustive,
	);
}

