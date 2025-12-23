---
outline: [2, 3]
prev:
  text: "types/unit"
  link: "/en/v1/api/date/types/unit"
next:
  text: "types/isLeapYear"
  link: "/en/v1/api/date/types/isLeapYear"
---

# types/time

Utility types describing temporal components (`Hour`, `Minute`, `Second`, `Millisecond`) used by `create` and manipulation functions.

## Signatures

```typescript
export type Hour = `${"0" | "1"}${Digit}` | "20" | "21" | "22" | "23";
export type Minute = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;
export type Second = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;
export type Millisecond = `${Digit}${Digit}${Digit}`;
```

## See also

- [`create`](/en/v1/api/date/create)
- [`createOrThrow`](/en/v1/api/date/createOrThrow)
