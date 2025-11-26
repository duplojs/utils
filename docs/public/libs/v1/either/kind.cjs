'use strict';

var kind = require('../common/kind.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('./bool/falsy.cjs');
require('./bool/truthy.cjs');
require('./bool/base.cjs');
require('./left/create.cjs');
require('./left/error.cjs');
require('./left/fail.cjs');
require('./right/success.cjs');
require('./right/create.cjs');
require('./right/ok.cjs');
require('./future/success.cjs');
require('./future/error.cjs');
require('./future/base.cjs');
require('./nullable/empty.cjs');
require('./nullable/filled.cjs');
require('./nullable/base.cjs');
require('./nullish/empty.cjs');
require('./nullish/filled.cjs');
require('./nullish/base.cjs');
require('./optional/empty.cjs');
require('./optional/filled.cjs');
require('./optional/base.cjs');

const createEitherKind = kind.createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const eitherInformationKind = createEitherKind("information");

exports.createEitherKind = createEitherKind;
exports.eitherInformationKind = eitherInformationKind;
