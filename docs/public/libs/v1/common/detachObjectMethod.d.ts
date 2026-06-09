import type * as DObject from "../object";
import type { AnyFunction } from "./types";
export declare function detachObjectMethod<GenericObject extends object, GenericMethod extends keyof GenericObject>(inputObject: GenericObject, method: GenericMethod & DObject.GetPropsWithValueExtends<GenericObject, AnyFunction>): GenericObject[GenericMethod];
