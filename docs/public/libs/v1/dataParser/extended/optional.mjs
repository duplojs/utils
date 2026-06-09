import { DataParserOptionalExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const optional = detachObjectMethod(DataParserOptionalExtended, "create");

export { optional };
