import { type GetKindValue, type SimplifyTopLevel, type Kind, type Unwrap, type DeepReadonly, type TransformerFunction, type IsEqual, type Transformer } from "../common";
import { entityKind, type Entity } from "./entity";
import { flagKind } from "./flag";
type ApplyTransformer<GenericValue extends unknown, GenericTransformer extends TransformerFunction> = IsEqual<GenericTransformer, never> extends true ? GenericValue : GenericTransformer extends TransformerFunction<infer InferredMethodName> ? Transformer<GenericValue, InferredMethodName> : never;
type UnwrapArrayProperties<GenericValue extends readonly any[], GenericTransformer extends TransformerFunction> = GenericValue extends readonly [infer InferredFirst, ...infer InferredRest] ? (InferredRest extends readonly [] ? readonly [] : UnwrapArrayProperties<InferredRest, GenericTransformer>) extends infer InferredResult extends readonly any[] ? readonly [
    ApplyTransformer<Unwrap<InferredFirst>, GenericTransformer>,
    ...InferredResult
] : never : readonly ApplyTransformer<Unwrap<GenericValue[number]>, GenericTransformer>[];
export type UnwrapEntity<GenericEntity extends Entity, GenericTransformer extends TransformerFunction = never> = SimplifyTopLevel<DeepReadonly<{
    [Prop in Extract<keyof GenericEntity, string>]: GenericEntity[Prop] extends readonly any[] ? UnwrapArrayProperties<GenericEntity[Prop], GenericTransformer> : ApplyTransformer<Unwrap<GenericEntity[Prop]>, GenericTransformer>;
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
export declare function unwrapEntity<GenericEntity extends Entity, GenericTransformer extends TransformerFunction = never>(entity: GenericEntity, params?: {
    transformer?: GenericTransformer;
}): UnwrapEntity<GenericEntity, GenericTransformer>;
export {};
