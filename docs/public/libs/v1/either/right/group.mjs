import { pipe } from '../../common/pipe.mjs';
import { whenNot } from '../../common/whenNot.mjs';
import { when } from '../../common/when.mjs';
import { isType } from '../../common/isType.mjs';
import { reduce, reduceFrom } from '../../array/reduce.mjs';
import { whenIsRight } from './when.mjs';
import { entries } from '../../object/entries.mjs';
import { success } from './success.mjs';
import { isLeft } from '../left/is.mjs';

function group(group) {
    return pipe(group, entries, reduce(reduceFrom({}), ({ element: [key, value], lastValue, nextWithObject, exit }) => pipe(value, when(isType("function"), (getter) => getter()), when(isLeft, exit), whenIsRight((data) => nextWithObject(lastValue, { [key]: data })))), whenNot(isLeft, success));
}

export { group };
