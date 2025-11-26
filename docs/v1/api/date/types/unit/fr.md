---
outline: [2, 3]
prev:
  text: "types/timezone"
  link: "/v1/api/date/types/timezone/fr"
next:
  text: "types/time"
  link: "/v1/api/date/types/time/fr"
---

# types/unit

Type union listant les unités supportées par `round`, `each` ou les helpers `add*`/`subtract*`.

## Singature

```typescript
export type Unit = "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
```

## Voir aussi

- [`round`](/v1/api/date/round/fr)
- [`each`](/v1/api/date/each/fr)
