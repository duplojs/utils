---
outline: [2, 3]
prev:
  text: "constants"
  link: "/en/v1/api/date/constants"
next:
  text: "types/unit"
  link: "/en/v1/api/date/types/unit"
---

# types/timezone

Exhaustive enumeration of IANA time zones (e.g., `"Europe/Paris"`, `"America/New_York"`). Useful to feed a dropdown or validate user input.

## Usage

<MonacoTSEditor
  src="/examples/v1/api/date/types/timezone/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

`timezone` is a key/value object where each key corresponds to an IANA zone.

## See also

- [`types/unit`](/en/v1/api/date/types/unit)
- [`getHour`](/en/v1/api/date/getHour) – accepts a time zone as the second argument
