'use strict';

function createEnum(values) {
    return Object.fromEntries([
        ...values.map((value) => [value, value]),
        ["toTuple", () => values],
        ["has", (value) => values.includes(value)],
    ]);
}

exports.createEnum = createEnum;
