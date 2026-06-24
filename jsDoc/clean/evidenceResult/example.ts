import { C, E, pipe, type ExpectType } from "@scripts";

const user = {
	id: "user-1",
	name: "Ada",
};

const createdResult = C.evidenceResult("created", user);
const createdUser = E.unwrapRightOrThrow(createdResult);

type checkCreatedResult = ExpectType<
	typeof createdResult,
	C.EvidenceResult<"created", typeof user>,
	"strict"
>;

type checkCreatedUser = ExpectType<
	typeof createdUser,
	typeof user & C.Evidence<"created">,
	"strict"
>;

const parsedUser = C.appendEvidence(user, "parsed");
const validatedResult = C.evidenceResult("validated", parsedUser);
const validatedUser = E.unwrapRightOrThrow(validatedResult);
// `validatedUser` carries both "parsed" and "validated" evidences.

const loadedResult = pipe(
	user,
	(value) => C.evidenceResult("loaded", value),
);

type checkLoadedResult = ExpectType<
	typeof loadedResult,
	C.EvidenceResult<"loaded", typeof user>,
	"strict"
>;
