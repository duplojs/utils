function groupOutput(...args) {
    if (args.length === 1) {
        const [group] = args;
        return (input) => groupOutput(group, input);
    }
    const [group, value] = args;
    return {
        group,
        value,
    };
}
function group(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (iterator) => group(iterator, theFunction);
    }
    const [iterator, theFunction] = args;
    const result = {};
    let index = 0;
    for (const element of iterator) {
        const { group, value } = theFunction(element, {
            index,
            output: groupOutput,
        });
        if (result[group]) {
            result[group].push(value);
        }
        else {
            result[group] = [value];
        }
        index++;
    }
    return result;
}

export { group, groupOutput };
