'use strict';

var wrapValue = require('./wrapValue.cjs');

const keyKindPrefix = `${wrapValue.keyWrappedValue}/kind/`;
function createKind(name) {
    const runTimeKey = `${keyKindPrefix}${name}`;
    return {
        definition: {
            name,
            value: null,
        },
        runTimeKey,
        addTo(input, value = null) {
            return {
                ...input,
                [runTimeKey]: value,
            };
        },
        setTo(input, value = null) {
            input[runTimeKey] = value;
            return input;
        },
        has(input) {
            return input
                && typeof input === "object"
                && runTimeKey in input;
        },
        getValue(input) {
            return input[runTimeKey];
        },
    };
}
function kindHeritage(uniqueName, kind) {
    const uniqueKind = createKind(uniqueName);
    const kinds = kind instanceof Array
        ? kind
        : [kind];
    const ParentKindClass = (function ParentKindClass(params = {}) {
        for (const kind of kinds) {
            this[kind.runTimeKey] = params[kind.definition.name] ?? null;
        }
    });
    kinds.forEach((value) => {
        ParentKindClass.prototype[value.runTimeKey] = null;
    });
    ParentKindClass.prototype[uniqueKind.runTimeKey] = null;
    Object.defineProperty(ParentKindClass, Symbol.hasInstance, {
        value: (value) => {
            if (!uniqueKind.has(value)) {
                return false;
            }
            for (const kind of kinds) {
                if (!kind.has(value)) {
                    return false;
                }
            }
            return true;
        },
    });
    return ParentKindClass;
}

exports.createKind = createKind;
exports.keyKindPrefix = keyKindPrefix;
exports.kindHeritage = kindHeritage;
