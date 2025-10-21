import { isLeft } from '../left/is.mjs';
import { futureSuccess } from './success.mjs';
import { futureError } from './error.mjs';
import { isRight } from '../right/is.mjs';

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
