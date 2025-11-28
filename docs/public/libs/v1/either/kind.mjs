import { createKindNamespace } from '../common/kind.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import './bool/falsy.mjs';
import './bool/truthy.mjs';
import './bool/base.mjs';
import './left/create.mjs';
import './left/error.mjs';
import './left/fail.mjs';
import './right/success.mjs';
import './right/create.mjs';
import './right/ok.mjs';
import './future/success.mjs';
import './future/error.mjs';
import './future/base.mjs';
import './nullable/empty.mjs';
import './nullable/filled.mjs';
import './nullable/base.mjs';
import './nullish/empty.mjs';
import './nullish/filled.mjs';
import './nullish/base.mjs';
import './optional/empty.mjs';
import './optional/filled.mjs';
import './optional/base.mjs';
import '../common/override.mjs';

const createEitherKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsUtilsEither");
const eitherInformationKind = createEitherKind("information");

export { createEitherKind, eitherInformationKind };
