---
outline: [2, 3]
prev:
  text: "types/time"
  link: "/en/v1/api/date/types/time"
next:
  text: "Date"
  link: "/en/v1/api/date/"
---

# types/isLeapYear

Utility type that determines at compile time whether a year (`string`) is a leap year.

## Signature

```typescript
type TenEven = "" | "2" | "4" | "6" | "8";
type OddTen = "1" | "3" | "5" | "7" | "9";
type MultipleOf4 = `${TenEven}${"0" | "4" | "8"}` | `${OddTen}${"2" | "6"}`;
type MultipleOf100 = `${Exclude<Digit, "0">}00`;
type MultipleOf400 = `${Exclude<MultipleOf4, "0">}00`;
export type IsLeapYear<
	GenericYear extends `${number}`
> = GenericYear extends `${number | ""}${MultipleOf4}` 
	? GenericYear extends `${number | ""}${MultipleOf100}` 
		? GenericYear extends `${number | ""}${MultipleOf400}` 
			? true 
			: false 
		: true 
	: false;
```

## Usage

This type is used in `create()` to reject a `YYYY-02-29` date when the year is not leap.

## See also

- [`create`](/en/v1/api/date/create)
- [`types/time`](/en/v1/api/date/types/time)
