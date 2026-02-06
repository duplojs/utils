import { TheDate } from './theDate.mjs';

function serialize(input) {
    if (input instanceof TheDate) {
        const timestamp = input.getTime();
        return `date${Math.abs(timestamp)}${timestamp > 0 ? "+" : "-"}`;
    }
    const number = input.toNative();
    return `time${Math.abs(number)}${number > 0 ? "+" : "-"}`;
}

export { serialize };
