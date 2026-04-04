import { createThrottling } from './theFlow/throttling.mjs';

/**
 * {@include flow/throttling/index.md}
 */
function throttling(time, params) {
    if (params?.keepLast === true) {
        return (async function* () {
            yield createThrottling({
                time,
                returnValue: params?.returnValue,
                keepLast: true,
            });
        })();
    }
    return (function* () {
        yield createThrottling({
            time,
            returnValue: params?.returnValue,
            keepLast: false,
        });
    })();
}

export { throttling };
