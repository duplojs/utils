import { type EitherRight } from "../right";
import { type Kind } from "../../common/kind";
import { eitherFutureKind } from "./base";
export declare const eitherFutureSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"either-future-success", unknown>>;
type _EitherFutureSuccess<GenericValue extends unknown = unknown> = (EitherRight<"future", GenericValue> & Kind<typeof eitherFutureKind.definition> & Kind<typeof eitherFutureSuccessKind.definition>);
export interface EitherFutureSuccess<GenericValue extends unknown = unknown> extends _EitherFutureSuccess<GenericValue> {
}
export declare function futureSuccess<const GenericValue extends unknown>(value: GenericValue): EitherFutureSuccess<GenericValue>;
export {};
