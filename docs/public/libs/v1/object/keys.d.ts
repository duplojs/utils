export declare function keys<GenericObject extends object>(object: GenericObject): (Exclude<keyof GenericObject, symbol>)[];
