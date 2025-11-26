import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import { unwrap } from '../common/unwrap.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import './bool/falsy.mjs';
import './bool/truthy.mjs';
import './bool/base.mjs';
import './left/create.mjs';
import './left/error.mjs';
import './left/fail.mjs';
import { isLeft } from './left/is.mjs';
import './right/success.mjs';
import { isRight } from './right/is.mjs';
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
import { eitherInformationKind } from './kind.mjs';

function whenHasInformation(...args) {
    if (args.length === 2) {
        const [information, theFunction] = args;
        return (input) => whenHasInformation(input, information, theFunction);
    }
    const [input, information, theFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if ((isLeft(input)
        || isRight(input)) && formattedInformation.includes(eitherInformationKind.getValue(input))) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenHasInformation };
