import { type DataParserCheckerBase } from "../baseChecker";
export type InputChecker<GenericDataParser extends DataParserCheckerBase> = Parameters<GenericDataParser["exec"]>[0];
