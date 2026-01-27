import { createKindNamespace } from "@scripts/common";

export const createEitherKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsEither",
);

export const informationKind = createEitherKind<
	"information",
	string
>("information");

/**
 * @deprecated use informationKind
 */
export const eitherInformationKind = informationKind;
