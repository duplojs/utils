export type GetWrappedProperties<GenericWrappedValue extends object = object, GenericProperties extends object = object> = (params: {
    wrappedValue: GenericWrappedValue;
}) => GenericProperties;
/**
 * The addWrappedProperties() function dynamically adds derived properties to a wrapped value while keeping the original type and extending the new type.
 * 
 * Signature: `addWrappedProperties(input, properties)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/addWrappedProperties
 * 
 */
export declare function addWrappedProperties<GenericWrappedValue extends object, GenericGetWrappedProperties extends GetWrappedProperties<GenericWrappedValue>>(wrappedValue: GenericWrappedValue, getProperties: GenericGetWrappedProperties): GenericWrappedValue & ReturnType<GenericGetWrappedProperties>;
