import { createCleanKind } from '../kind.mjs';
import { newTypeKind } from '../newType.mjs';
import { entityPropertyDefinitionToDataParser, entityPropertyDefinitionTools } from './property.mjs';
export { entityPropertyArrayKind, entityPropertyIdentifierKind, entityPropertyNullableKind, entityPropertyStructureKind, entityPropertyUnionKind } from './property.mjs';
import { kindClass } from '../../common/kindClass.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { pipe } from '../../common/pipe.mjs';
import { memo } from '../../common/memo.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { informationKind } from '../../either/kind.mjs';
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
import { createOverride } from '../../common/override.mjs';

const entityKind = createCleanKind("entity");
const entityHandlerKind = createCleanKind("entity-handler");
class HydrateEntityError extends kindClass(createErrorKind("hydrate-entity-error"), Error) {
    rawProperties;
    dataParserError;
    constructor(rawProperties, dataParserError) {
        super({}, "Error when hydrate entity.");
        this.rawProperties = rawProperties;
        this.dataParserError = dataParserError;
    }
}
class RefineEntityError extends kindClass(createErrorKind("refine-entity-error"), Error) {
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
    function map$1(maybeRawProperties, refineEntity) {
        if (typeof maybeRawProperties === "function") {
            return (rawProperties) => map$1(rawProperties, maybeRawProperties);
        }
        const result = mapDataParser.value.parse(maybeRawProperties);
        if (isLeft(result)) {
            return left("hydrateEntityError", unwrap(result));
        }
        if (refineEntity) {
            const refineResult = refineEntity(unwrap(result));
            return refineResult;
        }
        return right("hydratedEntity", unwrap(result));
    }
    function mapOrThrow(maybeRawProperties, refineEntity) {
        if (typeof maybeRawProperties === "function") {
            return (rawProperties) => mapOrThrow(rawProperties, maybeRawProperties);
        }
        const result = mapDataParser.value.parse(maybeRawProperties);
        if (isLeft(result)) {
            throw new HydrateEntityError(maybeRawProperties, unwrap(result));
        }
        if (refineEntity) {
            const refineResult = refineEntity(unwrap(result));
            if (isLeft(refineResult)) {
                throw new RefineEntityError(maybeRawProperties, unwrap(result), informationKind.getValue(refineResult), unwrap(refineResult));
            }
            return unwrap(refineResult);
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

export { HydrateEntityError, RefineEntityError, createEntity, entityHandlerKind, entityKind, entityPropertyDefinitionToDataParser, entityPropertyDefinitionTools };
