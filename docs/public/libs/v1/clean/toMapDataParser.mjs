import { newTypeHandlerKind, newTypeKind } from './newType.mjs';
import { primitiveHandlerKind } from './primitive/base.mjs';
import { constrainedTypeKind, constraintHandlerKind } from './constraint/base.mjs';
import { constraintsSetHandlerKind } from './constraint/set.mjs';
import { hasSomeKinds } from '../common/hasSomeKinds.mjs';
import { match } from '../pattern/match/index.mjs';
import { transform } from '../dataParser/parsers/transform.mjs';
import { stringKind } from '../dataParser/parsers/string/index.mjs';
import { numberKind } from '../dataParser/parsers/number/index.mjs';
import { bigIntKind } from '../dataParser/parsers/bigint/index.mjs';
import { booleanKind } from '../dataParser/parsers/boolean.mjs';
import { dateKind } from '../dataParser/parsers/date.mjs';
import { timeKind } from '../dataParser/parsers/time/index.mjs';
import { emptyKind } from '../dataParser/parsers/empty.mjs';
import { nilKind } from '../dataParser/parsers/nil.mjs';
import { keyWrappedValue } from '../common/wrapValue.mjs';

function toMapDataParser(input, params) {
    const dataParser = (primitiveHandlerKind.has(input)
        ? input.dataParser.clone()
        : input.internal.dataParser.clone());
    if (params?.coerce
        && hasSomeKinds(dataParser, [
            stringKind,
            numberKind,
            bigIntKind,
            bigIntKind,
            booleanKind,
            dateKind,
            timeKind,
            emptyKind,
            nilKind,
        ])) {
        dataParser.definition.coerce = true;
    }
    const valueContainer = match(input)
        .when(newTypeHandlerKind.has, (newType) => ({
        ...newTypeKind.setTo({}, newType.name),
        ...constrainedTypeKind.setTo({}, newType.internal.constraintKindValue),
    }))
        .when(hasSomeKinds([constraintHandlerKind, constraintsSetHandlerKind]), (constraintOrSet) => constrainedTypeKind.setTo({}, constraintOrSet.internal.constraintKindValue))
        .when(primitiveHandlerKind.has, () => ({}))
        .exhaustive();
    return transform(dataParser, (value) => ({
        ...valueContainer,
        [keyWrappedValue]: value,
    }));
}

export { toMapDataParser };
