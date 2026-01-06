'use strict';

var create = require('./create.cjs');
var kind = require('../common/kind.cjs');
var is = require('../either/left/is.cjs');
var unwrap = require('../common/unwrap.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class CreateTheDateError extends kind.kindHeritage("create-the-date-error", errorKindNamespace.createErrorKind("create-the-date-error"), Error) {
    input;
    constructor(input) {
        super({}, [`Invalid date input: ${input.toString()}`]);
        this.input = input;
    }
}
function createOrThrow(input) {
    const result = create.create(input);
    if (is.isLeft(result)) {
        throw new CreateTheDateError(typeof input === "object"
            && "value" in input
            ? input.value
            : input);
    }
    return unwrap.unwrap(result);
}

exports.CreateTheDateError = CreateTheDateError;
exports.createOrThrow = createOrThrow;
