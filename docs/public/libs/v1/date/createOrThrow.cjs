'use strict';

var create = require('./create.cjs');
var kind = require('../common/kind.cjs');
var is = require('../either/left/is.cjs');
var unwrap = require('../common/unwrap.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class CreateTheDateError extends kind.kindHeritage("create-the-date-error", errorKindNamespace.createErrorKind("create-the-date-error"), Error) {
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
    const result = create.create(input);
    if (is.isLeft(result)) {
        throw new CreateTheDateError(input);
    }
    return unwrap.unwrap(result);
}

exports.CreateTheDateError = CreateTheDateError;
exports.createOrThrow = createOrThrow;
