import { type PartialKeys } from "./types";
import { type UnionObjectToIntersection } from "./types/UnionObjectToIntersection";
type MergeTopLevelUnionObject<GenericObject extends object, GenericFullObjectKeys extends keyof UnionObjectToIntersection<GenericObject> = keyof UnionObjectToIntersection<GenericObject>> = PartialKeys<{
    [Prop in GenericFullObjectKeys]: (GenericObject extends object ? Prop extends keyof GenericObject ? GenericObject[Prop] : never : never);
}, Exclude<GenericFullObjectKeys, keyof GenericObject>>;
export declare function getProperty<GenericObject extends object, GenericFullObject extends MergeTopLevelUnionObject<GenericObject>, GenericKey extends keyof GenericFullObject>(key: GenericKey): (obj: GenericObject) => GenericFullObject[GenericKey];
export declare function getProperty<GenericObject extends object, GenericFullObject extends MergeTopLevelUnionObject<GenericObject>, GenericKey extends keyof GenericFullObject>(obj: GenericObject, key: GenericKey): GenericFullObject[GenericKey];
export {};
