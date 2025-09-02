import { type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export interface EitherFail
	extends EitherLeft<"fail", never>,
	Kind<"either-fail"> {

}

export function fail(): EitherFail {
	return {
		"kind-either-fail": null,
		...left("fail", undefined as never),
	};
}
