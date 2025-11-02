import { type KindHandler, type UnionToIntersection, type GetKindHandler, type Kind, type UnionContain } from "../common";
import { type DataParser } from "./base";
import { type DataParsers, type DataParsersExtended } from "./types";
import * as DEither from "../either";
type AllDataParsers = (DataParsers | DataParsersExtended);
type KindHandlers = AllDataParsers extends infer InferredDataParser ? InferredDataParser extends DataParser ? GetKindHandler<InferredDataParser> : never : never;
export declare function identifier<GenericKindHandler extends KindHandlers, GenericInput extends DataParser, GenericDataParserResult extends Extract<AllDataParsers, UnionToIntersection<GenericKindHandler extends KindHandler ? Kind<GenericKindHandler["definition"]> : never>>>(kind: GenericKindHandler | GenericKindHandler[]): (input: GenericInput) => ((GenericInput extends any ? UnionContain<GetKindHandler<GenericInput>, GenericKindHandler> extends true ? DEither.EitherSuccess<GenericInput> : DEither.EitherError<GenericInput> : never) | DEither.EitherSuccess<GenericDataParserResult>);
export declare function identifier<GenericKindHandler extends KindHandlers, GenericInput extends DataParser, GenericDataParserResult extends Extract<AllDataParsers, UnionToIntersection<GenericKindHandler extends KindHandler ? Kind<GenericKindHandler["definition"]> : never>>>(input: GenericInput, kind: GenericKindHandler | GenericKindHandler[]): ((GenericInput extends any ? UnionContain<GetKindHandler<GenericInput>, GenericKindHandler> extends true ? DEither.EitherSuccess<GenericInput> : DEither.EitherError<GenericInput> : never) | DEither.EitherSuccess<GenericDataParserResult>);
export {};
