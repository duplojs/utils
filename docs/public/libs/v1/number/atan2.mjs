function atan2(...args) {
    if (args.length === 1) {
        const [axisX] = args;
        return (axisY) => atan2(axisY, axisX);
    }
    const [axisY, axisX] = args;
    return Math.atan2(axisY, axisX);
}

export { atan2 };
