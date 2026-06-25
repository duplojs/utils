import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const resultKind = createEitherKind("result");
function result(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (value) => result(information, value);
    }
    const [information, value] = args;
    return resultKind.setTo(right(information, value));
}

export { result, resultKind };
