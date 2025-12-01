import { type ForbiddenString } from "@scripts/string";
import { type Or, type IsEqual, type BreakGenericLink, type Adaptor, type UnionToIntersection, type ObjectKey, type AnyConstructor, type NeverCoalescing, type And, type Not, UnionContain } from "./types";
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

export const keyKindPrefix = "@duplojs/utils/kind/";

type ForbiddenKindCharacters<
	GenericValue extends string,
> = ForbiddenString<
	GenericValue,
	"@" | "/"
>;

export function createKind<
	GenericName extends string,
	GenericKindValue extends unknown = unknown,
>(
	name: GenericName & ForbiddenKindCharacters<GenericName>,
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

export interface ReservedKindNamespace {
	DuplojsUtilsEither: true;
	DuplojsUtilsDataParser: true;
	DuplojsUtilsBuilder: true;
	DuplojsUtilsError: true;
	DuplojsUtilsClean: true;
}

type ForbiddenKindNamespace<
	GenericValue extends string,
> = (
	& ForbiddenKindCharacters<GenericValue>
	& ForbiddenString<
		GenericValue,
		GetPropsWithValue<ReservedKindNamespace, true>
	>
);

export function createKindNamespace<
	GenericNamespace extends string,
>(
	namespace: GenericNamespace & ForbiddenKindNamespace<GenericNamespace>,
) {
	return <
		GenericName extends string,
		GenericKindValue extends unknown = unknown,
	>(
		name: GenericName & ForbiddenKindCharacters<GenericName>,
	) => {
		const kindHandler = createKind(`@${namespace}/${name}`);

		type $<
			GenericName extends string,
		> = KindDefinition<
			GenericName,
			GenericKindValue
		>;

		return kindHandler as KindHandler<$<`@${GenericNamespace}/${GenericName}`>>;
	};
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
	GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>,
>(
	uniqueName: GenericUniqueName & ForbiddenKindCharacters<GenericUniqueName>,
	kind: GenericKindHandler | GenericKindHandler[],
	parent?: GenericParent,
) {
	type $<
		GenericName extends string,
	> = KindDefinition<GenericName>;

	const uniqueKind = createKind(uniqueName as string) as KindHandler<$<GenericUniqueName>>;

	const kinds = kind instanceof Array
		? kind
		: [kind];

	type ParentKindClass = new(
		...args: And<[
			IsEqual<
				GenericKindHandler extends KindHandler
					? IsEqual<GenericKindHandler["definition"]["value"], unknown>
					: never,
				true
			>,
			IsEqual<InstanceType<GenericParent>, never>,
		]> extends true
			? [
				params?: KindHeritageConstructorParams<
					GenericKindHandler
				>,
			]
			: [
				params: KindHeritageConstructorParams<
					GenericKindHandler
				>,
				...parentArgs: IsEqual<ConstructorParameters<GenericParent>, unknown[]> extends true
					? [
						parentParams?: ConstructorParameters<GenericParent>,
					]
					: [
						parentParams: ConstructorParameters<GenericParent>,
					],
			]
	) => UnionToIntersection<
		| (
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		)
		| Kind<typeof uniqueKind.definition>
		| InstanceType<GenericParent>
	>;

	const Extendable = (parent ?? class {}) as AnyConstructor<any, {}>;

	const ParentKindClass = (class extends Extendable {
		[key: ObjectKey]: unknown

		public constructor(
			params: Record<string, unknown> = {},
			parentParams = [],
		) {
			super(...parentParams);

			for (const kind of kinds) {
				this[kind.runTimeKey] = params[kind.definition.name] ?? null;
			}
		}

		public static override [Symbol.hasInstance](value: unknown) {
			if (!uniqueKind.has(value)) {
				return false;
			}

			for (const kind of kinds) {
				if (!kind.has(value)) {
					return false;
				}
			}

			return true;
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

	return ParentKindClass as unknown as ParentKindClass;
}

export function isRuntimeKind(value: string) {
	return value.startsWith(keyKindPrefix);
}
