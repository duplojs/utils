'use strict';

var kind = require('./kind.cjs');
var newType = require('./newType.cjs');
var asserts = require('../common/asserts.cjs');
var kind$1 = require('../common/kind.cjs');
var pipe = require('../common/pipe.cjs');
var map = require('../array/map.cjs');
var toTuple = require('../array/toTuple.cjs');
var first = require('../array/at/first.cjs');
var innerPipe = require('../common/innerPipe.cjs');
var when = require('../pattern/when.cjs');
var isType = require('../common/isType.cjs');
var exhaustive = require('../pattern/exhaustive.cjs');
var when$1 = require('../common/when.cjs');
var index = require('../dataParser/parsers/array/index.cjs');
var min = require('../dataParser/parsers/array/checkers/min.cjs');
var max = require('../dataParser/parsers/array/checkers/max.cjs');
var nullable = require('../dataParser/parsers/nullable.cjs');
var base = require('../dataParser/base.cjs');
var last = require('../array/at/last.cjs');
var entries = require('../object/entries.cjs');
var forward = require('../common/forward.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var entry = require('../object/entry.cjs');
var transform = require('../dataParser/parsers/transform.cjs');
var base$1 = require('./constraint/base.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var minElements = require('../array/minElements.cjs');
var union = require('../dataParser/parsers/union.cjs');
var index$1 = require('../dataParser/parsers/object/index.cjs');
var override = require('../common/override.cjs');
var is = require('../either/left/is.cjs');
var unwrap = require('../common/unwrap.cjs');
var create = require('../either/left/create.cjs');
var create$1 = require('../either/right/create.cjs');

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
    function simplePropertyDefinitionToDataParser(simplePropertyDefinition) {
        const constraintKindValue = pipe.pipe(simplePropertyDefinition.constraints, map.map(({ name }) => entry.entry(name, null)), fromEntries.fromEntries);
        return transform.transform(simplePropertyDefinition.dataParser, (value) => base$1.constrainedTypeKind.setTo(newType.newTypeKind.setTo(wrapValue.wrapValue(value), simplePropertyDefinition.name), constraintKindValue));
    }
    function unionPropertyDefinitionToDataParser(unionPropertyDefinition) {
        return pipe.pipe(unionPropertyDefinition, map.map(simplePropertyDefinitionToDataParser), (options) => {
            asserts.asserts(options, minElements.minElements(1));
            return union.union(options);
        });
    }
    const params = {
        union: (...type) => ({ type }),
        array: (definition, params) => (newType.newTypeHandlerKind.has(definition) || definition instanceof Array
            ? {
                type: definition,
                inArray: params ?? true,
            }
            : {
                ...definition,
                inArray: params ?? true,
            }),
        nullable: (definition) => (newType.newTypeHandlerKind.has(definition) || definition instanceof Array
            ? {
                type: definition,
                nullable: true,
            }
            : {
                ...definition,
                nullable: true,
            }),
    };
    const propertiesDefinition = getPropertiesDefinition(params);
    const mapDataParser = pipe.pipe(forward.forward(propertiesDefinition), entries.entries, map.map(toTuple.toTuple([
        first.first,
        innerPipe.innerPipe(last.last, when.when(newType.newTypeHandlerKind.has, simplePropertyDefinitionToDataParser), when.when(isType.isType("array"), unionPropertyDefinitionToDataParser), when.when(isType.isType("object"), (definition) => pipe.pipe(definition.type, when.when(newType.newTypeHandlerKind.has, simplePropertyDefinitionToDataParser), when.when(isType.isType("array"), unionPropertyDefinitionToDataParser), exhaustive.exhaustive, when$1.when(base.dataParserKind.has, innerPipe.innerPipe((dataParser) => {
            if (definition.inArray) {
                return pipe.pipe(index.array(dataParser), (dataParser) => typeof definition.inArray === "object"
                    && definition.inArray.min !== undefined
                    ? dataParser.addChecker(min.checkerArrayMin(definition.inArray.min))
                    : dataParser, (dataParser) => typeof definition.inArray === "object"
                    && definition.inArray.max !== undefined
                    ? dataParser.addChecker(max.checkerArrayMax(definition.inArray.max))
                    : dataParser);
            }
            return dataParser;
        }, when$1.when(() => definition.nullable === true, nullable.nullable))))), exhaustive.exhaustive),
    ])), fromEntries.fromEntries, index$1.object, (dataParser) => transform.transform(dataParser, (value) => entityKind.setTo(value, name)));
    function map$1(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (is.isLeft(result)) {
            return create.left("createEntityError", unwrap.unwrap(result));
        }
        return create$1.right("createEntity", unwrap.unwrap(result));
    }
    function mapOrThrow(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (is.isLeft(result)) {
            throw new CreateEntityError(rawProperties, unwrap.unwrap(result));
        }
        return unwrap.unwrap(result);
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

exports.CreateEntityError = CreateEntityError;
exports.createEntity = createEntity;
exports.entityKind = entityKind;
