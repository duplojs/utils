import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { right, type EitherRight } from "./create";

export const eitherOkKind = createEitherKind("ok");

type _EitherOk = (
	& EitherRight<"ok", never>
	& Kind<typeof eitherOkKind.definition>
);

export interface EitherOk extends _EitherOk {

}

/**
 * {@include either/ok/index.md}
 */
export function ok(): EitherOk {
	return eitherOkKind.setTo(
		right("ok", undefined as never),
	);
}
