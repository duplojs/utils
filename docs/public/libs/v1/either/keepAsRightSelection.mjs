import { informationKind } from './kind.mjs';
import { isLeft } from './left/is.mjs';
import { right } from './right/create.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { isRight } from './right/is.mjs';
import { left } from './left/create.mjs';

function keepAsRightSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => keepAsRightSelection(input, selector);
    }
    const [input, selector] = args;
    if (!informationKind.has(input)) {
        return input;
    }
    const information = informationKind.getValue(input);
    if (selector[information] === true) {
        if (isLeft(input)) {
            return right(information, unwrap(input));
        }
        return input;
    }
    if (isRight(input)) {
        return left(information, unwrap(input));
    }
    return input;
}

export { keepAsRightSelection };
