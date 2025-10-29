import { createKindNamespace } from "@scripts/common";

export const createEitherKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"Either",
);

export const eitherInformationKind = createEitherKind<
	"information",
	string
>("information");
