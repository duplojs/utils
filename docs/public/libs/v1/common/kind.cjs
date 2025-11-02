'use strict';

const keyKindPrefix = "@duplojs/utils/kind/";
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
function createKindNamespace(namespace) {
    return (name) => {
        const kindHandler = createKind(`@${namespace}/${name}`);
        return kindHandler;
    };
}
function kindHeritage(uniqueName, kind, parent) {
    const uniqueKind = createKind(uniqueName);
    const kinds = kind instanceof Array
        ? kind
        : [kind];
    const Extendable = (parent ?? class {
    });
    const ParentKindClass = (class extends Extendable {
        constructor(params = {}, parentParams = []) {
            super(...parentParams);
            for (const kind of kinds) {
                this[kind.runTimeKey] = params[kind.definition.name] ?? null;
            }
        }
        static [Symbol.hasInstance](value) {
            if (!uniqueKind.has(value)) {
                return false;
            }
            for (const kind of kinds) {
                if (!kind.has(value)) {
                    return false;
                }
            }
            return true;
        }
    });
    kinds.forEach((value) => {
        ParentKindClass.prototype[value.runTimeKey] = null;
    });
    ParentKindClass.prototype[uniqueKind.runTimeKey] = null;
    return ParentKindClass;
}
function isRuntimeKind(value) {
    return value.startsWith(keyKindPrefix);
}

exports.createKind = createKind;
exports.createKindNamespace = createKindNamespace;
exports.isRuntimeKind = isRuntimeKind;
exports.keyKindPrefix = keyKindPrefix;
exports.kindHeritage = kindHeritage;
