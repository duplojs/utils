import { createKind, type Kind } from "@scripts/common/kind";
import { right, type EitherRight } from "./create";

export const eitherOkKind = createKind<
	"either-ok"
>("either-ok");

export type EitherOk = (
	& EitherRight<"ok", never>
	& Kind<typeof eitherOkKind.definition>
);

export function ok(): EitherOk {
	return eitherOkKind.addTo(
		right("ok", undefined as never),
	);
}
