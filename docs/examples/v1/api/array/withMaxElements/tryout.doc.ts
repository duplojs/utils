import { A, pipe, type ExpectType } from "@duplojs/utils";

const roles = ["admin", "client"] as const;

const limitedRoles = A.withMaxElements(roles, 5);

type checkLimitedRoles = ExpectType<
	typeof limitedRoles,
	readonly ["admin", "client"] & A.MaxElements<5>,
	"strict"
>;

const inferredRoles = A.withMaxElements(roles) satisfies A.MaxElements<5>;

type checkInferredRoles = ExpectType<
	typeof inferredRoles,
	readonly ["admin", "client"] & A.MaxElements<5>,
	"strict"
>;

const pipeRoles = pipe(
	["guest"] as const,
	A.withMaxElements,
);

type checkPipeRoles = ExpectType<
	typeof pipeRoles,
	["guest"] & A.MaxElements<1>,
	"strict"
>;
