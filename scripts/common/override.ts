
import { createGlobalStore } from "./globalStore";
import { type ObjectKey, type Adaptor, type AnyFunction, type AnyValue } from "./types";
import type * as DObject from "@scripts/object";

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");

declare module "./globalStore" {
	interface GlobalStore {
		[SymbolOverrideStore]: Record<
			string,
			Record<ObjectKey, unknown>
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
			const injectOverrideStoreFunction = overrideInterface[SymbolOverrideStore as never] as (
				| undefined
				| typeof injectOverrideStore
			);
			if (injectOverrideStoreFunction) {
				injectOverrideStoreFunction(overridePropertiesStore);
				return overrideInterface;
			}

			const overrideStoreList = [overridePropertiesStore];

			const cachedOverrideProperties: Record<ObjectKey, unknown> = {};
			function injectOverrideStore(overrideStore: Record<ObjectKey, unknown>) {
				overrideStoreList.unshift(overrideStore);
			}

			const proxyHandler = {
				get(_target: object, prop: ObjectKey): unknown {
					if (prop in overrideInterface) {
						return overrideInterface[prop as keyof typeof overrideInterface];
					}

					if (prop in cachedOverrideProperties) {
						return cachedOverrideProperties[prop];
					}

					for (const overrideStore of overrideStoreList) {
						if (prop in overrideStore) {
							cachedOverrideProperties[prop] = typeof overridePropertiesStore[prop] === "function"
								? (...args: unknown[]) => (
									overridePropertiesStore[prop] as AnyFunction
								)(self, ...args)
								: overridePropertiesStore[prop];

							return cachedOverrideProperties[prop];
						}
					}

					if (prop === SymbolOverrideStore) {
						return injectOverrideStore;
					}

					return undefined;
				},
				ownKeys() {
					const result: string[] = [];

					for (const overrideStore of overrideStoreList) {
						for (const prop in overrideStore) {
							if (!result.includes(prop)) {
								result.push(prop);
							}
						}
					}

					return result;
				},
				has(_target: object, prop: ObjectKey) {
					if (
						prop in overrideInterface
						|| prop in cachedOverrideProperties
					) {
						return true;
					}

					for (const overrideStore of overrideStoreList) {
						if (prop in overrideStore) {
							return true;
						}
					}

					return false;
				},
				getOwnPropertyDescriptor(target: object, prop: ObjectKey) {
					return {
						enumerable: true,
						configurable: true,
						value: proxyHandler.get(target, prop),
					};
				},
			};

			const self = new Proxy(
				cachedOverrideProperties,
				proxyHandler,
			);

			void ({ ...self });

			return self as never;
		},
	};
}
