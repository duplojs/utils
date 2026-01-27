'use strict';

var kind = require('../common/kind.cjs');

const createEitherKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const informationKind = createEitherKind("information");
/**
 * @deprecated use informationKind
 */
const eitherInformationKind = informationKind;

exports.createEitherKind = createEitherKind;
exports.eitherInformationKind = eitherInformationKind;
exports.informationKind = informationKind;
