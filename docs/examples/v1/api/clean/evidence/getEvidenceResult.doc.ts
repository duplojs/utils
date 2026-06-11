import { type C, type E, type ExpectType } from "@duplojs/utils";

declare function validateUserName(input: string): Promise<
	| E.Left<"userName.invalid", string>
	| E.Right<"userName.validated", C.NewType<"UserName", string, never> & C.Evidence<"validated">>
>;

declare function greetUser(
	userName: C.GetEvidenceResult<
		typeof validateUserName,
		"validated"
	>
): void;

type checkValidatedUserName = ExpectType<
	C.GetEvidenceResult<
		typeof validateUserName,
		"validated"
	>,
	C.NewType<"UserName", string, never>
	& C.Evidence<"validated">,
	"strict"
>;
