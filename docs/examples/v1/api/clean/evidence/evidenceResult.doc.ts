import { C, E, type ExpectType } from "@duplojs/utils";

const userName = C.String.createOrThrow("Ada");

const userResult = {
	name: userName,
	permissions: ["read", "write"] as const,
};

const loadedResult = C.evidenceResult(
	"loaded",
	userResult,
);

const loadedUser = E.unwrapRightOrThrow(loadedResult);

type checkLoadedResult = ExpectType<
	typeof loadedResult,
	C.EvidenceResult<"loaded", typeof userResult>,
	"strict"
>;

type checkLoadedUser = ExpectType<
	typeof loadedUser,
	typeof userResult
	& C.Evidence<"loaded">,
	"strict"
>;
