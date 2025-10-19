import { createKind, type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export const eitherFailKind = createKind("either-fail");

type _EitherFail = (
	& EitherLeft<"fail", never>
	& Kind<typeof eitherFailKind.definition>
);

export interface EitherFail extends _EitherFail {

}

export function fail(): EitherFail {
	return eitherFailKind.setTo(
		left("fail", undefined as never),
	);
}
