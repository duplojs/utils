'use strict';

var createTime = require('./createTime.cjs');
var kind = require('../common/kind.cjs');
var is = require('../either/left/is.cjs');
var unwrap = require('../common/unwrap.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class CreateTheTimeError extends kind.kindHeritage("create-the-time-error", errorKindNamespace.createErrorKind("create-the-time-error"), Error) {
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
    const result = createTime.createTime(input);
    if (is.isLeft(result)) {
        throw new CreateTheTimeError(input);
    }
    return unwrap.unwrap(result);
}

exports.CreateTheTimeError = CreateTheTimeError;
exports.createTimeOrThrow = createTimeOrThrow;
