export type IsExtends<GenericValueA extends unknown, GenericValueB extends unknown> = GenericValueA extends GenericValueB ? true : false;
