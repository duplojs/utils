'use strict';

var kind = require('../kind.cjs');
var newType = require('../newType.cjs');
var property = require('./property.cjs');
var kindClass = require('../../common/kindClass.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var pipe = require('../../common/pipe.cjs');
var memo = require('../../common/memo.cjs');
var is = require('../../either/left/is.cjs');
var unwrap$1 = require('../../common/unwrap.cjs');
var kind$1 = require('../../either/kind.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var transform = require('../../dataParser/parsers/transform.cjs');
var index = require('../../dataParser/parsers/object/index.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
var map = require('../../array/map.cjs');
var entry = require('../../object/entry.cjs');
var base = require('../constraint/base.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var entries = require('../../object/entries.cjs');
var forward = require('../../common/forward.cjs');
var override = require('../../common/override.cjs');

const entityKind = kind.createCleanKind("entity");
const entityHandlerKind = kind.createCleanKind("entity-handler");
class HydrateEntityError extends kindClass.kindClass(errorKindNamespace.createErrorKind("hydrate-entity-error"), Error) {
    rawProperties;
    dataParserError;
    constructor(rawProperties, dataParserError) {
        super({}, "Error when hydrate entity.");
        this.rawProperties = rawProperties;
        this.dataParserError = dataParserError;
    }
}
class RefineEntityError extends kindClass.kindClass(errorKindNamespace.createErrorKind("refine-entity-error"), Error) {
    rawProperties;
    entity;
    information;
    error;
    constructor(rawProperties, entity, information, error) {
        super({}, "Error when refine entity.");
        this.rawProperties = rawProperties;
        this.entity = entity;
        this.information = information;
        this.error = error;
    }
}
/**
 * {@include clean/createEntity/index.md}
 */
function createEntity(name, getPropertiesDefinition) {
    function theNew(properties) {
        return entityKind.addTo(properties, name);
    }
    const propertiesDefinition = memo.memo(() => getPropertiesDefinition(property.entityPropertyDefinitionTools));
    const mapDataParser = memo.memo(() => pipe.pipe(forward.forward(propertiesDefinition.value), entries.entries, map.map(([key, property$1]) => entry.entry(key, property.entityPropertyDefinitionToDataParser(property$1, (newTypeHandler) => {
        const allKind = {
            ...base.constrainedTypeKind.setTo({}, newTypeHandler.internal.constraintKindValue),
            ...newType.newTypeKind.setTo({}, newTypeHandler.name),
        };
        return transform.transform(newTypeHandler.internal.dataParser, (value) => ({
            ...allKind,
            [wrapValue.keyWrappedValue]: value,
        }));
    }))), fromEntries.fromEntries, index.object, (dataParser) => transform.transform(dataParser, (value) => entityKind.setTo(value, name))));
    function map$1(maybeRawProperties, refineEntity) {
        if (typeof maybeRawProperties === "function") {
            return (rawProperties) => map$1(rawProperties, maybeRawProperties);
        }
        const result = mapDataParser.value.parse(maybeRawProperties);
        if (is.isLeft(result)) {
            return create.left("hydrateEntityError", unwrap$1.unwrap(result));
        }
        if (refineEntity) {
            const refineResult = refineEntity(unwrap$1.unwrap(result));
            return refineResult;
        }
        return create$1.right("hydratedEntity", unwrap$1.unwrap(result));
    }
    function mapOrThrow(maybeRawProperties, refineEntity) {
        if (typeof maybeRawProperties === "function") {
            return (rawProperties) => mapOrThrow(rawProperties, maybeRawProperties);
        }
        const result = mapDataParser.value.parse(maybeRawProperties);
        if (is.isLeft(result)) {
            throw new HydrateEntityError(maybeRawProperties, unwrap$1.unwrap(result));
        }
        if (refineEntity) {
            const refineResult = refineEntity(unwrap$1.unwrap(result));
            if (is.isLeft(refineResult)) {
                throw new RefineEntityError(maybeRawProperties, unwrap$1.unwrap(result), kind$1.informationKind.getValue(refineResult), unwrap$1.unwrap(refineResult));
            }
            return unwrap$1.unwrap(refineResult);
        }
        return unwrap$1.unwrap(result);
    }
    function is$1(input) {
        return entityKind.has(input) && entityKind.getValue(input) === name;
    }
    function update(...args) {
        if (args.length === 1) {
            const [newProperties] = args;
            return (entity) => update(entity, newProperties);
        }
        const [entity, newProperties] = args;
        const updatedEntity = {};
        for (const key in propertiesDefinition.value) {
            updatedEntity[key] = newProperties[key] !== undefined
                ? newProperties[key]
                : entity[key];
        }
        return entityKind.setTo(updatedEntity, name);
    }
    return pipe.pipe({
        name,
        get propertiesDefinition() {
            return propertiesDefinition.value;
        },
        get mapDataParser() {
            return mapDataParser.value;
        },
        internal: {
            get mapDataParser() {
                return mapDataParser.value;
            },
        },
        new: theNew,
        map: map$1,
        mapOrThrow,
        is: is$1,
        update,
    }, entityHandlerKind.setTo, createEntity.overrideHandler.apply);
}
createEntity.overrideHandler = override.createOverride("@duplojs/utils/clean/entity");

exports.entityPropertyArrayKind = property.entityPropertyArrayKind;
exports.entityPropertyDefinitionToDataParser = property.entityPropertyDefinitionToDataParser;
exports.entityPropertyDefinitionTools = property.entityPropertyDefinitionTools;
exports.entityPropertyIdentifierKind = property.entityPropertyIdentifierKind;
exports.entityPropertyNullableKind = property.entityPropertyNullableKind;
exports.entityPropertyStructureKind = property.entityPropertyStructureKind;
exports.entityPropertyUnionKind = property.entityPropertyUnionKind;
exports.HydrateEntityError = HydrateEntityError;
exports.RefineEntityError = RefineEntityError;
exports.createEntity = createEntity;
exports.entityHandlerKind = entityHandlerKind;
exports.entityKind = entityKind;
