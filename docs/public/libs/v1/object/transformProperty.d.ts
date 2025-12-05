import { type SimplifyTopLevel } from "../common";
export declare function transformProperty<GenericObject extends object, GenericKey extends keyof GenericObject, GenericNewValue extends unknown>(key: GenericKey, transform: (value: GenericObject[GenericKey]) => GenericNewValue): (obj: GenericObject) => SimplifyTopLevel<{
    [Prop in GenericKey]: GenericNewValue;
} & Omit<GenericObject, GenericKey>>;
export declare function transformProperty<GenericObject extends object, GenericKey extends keyof GenericObject, GenericNewValue extends unknown>(obj: GenericObject, key: GenericKey, transform: (value: GenericObject[GenericKey]) => GenericNewValue): SimplifyTopLevel<{
    [Prop in GenericKey]: GenericNewValue;
} & Omit<GenericObject, GenericKey>>;
