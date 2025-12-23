---
outline: [2, 3]
prev:
  text: "types/unit"
  link: "/fr/v1/api/date/types/unit"
next:
  text: "types/isLeapYear"
  link: "/fr/v1/api/date/types/isLeapYear"
---

# types/time

Types utilitaires décrivant les composantes temporelles (`Hour`, `Minute`, `Second`, `Millisecond`) utilisées par `create` et les fonctions de manipulation.

## Signatures

```typescript
export type Hour = `${"0" | "1"}${Digit}` | "20" | "21" | "22" | "23`;
export type Minute = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;
export type Second = `${"0" | "1" | "2" | "3" | "4" | "5"}${Digit}`;
export type Millisecond = `${Digit}${Digit}${Digit}`;
```

## Voir aussi

- [`create`](/fr/v1/api/date/create)
- [`createOrThrow`](/fr/v1/api/date/createOrThrow)
