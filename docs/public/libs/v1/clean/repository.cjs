'use strict';

var port = require('./port.cjs');

/**
 * {@include clean/createRepository/index.md}
 */
const createRepository = port.createPort;

exports.createRepository = createRepository;
