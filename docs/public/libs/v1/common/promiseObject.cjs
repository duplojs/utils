'use strict';

function promiseObject(object) {
    return Promise
        .all(Object.entries(object)
        .map(([key, promisedValue]) => promisedValue instanceof Promise
        ? promisedValue.then((value) => [key, value])
        : [key, promisedValue]))
        .then((entries) => Object.fromEntries(entries));
}

exports.promiseObject = promiseObject;
