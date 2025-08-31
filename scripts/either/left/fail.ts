import { type Kind } from "@scripts/common/kind";
import { createLeft, type EitherLeft } from "./create";

export interface EitherFail
	extends EitherLeft<"fail", never>,
	Kind<"either-fail"> {

}

export function createFail(): EitherFail {
	return {
		"kind-either-fail": null,
		...createLeft("fail", undefined as never),
	};
}
