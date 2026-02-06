import { TheDate } from './theDate.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function closestTo(...args) {
    if (typeof args[0] === "string" || args[0] instanceof TheDate) {
        const [target, params] = args;
        return (input) => closestTo(input, target, params);
    }
    const [input, target, params] = args;
    const { tieBreaker } = params ?? {};
    const targetTimestamp = toTimestamp(target);
    let closest = undefined;
    let smallestDiff = Number.POSITIVE_INFINITY;
    for (const value of input) {
        const valueTimestamp = toTimestamp(value);
        if (tieBreaker === "favorPast" && valueTimestamp > targetTimestamp) {
            continue;
        }
        if (tieBreaker === "favorFuture" && valueTimestamp < targetTimestamp) {
            continue;
        }
        const distance = Math.abs(valueTimestamp - targetTimestamp);
        if (distance < smallestDiff) {
            smallestDiff = distance;
            if (value instanceof TheDate) {
                closest = value;
            }
            closest = TheDate.new(valueTimestamp);
        }
    }
    return closest;
}

export { closestTo };
