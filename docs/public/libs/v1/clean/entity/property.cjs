'use strict';

var newType = require('../newType.cjs');
var kind = require('../kind.cjs');
var pipe = require('../../common/pipe.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var when = require('../../pattern/when.cjs');
var unwrap = require('../../common/unwrap.cjs');
var entries = require('../../object/entries.cjs');
var map = require('../../array/map.cjs');
var entry = require('../../object/entry.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
var index = require('../../dataParser/parsers/object/index.cjs');
var index$1 = require('../../dataParser/parsers/array/index.cjs');
var min = require('../../dataParser/parsers/array/checkers/min.cjs');
var max = require('../../dataParser/parsers/array/checkers/max.cjs');
var nullable = require('../../dataParser/parsers/nullable.cjs');
var union = require('../../dataParser/parsers/union.cjs');
var exhaustive = require('../../pattern/exhaustive.cjs');

const entityPropertyUnionKind = kind.createCleanKind("entity-property-union");
const entityPropertyNullableKind = kind.createCleanKind("entity-property-nullable");
const entityPropertyArrayKind = kind.createCleanKind("entity-property-array");
const entityPropertyStructureKind = kind.createCleanKind("entity-property-structure");
const entityPropertyDefinitionTools = {
    union(...definitions) {
        return pipe.pipe(definitions, wrapValue.wrapValue, entityPropertyUnionKind.setTo);
    },
    nullable(definition) {
        return pipe.pipe(definition, wrapValue.wrapValue, entityPropertyNullableKind.setTo);
    },
    array(definition, params = {}) {
        return pipe.pipe(definition, wrapValue.wrapValue, (value) => entityPropertyArrayKind.setTo(value, params));
    },
    structure(definition) {
        return pipe.pipe(definition, wrapValue.wrapValue, entityPropertyStructureKind.setTo);
    },
};
function entityPropertyDefinitionToDataParser(propertyDefinition, treatNewTypeHandler) {
    return pipe.pipe(propertyDefinition, when.when(newType.newTypeHandlerKind.has, treatNewTypeHandler), when.when(entityPropertyUnionKind.has, (union$1) => {
        const [firstInnerProperty, ...restInnerProperty] = unwrap.unwrap(union$1);
        return union.union([
            entityPropertyDefinitionToDataParser(firstInnerProperty, treatNewTypeHandler),
            ...map.map(restInnerProperty, (innerProperty) => entityPropertyDefinitionToDataParser(innerProperty, treatNewTypeHandler)),
        ]);
    }), when.when(entityPropertyNullableKind.has, (nullable$1) => nullable.nullable(entityPropertyDefinitionToDataParser(unwrap.unwrap(nullable$1), treatNewTypeHandler))), when.when(entityPropertyArrayKind.has, (array) => {
        const params = entityPropertyArrayKind.getValue(array);
        return index$1.array(entityPropertyDefinitionToDataParser(unwrap.unwrap(array), treatNewTypeHandler), {
            checkers: [
                ...(params.min !== undefined
                    ? [min.checkerArrayMin(params.min)]
                    : []),
                ...(params.max !== undefined
                    ? [max.checkerArrayMax(params.max)]
                    : []),
            ],
        });
    }), when.when(entityPropertyStructureKind.has, (structure) => pipe.pipe(structure, unwrap.unwrap, entries.entries, map.map(([key, value]) => entry.entry(key, entityPropertyDefinitionToDataParser(value, treatNewTypeHandler))), fromEntries.fromEntries, index.object)), exhaustive.exhaustive);
}

exports.entityPropertyArrayKind = entityPropertyArrayKind;
exports.entityPropertyDefinitionToDataParser = entityPropertyDefinitionToDataParser;
exports.entityPropertyDefinitionTools = entityPropertyDefinitionTools;
exports.entityPropertyNullableKind = entityPropertyNullableKind;
exports.entityPropertyStructureKind = entityPropertyStructureKind;
exports.entityPropertyUnionKind = entityPropertyUnionKind;
