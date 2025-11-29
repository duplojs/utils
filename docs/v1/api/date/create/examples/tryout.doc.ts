import { D } from "@duplojs/utils";

const input = new Date("2024-06-20T12:00:00Z");
const result = D.create(input);
// result: Either<"date-created", TheDate>

const input2 = "2024-02-29" as const;
const result2 = D.create(input2, {
	hour: "10",
	minute: "30",
});
// result2: "date1709183400000+"

const input3 = 1_700_000_000_000;
const result3 = D.create(input3);
// result3: Either<"date-created", TheDate>
