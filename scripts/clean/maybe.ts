import * as DEither from "@scripts/either";
import { type Entity, entityKind } from "./entity";
import { type GetKindValue } from "@scripts/common";

export interface Some<
	GenericEntity extends Entity = Entity,
> extends DEither.Right<
		`some-${GetKindValue<typeof entityKind, GenericEntity>}`,
		GenericEntity
	> {}

export interface None<
	GenericEntityName extends string = string,
> extends DEither.Left<
		`none-${GenericEntityName}`,
		null
	> {}

/**
 * {@include clean/maybe/index.md}
 */
export type Maybe<
	GenericEntity extends Entity = Entity,
> = (
	| Some<GenericEntity>
	| None<GetKindValue<typeof entityKind, GenericEntity>>
);

/**
 * {@include clean/some/index.md}
 */
export function some<
	GenericEntity extends Entity,
>(
	entity: GenericEntity,
): Some<GenericEntity> {
	return DEither.right(`some-${entityKind.getValue(entity)}`, entity);
}

/**
 * {@include clean/none/index.md}
 */
export function none<
	GenericEntityName extends string,
>(
	entityName: GenericEntityName,
): None<GenericEntityName> {
	return DEither.left(`none-${entityName}`, null);
}
