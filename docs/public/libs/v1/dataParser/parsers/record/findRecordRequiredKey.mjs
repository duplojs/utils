import { stringKind } from '../string/index.mjs';
import { numberKind } from '../number/index.mjs';
import { literalKind } from '../literal.mjs';
import { unionKind } from '../union.mjs';
import { templateLiteralKind } from '../templateLiteral/index.mjs';
import { bigIntKind } from '../bigint/index.mjs';
import { booleanKind } from '../boolean.mjs';
import { emptyKind } from '../empty.mjs';
import { nilKind } from '../nil.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { reduce, reduceFrom } from '../../../array/reduce.mjs';
import { when } from '../../../pattern/when.mjs';
import { map } from '../../../array/map.mjs';
import { concat } from '../../../string/concat.mjs';
import { isType } from '../../../common/isType.mjs';
import { flatMap } from '../../../array/flatMap.mjs';
import { prepend } from '../../../string/prepend.mjs';
import { exhaustive } from '../../../pattern/exhaustive.mjs';
import { innerPipe } from '../../../common/innerPipe.mjs';
import { flat } from '../../../array/flat.mjs';
import { justReturn } from '../../../common/justReturn.mjs';
import { when as when$1 } from '../../../common/when.mjs';
import { to } from '../../../string/to.mjs';
import { or } from '../../../common/or.mjs';

function findRecordRequiredKeyOnTemplateLiteralPart(templatePart) {
    return pipe(templatePart, map(innerPipe(when((value) => stringKind.has(value)
        || numberKind.has(value)
        || bigIntKind.has(value), justReturn([])), when(or([
        isType("bigint"),
        isType("boolean"),
        isType("null"),
        isType("number"),
        isType("string"),
        isType("undefined"),
    ]), innerPipe(when$1(isType("bigint"), (value) => `${value}n`), to)), when(literalKind.has, (value) => pipe(value.definition.value, map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), flat)), when(templateLiteralKind.has, (value) => findRecordRequiredKeyOnTemplateLiteralPart(value.definition.template)), when(booleanKind.has, justReturn(["true", "false"])), when(emptyKind.has, justReturn("undefined")), when(nilKind.has, justReturn("null")), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), flat)), exhaustive)), reduce(reduceFrom([""]), ({ lastValue, element, next }) => pipe(element, when(isType("string"), (element) => next(map(lastValue, concat(element)))), when(isType("array"), (elements) => next(flatMap(lastValue, (value) => map(elements, prepend(value))))), exhaustive)));
}
function findRecordRequiredKey(keyParser) {
    return pipe(keyParser, when((value) => stringKind.has(value) || numberKind.has(value), justReturn([])), when(literalKind.has, (dataParser) => dataParser.definition.value), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map(findRecordRequiredKey), flat)), when(templateLiteralKind.has, (dataParser) => findRecordRequiredKeyOnTemplateLiteralPart(dataParser.definition.template)), exhaustive);
}

export { findRecordRequiredKey, findRecordRequiredKeyOnTemplateLiteralPart };
