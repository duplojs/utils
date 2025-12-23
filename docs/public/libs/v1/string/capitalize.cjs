'use strict';

function capitalize(input) {
    return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
}

exports.capitalize = capitalize;
