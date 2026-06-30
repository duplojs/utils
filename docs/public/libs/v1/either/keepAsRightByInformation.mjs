import { informationKind } from './kind.mjs';
import { hasInformation } from './hasInformation.mjs';
import { isLeft } from './left/is.mjs';
import { right } from './right/create.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { isRight } from './right/is.mjs';
import { left } from './left/create.mjs';

function keepAsRightByInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => keepAsRightByInformation(input, information);
    }
    const [input, information] = args;
    if (hasInformation(input, information)) {
        if (isLeft(input)) {
            return right(informationKind.getValue(input), unwrap(input));
        }
        return input;
    }
    if (isRight(input)) {
        return left(informationKind.getValue(input), unwrap(input));
    }
    return input;
}

export { keepAsRightByInformation };
