'use strict';

/**
 * {@include string/uncapitalize/index.md}
 */
function uncapitalize(input) {
    return `${input.charAt(0).toLowerCase()}${input.slice(1)}`;
}

exports.uncapitalize = uncapitalize;
