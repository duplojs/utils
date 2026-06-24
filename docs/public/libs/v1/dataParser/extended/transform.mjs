import { DataParserTransformExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/transform/index.md}
 */
const transform = detachObjectMethod(DataParserTransformExtended, "create");

export { transform };
