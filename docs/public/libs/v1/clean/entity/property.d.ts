import { type GetNewType, type NewTypeHandler } from "../newType";
import { type WrappedValue, type Kind, type AnyTuple, type Unwrap, type GetKindValue, type IsEqual } from "../../common";
import * as DDataParser from "../../dataParser";
import * as DArray from "../../array";
export type EntityPropertyDefinition = (NewTypeHandler | EntityPropertyDefinitionUnion | EntityPropertyDefinitionNullable | EntityPropertyDefinitionArray | EntityPropertyDefinitionStructure | EntityPropertyDefinitionIdentifier);
export declare const entityPropertyUnionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-property-union", unknown>>;
export interface EntityPropertyDefinitionUnion<GenericPropertyDefinition extends AnyTuple<EntityPropertyDefinition> = AnyTuple<EntityPropertyDefinition>> extends Kind<typeof entityPropertyUnionKind.definition>, WrappedValue<GenericPropertyDefinition> {
}
export declare const entityPropertyNullableKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-property-nullable", unknown>>;
export interface EntityPropertyDefinitionNullable<GenericPropertyDefinition extends EntityPropertyDefinition = EntityPropertyDefinition> extends Kind<typeof entityPropertyNullableKind.definition>, WrappedValue<GenericPropertyDefinition> {
}
export interface EntityPropertyDefinitionArrayParams {
    readonly min?: number;
    readonly max?: number;
}
export declare const entityPropertyArrayKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-property-array", EntityPropertyDefinitionArrayParams>>;
export interface EntityPropertyDefinitionArray<GenericPropertyDefinition extends EntityPropertyDefinition = EntityPropertyDefinition, GenericParams extends EntityPropertyDefinitionArrayParams = EntityPropertyDefinitionArrayParams> extends Kind<typeof entityPropertyArrayKind.definition, GenericParams>, WrappedValue<GenericPropertyDefinition> {
}
export declare const entityPropertyStructureKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-property-structure", unknown>>;
export interface EntityPropertyDefinitionStructure<GenericPropertyDefinition extends Record<string, EntityPropertyDefinition> = Record<string, EntityPropertyDefinition>> extends Kind<typeof entityPropertyStructureKind.definition>, WrappedValue<GenericPropertyDefinition> {
}
export declare const entityPropertyIdentifierKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/entity-property-identifier", unknown>>;
export interface EntityPropertyDefinitionIdentifier<GenericPropertyDefinition extends string = string> extends Kind<typeof entityPropertyIdentifierKind.definition>, WrappedValue<GenericPropertyDefinition> {
}
export type EntityProperty<GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true ? unknown : GenericProperty extends NewTypeHandler ? GetNewType<GenericProperty> : GenericProperty extends EntityPropertyDefinitionUnion ? EntityProperty<Unwrap<GenericProperty>[number]> : GenericProperty extends EntityPropertyDefinitionNullable ? EntityProperty<Unwrap<GenericProperty>> | null : GenericProperty extends EntityPropertyDefinitionIdentifier ? Unwrap<GenericProperty> : GenericProperty extends EntityPropertyDefinitionArray ? GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"] extends number ? EntityProperty<Unwrap<GenericProperty>> extends infer InferredEntityProperty ? readonly [
    ...DArray.CreateTuple<InferredEntityProperty, GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"]>,
    ...InferredEntityProperty[]
] : never : readonly EntityProperty<Unwrap<GenericProperty>>[] : GenericProperty extends EntityPropertyDefinitionStructure ? Unwrap<GenericProperty> extends infer InferredShape extends Record<string, any> ? {
    readonly [Prop in keyof InferredShape]: EntityProperty<InferredShape[Prop]>;
} : never : never;
export type EntityRawProperty<GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true ? any : GenericProperty extends NewTypeHandler ? Unwrap<GetNewType<GenericProperty>> : GenericProperty extends EntityPropertyDefinitionUnion ? EntityRawProperty<Unwrap<GenericProperty>[number]> : GenericProperty extends EntityPropertyDefinitionNullable ? EntityRawProperty<Unwrap<GenericProperty>> | null : GenericProperty extends EntityPropertyDefinitionIdentifier ? Unwrap<GenericProperty> : GenericProperty extends EntityPropertyDefinitionArray ? GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"] extends number ? EntityRawProperty<Unwrap<GenericProperty>> extends infer InferredEntityProperty ? readonly [
    ...DArray.CreateTuple<InferredEntityProperty, GetKindValue<typeof entityPropertyArrayKind, GenericProperty>["min"]>,
    ...InferredEntityProperty[]
] : never : readonly EntityRawProperty<Unwrap<GenericProperty>>[] : GenericProperty extends EntityPropertyDefinitionStructure ? Unwrap<GenericProperty> extends infer InferredEntityShape extends Record<string, any> ? {
    readonly [Prop in keyof InferredEntityShape]: EntityRawProperty<InferredEntityShape[Prop]>;
} : never : never;
export type EntityInputRawProperty<GenericProperty extends EntityPropertyDefinition = EntityPropertyDefinition> = IsEqual<GenericProperty, EntityPropertyDefinition> extends true ? any : GenericProperty extends NewTypeHandler<any, infer InferredValue, any, infer InferredInput> ? IsEqual<InferredInput, never> extends true ? InferredValue : InferredInput : GenericProperty extends EntityPropertyDefinitionUnion ? EntityInputRawProperty<Unwrap<GenericProperty>[number]> : GenericProperty extends EntityPropertyDefinitionNullable ? EntityInputRawProperty<Unwrap<GenericProperty>> | null : GenericProperty extends EntityPropertyDefinitionIdentifier ? Unwrap<GenericProperty> : GenericProperty extends EntityPropertyDefinitionArray ? readonly EntityInputRawProperty<Unwrap<GenericProperty>>[] : GenericProperty extends EntityPropertyDefinitionStructure ? Unwrap<GenericProperty> extends infer InferredShape extends Record<string, any> ? {
    readonly [Prop in keyof InferredShape]: EntityInputRawProperty<InferredShape[Prop]>;
} : never : never;
export declare const entityPropertyDefinitionTools: {
    union<const GenericDefinitionValue extends AnyTuple<EntityPropertyDefinition>>(...definitions: GenericDefinitionValue): EntityPropertyDefinitionUnion<GenericDefinitionValue>;
    nullable<const GenericDefinitionValue extends EntityPropertyDefinition>(definition: GenericDefinitionValue): EntityPropertyDefinitionNullable<GenericDefinitionValue>;
    array<const GenericDefinitionValue extends EntityPropertyDefinition, const GenericParams extends EntityPropertyDefinitionArrayParams = {}>(definition: GenericDefinitionValue, params?: GenericParams): EntityPropertyDefinitionArray<GenericDefinitionValue, GenericParams>;
    structure<const GenericDefinitionValue extends Record<string, EntityPropertyDefinition>>(definition: GenericDefinitionValue): EntityPropertyDefinitionStructure<GenericDefinitionValue>;
    identifier<const GenericDefinitionValue extends string>(definition: GenericDefinitionValue): EntityPropertyDefinitionIdentifier<GenericDefinitionValue>;
};
export declare function entityPropertyDefinitionToDataParser(propertyDefinition: EntityPropertyDefinition, treatNewTypeHandler: (newTypeHandler: NewTypeHandler) => DDataParser.DataParser): DDataParser.DataParser;
