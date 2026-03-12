export type TemplateLiteralContainLargeType<GenericValue extends string> = (GenericValue extends string ? {} extends Record<GenericValue, never> ? true : false : never) extends false ? false : true;
