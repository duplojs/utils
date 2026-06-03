import type * as DObject from "@scripts/object";
import type { AnyFunction } from "./types";

export function detachObjectMethod<
	GenericObject extends object,
	GenericMethod extends keyof GenericObject,
>(
	inputObject: GenericObject,
	method: GenericMethod & DObject.GetPropsWithValueExtends<GenericObject, AnyFunction>,
): GenericObject[GenericMethod] {
	return (inputObject[method] as AnyFunction).bind(inputObject) as never;
}
