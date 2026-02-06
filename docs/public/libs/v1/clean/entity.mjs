import { createCleanKind } from './kind.mjs';
import { newTypeHandlerKind, newTypeKind } from './newType.mjs';
import { asserts } from '../common/asserts.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { map } from '../array/map.mjs';
import { toTuple } from '../array/toTuple.mjs';
import { first } from '../array/at/first.mjs';
import { innerPipe } from '../common/innerPipe.mjs';
import { when } from '../pattern/when.mjs';
import { isType } from '../common/isType.mjs';
import { exhaustive } from '../pattern/exhaustive.mjs';
import { when as when$1 } from '../common/when.mjs';
import { array } from '../dataParser/parsers/array/index.mjs';
import { checkerArrayMin } from '../dataParser/parsers/array/checkers/min.mjs';
import { checkerArrayMax } from '../dataParser/parsers/array/checkers/max.mjs';
import { nullable } from '../dataParser/parsers/nullable.mjs';
import { dataParserKind } from '../dataParser/base.mjs';
import { last } from '../array/at/last.mjs';
import { entries } from '../object/entries.mjs';
import { forward } from '../common/forward.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { entry } from '../object/entry.mjs';
import { transform } from '../dataParser/parsers/transform.mjs';
import { constrainedTypeKind } from './constraint/base.mjs';
import { wrapValue } from '../common/wrapValue.mjs';
import { minElements } from '../array/minElements.mjs';
import { union } from '../dataParser/parsers/union.mjs';
import { object } from '../dataParser/parsers/object/index.mjs';
import { createOverride } from '../common/override.mjs';
import { isLeft } from '../either/left/is.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { left } from '../either/left/create.mjs';
import { right } from '../either/right/create.mjs';

const entityKind = createCleanKind("entity");
const entityHandlerKind = createCleanKind("entity-handler");
class CreateEntityError extends kindHeritage("create-entity-error", createErrorKind("create-entity-error"), Error) {
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
        const constraintKindValue = pipe(simplePropertyDefinition.constraints, map(({ name }) => entry(name, null)), fromEntries);
        return transform(simplePropertyDefinition.dataParser, (value) => constrainedTypeKind.setTo(newTypeKind.setTo(wrapValue(value), simplePropertyDefinition.name), constraintKindValue));
    }
    function unionPropertyDefinitionToDataParser(unionPropertyDefinition) {
        return pipe(unionPropertyDefinition, map(simplePropertyDefinitionToDataParser), (options) => {
            asserts(options, minElements(1));
            return union(options);
        });
    }
    const params = {
        union: (...type) => ({ type }),
        array: (definition, params) => (newTypeHandlerKind.has(definition) || definition instanceof Array
            ? {
                type: definition,
                inArray: params ?? true,
            }
            : {
                ...definition,
                inArray: params ?? true,
            }),
        nullable: (definition) => (newTypeHandlerKind.has(definition) || definition instanceof Array
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
    const mapDataParser = pipe(forward(propertiesDefinition), entries, map(toTuple([
        first,
        innerPipe(last, when(newTypeHandlerKind.has, simplePropertyDefinitionToDataParser), when(isType("array"), unionPropertyDefinitionToDataParser), when(isType("object"), (definition) => pipe(definition.type, when(newTypeHandlerKind.has, simplePropertyDefinitionToDataParser), when(isType("array"), unionPropertyDefinitionToDataParser), exhaustive, when$1(dataParserKind.has, innerPipe((dataParser) => {
            if (definition.inArray) {
                return pipe(array(dataParser), (dataParser) => typeof definition.inArray === "object"
                    && definition.inArray.min !== undefined
                    ? dataParser.addChecker(checkerArrayMin(definition.inArray.min))
                    : dataParser, (dataParser) => typeof definition.inArray === "object"
                    && definition.inArray.max !== undefined
                    ? dataParser.addChecker(checkerArrayMax(definition.inArray.max))
                    : dataParser);
            }
            return dataParser;
        }, when$1(() => definition.nullable === true, nullable))))), exhaustive),
    ])), fromEntries, object, (dataParser) => transform(dataParser, (value) => entityKind.setTo(value, name)));
    function map$1(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (isLeft(result)) {
            return left("createEntityError", unwrap(result));
        }
        return right("createEntity", unwrap(result));
    }
    function mapOrThrow(rawProperties) {
        const result = mapDataParser.parse(rawProperties);
        if (isLeft(result)) {
            throw new CreateEntityError(rawProperties, unwrap(result));
        }
        return unwrap(result);
    }
    function is(input) {
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
    return pipe({
        name,
        propertiesDefinition,
        mapDataParser,
        new: theNew,
        map: map$1,
        mapOrThrow,
        is,
        update,
    }, entityHandlerKind.setTo, createEntity.overrideHandler.apply);
}
createEntity.overrideHandler = createOverride("@duplojs/utils/clean/entity");

export { CreateEntityError, createEntity, entityKind };
