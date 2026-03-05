import { type Unwrap, type WrappedValue, type IsEqual, type Transformer, type TransformerFunction, type SimplifyTopLevel, type DeepReadonly, type GetKindValue, type Kind } from "../../common";
import { entityKind, type Entity } from ".";
import { flagKind } from "../flag";
export type UnwrapEntityProperty<GenericProperty extends unknown, GenericTransformer extends TransformerFunction = never> = GenericProperty extends WrappedValue ? IsEqual<GenericTransformer, never> extends true ? Unwrap<GenericProperty> : GenericTransformer extends TransformerFunction<infer InferredMethodName> ? Transformer<Unwrap<GenericProperty>, InferredMethodName> : never : GenericProperty extends null ? null : GenericProperty extends string ? GenericProperty : GenericProperty extends readonly [infer InferredFirst, ...infer InferredRest] ? readonly [
    UnwrapEntityProperty<InferredFirst, GenericTransformer>,
    ...UnwrapEntityProperty<InferredRest, GenericTransformer>
] : GenericProperty extends readonly [] ? readonly [] : GenericProperty extends readonly unknown[] ? readonly UnwrapEntityProperty<GenericProperty[number], GenericTransformer>[] : GenericProperty extends Record<string, unknown> ? {
    [Prop in keyof GenericProperty]: UnwrapEntityProperty<GenericProperty[Prop], GenericTransformer>;
} : GenericProperty;
export type UnwrapEntity<GenericEntity extends Entity, GenericTransformer extends TransformerFunction = never> = SimplifyTopLevel<DeepReadonly<{
    [Prop in Extract<keyof GenericEntity, string>]: UnwrapEntityProperty<GenericEntity[Prop], GenericTransformer>;
} & {
    [Prop in "_entityName"]: GetKindValue<typeof entityKind, GenericEntity>;
} & (GenericEntity extends Kind<typeof flagKind.definition, any> ? {
    [Prop in "_flags"]: SimplifyTopLevel<GetKindValue<typeof flagKind, GenericEntity>>;
} : {})>>;
/**
 * Unwraps a `Clean` entity into a readonly plain object.
 * 
 * Signature: `unwrapEntity(entity, params?)` → unwrapped object
 * 
 * By default, wrapped values are unwrapped as-is. You can pass a transformer (for example `toNative` or `toJSON`) to project values during unwrapping.
 * 
 * ```ts
 * const Id = C.createNewType("userId", DP.number());
 * const Name = C.createNewType("userName", DP.string());
 * const Birth = C.createNewType("userBirth", DP.date());
 * const TimeSpent = C.createNewType("userTimeSpent", DP.time());
 * 
 * const User = C.createEntity("User", () => ({
 * 	id: Id,
 * 	name: Name,
 * 	birth: Birth,
 * 	timeSpent: TimeSpent,
 * }));
 * 
 * const entity = User.new({
 * 	id: Id.createOrThrow(1),
 * 	name: Name.createOrThrow("Ada"),
 * 	birth: Birth.createOrThrow(D.create("2024-01-01")),
 * 	timeSpent: TimeSpent.createOrThrow(D.createTime(30, "minute")),
 * });
 * 
 * const unwrapped = C.unwrapEntity(entity);
 * // unwrapped.birth: TheDate, unwrapped.timeSpent: TheTime
 * 
 * const asJSON = C.unwrapEntity(entity, { transformer: toJSON });
 * // asJSON.birth: SerializedTheDate, asJSON.timeSpent: SerializedTheTime
 * 
 * const asNative = C.unwrapEntity(entity, { transformer: toNative });
 * // asNative.birth: Date, asNative.timeSpent: number
 * ```
 * 
 * @remarks
 * - The result always contains `_entityName`.
 * - If the entity has flags, `_flags` is also included.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/unwrapEntity
 * 
 * @namespace C
 * 
 */
export declare function unwrapEntityProperty<GenericProperty extends unknown, GenericTransformer extends TransformerFunction = never>(property: GenericProperty, params?: {
    transformer?: GenericTransformer;
}): UnwrapEntityProperty<GenericProperty, GenericTransformer>;
export declare function unwrapEntity<GenericEntity extends Entity, GenericTransformer extends TransformerFunction = never>(entity: GenericEntity, params?: {
    transformer?: GenericTransformer;
}): UnwrapEntity<GenericEntity, GenericTransformer>;
