import { detachObjectMethod } from "@scripts/common";
import { DataParserArrayExtended } from "./base";

/**
 * {@include dataParser/extended/array/index.md}
 */
export const array = detachObjectMethod(DataParserArrayExtended, "create");
