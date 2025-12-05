import { createKind } from '../common/kind.mjs';
import { wrapValue } from '../common/wrapValue.mjs';

const patternResultKind = createKind("pattern-result");
function result(value) {
    return patternResultKind.setTo(wrapValue(value));
}
const isResult = patternResultKind.has;

export { isResult, result };
