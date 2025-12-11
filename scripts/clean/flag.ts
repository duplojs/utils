import { type Kind, type IsEqual, type Or } from "@scripts/common";
import { type Entity } from "./entity";
import { createCleanKind } from "./kind";

const flagHandlerKind = createCleanKind("flag-handler");

export const flagKind = createCleanKind<
	"flag",
	Record<string, unknown>
>("flag");

export interface FlagHandler<
	GenericEntity extends Entity = Entity,
	GenericName extends string = string,
	GenericValue extends unknown = never,
> extends Kind<typeof flagHandlerKind.definition> {
	readonly name: GenericName;
	append<
		GenericInputEntity extends GenericEntity,
		GenericInputValue extends GenericValue,
	>(
		entity: GenericInputEntity,
		...args: IsEqual<
			GenericValue,
			never
		> extends true
			? []
			: [GenericInputValue]
	): (
		& GenericInputEntity
		& Flag<GenericName, GenericInputValue>
	);
}

export interface Flag<
	GenericName extends string = string,
	GenericValue extends unknown = never,
> extends Kind<
		typeof flagKind.definition,
		Record<GenericName, GenericValue>
	> {

}

export function createFlag<
	GenericEntity extends Entity = never,
	GenericName extends string = never,
	GenericValue extends unknown = never,
>(
	name: Or<[
		IsEqual<GenericEntity, never>,
		IsEqual<GenericName, never>,
	]> extends true
		? never
		: NoInfer<GenericName>,
): FlagHandler<
		GenericEntity,
		GenericName,
		GenericValue
	> {
	return flagHandlerKind.setTo({
		name,
		append(entity: Entity, value: any) {
			const flagValue = flagKind.has(entity)
				? {
					...(flagKind.getValue(entity) as object),
					[name]: value,
				}
				: { [name]: value };

			return flagKind.addTo(
				entity,
				flagValue,
			);
		},
	}) satisfies Record<keyof FlagHandler, unknown> as never;
}
