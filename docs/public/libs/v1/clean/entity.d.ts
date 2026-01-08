import { type SimplifyTopLevel, type Kind, type Unwrap, type IsEqual, type IsExtends, type Or, type NeverCoalescing } from "../common";
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
    readonly name: GenericName;
    readonly propertiesDefinition: GenericPropertiesDefinition;
    readonly mapDataParser: DDataParser.Contract<EntityProperties<GenericPropertiesDefinition>, EntityRawProperties<GenericPropertiesDefinition>>;
    "new"<const GenericProperties extends EntityProperties<GenericPropertiesDefinition>>(properties: GenericProperties): Entity<GenericName> & GenericProperties;
    map(rawProperties: EntityRawProperties<GenericPropertiesDefinition>): (DEither.EitherRight<"createEntity", Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>> | DEither.EitherLeft<"createEntityError", DDataParser.DataParserError>);
    mapOrThrow(rawProperties: EntityRawProperties<GenericPropertiesDefinition>): Entity<GenericName> & EntityProperties<GenericPropertiesDefinition>;
    is<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Entity<GenericName>>;
}
declare const CreateEntityError_base: new (params: {
    "@DuplojsUtilsError/create-entity-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../common").KindDefinition<"create-entity-error", unknown>, unknown> & Kind<import("../common").KindDefinition<"@DuplojsUtilsError/create-entity-error", unknown>, unknown>;
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
export declare function createEntity<GenericName extends string, const GenericPropertiesDefinition extends EntityPropertiesDefinition>(name: GenericName, getPropertiesDefinition: (params: PropertiesDefinitionParams) => GenericPropertiesDefinition & DObject.ForbiddenKey<GenericPropertiesDefinition, "_entityName" | "_flags">): EntityHandler<GenericName, GenericPropertiesDefinition>;
export type GetEntity<GenericEntityHandler extends EntityHandler<string, any>> = Extract<ReturnType<GenericEntityHandler["new"]>, any>;
export {};
