import { asyncPipe } from '../../common/asyncPipe.mjs';
import { whenNot } from '../../common/whenNot.mjs';
import { success } from './success.mjs';
import { isLeft } from '../left/is.mjs';
import { asyncReduce } from '../../generator/asyncReduce.mjs';
import { reduceFrom } from '../../generator/reduce.mjs';
import { entries } from '../../object/entries.mjs';
import { when } from '../../common/when.mjs';
import { isType } from '../../common/isType.mjs';
import { whenIsRight } from './when.mjs';

/**
 * {@include either/asyncGroup/index.md}
 */
function asyncGroup(group) {
    if (group instanceof Array) {
        return asyncPipe(group, asyncReduce(reduceFrom([]), ({ element, lastValue, nextPush, exit }) => asyncPipe(element, when(isType("function"), (getter) => getter()), when(isLeft, exit), whenIsRight((data) => nextPush(lastValue, data)))), whenNot(isLeft, success));
    }
    return asyncPipe(group, entries, asyncReduce(reduceFrom({}), ({ element: [key, value], lastValue, nextWithObject, exit }) => asyncPipe(value, when(isType("function"), (getter) => getter()), when(isLeft, exit), whenIsRight((data) => nextWithObject(lastValue, { [key]: data })))), whenNot(isLeft, success));
}

export { asyncGroup };
