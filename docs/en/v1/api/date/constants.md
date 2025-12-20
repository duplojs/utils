---
outline: [2, 3]
prev:
  text: "closestTo"
  link: "/en/v1/api/date/closestTo"
next:
  text: "types/timezone"
  link: "/en/v1/api/date/types/timezone"
---

# constants

Exposes the low-level constants used by the date helpers (common durations, timestamp bounds, `TheDate` regular expression).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/constants/tryout.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Content

- `minTimestamp` / `maxTimestamp`
- `millisecondsInOneDay`, `millisecondInOneWeek`, `millisecondInOneHour`, etc.
- `secondsInOneMinute`, `minutesInOneHour`, `hoursInOneDay`, `daysInOneWeek`, `monthtsInOneYear`.
- `theDateRegex`: regular expression that validates `TheDate` strings.

## Usage

Use these constants for your business calculations (e.g., convert a number of days into milliseconds) or to check that a timestamp lies within JavaScript's supported limits.

## See also

- [`isSafeTimestamp`](/en/v1/api/date/isSafeTimestamp) – Runtime validation of a timestamp
- [`types/timezone`](/en/v1/api/date/types/timezone) – Enum of time zones
