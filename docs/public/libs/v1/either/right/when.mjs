import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { isRight } from './is.mjs';

function whenIsRight(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsRight(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenIsRight };
