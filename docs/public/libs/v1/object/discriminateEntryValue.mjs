function discriminateEntryValue(...args) {
    if (args.length === 1) {
        const [thePredicate] = args;
        return (entry) => discriminateEntryValue(entry, thePredicate);
    }
    const [entry, thePredicate] = args;
    return thePredicate(entry[1]);
}

export { discriminateEntryValue };
