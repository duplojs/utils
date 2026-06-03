import type * as DObject from "@scripts/object";
import type { AnyFunction } from "./types";

export function detachObjectMethod<
	GenericObject extends object,
	GenericMethod extends DObject.GetPropsWithValueExtends<GenericObject, AnyFunction>,
>(
	inputObject: GenericObject,
	method: GenericMethod,
): GenericObject[GenericMethod] {
	return (inputObject[method] as AnyFunction).bind(inputObject) as never;
}
