import { DataParserNullableExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/nullable/index.md}
 */
const nullable = detachObjectMethod(DataParserNullableExtended, "create");

export { nullable };
