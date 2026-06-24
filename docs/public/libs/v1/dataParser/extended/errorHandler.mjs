import { DataParserErrorHandlerExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/errorHandler/index.md}
 */
const errorHandler = detachObjectMethod(DataParserErrorHandlerExtended, "create");

export { errorHandler };
