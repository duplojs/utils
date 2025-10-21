function getProperty(...args) {
    if (args.length === 1) {
        const [key] = args;
        return (obj) => getProperty(obj, key);
    }
    const [obj, key] = args;
    return obj[key];
}

export { getProperty };
