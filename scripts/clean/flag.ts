import { type Kind, type IsEqual, type Or, type GetKindValue, createOverride, pipe, type AnyFunction, type RemoveKind } from "@scripts/common";
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

	/**
	 * {@include clean/createFlag/name.md}
	 */
	readonly name: GenericName;

	/**
	 * {@include clean/createFlag/append.md}
	 */
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

	/**
	 * {@include clean/createFlag/getValue.md}
	 */
	getValue<
		GenericInputEntity extends GenericEntity & Flag<GenericName, GenericValue>,
	>(
		entity: GenericInputEntity
	): GetKindValue<
		typeof flagKind,
		GenericInputEntity
	>[GenericName];

	has<
		GenericInputEntity extends GenericEntity,
	>(
		entity: GenericInputEntity
	): Extract<
		GenericInputEntity,
		Flag<GenericName, any>
	>;
}

export interface Flag<
	GenericName extends string = string,
	GenericValue extends unknown = never,
> extends Kind<
		typeof flagKind.definition,
		Record<GenericName, GenericValue>
	> {

}

/**
 * {@include clean/createFlag/index.md}
 */
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
	return pipe(
		{
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
			getValue(entity: Entity) {
				return flagKind.getValue(entity as never)[name];
			},
			has(entity: Entity) {
				return flagKind.has(entity as never)
				&& name in flagKind.getValue(entity as never);
			},
		} satisfies Record<keyof RemoveKind<FlagHandler>, unknown>,
		flagHandlerKind.setTo,
		createFlag.overrideHandler.apply as AnyFunction,
	);
}

createFlag.overrideHandler = createOverride<FlagHandler>("@duplojs/utils/clean/flag");

export type GetFlag<
	GenericHandler extends FlagHandler<any, any, any>,
> = Extract<
	Flag<
		GenericHandler["name"],
		ReturnType<GenericHandler["getValue"]>
	>,
	any
>;
