import { type Unwrap, type WrappedValue, type IsEqual, type Transformer, type TransformerFunction, type SimplifyTopLevel, type DeepReadonly, type GetKindValue, type Kind, unwrap, isWrappedValue } from "@scripts/common";
import { entityKind, type Entity } from ".";
import { flagKind } from "../flag";

export type UnwrapEntityProperty<
	GenericProperty extends unknown,
	GenericTransformer extends TransformerFunction = never,
> = GenericProperty extends WrappedValue
	? IsEqual<GenericTransformer, never> extends true
		? Unwrap<GenericProperty>
		: GenericTransformer extends TransformerFunction<infer InferredMethodName>
			? Transformer<Unwrap<GenericProperty>, InferredMethodName>
			: never
	: GenericProperty extends null
		? null
		: GenericProperty extends string
			? GenericProperty
			: GenericProperty extends readonly [infer InferredFirst, ...infer InferredRest]
				? readonly [
					UnwrapEntityProperty<InferredFirst, GenericTransformer>,
					...UnwrapEntityProperty<InferredRest, GenericTransformer>,
				]
				: GenericProperty extends readonly []
					? readonly []
					: GenericProperty extends readonly unknown[]
						? readonly UnwrapEntityProperty<GenericProperty[number], GenericTransformer>[]
						: GenericProperty extends Record<string, unknown>
							? {
								[Prop in keyof GenericProperty]: UnwrapEntityProperty<
									GenericProperty[Prop],
									GenericTransformer
								>
							}
							: GenericProperty;

export type UnwrapEntity<
	GenericEntity extends Entity,
	GenericTransformer extends TransformerFunction = never,
> = SimplifyTopLevel<
	DeepReadonly<
		& {
			[Prop in Extract<keyof GenericEntity, string>]: UnwrapEntityProperty<
				GenericEntity[Prop],
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
export function unwrapEntityProperty<
	GenericProperty extends unknown,
	GenericTransformer extends TransformerFunction = never,
>(
	property: GenericProperty,
	params?: { transformer?: GenericTransformer },
): UnwrapEntityProperty<GenericProperty, GenericTransformer> {
	if (isWrappedValue(property)) {
		return params?.transformer
			? params.transformer(unwrap(property) as never)
			: unwrap(property) as never;
	} else if (property === null) {
		return property as never;
	} else if (typeof property === "string") {
		return property as never;
	} else if (property instanceof Array) {
		const length = property.length;
		const result = [];
		for (let index = 0; index < length; index++) {
			result[index] = unwrapEntityProperty(
				property[index],
				params,
			);
		}

		return result as never;
	} else if (
		typeof property === "object"
		&& (
			!property.constructor
			|| property.constructor.name === "Object"
		)
	) {
		const result: Record<string, unknown> = {};

		for (const key in property) {
			result[key as string] = unwrapEntityProperty(
				property[key as never],
				params,
			);
		}

		return result as never;
	} else {
		return property as never;
	}
}

export function unwrapEntity<
	GenericEntity extends Entity,
	GenericTransformer extends TransformerFunction = never,
>(
	entity: GenericEntity,
	params?: { transformer?: GenericTransformer },
): UnwrapEntity<GenericEntity, GenericTransformer> {
	const unwrapEntity: Record<string, unknown> = {};

	for (const prop in entity) {
		if (prop === entityKind.runTimeKey) {
			unwrapEntity._entityName = entity[prop];
		} else if (prop === flagKind.runTimeKey) {
			unwrapEntity._flags = entity[prop];
		} else {
			unwrapEntity[prop] = unwrapEntityProperty(entity[prop], params);
		}
	}

	return unwrapEntity as never;
}
