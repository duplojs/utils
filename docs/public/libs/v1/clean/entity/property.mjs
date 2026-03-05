import { newTypeHandlerKind } from '../newType.mjs';
import { createCleanKind } from '../kind.mjs';
import { pipe } from '../../common/pipe.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';
import { when } from '../../pattern/when.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { entries } from '../../object/entries.mjs';
import { map } from '../../array/map.mjs';
import { entry } from '../../object/entry.mjs';
import { fromEntries } from '../../object/fromEntries.mjs';
import { object } from '../../dataParser/parsers/object/index.mjs';
import { array } from '../../dataParser/parsers/array/index.mjs';
import { checkerArrayMin } from '../../dataParser/parsers/array/checkers/min.mjs';
import { checkerArrayMax } from '../../dataParser/parsers/array/checkers/max.mjs';
import { literal } from '../../dataParser/parsers/literal.mjs';
import { nullable } from '../../dataParser/parsers/nullable.mjs';
import { union } from '../../dataParser/parsers/union.mjs';
import { exhaustive } from '../../pattern/exhaustive.mjs';

const entityPropertyUnionKind = createCleanKind("entity-property-union");
const entityPropertyNullableKind = createCleanKind("entity-property-nullable");
const entityPropertyArrayKind = createCleanKind("entity-property-array");
const entityPropertyStructureKind = createCleanKind("entity-property-structure");
const entityPropertyIdentifierKind = createCleanKind("entity-property-identifier");
const entityPropertyDefinitionTools = {
    union(...definitions) {
        return pipe(definitions, wrapValue, entityPropertyUnionKind.setTo);
    },
    nullable(definition) {
        return pipe(definition, wrapValue, entityPropertyNullableKind.setTo);
    },
    array(definition, params = {}) {
        return pipe(definition, wrapValue, (value) => entityPropertyArrayKind.setTo(value, params));
    },
    structure(definition) {
        return pipe(definition, wrapValue, entityPropertyStructureKind.setTo);
    },
    identifier(definition) {
        return pipe(definition, wrapValue, entityPropertyIdentifierKind.setTo);
    },
};
function entityPropertyDefinitionToDataParser(propertyDefinition, treatNewTypeHandler) {
    return pipe(propertyDefinition, when(newTypeHandlerKind.has, treatNewTypeHandler), when(entityPropertyUnionKind.has, (union$1) => {
        const [firstInnerProperty, ...restInnerProperty] = unwrap(union$1);
        return union([
            entityPropertyDefinitionToDataParser(firstInnerProperty, treatNewTypeHandler),
            ...map(restInnerProperty, (innerProperty) => entityPropertyDefinitionToDataParser(innerProperty, treatNewTypeHandler)),
        ]);
    }), when(entityPropertyNullableKind.has, (nullable$1) => nullable(entityPropertyDefinitionToDataParser(unwrap(nullable$1), treatNewTypeHandler))), when(entityPropertyIdentifierKind.has, (identifier) => literal(unwrap(identifier))), when(entityPropertyArrayKind.has, (array$1) => {
        const params = entityPropertyArrayKind.getValue(array$1);
        return array(entityPropertyDefinitionToDataParser(unwrap(array$1), treatNewTypeHandler), {
            checkers: [
                ...(params.min !== undefined
                    ? [checkerArrayMin(params.min)]
                    : []),
                ...(params.max !== undefined
                    ? [checkerArrayMax(params.max)]
                    : []),
            ],
        });
    }), when(entityPropertyStructureKind.has, (structure) => pipe(structure, unwrap, entries, map(([key, value]) => entry(key, entityPropertyDefinitionToDataParser(value, treatNewTypeHandler))), fromEntries, object)), exhaustive);
}

export { entityPropertyArrayKind, entityPropertyDefinitionToDataParser, entityPropertyDefinitionTools, entityPropertyIdentifierKind, entityPropertyNullableKind, entityPropertyStructureKind, entityPropertyUnionKind };
