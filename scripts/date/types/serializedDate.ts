import type { DateObject } from "./dateObject";
import type { PadMs } from "./padMs";
import type { PadZero } from "./padZero";

export type SerializedDate<
	GenericDateObject extends DateObject,
> = GenericDateObject["milliseconds"] extends number
	? `${GenericDateObject["year"]}-${PadZero<GenericDateObject["month"]>}-${PadZero<GenericDateObject["day"]>}T${PadZero<GenericDateObject["hour"]>}:${PadZero<GenericDateObject["minute"]>}:${PadZero<GenericDateObject["second"]>}.${PadMs<GenericDateObject["milliseconds"]>}${GenericDateObject["timezone"]}`
	: `${GenericDateObject["year"]}-${PadZero<GenericDateObject["month"]>}-${PadZero<GenericDateObject["day"]>}T${PadZero<GenericDateObject["hour"]>}:${PadZero<GenericDateObject["minute"]>}:${PadZero<GenericDateObject["second"]>}${GenericDateObject["timezone"]}`;

type _testReverse1 = SerializedDate<{
	year: 2023;
	month: 12;
	day: 25;
	hour: 14;
	minute: 30;
	second: 45;
	milliseconds: 123;
	timezone: "Z";
}>;

type _testReverse2 = SerializedDate<{
	year: 2023;
	month: 12;
	day: 25;
	hour: 15;
	minute: 30;
	second: 45;
	milliseconds: undefined;
	timezone: "+01:00";
}>;

type _testReverse3 = SerializedDate<{
	year: 2024;
	month: 6;
	day: 15;
	hour: 12;
	minute: 30;
	second: 45;
	milliseconds: 500;
	timezone: "-05:00";
}>;
