function addWrappedProperties(wrappedValue, getProperties) {
    const properties = getProperties({
        wrappedValue,
    });
    return {
        ...wrappedValue,
        ...properties,
    };
}

export { addWrappedProperties };
