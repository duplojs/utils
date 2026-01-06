import { create } from './create.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { isLeft } from '../either/left/is.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';

class CreateTheDateError extends kindHeritage("create-the-date-error", createErrorKind("create-the-date-error"), Error) {
    input;
    constructor(input) {
        const value = typeof input === "object" && "value" in input
            ? JSON.stringify(input)
            : input.toString();
        super({}, [`Invalid date input: ${value}`]);
        this.input = input;
    }
}
function createOrThrow(input) {
    const result = create(input);
    if (isLeft(result)) {
        throw new CreateTheDateError(input);
    }
    return unwrap(result);
}

export { CreateTheDateError, createOrThrow };
