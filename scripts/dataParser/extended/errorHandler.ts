import { detachObjectMethod } from "@scripts/common";
import { DataParserErrorHandlerExtended } from "./base";

export const errorHandler = detachObjectMethod(DataParserErrorHandlerExtended, "create");
