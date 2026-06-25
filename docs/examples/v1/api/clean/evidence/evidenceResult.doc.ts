import { C, E, pipe, type ExpectType } from "@duplojs/utils";

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

const checkedResult = pipe(
	userResult,
	C.evidenceResult("checked"),
);

const checkedUser = E.unwrapRightOrThrow(checkedResult);

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

type checkCheckedResult = ExpectType<
	typeof checkedResult,
	C.EvidenceResult<"checked", typeof userResult>,
	"strict"
>;

type checkCheckedUser = ExpectType<
	typeof checkedUser,
	typeof userResult
	& C.Evidence<"checked">,
	"strict"
>;
