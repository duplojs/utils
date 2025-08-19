import { type TheKind } from "@scripts/common/theKind";
import { createEitherRight, type EitherRight } from "./create";

export interface EitherOk
	extends EitherRight<"ok", never>,
	TheKind<"either-ok"> {

}

export function createEitherOk(): EitherOk {
	return {
		"kind-either-ok": null,
		...createEitherRight("ok", undefined as never),
	};
}
