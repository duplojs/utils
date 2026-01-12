import { createGlobalStore } from "./globalStore";
import { type Adaptor, type AnyFunction, type AnyValue } from "./types";
import type * as DObject from "@scripts/object";

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");

declare module "./globalStore" {
	interface GlobalStore {
		[SymbolOverrideStore]: Record<
			string,
			Record<string, unknown>
		>;
	}
}

const overrideStore = createGlobalStore(SymbolOverrideStore, {});

export interface OverrideHandler<
	GenericInterface extends object,
> {
	setMethod<
		GenericProperty extends DObject.GetPropsWithValueExtends<
			GenericInterface,
			AnyFunction
		>,
	>(
		prop: GenericProperty,
		theFunction: (
			self: GenericInterface,
			...args: Parameters<GenericInterface[GenericProperty]>
		) => ReturnType<GenericInterface[GenericProperty]>
	): void;

	setPropertyDefaultValue<
		GenericProperty extends Exclude<
			keyof GenericInterface,
			DObject.GetPropsWithValueExtends<
				GenericInterface,
				AnyFunction
			>
		>,
	>(
		prop: GenericProperty,
		value: Adaptor<GenericInterface[GenericProperty], AnyValue>
	): void;

	apply(overrideInterface: GenericInterface): GenericInterface;
}

/**
 * {@include common/override/index.md}
 */
export function createOverride<
	GenericInterface extends object,
>(
	overrideName: string,
): OverrideHandler<GenericInterface> {
	const overridePropertiesStore = overrideStore.value[overrideName] ?? {};
	overrideStore.value[overrideName] ||= overridePropertiesStore;
	let cachedStoreKey = Object.keys(overridePropertiesStore);

	return {
		setMethod(prop, theFunction) {
			overridePropertiesStore[prop] = theFunction;
			cachedStoreKey = Object.keys(overridePropertiesStore);
		},
		setPropertyDefaultValue(prop, value) {
			overridePropertiesStore[prop as string] = value;
			cachedStoreKey = Object.keys(overridePropertiesStore);
		},
		apply(overrideInterface) {
			const cachedOverrideProperties: Record<string, unknown> = {};

			const self = new Proxy(
				{},
				{
					get(target, prop: string) {
						if (overridePropertiesStore[prop]) {
							if (!cachedOverrideProperties[prop]) {
								cachedOverrideProperties[prop] = typeof overridePropertiesStore[prop] === "function"
									? (...args: unknown[]) => (
										overridePropertiesStore[prop] as AnyFunction
									)(self, ...args)
									: overridePropertiesStore[prop];
							}

							return cachedOverrideProperties[prop];
						}

						return overrideInterface[prop as keyof typeof overrideInterface];
					},
					ownKeys() {
						return [
							...Object.keys(overrideInterface),
							...cachedStoreKey,
						];
					},
					has(target, prop) {
						return Object.keys(overrideInterface).includes(prop as never)
							|| cachedStoreKey.includes(prop as never);
					},
					getOwnPropertyDescriptor() {
						return {
							enumerable: true,
							configurable: true,
						};
					},
				},
			);

			return self as never;
		},
	};
}
