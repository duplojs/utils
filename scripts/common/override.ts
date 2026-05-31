/* eslint-disable @typescript-eslint/prefer-for-of */
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
			const cachedOverrideProperties: Record<ObjectKey, unknown> = {};

			const proxyHandler = {
				get(_target: object, prop: ObjectKey): unknown {
					if (prop in overridePropertiesStore) {
						if (!(prop in cachedOverrideProperties)) {
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
					const result = Object.keys(overrideInterface);

					for (let index = 0; index < cachedStoreKey.length; index++) {
						const prop = cachedStoreKey[index]!;
						if (!result.includes(prop)) {
							result.push(prop);
						}
					}

					return result;
				},
				has(_target: object, prop: ObjectKey) {
					return Object.keys(overrideInterface).includes(prop as never)
						|| cachedStoreKey.includes(prop as never);
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
				{},
				proxyHandler,
			);

			return new Proxy(
				self,
				proxyHandler,
			) as never;
		},
	};
}
