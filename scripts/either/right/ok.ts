import { type Kind } from "@scripts/common/kind";
import { createRight, type EitherRight } from "./create";

export interface EitherOk
	extends EitherRight<"ok", never>,
	Kind<"either-ok"> {

}

export function createOk(): EitherOk {
	return {
		"kind-either-ok": null,
		...createRight("ok", undefined as never),
	};
}
