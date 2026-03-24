import { createInjection } from './theFlow/injection.mjs';

/**
 * {@include flow/inject/index.md}
 */
function* inject(dependenceHandler) {
    let dependence = undefined;
    yield createInjection({
        dependenceHandler,
        inject: (value) => {
            dependence = value;
        },
    });
    return dependence;
}

export { inject };
