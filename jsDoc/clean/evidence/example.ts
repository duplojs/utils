import { C, pipe } from "@scripts";

const name = C.String.createOrThrow("Ada");

const withParsedEvidence = C.appendEvidence(name, "parsed");
// `withParsedEvidence` now carries the "parsed" evidence trait.

const withTwoEvidences = C.appendEvidence(withParsedEvidence, "validated");
// `withTwoEvidences` now carries both "parsed" and "validated" evidence traits.

const userResult = {
	name,
	permissions: ["read", "write"] as const,
};

const withLoadedEvidence = C.appendEvidence(userResult, "loaded");
// `withLoadedEvidence` keeps the full composed object type and carries "loaded".

const withPipeEvidence = pipe(
	name,
	C.appendEvidence("from-pipe"),
);
// `withPipeEvidence` now carries the "from-pipe" evidence trait.
