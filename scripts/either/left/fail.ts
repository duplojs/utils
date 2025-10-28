import { type MergeKind, type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { left, type EitherLeft } from "./create";

export const eitherFailKind = createEitherKind("fail");

export interface EitherFail extends MergeKind<
	Kind<typeof eitherFailKind.definition>,
	EitherLeft<"fail", never>
> {

}

export function fail(): EitherFail {
	return eitherFailKind.setTo(
		left("fail", undefined as never),
	);
}
