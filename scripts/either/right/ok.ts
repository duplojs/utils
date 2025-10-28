import { type MergeKind, type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { right, type EitherRight } from "./create";

export const eitherOkKind = createEitherKind("ok");

export interface EitherOk extends MergeKind<
	Kind<typeof eitherOkKind.definition>,
	EitherRight<"ok", never>
> {

}

export function ok(): EitherOk {
	return eitherOkKind.setTo(
		right("ok", undefined as never),
	);
}
