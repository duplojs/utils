var Path;
(function (Path) {
    Path.baseNameRegex = /\/?([^/]+)$/;
    Path.folderNameRegex = /([^]+)\/[^/]+\/?$/;
    Path.extensionNameRegex = /\.([^./]+)$/;
    Path.isContainBackPathRegex = /(^|\/)\.\.(?=\/|$)/;
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
    function getExtensionName(path, params) {
        const match = Path.extensionNameRegex.exec(path);
        if (match) {
            return params?.withDot
                ? `.${match[1]}`
                : match[1];
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
            && !Path.isContainBackPathRegex.test(path);
    }
    Path.isAbsolute = isAbsolute;
    /**
     * {@include common/path/resolveFrom/index.md}
     */
    function resolveFrom(origin, segments, params) {
        const resultRelative = resolveRelative(segments);
        if (params?.stayInOrigin && resultRelative.startsWith("../")) {
            return null;
        }
        const result = resolveRelative([origin, resultRelative]);
        return isAbsolute(result)
            ? result
            : null;
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
            else if (segment === "/") {
                clearedPath = segment;
                continue;
            }
            const formattedSegment = fix(segment);
            if (formattedSegment.startsWith("/") || clearedPath === "") {
                clearedPath = formattedSegment;
            }
            else if (clearedPath === "/") {
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
    /**
     * {@include common/path/fix/index.md}
     */
    function fix(path) {
        return path
            .replace(Path.segmentTrailingRegex, "")
            .replace(Path.segmentRelativeRegex, "");
    }
    Path.fix = fix;
    /**
     * {@include common/path/computeRelativeFromTo/index.md}
     */
    function computeRelativeFromTo(source, destination) {
        const fixedSource = fix(source);
        const fixedDestination = fix(destination);
        if (!isAbsolute(fixedSource) || !isAbsolute(fixedDestination)) {
            return null;
        }
        const sourceSegments = fixedSource.split("/");
        const destinationSegments = fixedDestination.split("/");
        let commonIndex = 1;
        while (commonIndex < sourceSegments.length
            && commonIndex < destinationSegments.length
            && sourceSegments[commonIndex] === destinationSegments[commonIndex]) {
            commonIndex++;
        }
        let result = "";
        for (let index = commonIndex; index < sourceSegments.length; index++) {
            result += result === ""
                ? ".."
                : "/..";
        }
        for (let index = commonIndex; index < destinationSegments.length; index++) {
            result += result === ""
                ? destinationSegments[index]
                : `/${destinationSegments[index]}`;
        }
        return result || ".";
    }
    Path.computeRelativeFromTo = computeRelativeFromTo;
})(Path || (Path = {}));

export { Path };
