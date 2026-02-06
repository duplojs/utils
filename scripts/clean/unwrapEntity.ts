import { type GetKindValue, type SimplifyTopLevel, type Kind, unwrap, type Unwrap, type DeepReadonly, type TransformerFunction, type IsEqual, type Transformer, forward } from "@scripts/common";
import { entityKind, type Entity } from "./entity";
import { flagKind } from "./flag";

type ApplyTransformer<
	GenericValue extends unknown,
	GenericTransformer extends TransformerFunction,
> = IsEqual<GenericTransformer, never> extends true
	? GenericValue
	: GenericTransformer extends TransformerFunction<infer InferredMethodName>
		? Transformer<GenericValue, InferredMethodName>
		: never;

type UnwrapArrayProperties<
	GenericValue extends readonly any[],
	GenericTransformer extends TransformerFunction,
> = GenericValue extends readonly [infer InferredFirst, ...infer InferredRest]
	? (
		InferredRest extends readonly []
			? readonly []
			: UnwrapArrayProperties<InferredRest, GenericTransformer>
	) extends infer InferredResult extends readonly any[]
		? readonly [
			ApplyTransformer<
				Unwrap<InferredFirst>,
				GenericTransformer
			>,
			...InferredResult,
		]
		: never
	: readonly ApplyTransformer<
		Unwrap<GenericValue[number]>,
		GenericTransformer
	>[];

export type UnwrapEntity<
	GenericEntity extends Entity,
	GenericTransformer extends TransformerFunction = never,
> = SimplifyTopLevel<
	DeepReadonly<
		& {
			[Prop in Extract<keyof GenericEntity, string>]: GenericEntity[Prop] extends readonly any[]
				? UnwrapArrayProperties<GenericEntity[Prop], GenericTransformer>
				: ApplyTransformer<
					Unwrap<GenericEntity[Prop]>,
					GenericTransformer
				>
		}
		& {
			[Prop in "_entityName"]: GetKindValue<typeof entityKind, GenericEntity>
		}
		& (
			GenericEntity extends Kind<typeof flagKind.definition, any>
				? {
					[Prop in "_flags"]: SimplifyTopLevel<
						GetKindValue<typeof flagKind, GenericEntity>
					>
				}
				: {}
		)
	>
>;

/**
 * {@include clean/unwrapEntity/index.md}
 */
export function unwrapEntity<
	GenericEntity extends Entity,
	GenericTransformer extends TransformerFunction = never,
>(
	entity: GenericEntity,
	params?: { transformer?: GenericTransformer },
): UnwrapEntity<GenericEntity, GenericTransformer> {
	const transformer = params?.transformer ?? forward;
	const unwrapEntity: Record<string, unknown> = {};

	for (const prop in entity) {
		if (prop === entityKind.runTimeKey) {
			unwrapEntity._entityName = entity[prop];
		} else if (prop === flagKind.runTimeKey) {
			unwrapEntity._flags = entity[prop];
		} else if (entity[prop] instanceof Array) {
			const length = entity[prop].length;
			const result = [];
			for (let index = 0; index < length; index++) {
				result[index] = transformer(unwrap(entity[prop][index]));
			}

			unwrapEntity[prop] = result;
		} else {
			unwrapEntity[prop] = transformer(unwrap(entity[prop]));
		}
	}

	return unwrapEntity as never;
}
