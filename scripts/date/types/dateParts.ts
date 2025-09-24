import { type DateObject } from "./dateObject";
import type { StringToNumber } from "./stringToNumber";

export type DateParts<
	GenericString extends string = string,
> = string extends GenericString
	? DateObject
	: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}.${infer Ms}Z`
		? {
			year: StringToNumber<Year>;
			month: StringToNumber<Month>;
			day: StringToNumber<Day>;
			hour: StringToNumber<Hour>;
			minute: StringToNumber<Minute>;
			second: StringToNumber<Second>;
			milliseconds: StringToNumber<Ms>;
			timezone: "Z";
		}
		: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}.${infer Ms}+${infer Tz}`
			? {
				year: StringToNumber<Year>;
				month: StringToNumber<Month>;
				day: StringToNumber<Day>;
				hour: StringToNumber<Hour>;
				minute: StringToNumber<Minute>;
				second: StringToNumber<Second>;
				milliseconds: StringToNumber<Ms>;
				timezone: `+${Tz}`;
			}
			: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}.${infer Ms}-${infer Tz}`
				? {
					year: StringToNumber<Year>;
					month: StringToNumber<Month>;
					day: StringToNumber<Day>;
					hour: StringToNumber<Hour>;
					minute: StringToNumber<Minute>;
					second: StringToNumber<Second>;
					milliseconds: StringToNumber<Ms>;
					timezone: `-${Tz}`;
				}
				: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}Z`
					? {
						year: StringToNumber<Year>;
						month: StringToNumber<Month>;
						day: StringToNumber<Day>;
						hour: StringToNumber<Hour>;
						minute: StringToNumber<Minute>;
						second: StringToNumber<Second>;
						milliseconds: undefined;
						timezone: "Z";
					}
					: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}+${infer Tz}`
						? {
							year: StringToNumber<Year>;
							month: StringToNumber<Month>;
							day: StringToNumber<Day>;
							hour: StringToNumber<Hour>;
							minute: StringToNumber<Minute>;
							second: StringToNumber<Second>;
							milliseconds: undefined;
							timezone: `+${Tz}`;
						}
						: GenericString extends `${infer Year}-${infer Month}-${infer Day}T${infer Hour}:${infer Minute}:${infer Second}-${infer Tz}`
							? {
								year: StringToNumber<Year>;
								month: StringToNumber<Month>;
								day: StringToNumber<Day>;
								hour: StringToNumber<Hour>;
								minute: StringToNumber<Minute>;
								second: StringToNumber<Second>;
								milliseconds: undefined;
								timezone: `-${Tz}`;
							}
							: never;

type _test1 = DateParts<"2023-12-25T14:30:45.123Z">;
type _test2 = DateParts<"2023-12-25T15:30:45.999+01:00">;
type _test3 = DateParts<"2024-01-01T00:00:00.001-05:00">;
type _test4 = DateParts<"2024-06-15T12:30:45.500+02:30">;

type _test5 = DateParts<"2023-12-25T14:30:45Z">;
type _test6 = DateParts<"2023-12-25T15:30:45+01:00">;
type _test7 = DateParts<"2024-01-01T00:00:00-05:00">;
type _test8 = DateParts<"2024-06-15T12:30:45+02:30">;

type _test9 = DateParts<"2000-01-01T00:00:00.000Z">;
type _test10 = DateParts<"9999-12-31T23:59:59.999-12:00">;
type _test11 = DateParts<"2024-02-29T06:15:30+14:00">;

type _testNever = DateParts<"invalid-date-string">;
type _testGenericString = DateParts<string>;
