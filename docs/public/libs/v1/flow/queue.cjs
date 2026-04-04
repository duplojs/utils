'use strict';

var queue$1 = require('./theFlow/queue.cjs');

/**
 * {@include flow/queue/index.md}
 */
async function* queue(params) {
    let resolver = undefined;
    yield queue$1.createQueue({
        concurrency: params?.concurrency ?? 1,
        injectResolver: (injectResolver) => {
            resolver = injectResolver;
        },
    });
    return resolver;
}

exports.queue = queue;
