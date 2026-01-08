import { type GetKindValue, type SimplifyTopLevel, type Kind, unwrap, type Unwrap, type DeepReadonly } from "@scripts/common";
import { entityKind, type Entity } from "./entity";
import { flagKind } from "./flag";

type UnwrapArrayProperties<
	GenericValue extends readonly any[],
> = GenericValue extends readonly [infer InferredFirst, ...infer InferredRest]
	? (
		InferredRest extends readonly []
			? readonly []
			: UnwrapArrayProperties<InferredRest>
	) extends infer InferredResult extends readonly any[]
		? readonly [Unwrap<InferredFirst>, ...InferredResult]
		: never
	: readonly Unwrap<GenericValue[number]>[];

export type UnwrapEntity<
	GenericEntity extends Entity,
> = SimplifyTopLevel<
	DeepReadonly<
		& {
			[Prop in Extract<keyof GenericEntity, string>]: GenericEntity[Prop] extends readonly any[]
				? UnwrapArrayProperties<GenericEntity[Prop]>
				: Unwrap<GenericEntity[Prop]>
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

export function unwrapEntity<
	GenericEntity extends Entity,
>(
	entity: GenericEntity,
): UnwrapEntity<GenericEntity> {
	const unwrapEntity: Record<string, unknown> = {};

	for (const prop in entity) {
		if (prop === entityKind.runTimeKey) {
			unwrapEntity._entityName = entity[prop];
		} else if (prop === flagKind.runTimeKey) {
			unwrapEntity._flags = entity[prop];
		} else if (entity[prop] instanceof Array) {
			unwrapEntity[prop] = entity[prop].map(unwrap);
		} else {
			unwrapEntity[prop] = unwrap(entity[prop]);
		}
	}

	return unwrapEntity as never;
}
