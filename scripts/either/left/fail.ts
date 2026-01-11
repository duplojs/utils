import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { left, type EitherLeft } from "./create";

export const eitherFailKind = createEitherKind("fail");

type _EitherFail = (
	& EitherLeft<"fail", never>
	& Kind<typeof eitherFailKind.definition>
);

export interface EitherFail extends _EitherFail {

}

/**
 * {@include either/fail/index.md}
 */
export function fail(): EitherFail {
	return eitherFailKind.setTo(
		left("fail", undefined as never),
	);
}
