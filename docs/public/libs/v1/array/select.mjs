const selectTools = {
    skip() {
        return { "-skip": null };
    },
    select(output) {
        return { "-select": output };
    },
};
function select(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => select(input, theFunction);
    }
    const [input, theFunction] = args;
    const outputArray = [];
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const result = theFunction({
            element,
            index,
            self: input,
            ...selectTools,
        });
        if ("-skip" in result) {
            continue;
        }
        outputArray.push(result["-select"]);
    }
    return outputArray;
}

export { select, selectTools };
