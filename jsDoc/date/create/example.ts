import { D } from "@scripts";

const direct = D.create("2024-02-29", {
	hour: "10",
	minute: "30",
});
// direct: TheDate

const mayBeFromTimestamp = D.create(1_700_000_000_000);
// mayBeFromTimestamp: Either.Right<"date-created", TheDate> | DEither.Left<"date-created-error", null>

const mayBeFromSpooling = D.create({
	value: "2024-06-20T12:00:00Z",
	timezone: "Europe/Paris",
});
// mayBeFromSpooling: Either<"date-created", TheDate>
