import { type Kind } from "@scripts/common/kind";
import { createEitherLeft, type EitherLeft } from "./create";

export interface EitherFail
	extends EitherLeft<"fail", never>,
	Kind<"either-fail"> {

}

export function createEitherFail(): EitherFail {
	return {
		"kind-either-fail": null,
		...createEitherLeft("fail", undefined as never),
	};
}
