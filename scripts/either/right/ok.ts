import { type Kind } from "@scripts/common/kind";
import { createEitherRight, type EitherRight } from "./create";

export interface EitherOk
	extends EitherRight<"ok", never>,
	Kind<"either-ok"> {

}

export function createEitherOk(): EitherOk {
	return {
		"kind-either-ok": null,
		...createEitherRight("ok", undefined as never),
	};
}
