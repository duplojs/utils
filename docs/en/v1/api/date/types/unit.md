---
outline: [2, 3]
prev:
  text: "types/timezone"
  link: "/en/v1/api/date/types/timezone"
next:
  text: "types/time"
  link: "/en/v1/api/date/types/time"
---

# types/unit

Union type listing the units supported by `round`, `each`, or the `add*`/`subtract*` helpers.

## Signature

```typescript
export type Unit = "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
```

## See also

- [`round`](/en/v1/api/date/round)
- [`each`](/en/v1/api/date/each)
