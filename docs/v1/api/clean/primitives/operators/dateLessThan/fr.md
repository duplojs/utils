---
outline: [2, 3]
prev:
  text: "dateGreaterThan"
  link: "/v1/api/clean/primitives/operators/dateGreaterThan/fr"
next:
  text: "dateMin"
  link: "/v1/api/clean/primitives/operators/dateMin/fr"
---

# dateLessThan

`dateLessThan()` teste si une `Date` (wrappée) est strictement antérieure à un seuil (`Date` wrappée ou `DDate.TheDate`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/dateLessThan/examples/tryout.doc.ts"
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

- [`dateGreaterThan`](/v1/api/clean/primitives/operators/dateGreaterThan/fr)
- [`dateMax`](/v1/api/clean/primitives/operators/dateMax/fr)
