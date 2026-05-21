import { createEitherKind } from '../kind.mjs';
import { right } from './create.mjs';

const resultKind = createEitherKind("result");
/**
 * {@include either/result/index.md}
 */
function result(information, value = undefined) {
    return resultKind.setTo(right(information, value));
}

export { result, resultKind };
