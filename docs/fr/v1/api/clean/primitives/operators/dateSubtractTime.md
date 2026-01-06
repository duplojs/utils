---
outline: [2, 3]
prev:
  text: "dateAddTime"
  link: "/fr/v1/api/clean/primitives/operators/dateAddTime"
next:
  text: "dateMin"
  link: "/fr/v1/api/clean/primitives/operators/dateMin"
---

# dateSubtractTime

`dateSubtractTime()` soustrait une durée à une `Date` (wrappée). La durée peut être un `Time` wrappé ou un `DDate.TheTime`. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateSubtractTime/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function dateSubtractTime(
	primitive: Date, 
	time: Time | TheTime
): Date
```

### Signature currifiée

```typescript
function dateSubtractTime(
	time: Time | TheTime
): (primitive: Date) => Date
```

## Paramètres

- `primitive` : `Date` wrappée (signature classique uniquement).
- `time` : durée à soustraire.

## Valeur de retour

Une `Date` wrappée avec la durée soustraite.

## Voir aussi

- [`dateAddTime`](/fr/v1/api/clean/primitives/operators/dateAddTime)
- [`dateMax`](/fr/v1/api/clean/primitives/operators/dateMax)
