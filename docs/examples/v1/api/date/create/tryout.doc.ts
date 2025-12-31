import { D } from "@duplojs/utils";

// Either<"date-created", TheDate>
const mayBeDateFromNativeDate = D.create(
	new Date("2024-06-20T12:00:00Z"),
);

// Either<"date-created", TheDate>
const mayBeDateFromTimestamp = D.create(
	1_700_000_000_000,
);

// "date1709183400000+"
const dateFromSafeFormat = D.create(
	"2024-02-29",
	{
		hour: "10",
		minute: "30",
	},
);

const dateWrongLeapYear = D.create(
	// @ts-expect-error Safe with leap year.
	"2023-02-29",
);

const dateWrongRangeYear = D.create(
	// @ts-expect-error Safe against dates that fall outside the supported date range.
	"-596126-12-30",
);
