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

## How to import?

The library exposes the `DDate` and `D` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DDate, D } from "@duplojs/utils";
import * as DDate from "@duplojs/utils/date";
import * as D from "@duplojs/utils/date";
```

## Creation

### [create](/fr/v1/api/date/create)
Builds a `TheDate` from a `Date`, a timestamp, or another `TheDate` and returns an `Either` (`MayBe`).

### [createOrThrow](/fr/v1/api/date/createOrThrow)
Strict version of `create` that throws `CreateTheDateError` when the input is invalid.

### [now](/fr/v1/api/date/now)
Returns the exact timestamp of the current moment as a `TheDate`.

### [today](/fr/v1/api/date/today)
Generates the start of the day (midnight) as a `TheDate`.

### [yesterday](/fr/v1/api/date/yesterday)
Returns the start of the previous day.

### [tomorrow](/fr/v1/api/date/tomorrow)
Returns the start of the next day.

## Conversion & validation

### [toNative](/fr/v1/api/date/toNative)
Converts a `TheDate` to a JavaScript `Date`.

### [toTimestamp](/fr/v1/api/date/toTimestamp)
Exposes the timestamp in milliseconds and validates the coherence of the value.

### [toISOString](/fr/v1/api/date/toISOString)
Returns the ISO 8601 representation of a `TheDate`.

### [isSafeTimestamp](/fr/v1/api/date/isSafeTimestamp)
Checks that a timestamp is between `minTimestamp` and `maxTimestamp`.

### [is](/fr/v1/api/date/is)
Checks that a string matches the `TheDate` format (type guard).

## Component reading

### [getYear](/fr/v1/api/date/getYear)
Returns the year of a `TheDate`.

### [getMonth](/fr/v1/api/date/getMonth)
Returns the month (1-12) of a `TheDate`.

### [getDayOfMonth](/fr/v1/api/date/getDayOfMonth)
Returns the day of the month (1-31) of a `TheDate`.

### [getDayOfWeek](/fr/v1/api/date/getDayOfWeek)
Returns the day of the week (1-7) of a `TheDate`, where 1 = Monday and 7 = Sunday.

### [getWeekOfYear](/fr/v1/api/date/getWeekOfYear)
Returns the week of the year (1-53) of a `TheDate` according to ISO 8601.

### [getDayOfYear](/fr/v1/api/date/getDayOfYear)
Returns the day of the year (1-366) of a `TheDate`.

### [getHour](/fr/v1/api/date/getHour)
Returns the hour (0-23) of a `TheDate`.

### [getMinute](/fr/v1/api/date/getMinute)
Returns the minutes (0-59) of a `TheDate`.

### [getSecond](/fr/v1/api/date/getSecond)
Returns the seconds (0-59) of a `TheDate`.

### [getMilliseconds](/fr/v1/api/date/getMilliseconds)
Returns the milliseconds (0-999) of a `TheDate`.

### [getFirstDayOfWeek](/fr/v1/api/date/getFirstDayOfWeek)
Returns the first day of the week (Monday) for a `TheDate`.

### [getLastDayOfWeek](/fr/v1/api/date/getLastDayOfWeek)
Returns the last day of the week (Sunday) for a `TheDate`.

### [getFirstDayOfMonth](/fr/v1/api/date/getFirstDayOfMonth)
Returns the first day of the month for a `TheDate`.

### [getLastDayOfMonth](/fr/v1/api/date/getLastDayOfMonth)
Returns the last day of the month for a `TheDate`.

## Time operations

### Additions

### [addYears](/fr/v1/api/date/addYears)  
Adds a positive number of years to a `TheDate`.

### [addMonths](/fr/v1/api/date/addMonths)  
Adds months while taking leap years into account.

### [addWeeks](/fr/v1/api/date/addWeeks)  
Shifts a date by multiples of 7 days.

### [addDays](/fr/v1/api/date/addDays)  
Adds a positive number of days.

### [addHours](/fr/v1/api/date/addHours)  
Adds hours without manually converting to milliseconds.

### [addMinutes](/fr/v1/api/date/addMinutes)  
Adds minutes.

### [addSeconds](/fr/v1/api/date/addSeconds)  
Adds seconds.

### [addMilliseconds](/fr/v1/api/date/addMilliseconds)  
Adds milliseconds while staying type-safe.

### Subtractions

### [subtractYears](/fr/v1/api/date/subtractYears)  
Subtracts a number of years.

### [subtractMonths](/fr/v1/api/date/subtractMonths)  
Subtracts months while keeping day coherence.

### [subtractWeeks](/fr/v1/api/date/subtractWeeks)  
Subtracts weeks.

### [subtractDays](/fr/v1/api/date/subtractDays)  
Subtracts days.

### [subtractHours](/fr/v1/api/date/subtractHours)  
Subtracts hours.

### [subtractMinutes](/fr/v1/api/date/subtractMinutes)  
Subtracts minutes.

### [subtractSeconds](/fr/v1/api/date/subtractSeconds)  
Subtracts seconds.

### [subtractMilliseconds](/fr/v1/api/date/subtractMilliseconds)  
Subtracts milliseconds.

### Comparison

### [greater](/fr/v1/api/date/greater)  
Checks whether a date is strictly greater than another.

### [greaterThan](/fr/v1/api/date/greaterThan)  
Compares while including equality.

### [less](/fr/v1/api/date/less)  
Checks whether a date is strictly less than another.

### [lessThan](/fr/v1/api/date/lessThan)  
Compares while including equality for less-than.

### [between](/fr/v1/api/date/between)  
Checks membership in an open interval.

### [betweenThan](/fr/v1/api/date/betweenThan)  
Variant that includes bounds.

### [sort](/fr/v1/api/date/sort)  
Sorts an array of dates in ascending or descending order.

### [max](/fr/v1/api/date/max)  
Returns the most recent date of a tuple.

### [min](/fr/v1/api/date/min)  
Returns the oldest date of a tuple.

### Other utilities

### [round](/fr/v1/api/date/round)  
Rounds a date to the chosen unit (`day`, `month`, etc.).

### [each](/fr/v1/api/date/each)  
Generates all dates in an interval according to a granularity (`Unit`).

### [closestTo](/fr/v1/api/date/closestTo)  
Finds the closest date to a target in an iterable.

## Constants & types

### [constants](/fr/v1/api/date/constants)  
Exposes `minTimestamp`, `maxTimestamp`, and common durations (day, week, etc.).

### [types/timezone](/fr/v1/api/date/types/timezone)  
Complete enumeration of IANA time zones.

### [types/unit](/fr/v1/api/date/types/unit)
List of units available for `round`, `each`, etc.

### [types/time](/fr/v1/api/date/types/time)  
Describes time components (`Hour`, `Minute`, `Second`, ...).

### [types/isLeapYear](/fr/v1/api/date/types/isLeapYear)
Provides the utility type to determine whether a year is a leap year.
