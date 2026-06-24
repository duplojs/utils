import { detachObjectMethod } from "@scripts/common";
import { DataParserUnionExtended } from "./base";

/**
 * {@include dataParser/extended/union/index.md}
 */
export const union = detachObjectMethod(DataParserUnionExtended, "create");
