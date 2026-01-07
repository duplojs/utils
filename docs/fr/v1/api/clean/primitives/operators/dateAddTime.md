---
outline: [2, 3]
prev:
  text: "dateLessThan"
  link: "/fr/v1/api/clean/primitives/operators/dateLessThan"
next:
  text: "dateSubtractTime"
  link: "/fr/v1/api/clean/primitives/operators/dateSubtractTime"
---

# dateAddTime

`dateAddTime()` ajoute une durée à une `Date` (wrappée). La durée peut être un `Time` wrappé ou un `DDate.TheTime`. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateAddTime/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function dateAddTime(
	primitive: Date, 
	time: Time | TheTime
): Date
```

### Signature currifiée

```typescript
function dateAddTime(
	time: Time | TheTime
): (primitive: Date) => Date
```

## Paramètres

- `primitive` : `Date` wrappée (signature classique uniquement).
- `time` : durée à ajouter.

## Valeur de retour

Une `Date` wrappée avec la durée ajoutée.

## Voir aussi

- [`dateSubtractTime`](/fr/v1/api/clean/primitives/operators/dateSubtractTime)
- [`dateMin`](/fr/v1/api/clean/primitives/operators/dateMin)
