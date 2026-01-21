'use strict';

var normalize = require('./normalize.cjs');
var length = require('../../string/length.cjs');
var endsWith = require('../../string/endsWith.cjs');
var startsWith = require('../../string/startsWith.cjs');
var concat = require('../../string/concat.cjs');
var slice = require('../../string/slice.cjs');

function join(...segments) {
    let path = "";
    for (const segment of segments) {
        const segmentLength = length.length(segment);
        if (segmentLength === 0) {
            continue;
        }
        if (length.length(path) === 0) {
            path = segment;
            continue;
        }
        const pathTrailing = endsWith.endsWith(path, "/");
        const segmentLeading = startsWith.startsWith(segment, "/");
        if (pathTrailing && segmentLeading) {
            path = concat.concat(path, slice.slice(segment, 1, segmentLength));
        }
        else if (pathTrailing || segmentLeading) {
            path = concat.concat(path, segment);
        }
        else {
            path = concat.concat(path, "/", segment);
        }
    }
    return normalize.normalize(path);
}

exports.join = join;
