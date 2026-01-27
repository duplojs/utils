import { type Kind } from "@scripts/common/kind";
import { createEitherKind } from "../kind";
import { right, type Right } from "./create";

export const okKind = createEitherKind("ok");

/**
 * @deprecated use okKind
 */
export const eitherOkKind = okKind;

type _Ok = (
	& Right<"ok", never>
	& Kind<typeof okKind.definition>
);

export interface Ok extends _Ok {

}

/**
 * @deprecated use Ok
 */
export type EitherOk = Ok;

/**
 * {@include either/ok/index.md}
 */
export function ok(): Ok {
	return okKind.setTo(
		right("ok", undefined as never),
	);
}
