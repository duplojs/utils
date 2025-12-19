---
outline: [2, 3]
prev:
  text: "types/time"
  link: "/fr/v1/api/date/types/time"
next:
  text: "Date"
  link: "/fr/v1/api/date/"
---

# types/isLeapYear

Type utilitaire qui détermine à la compilation si une année (`string`) est bissextile.

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

## Utilisation

Ce type est utilisé dans `create()` pour refuser une date `YYYY-02-29` lorsque l'année n'est pas bissextile.

## Voir aussi

- [`create`](/fr/v1/api/date/create)
- [`types/time`](/fr/v1/api/date/types/time)
