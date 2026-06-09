import { DataParserNullableExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const nullable = detachObjectMethod(DataParserNullableExtended, "create");

export { nullable };
