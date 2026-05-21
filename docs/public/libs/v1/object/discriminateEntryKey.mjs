function discriminateEntryKey(...args) {
    if (args.length === 1) {
        const [thePredicate] = args;
        return (entry) => discriminateEntryKey(entry, thePredicate);
    }
    const [entry, thePredicate] = args;
    return thePredicate(entry[0]);
}

export { discriminateEntryKey };
