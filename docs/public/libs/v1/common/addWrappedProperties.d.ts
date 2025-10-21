export type GetWrappedProperties<GenericWrappedValue extends object = object, GenericProperties extends object = object> = (params: {
    wrappedValue: GenericWrappedValue;
}) => GenericProperties;
export declare function addWrappedProperties<GenericWrappedValue extends object, GenericGetWrappedProperties extends GetWrappedProperties<GenericWrappedValue>>(wrappedValue: GenericWrappedValue, getProperties: GenericGetWrappedProperties): GenericWrappedValue & ReturnType<GenericGetWrappedProperties>;
