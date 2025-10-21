'use strict';

function addWrappedProperties(wrappedValue, getProperties) {
    const properties = getProperties({
        wrappedValue,
    });
    return {
        ...wrappedValue,
        ...properties,
    };
}

exports.addWrappedProperties = addWrappedProperties;
