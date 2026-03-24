'use strict';

var injection = require('./theFlow/injection.cjs');

/**
 * {@include flow/inject/index.md}
 */
function* inject(dependenceHandler) {
    let dependence = undefined;
    yield injection.createInjection({
        dependenceHandler,
        inject: (value) => {
            dependence = value;
        },
    });
    return dependence;
}

exports.inject = inject;
