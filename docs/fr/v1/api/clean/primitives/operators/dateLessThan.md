---
outline: [2, 3]
prev:
  text: "dateGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/dateGreaterThan"
next:
  text: "dateAddTime"
  link: "/fr/v1/api/clean/primitives/operators/dateAddTime"
---

# dateLessThan

`dateLessThan()` teste si une `Date` (wrappée) est strictement antérieure à un seuil (`Date` wrappée ou `DDate.TheDate`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function dateLessThan(
	primitive: Date, 
	threshold: Date | TheDate
): boolean
```

### Signature currifiée

```typescript
function dateLessThan(
	threshold: Date | TheDate
): (primitive: Date) => boolean
```

## Paramètres

- `primitive` : `Date` wrappée (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `primitive < threshold`, sinon `false`.

## Voir aussi

- [`dateGreaterThan`](/fr/v1/api/clean/primitives/operators/dateGreaterThan)
- [`dateMax`](/fr/v1/api/clean/primitives/operators/dateMax)
