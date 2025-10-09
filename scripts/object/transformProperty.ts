import { type AnyFunction, type SimplifyTopLevel, type ObjectKey } from "@scripts/common";

export function transformProperty<
	GenericObject extends object,
	GenericKey extends keyof GenericObject,
	GenericNewValue extends unknown,
>(
	key: GenericKey,
	transform: (value: GenericObject[GenericKey]) => GenericNewValue
): (obj: GenericObject) => SimplifyTopLevel<
	& { [Prop in GenericKey]: GenericNewValue }
	& Omit<GenericObject, GenericKey>
>;

export function transformProperty<
	GenericObject extends object,
	GenericKey extends keyof GenericObject,
	GenericNewValue extends unknown,
>(
	obj: GenericObject,
	key: GenericKey,
	transform: (value: GenericObject[GenericKey]) => GenericNewValue
): SimplifyTopLevel<
	& { [Prop in GenericKey]: GenericNewValue }
	& Omit<GenericObject, GenericKey>
>;

export function transformProperty(
	...args:
		| [object, ObjectKey, AnyFunction]
		| [ObjectKey, AnyFunction]
): any {
	if (args.length === 2) {
		const [key, transform] = args;

		return (obj: object) => transformProperty(obj, key as never, transform as never);
	}

	const [obj, key, transform] = args;

	return {
		...obj,
		[key]: transform(obj[key as never]),
	};
}

