import { detachObjectMethod } from "@scripts/common";
import { DataParserErrorHandlerExtended } from "./base";

/**
 * {@include dataParser/extended/errorHandler/index.md}
 */
export const errorHandler = detachObjectMethod(DataParserErrorHandlerExtended, "create");
