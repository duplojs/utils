'use strict';

function modulo(...args) {
    if (args.length === 1) {
        const [divisor] = args;
        return (value) => modulo(value, divisor);
    }
    const [value, divisor] = args;
    return value % divisor;
}

exports.modulo = modulo;
