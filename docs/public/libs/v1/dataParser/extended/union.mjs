import { DataParserUnionExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const union = detachObjectMethod(DataParserUnionExtended, "create");

export { union };
