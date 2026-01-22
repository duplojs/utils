'use strict';

const segmentTrailingRegex = /\/$/;
const segmentRelativeRegex = /^(.\/)/;
/**
 * {@include common/path/resolveRelative/index.md}
 */
function resolveRelative(segments) {
    let clearedPath = "";
    for (const segment of segments) {
        if (segment.length === 0) {
            continue;
        }
        if (segment === "/") {
            clearedPath = segment;
            continue;
        }
        const formattedSegment = segment
            .replace(segmentTrailingRegex, "")
            .replace(segmentRelativeRegex, "");
        if (formattedSegment.startsWith("/")) {
            clearedPath = formattedSegment;
            continue;
        }
        if (clearedPath === "/") {
            clearedPath += formattedSegment;
        }
        else {
            clearedPath += `/${formattedSegment}`;
        }
    }
    const dotResult = [];
    const result = [];
    for (const element of clearedPath.split("/")) {
        if (element === "..") {
            const deletedElement = result.pop();
            if (!deletedElement) {
                dotResult.push(element);
            }
        }
        else {
            result.push(element);
        }
    }
    if (dotResult.length === 0) {
        return result.join("/");
    }
    return `${dotResult.join("/")}/${result.join("/")}`;
}

exports.resolveRelative = resolveRelative;
