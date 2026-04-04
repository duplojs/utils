import { createQueue } from './theFlow/queue.mjs';

/**
 * {@include flow/queue/index.md}
 */
async function* queue(params) {
    let resolver = undefined;
    yield createQueue({
        concurrency: params?.concurrency ?? 1,
        injectResolver: (injectResolver) => {
            resolver = injectResolver;
        },
    });
    return resolver;
}

export { queue };
