import { type ObjectKey } from "../common/types/objectKey";
export declare function isKeyof<GenericObject extends object, GenericKey extends ObjectKey>(obj: GenericObject): (key: GenericKey) => key is keyof GenericObject & GenericKey;
export declare function isKeyof<GenericObject extends object, GenericKey extends ObjectKey>(key: GenericKey, obj: GenericObject): key is keyof GenericObject & GenericKey;
