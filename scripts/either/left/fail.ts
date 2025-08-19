import { type TheKind } from "@scripts/common/theKind";
import { createEitherLeft, type EitherLeft } from "./create";

export interface EitherFail
	extends EitherLeft<"fail", never>,
	TheKind<"either-fail"> {

}

export function createEitherFail(): EitherFail {
	return {
		"kind-either-fail": null,
		...createEitherLeft("fail", undefined as never),
	};
}
