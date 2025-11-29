import { pipe } from '../../../common/pipe.mjs';
import '../../../common/stringToBytes.mjs';
import '../../../common/stringToMillisecond.mjs';
import { innerPipe } from '../../../common/innerPipe.mjs';
import { when as when$1 } from '../../../common/when.mjs';
import { isType } from '../../../common/isType.mjs';
import { or } from '../../../common/or.mjs';
import { justReturn } from '../../../common/justReturn.mjs';
import { filter } from '../../../array/filter.mjs';
import { reduce, reduceFrom } from '../../../array/reduce.mjs';
import { includes } from '../../../array/includes.mjs';
import { map } from '../../../array/map.mjs';
import { flat } from '../../../array/flat.mjs';
import { flatMap } from '../../../array/flatMap.mjs';
import { notIncludes } from '../../../array/notIncludes.mjs';
import '../../../common/globalStore.mjs';
import '../../../common/builder.mjs';
import '../../../either/bool/falsy.mjs';
import '../../../either/bool/truthy.mjs';
import '../../../either/bool/base.mjs';
import '../../../either/left/create.mjs';
import '../../../either/left/error.mjs';
import '../../../either/left/fail.mjs';
import '../../../either/kind.mjs';
import '../../../either/right/success.mjs';
import '../../../either/right/create.mjs';
import '../../../either/right/ok.mjs';
import '../../../either/future/success.mjs';
import '../../../either/future/error.mjs';
import '../../../either/future/base.mjs';
import '../../../either/nullable/empty.mjs';
import '../../../either/nullable/filled.mjs';
import '../../../either/nullable/base.mjs';
import '../../../either/nullish/empty.mjs';
import '../../../either/nullish/filled.mjs';
import '../../../either/nullish/base.mjs';
import '../../../either/optional/empty.mjs';
import '../../../either/optional/filled.mjs';
import '../../../either/optional/base.mjs';
import '../../../common/override.mjs';
import '../../../pattern/result.mjs';
import { exhaustive } from '../../../pattern/exhaustive.mjs';
import { otherwise } from '../../../pattern/otherwise.mjs';
import { when } from '../../../pattern/when.mjs';
import { concat } from '../../../string/concat.mjs';
import { stringKind } from '../string/index.mjs';
import { numberKind } from '../number/index.mjs';
import { literalKind } from '../literal.mjs';
import { unionKind } from '../union.mjs';
import { templateLiteralKind } from '../templateLiteral/index.mjs';
import { bigIntKind } from '../bigint/index.mjs';
import { booleanKind } from '../boolean.mjs';
import { emptyKind } from '../empty.mjs';
import { nilKind } from '../nil.mjs';

function findRecordRequiredKeyOnTemplateLiteralPart(templatePart) {
    return pipe(templatePart, map(innerPipe(when((value) => stringKind.has(value)
        || numberKind.has(value)
        || bigIntKind.has(value), justReturn(null)), when(or([
        isType("bigint"),
        isType("boolean"),
        isType("null"),
        isType("number"),
        isType("string"),
        isType("undefined"),
    ]), innerPipe(when$1(isType("bigint"), (value) => `${value}n`), String)), when(literalKind.has, (value) => findRecordRequiredKey(value)), when(templateLiteralKind.has, (value) => findRecordRequiredKeyOnTemplateLiteralPart(value.definition.template)), when(booleanKind.has, justReturn(["true", "false"])), when(emptyKind.has, justReturn("undefined")), when(nilKind.has, justReturn("null")), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), when(notIncludes(null), flat), otherwise(justReturn(null)))), exhaustive)), reduce(reduceFrom([""]), ({ lastValue, element, exit, next }) => pipe(element, when(isType("null"), justReturn(exit(null))), when(isType("string"), (element) => next(map(lastValue, (value) => concat(value, element)))), when(isType("array"), (elements) => next(flatMap(lastValue, (value) => map(elements, (subValue) => concat(value, subValue))))), exhaustive)));
}
function findRecordRequiredKey(keyParser) {
    return pipe(keyParser, when((value) => stringKind.has(value) || numberKind.has(value), justReturn(null)), when(literalKind.has, (dataParser) => pipe(dataParser.definition.value, map(innerPipe(when$1(isType("bigint"), (value) => `${value}n`), String)))), when(unionKind.has, (dataParser) => pipe(dataParser.definition.options, map(findRecordRequiredKey), when(includes(null), justReturn(null)), otherwise(innerPipe(filter(isType("array")), flat)))), when(templateLiteralKind.has, (dataParser) => findRecordRequiredKeyOnTemplateLiteralPart(dataParser.definition.template)), exhaustive);
}

export { findRecordRequiredKey, findRecordRequiredKeyOnTemplateLiteralPart };
