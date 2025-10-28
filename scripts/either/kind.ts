import { createKindNamespace } from "@scripts/common";

export const createEitherKind = createKindNamespace("Either");

export const eitherInformationKind = createEitherKind<
	"information",
	string
>("information");
