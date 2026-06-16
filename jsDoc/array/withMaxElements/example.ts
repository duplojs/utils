import { A, pipe, type ExpectType } from "@scripts";

const roles = ["admin", "client"] as const;

const limitedRoles = A.withMaxElements(roles);

type checkCurrentLength = ExpectType<
	typeof limitedRoles,
	readonly ["admin", "client"] & A.MaxElements<2>,
	"strict"
>;

const widerRoles = A.withMaxElements(roles, 5);

type checkExplicitLength = ExpectType<
	typeof widerRoles,
	readonly ["admin", "client"] & A.MaxElements<5>,
	"strict"
>;

const contractRoles = A.withMaxElements(roles) satisfies A.MaxElements<5>;

type checkContractLength = ExpectType<
	typeof contractRoles,
	readonly ["admin", "client"] & A.MaxElements<5>,
	"strict"
>;

const pipeRoles = pipe(
	["guest"],
	A.withMaxElements,
);

type checkPipe = ExpectType<
	typeof pipeRoles,
	readonly ["guest"] & A.MaxElements<1>,
	"strict"
>;
