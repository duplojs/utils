'use strict';

/**
 * {@include common/sleep/index.md}
 */
function sleep(millieSeconde) {
    return new Promise((resolve) => void setTimeout(resolve, millieSeconde));
}

exports.sleep = sleep;
