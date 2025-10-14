import { type Or, type IsEqual, type BreakGenericLink } from "./types";
import { keyWrappedValue } from "./wrapValue";

export interface KindHandler<
	GenericKindDefinition extends KindDefinition,
> {
	definition: GenericKindDefinition;

	runTimeKey: string;

	has<
		GenericInput extends unknown,
	>(
		input: GenericInput,
	): input is Extract<
		GenericInput,
		Kind<GenericKindDefinition, GenericKindDefinition["value"]>
	>;

	addTo<
		GenericInput extends {},
		GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"],
	>(
		...args: Or<[
			IsEqual<GenericValue, never>,
			IsEqual<GenericValue, unknown>,
			IsEqual<GenericValue, any>,
		]> extends true
			? [input: GenericInput, value?: GenericValue]
			: [input: GenericInput, value: GenericValue]

	): Kind<
		GenericKindDefinition,
		GenericValue
	> & BreakGenericLink<GenericInput>;

	getValue<
		GenericKind extends Kind<
			GenericKindDefinition,
			GenericKindDefinition["value"]
		>,
	>(
		input: GenericKind,
	): GenericKind[SymbolKind][GenericKindDefinition["name"]];
}
export interface KindDefinition<
	GenericName extends string = string,
	GenericValue extends unknown = unknown,
> {
	name: GenericName;
	value: GenericValue;
}

const SymbolKind = Symbol.for("@duplojs/utils/kind");
type SymbolKind = typeof SymbolKind;

export interface Kind<
	GenericKindDefinition extends KindDefinition,
	GenericValue extends KindDefinition["value"] = KindDefinition["value"],
> {
	[SymbolKind]: {
		[Prop in GenericKindDefinition["name"]]: GenericValue
	};
}

export const keyKindPrefix = `${keyWrappedValue}/kind/`;

export function createKind<
	GenericName extends string,
	GenericKindValue extends unknown = unknown,
>(
	name: GenericName,
) {
	type $<
		GenericName extends string,
	> = KindDefinition<
		GenericName,
		GenericKindValue
	>;

	const runTimeKey = `${keyKindPrefix}${name}`;

	return {
		definition: undefined as never,
		runTimeKey,
		addTo(
			input,
			value = null as never,
		) {
			return {
				...input,
				[runTimeKey]: value,
			} as never;
		},
		has(input): input is never {
			return input
			&& typeof input === "object"
			&& runTimeKey in input;
		},
		getValue(input) {
			return input[runTimeKey as never];
		},
	} satisfies KindHandler<$<GenericName>> as KindHandler<$<GenericName>>;
}
