import { futureSuccess } from './success.mjs';
import { futureError } from './error.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';

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
    // default declaration
    then(onfulfilled) {
        return super.then(onfulfilled);
    }
    static get [Symbol.species]() {
        return Promise;
    }
    static instanceof(value) {
        return typeof value === "object"
            && value?.constructor?.name === "Future"
            && kind in value;
    }
    static rightAll(values) {
        return new Future(Promise.all(values.map((value) => new Future(value))));
    }
}
/**
 * {@include either/future/index.md}
 */
function future(value) {
    return new Future(value);
}

export { Future, future };
