'use strict';

function sleep(millieSeconde) {
    return new Promise((resolve) => void setTimeout(resolve, millieSeconde));
}

exports.sleep = sleep;
