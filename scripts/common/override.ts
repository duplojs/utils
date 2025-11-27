import { type GetPropsWithValueExtends } from "@scripts/object";
import { createGlobalStore } from "./globalStore";
import { type Adaptor, type AnyFunction, type AnyValue, type ObjectKey } from "./types";
import * as DObject from "@scripts/object";
import * as DArray from "@scripts/array";
import { pipe } from "./pipe";

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");

declare module "./globalStore" {
	interface GlobalStore {
		[SymbolOverrideStore]: Record<
			string,
			[ObjectKey, Exclude<AnyValue, AnyFunction> | AnyFunction<[object, ...unknown[]]>][]
		>;
	}
}

const overrideStore = createGlobalStore(SymbolOverrideStore, {});

export interface OverrideHandler<
	GenericInterface extends object,
> {
	setMethod<
		GenericProperty extends GetPropsWithValueExtends<
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
			GetPropsWithValueExtends<
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

export function createOverride<
	GenericInterface extends object,
>(
	overrideName: string,
): OverrideHandler<GenericInterface> {
	const store = overrideStore.value[overrideName] ?? [];

	overrideStore.set({
		...overrideStore.value,
		[overrideName]: store,
	});

	return {
		setMethod(prop, theFunction) {
			store.push([prop, theFunction]);
		},
		setPropertyDefaultValue(prop, value) {
			store.push([prop, value]);
		},
		apply(overrideInterface) {
			const self = {
				...overrideInterface,
				...pipe(
					store,
					DArray.map(
						([key, value]) => DObject.entry(
							key,
							typeof value === "function"
								? (...args: unknown[]) => value(self, ...args)
								: value,
						),
					),
					DObject.fromEntries,
				),
			};

			return self;
		},
	};
}
