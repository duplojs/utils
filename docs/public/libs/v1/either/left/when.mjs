import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import './create.mjs';
import './error.mjs';
import './fail.mjs';
import { isLeft } from './is.mjs';
import '../right/success.mjs';
import '../kind.mjs';
import '../right/create.mjs';
import '../right/ok.mjs';
import '../future/success.mjs';
import '../future/error.mjs';
import '../future/base.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import '../../common/override.mjs';

function whenIsLeft(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsLeft(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenIsLeft };
