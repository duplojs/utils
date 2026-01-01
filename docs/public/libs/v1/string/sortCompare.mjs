const collator = new Intl.Collator("en-US-u-kn-true", {
    usage: "sort",
    sensitivity: "variant",
    numeric: false,
    ignorePunctuation: false,
});
function sortCompare(...args) {
    if (args.length === 1) {
        const [valueB] = args;
        return (valueA) => sortCompare(valueA, valueB);
    }
    const [valueA, valueB] = args;
    return collator.compare(valueA, valueB);
}

export { sortCompare };
