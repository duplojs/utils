---
outline: [2, 3]
prev:
  text: "lengthLessThan"
  link: "/fr/v1/api/clean/primitives/operators/lengthLessThan"
next:
  text: "dateLessThan"
  link: "/fr/v1/api/clean/primitives/operators/dateLessThan"
---

# dateGreaterThan

`dateGreaterThan()` teste si une `Date` (wrappée) est strictement postérieure à un seuil (`Date` wrappée ou `DDate.TheDate`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function dateGreaterThan(
	primitive: Date, 
	threshold: Date | TheDate
): boolean
```

### Signature currifiée

```typescript
function dateGreaterThan(
	threshold: Date | TheDate
): (primitive: Date) => boolean
```

## Paramètres

- `primitive` : `Date` wrappée (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `primitive > threshold`, sinon `false`.

## Voir aussi

- [`dateLessThan`](/fr/v1/api/clean/primitives/operators/dateLessThan)
- [`dateMin`](/fr/v1/api/clean/primitives/operators/dateMin)
