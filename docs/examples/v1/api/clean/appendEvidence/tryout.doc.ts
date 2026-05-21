import { C, DP, pipe, type ExpectType } from "@duplojs/utils";

const userName = C.createNewType("UserName", DP.string());
const userNameValue = userName.createOrThrow("Ada");

const withParsedEvidence = C.appendEvidence(
	userNameValue,
	"parsed",
);

const withValidatedEvidence = C.appendEvidence(
	withParsedEvidence,
	"validated",
);

const withPipeEvidence = pipe(
	userNameValue,
	C.appendEvidence("fromPipe"),
);

type checkValidated = ExpectType<
	typeof withValidatedEvidence,
	C.NewType<"UserName", "Ada", never>
	& C.Evidence<"parsed">
	& C.Evidence<"validated">,
	"strict"
>;

type checkPipe = ExpectType<
	typeof withPipeEvidence,
	C.NewType<"UserName", "Ada", never>
	& C.Evidence<"fromPipe">,
	"strict"
>;
