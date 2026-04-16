import { createCleanKind } from '../kind.mjs';
import { newTypeKind } from '../newType.mjs';
import { entityPropertyDefinitionToDataParser, entityPropertyDefinitionTools } from './property.mjs';
export { entityPropertyArrayKind, entityPropertyIdentifierKind, entityPropertyNullableKind, entityPropertyStructureKind, entityPropertyUnionKind } from './property.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { pipe } from '../../common/pipe.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { memo } from '../../common/memo.mjs';
import { createOverride } from '../../common/override.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { left } from '../../either/left/create.mjs';
import { right } from '../../either/right/create.mjs';
import { transform } from '../../dataParser/parsers/transform.mjs';
import { object } from '../../dataParser/parsers/object/index.mjs';
import { fromEntries } from '../../object/fromEntries.mjs';
import { map } from '../../array/map.mjs';
import { entry } from '../../object/entry.mjs';
import { constrainedTypeKind } from '../constraint/base.mjs';
import { keyWrappedValue } from '../../common/wrapValue.mjs';
import { entries } from '../../object/entries.mjs';
import { forward } from '../../common/forward.mjs';

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
    const propertiesDefinition = memo(() => getPropertiesDefinition(entityPropertyDefinitionTools));
    const mapDataParser = memo(() => pipe(forward(propertiesDefinition.value), entries, map(([key, property]) => entry(key, entityPropertyDefinitionToDataParser(property, (newTypeHandler) => {
        const allKind = {
            ...constrainedTypeKind.setTo({}, newTypeHandler.internal.constraintKindValue),
            ...newTypeKind.setTo({}, newTypeHandler.name),
        };
        return transform(newTypeHandler.internal.dataParser, (value) => ({
            ...allKind,
            [keyWrappedValue]: value,
        }));
    }))), fromEntries, object, (dataParser) => transform(dataParser, (value) => entityKind.setTo(value, name))));
    function map$1(rawProperties) {
        const result = mapDataParser.value.parse(rawProperties);
        if (isLeft(result)) {
            return left("createEntityError", unwrap(result));
        }
        return right("createEntity", unwrap(result));
    }
    function mapOrThrow(rawProperties) {
        const result = mapDataParser.value.parse(rawProperties);
        if (isLeft(result)) {
            throw new CreateEntityError(rawProperties, unwrap(result));
        }
        return unwrap(result);
    }
    function is(input) {
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
    return pipe({
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
        is,
        update,
    }, entityHandlerKind.setTo, createEntity.overrideHandler.apply);
}
createEntity.overrideHandler = createOverride("@duplojs/utils/clean/entity");

export { CreateEntityError, createEntity, entityHandlerKind, entityKind, entityPropertyDefinitionToDataParser, entityPropertyDefinitionTools };
