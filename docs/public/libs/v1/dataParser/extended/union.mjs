import { DataParserUnionExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/union/index.md}
 */
const union = detachObjectMethod(DataParserUnionExtended, "create");

export { union };
