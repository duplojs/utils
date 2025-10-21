function createInterpolation(value, _strict) {
    return (interpolationValues) => (interpolationValues
        ? value.replace(/\{([^}]*)\}/g, (match, interpolationId) => interpolationValues[interpolationId])
        : value);
}

export { createInterpolation };
