import '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import '../right/success.mjs';
import { isRight } from '../right/is.mjs';
import '../right/create.mjs';
import '../right/ok.mjs';
import { futureSuccess } from './success.mjs';
import { futureError } from './error.mjs';
import './base.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import '../kind.mjs';
import '../../common/override.mjs';

const kind = "kind-future-either";
class Future extends Promise {
    constructor(value) {
        super((resolve) => void resolve((value instanceof Promise
            ? value
            : Promise.resolve(value))
            .then((value) => {
            if (isRight(value)) {
                return value;
            }
            else if (isLeft(value)) {
                return value;
            }
            else {
                return futureSuccess(value);
            }
        })
            .catch((error) => futureError(error))));
    }
    [kind] = null;
    // @ts-expect-error override signature error
    then(theFunction) {
        return new Future(super.then(theFunction));
    }
    static get [Symbol.species]() {
        return Promise;
    }
    static instanceof(value) {
        return typeof value === "object"
            && value?.constructor?.name === "Future"
            && kind in value;
    }
    static all(values) {
        return new Future(Promise.all(values.map((value) => new Future(value))));
    }
}
function future(value) {
    return new Future(value);
}

export { Future, future };
