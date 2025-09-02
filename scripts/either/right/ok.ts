import { type Kind } from "@scripts/common/kind";
import { right, type EitherRight } from "./create";

export interface EitherOk
	extends EitherRight<"ok", never>,
	Kind<"either-ok"> {

}

export function ok(): EitherOk {
	return {
		"kind-either-ok": null,
		...right("ok", undefined as never),
	};
}
