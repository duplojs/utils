'use strict';

const prototypeKeyWrapper = Object.fromEntries(Object.getOwnPropertyNames(Object.getPrototypeOf(Object)).map((name) => [name, null]));
function bindPrototypeMethods(instance) {
    let currentPrototype = Object.getPrototypeOf(instance);
    const alreadySeenKeys = {};
    while (currentPrototype
        && currentPrototype !== Object.prototype) {
        for (const propertyKey of Object.getOwnPropertyNames(currentPrototype)) {
            if (prototypeKeyWrapper[propertyKey] === null) {
                continue;
            }
            if (alreadySeenKeys[propertyKey] === null) {
                continue;
            }
            alreadySeenKeys[propertyKey] = null;
            const description = Object.getOwnPropertyDescriptor(currentPrototype, propertyKey);
            if (!description
                || typeof description.value !== "function"
                || description.writable === false) {
                continue;
            }
            instance[propertyKey] = description.value.bind(instance);
        }
        currentPrototype = Object.getPrototypeOf(currentPrototype);
    }
}

exports.bindPrototypeMethods = bindPrototypeMethods;
