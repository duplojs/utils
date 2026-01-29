import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { left, type Left } from "./create";

export const failKind = createEitherKind("fail");

/**
 * @deprecated use failKind
 */
export const eitherFailKind = failKind;

type _Fail = (
	& Left<"fail", void>
	& Kind<typeof failKind.definition>
);

export interface Fail extends _Fail {

}

/**
 * @deprecated use Fail
 */
export type EitherFail = Fail;

/**
 * {@include either/fail/index.md}
 */
export function fail(): Fail {
	return failKind.setTo(
		left("fail", undefined as never),
	);
}
