---
outline: [2, 3]
prev:
  text: "types/timezone"
  link: "/fr/v1/api/date/types/timezone"
next:
  text: "types/time"
  link: "/fr/v1/api/date/types/time"
---

# types/unit

Type union listant les unités supportées par `round`, `each` ou les helpers `add*`/`subtract*`.

## Singature

```typescript
export type Unit = "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
```

## Voir aussi

- [`round`](/fr/v1/api/date/round)
- [`each`](/fr/v1/api/date/each)
