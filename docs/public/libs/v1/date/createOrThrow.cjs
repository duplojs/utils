'use strict';

var kind = require('../common/kind.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
var is = require('../either/left/is.cjs');
require('../either/right/success.cjs');
require('../either/kind.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
require('../common/override.cjs');
var create = require('./create.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class CreateTheDateError extends kind.kindHeritage("create-the-date-error", errorKindNamespace.createErrorKind("create-the-date-error"), Error) {
    input;
    constructor(input) {
        super({}, [`Invalid input: ${input.toString()}`]);
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
