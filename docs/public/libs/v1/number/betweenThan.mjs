function betweenThan(...args) {
    if (args.length === 2) {
        const [greaterThan, lessThan] = args;
        return (input) => betweenThan(input, greaterThan, lessThan);
    }
    const [input, greaterThan, lessThan] = args;
    return input > greaterThan && input < lessThan;
}

export { betweenThan };
