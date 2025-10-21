import { type RequiredKeys } from "./types/requiredKeys";
export declare function hasKeys<GenericObject extends object, GenericKeys extends keyof GenericObject>(keys: GenericKeys | GenericKeys[]): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;
export declare function hasKeys<GenericObject extends object, GenericKeys extends keyof GenericObject>(partialObject: GenericObject, keys: GenericKeys | GenericKeys[]): partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;
