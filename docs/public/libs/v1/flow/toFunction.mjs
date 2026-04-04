import { run } from './run.mjs';

/**
 * {@include flow/toFunction/index.md}
 */
function toFunction(flow, ...[params]) {
    return (input) => run(flow, {
        ...params,
        input,
    });
}

export { toFunction };
