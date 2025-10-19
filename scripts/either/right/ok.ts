import { createKind, type Kind } from "@scripts/common/kind";
import { right, type EitherRight } from "./create";

export const eitherOkKind = createKind("either-ok");

type _EitherOk = (
	& EitherRight<"ok", never>
	& Kind<typeof eitherOkKind.definition>
);

export interface EitherOk extends _EitherOk {

}

export function ok(): EitherOk {
	return eitherOkKind.setTo(
		right("ok", undefined as never),
	);
}
