import { createKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export const eitherFailKind = createKind("either-fail");

export type EitherFail = (
	& EitherLeft<"fail", never>
	& Kind<typeof eitherFailKind.definition>
);

export function fail(): EitherFail {
	return eitherFailKind.addTo(
		left("fail", undefined as never),
	);
}
