import { type Or, type IsEqual, type BreakGenericLink, type Adaptor, type UnionToIntersection, type ObjectKey, type AnyConstructor } from "./types";
import { keyWrappedValue } from "./wrapValue";
import { type GetPropsWithValue, type PartialKeys } from "@scripts/object";

export interface KindHandler<
	GenericKindDefinition extends KindDefinition = KindDefinition,
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

	/**
	 * @deprecated This method make mutation.
	 */
	setTo<
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
	GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"],
> {
	[SymbolKind]: {
		[Prop in GenericKindDefinition["name"]]: GenericValue
	};
}

export type RemoveKind<
	GenericObject extends Kind<any>,
> = Omit<GenericObject, SymbolKind>;

export type GetKindValue<
	GenericKindHandler extends KindHandler,
	GenericObject extends Kind<any>,
> = GenericObject[SymbolKind][GenericKindHandler["definition"]["name"]];

export type GetKindHandler<
	GenericObject extends Kind<any>,
> = {
	[Prop in keyof GenericObject[SymbolKind]]: KindHandler<
		KindDefinition<
			Adaptor<Prop, string>,
			GenericObject[SymbolKind][Prop]
		>
	>
}[keyof GenericObject[SymbolKind]];

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
		definition: {
			name,
			value: null as never,
		},
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
		setTo(
			input,
			value = null as never,
		) {
			(input as Record<string, any>)[runTimeKey] = value;

			return input as never;
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

export type KindHeritageConstructorParams<
	GenericKindHandler extends KindHandler,
> = {
	[
	KindHandler in GenericKindHandler as KindHandler["definition"]["name"]
	]: KindHandler["definition"]["value"]
} extends infer InferredResult extends object
	? PartialKeys<
		InferredResult,
		GetPropsWithValue<InferredResult, unknown>
	>
	: never;

export function kindHeritage<
	GenericUniqueName extends string,
	GenericKindHandler extends KindHandler,
>(
	uniqueName: GenericUniqueName,
	kind: GenericKindHandler | GenericKindHandler[],
) {
	const uniqueKind = createKind(uniqueName);

	const kinds = kind instanceof Array
		? kind
		: [kind];

	type ParentKindClass = new(
		...args: IsEqual<
			GenericKindHandler extends KindHandler
				? IsEqual<GenericKindHandler["definition"]["value"], unknown>
				: never,
			true
		> extends true
			? [
				params?: KindHeritageConstructorParams<
					GenericKindHandler
				>,
			]
			: [
				params: KindHeritageConstructorParams<
					GenericKindHandler
				>,
			]
	) => UnionToIntersection<
		| (
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		)
		| Kind<typeof uniqueKind.definition>
	>;

	const ParentKindClass = (function ParentKindClass(
		this: Record<string, unknown>,
		params: Record<string, unknown> = {},
	) {
		for (const kind of kinds) {
			this[kind.runTimeKey] = params[kind.definition.name] ?? null;
		}
	}) as unknown as {
		[Symbol.hasInstance](value: unknown): boolean;
		prototype: Record<ObjectKey, unknown>;
	};

	kinds.forEach(
		(value) => {
			ParentKindClass.prototype[value.runTimeKey] = null;
		},
	);

	ParentKindClass.prototype[uniqueKind.runTimeKey] = null;

	Object.defineProperty(
		ParentKindClass,
		Symbol.hasInstance,
		{
			value: (value: unknown) => {
				if (!uniqueKind.has(value)) {
					return false;
				}

				for (const kind of kinds) {
					if (!kind.has(value)) {
						return false;
					}
				}

				return true;
			},
		},
	);

	return ParentKindClass as unknown as ParentKindClass;
}

export function createKindNamespace<
	GenericPrefix extends string,
	GenericKindValue extends unknown = unknown,
>(prefix: GenericPrefix) {
	return <
		GenericName extends string,
	>(name: GenericName) => createKind<
		`${GenericPrefix}/${GenericName}`,
		GenericKindValue
	>(
		`${prefix}/${name}`,
	);
}

