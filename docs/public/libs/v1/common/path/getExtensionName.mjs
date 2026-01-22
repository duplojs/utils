import { minElements } from '../../array/minElements.mjs';

const extensionNameRegex = /\.([^./]+)$/;
/**
 * {@include common/path/getExtensionName/index.md}
 */
function getExtensionName(path) {
    const match = extensionNameRegex.exec(path);
    if (!!match && minElements(match, 2)) {
        return match[1];
    }
    return null;
}

export { getExtensionName };
