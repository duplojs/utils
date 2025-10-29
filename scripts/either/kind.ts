import { createKindNamespace } from "@scripts/common";

export const createEitherKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsUtilsEither",
);

export const eitherInformationKind = createEitherKind<
	"information",
	string
>("information");
