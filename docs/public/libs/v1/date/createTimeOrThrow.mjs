import { createTime } from './createTime.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { isLeft } from '../either/left/is.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';

class CreateTheTimeError extends kindHeritage("create-the-time-error", createErrorKind("create-the-time-error"), Error) {
    input;
    constructor(input) {
        const value = typeof input === "object"
            ? JSON.stringify(input)
            : input.toString();
        super({}, [`Invalid date input: ${value}`]);
        this.input = input;
    }
}
/**
 * {@include date/createTimeOrThrow/index.md}
 */
function createTimeOrThrow(input) {
    const result = createTime(input);
    if (isLeft(result)) {
        throw new CreateTheTimeError(input);
    }
    return unwrap(result);
}

export { CreateTheTimeError, createTimeOrThrow };
