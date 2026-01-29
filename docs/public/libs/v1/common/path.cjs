'use strict';

var success = require('../either/right/success.cjs');
var fail = require('../either/left/fail.cjs');

exports.Path = void 0;
(function (Path) {
    Path.baseNameRegex = /\/?([^/]+)$/;
    Path.folderNameRegex = /([^]+)\/[^/]+\/?$/;
    Path.extensionNameRegex = /\.([^./]+)$/;
    Path.isRelativeRegex = /(^|\/)\.\.(?=\/|$)/;
    Path.segmentTrailingRegex = /\/$/;
    Path.segmentRelativeRegex = /^(.\/)/;
    /**
     * {@include common/path/getBaseName/index.md}
     */
    function getBaseName(path, params) {
        const match = Path.baseNameRegex.exec(path);
        if (!match) {
            return null;
        }
        if (params?.removeExtension) {
            return match[1].replace(Path.extensionNameRegex, "");
        }
        return match[1];
    }
    Path.getBaseName = getBaseName;
    /**
     * {@include common/path/getExtensionName/index.md}
     */
    function getExtensionName(path) {
        const match = Path.extensionNameRegex.exec(path);
        if (match) {
            return match[1];
        }
        return null;
    }
    Path.getExtensionName = getExtensionName;
    /**
     * {@include common/path/getParentFolderPath/index.md}
     */
    function getParentFolderPath(path) {
        const match = path.match(Path.folderNameRegex);
        if (!match) {
            return null;
        }
        return match[1];
    }
    Path.getParentFolderPath = getParentFolderPath;
    /**
     * {@include common/path/isAbsolute/index.md}
     */
    function isAbsolute(path) {
        return path.startsWith("/")
            && !Path.isRelativeRegex.test(path);
    }
    Path.isAbsolute = isAbsolute;
    /**
     * {@include common/path/resolveFrom/index.md}
     */
    function resolveFrom(origin, segments) {
        const result = resolveRelative([origin, ...segments]);
        return isAbsolute(result)
            ? success.success(result)
            : fail.fail();
    }
    Path.resolveFrom = resolveFrom;
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
                .replace(Path.segmentTrailingRegex, "")
                .replace(Path.segmentRelativeRegex, "");
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
    Path.resolveRelative = resolveRelative;
})(exports.Path || (exports.Path = {}));
