import { type GetPropsWithValueExtends } from "@scripts/object";
import { createGlobalStore } from "./globalStore";
import { type Adaptor, type AnyFunction } from "./types";
import { createKindNamespace, type Kind, type GetKindValue } from "./kind";
import { wrapValue, type WrappedValue } from "./wrapValue";
import { unwrap } from "./unwrap";

const SymbolBuilderStore = Symbol.for("@duplojs/utils/builder");

declare module "./globalStore" {
	interface GlobalStore {
		[SymbolBuilderStore]: Record<
			string,
			Record<string, Parameters<BuilderHandler["set"]>[1]>
		>;
	}
}

const builderStore = createGlobalStore(SymbolBuilderStore, {});

const createBuilderKind = createKindNamespace(
	// @ts-expect-error reserved kind
	"DuplojsUtilsBuilder",
);

export const builderKind = createBuilderKind<
	"base",
	object
>("base");

export interface Builder<
	GenericAccumulator extends object = object,
> extends Kind<
		typeof builderKind.definition,
		GenericAccumulator
	> {

}

const builderNextKind = createBuilderKind("next");

interface BuilderNext<
	GenericValue extends object = object,
>extends
	WrappedValue<GenericValue>,
	Kind<typeof builderNextKind.definition> {

}

export interface BuilderHandlerSetFunctionParams<
	GenericArgs extends unknown[],
	GenericValue extends object,
> {
	args: GenericArgs;
	accumulator: GenericValue;
	next(
		newAccumulator: GenericValue
	): BuilderNext<
		GenericValue
	>;
}

export interface BuilderHandler<
	GenericBuilder extends Builder = Builder,
> {
	set<
		GenericMethodName extends GetPropsWithValueExtends<GenericBuilder, AnyFunction>,
		GenericMethod extends Adaptor<GenericBuilder[GenericMethodName], AnyFunction>,
	>(
		method: GenericMethodName,
		theFunction: (
			params: BuilderHandlerSetFunctionParams<
				Parameters<GenericMethod>,
				GetKindValue<typeof builderKind, GenericBuilder>
			>
		) => ReturnType<GenericMethod> extends GenericBuilder
			? BuilderNext<
				GetKindValue<typeof builderKind, GenericBuilder>
			>
			: ReturnType<GenericMethod>
	): BuilderHandler<GenericBuilder>;

	use<
		GenericCurrentBuilder extends GenericBuilder,
	>(
		accumulator: GetKindValue<typeof builderKind, GenericBuilder>
	): GenericCurrentBuilder;
}

const kind = "kind-missing-builder-methods-error";

export class MissingBuilderMethodsError extends Error {
	public constructor(
		public method: string,
	) {
		super(`Missing builder method: ${method}`);
	}

	public [kind] = null as unknown;

	public static instanceof(value: unknown): value is MissingBuilderMethodsError {
		return typeof value === "object"
			&& value?.constructor?.name === "MissingBuilderMethodsError"
			&& kind in value;
	}
}

export function createBuilder<
	GenericBuilder extends Builder,
>(
	builderName: string,
) {
	const store = builderStore.value[builderName] ?? {};

	builderStore.set({
		...builderStore.value,
		[builderName]: store,
	});

	const builderHandler: BuilderHandler<GenericBuilder> = {
		set(
			method,
			theFunction,
		) {
			store[method] = theFunction as never;

			return builderHandler;
		},
		use(
			accumulator,
		) {
			return new Proxy(
				builderKind.addTo(
					store,
					accumulator,
				),
				{
					get(target, prop: string) {
						if (prop === builderKind.runTimeKey) {
							return target[prop];
						}

						if (!target[prop]) {
							throw new MissingBuilderMethodsError(prop);
						}

						const theFunction = target[prop];

						return (...args: never) => {
							const result = theFunction({
								args,
								accumulator,
								next: (newAccumulator: object) => builderNextKind.addTo(
									wrapValue(newAccumulator),
								),
							});

							if (builderNextKind.has(result)) {
								return builderHandler.use(
									unwrap(result),
								);
							}

							return result;
						};
					},
				},
			) as never;
		},
	};

	return builderHandler;
}
