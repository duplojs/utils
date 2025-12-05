'use strict';

var kind = require('../common/kind.cjs');

const createEitherKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const eitherInformationKind = createEitherKind("information");

exports.createEitherKind = createEitherKind;
exports.eitherInformationKind = eitherInformationKind;
