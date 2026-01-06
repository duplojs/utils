---
outline: [2, 3]
prev:
  text: "DataParser"
  link: "/en/v1/api/dataParser/"
next:
  text: "Either"
  link: "/en/v1/api/either/"
---

# Date

Functions to manipulate dates and times via the proprietary type **`TheDate`** (``type TheDate = `date${number}${"-" | "+"}```). This serializable format encodes a safe Unix timestamp, travels through HTTP protocols without loss, and guarantees immutable manipulation.

## How to import ?

The library exposes the `DDate` and `D` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DDate, D } from "@duplojs/utils";
import * as DDate from "@duplojs/utils/date";
import * as D from "@duplojs/utils/date";
```

## Creation

### [create](/en/v1/api/date/create)
Builds a `TheDate` from a `Date`, a timestamp, or another `TheDate` and returns an `Either` (`MayBe`).

### [createOrThrow](/en/v1/api/date/createOrThrow)
Strict version of `create` that throws `CreateTheDateError` when the input is invalid.

### [createTime](/en/v1/api/date/createTime)
Builds a `TheTime` from milliseconds or a structured time object.

### [now](/en/v1/api/date/now)
Returns the exact timestamp of the current moment as a `TheDate`.

### [today](/en/v1/api/date/today)
Generates the start of the day (midnight) as a `TheDate`.

### [yesterday](/en/v1/api/date/yesterday)
Returns the start of the previous day.

### [tomorrow](/en/v1/api/date/tomorrow)
Returns the start of the next day.

## Conversion & validation

### [toNative](/en/v1/api/date/toNative)
Converts a `TheDate` to a JavaScript `Date`.

### [toTimestamp](/en/v1/api/date/toTimestamp)
Exposes the timestamp in milliseconds and validates the coherence of the value.

### [getTimezoneOffset](/en/v1/api/date/getTimezoneOffset)
Returns the timezone offset in milliseconds for a `TheDate`.

### [applyTimezone](/en/v1/api/date/applyTimezone)
Applies a timezone offset to a `TheDate`.

### [toISOString](/en/v1/api/date/toISOString)
Returns the ISO 8601 representation of a `TheDate`.

### [format](/en/v1/api/date/format)
Displays a `TheDate` with a custom format and timezone.

### [isSafeTimestamp](/en/v1/api/date/isSafeTimestamp)
Checks that a timestamp is between `minTimestamp` and `maxTimestamp`.

### [is](/en/v1/api/date/is)
Checks that a string matches the `TheDate` format (type guard).

### [isTime](/en/v1/api/date/isTime)
Checks that a string matches the `TheTime` format (type guard).

## Component reading

### [getYear](/en/v1/api/date/getYear)
Returns the year of a `TheDate`.

### [getMonth](/en/v1/api/date/getMonth)
Returns the month (1-12) of a `TheDate`.

### [getDayOfMonth](/en/v1/api/date/getDayOfMonth)
Returns the day of the month (1-31) of a `TheDate`.

### [getDayOfWeek](/en/v1/api/date/getDayOfWeek)
Returns the day of the week (1-7) of a `TheDate`, where 1 = Monday and 7 = Sunday.

### [getWeekOfYear](/en/v1/api/date/getWeekOfYear)
Returns the week of the year (1-53) of a `TheDate` according to ISO 8601.

### [getDayOfYear](/en/v1/api/date/getDayOfYear)
Returns the day of the year (1-366) of a `TheDate`.

### [getHour](/en/v1/api/date/getHour)
Returns the hour (0-23) of a `TheDate`.

### [getMinute](/en/v1/api/date/getMinute)
Returns the minutes (0-59) of a `TheDate`.

### [getSecond](/en/v1/api/date/getSecond)
Returns the seconds (0-59) of a `TheDate`.

### [getMilliseconds](/en/v1/api/date/getMilliseconds)
Returns the milliseconds (0-999) of a `TheDate`.

### [getFirstDayOfWeek](/en/v1/api/date/getFirstDayOfWeek)
Returns the first day of the week (Monday) for a `TheDate`.

### [getLastDayOfWeek](/en/v1/api/date/getLastDayOfWeek)
Returns the last day of the week (Sunday) for a `TheDate`.

### [getFirstDayOfMonth](/en/v1/api/date/getFirstDayOfMonth)
Returns the first day of the month for a `TheDate`.

### [getLastDayOfMonth](/en/v1/api/date/getLastDayOfMonth)
Returns the last day of the month for a `TheDate`.

## Time operations

### Additions

### [addYears](/en/v1/api/date/addYears)  
Adds a positive number of years to a `TheDate`.

### [addMonths](/en/v1/api/date/addMonths)  
Adds months while taking leap years into account.

### [addWeeks](/en/v1/api/date/addWeeks)  
Shifts a date by multiples of 7 days.

### [addDays](/en/v1/api/date/addDays)  
Adds a positive number of days.

### [addHours](/en/v1/api/date/addHours)  
Adds hours without manually converting to milliseconds.

### [addMinutes](/en/v1/api/date/addMinutes)  
Adds minutes.

### [addSeconds](/en/v1/api/date/addSeconds)  
Adds seconds.

### [addMilliseconds](/en/v1/api/date/addMilliseconds)  
Adds milliseconds while staying type-safe.

### [addTime](/en/v1/api/date/addTime)  
Adds a `TheTime` duration to a `TheDate` or `TheTime`.

### Subtractions

### [subtractYears](/en/v1/api/date/subtractYears)  
Subtracts a number of years.

### [subtractMonths](/en/v1/api/date/subtractMonths)  
Subtracts months while keeping day coherence.

### [subtractWeeks](/en/v1/api/date/subtractWeeks)  
Subtracts weeks.

### [subtractDays](/en/v1/api/date/subtractDays)  
Subtracts days.

### [subtractHours](/en/v1/api/date/subtractHours)  
Subtracts hours.

### [subtractMinutes](/en/v1/api/date/subtractMinutes)  
Subtracts minutes.

### [subtractSeconds](/en/v1/api/date/subtractSeconds)  
Subtracts seconds.

### [subtractMilliseconds](/en/v1/api/date/subtractMilliseconds)  
Subtracts milliseconds.

### [subtractTime](/en/v1/api/date/subtractTime)  
Subtracts a `TheTime` duration from a `TheDate` or `TheTime`.

### Comparison

### [greater](/en/v1/api/date/greater)  
Checks whether a date is strictly greater than another.

### [greaterThan](/en/v1/api/date/greaterThan)  
Compares while including equality.

### [less](/en/v1/api/date/less)  
Checks whether a date is strictly less than another.

### [lessThan](/en/v1/api/date/lessThan)  
Compares while including equality for less-than.

### [between](/en/v1/api/date/between)  
Checks membership in an open interval.

### [betweenThan](/en/v1/api/date/betweenThan)  
Variant that includes bounds.

### [sort](/en/v1/api/date/sort)  
Sorts an array of dates in ascending or descending order.

### [max](/en/v1/api/date/max)  
Returns the most recent date of a tuple.

### [min](/en/v1/api/date/min)  
Returns the oldest date of a tuple.

### Other utilities

### [round](/en/v1/api/date/round)  
Rounds a date to the chosen unit (`day`, `month`, etc.).

### [each](/en/v1/api/date/each)  
Generates all dates in an interval according to a granularity (`Unit`).

### [closestTo](/en/v1/api/date/closestTo)  
Finds the closest date to a target in an iterable.

## Constants & types

### [constants](/en/v1/api/date/constants)  
Exposes `minTimestamp`, `maxTimestamp`, and common durations (day, week, etc.).

### [types/timezone](/en/v1/api/date/types/timezone)  
Complete enumeration of IANA time zones.

### [types/unit](/en/v1/api/date/types/unit)
List of units available for `round`, `each`, etc.

### [types/time](/en/v1/api/date/types/time)  
Describes time components (`Hour`, `Minute`, `Second`, ...).

### [types/isLeapYear](/en/v1/api/date/types/isLeapYear)
Provides the utility type to determine whether a year is a leap year.
