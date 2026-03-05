'use strict';

var kind = require('../kind.cjs');
var newType = require('../newType.cjs');
var property = require('./property.cjs');
var kind$1 = require('../../common/kind.cjs');
var pipe = require('../../common/pipe.cjs');
var map = require('../../array/map.cjs');
var entry = require('../../object/entry.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
var transform = require('../../dataParser/parsers/transform.cjs');
var entries = require('../../object/entries.cjs');
var forward = require('../../common/forward.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var index = require('../../dataParser/parsers/object/index.cjs');
var base = require('../constraint/base.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var override = require('../../common/override.cjs');
var is = require('../../either/left/is.cjs');
var unwrap$1 = require('../../common/unwrap.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');

const entityKind = kind.createCleanKind("entity");
const entityHandlerKind = kind.createCleanKind("entity-handler");
class CreateEntityError extends kind$1.kindHeritage("create-entity-error", errorKindNamespace.createErrorKind("create-entity-error"), Error) {
    rawProperties;
    dataParserError;
    constructor(rawProperties, dataParserError) {
        super({}, ["Error when create entity."]);
        this.rawProperties = rawProperties;
        this.dataParserError = dataParserError;
    }
}
/**
 * {@include clean/createEntity/index.md}
 */
function createEntity(name, getPropertiesDefinition) {
    function theNew(properties) {
        return entityKind.addTo(properties, name);
    }
    const propertiesDefinition = getPropertiesDefinition(property.entityPropertyDefinitionTools);
    const mapDataParser = pipe.pipe(forward.forward(propertiesDefinition), entries.entries, map.map(([key, property$1]) => entry.entry(key, property.entityPropertyDefinitionToDataParser(property$1, (newTypeHandler) => {
        const constraintKindValue = pipe.pipe(newTypeHandler.constraints, map.map(({ name }) => entry.entry(name, null)), fromEntries.fromEntries);
        return transform.transform(newTypeHandler.dataParser, (value) => base.constrainedTypeKind.setTo(newType.newTypeKind.setTo(wrapValue.wrapValue(value), newTypeHandler.name), constraintKindValue));
    }))), fromEntries.fromEntries, index.object, (dataParser) => transform.transform(dataParser, (value) => entityKind.setTo(value, name)));
    function map$1(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (is.isLeft(result)) {
            return create.left("createEntityError", unwrap$1.unwrap(result));
        }
        return create$1.right("createEntity", unwrap$1.unwrap(result));
    }
    function mapOrThrow(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (is.isLeft(result)) {
            throw new CreateEntityError(rawProperties, unwrap$1.unwrap(result));
        }
        return unwrap$1.unwrap(result);
    }
    function is$1(input) {
        return entityKind.has(input) && entityKind.getValue(input) === name;
    }
    function update(entity, newProperties) {
        const updatedEntity = {};
        for (const key in propertiesDefinition) {
            updatedEntity[key] = newProperties[key] !== undefined
                ? newProperties[key]
                : entity[key];
        }
        return entityKind.setTo(updatedEntity, name);
    }
    return pipe.pipe({
        name,
        propertiesDefinition,
        mapDataParser,
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
exports.CreateEntityError = CreateEntityError;
exports.createEntity = createEntity;
exports.entityKind = entityKind;
