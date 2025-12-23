export type Adaptor<GenericValue extends unknown, GenericExpectedType extends unknown, GenericElse extends unknown = never> = GenericValue extends GenericExpectedType ? GenericValue : GenericElse;
