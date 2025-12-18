---
outline: [2, 3]
prev:
  text: "lengthLessThan"
  link: "/v1/api/clean/lengthLessThan/fr"
next:
  text: "dateLessThan"
  link: "/v1/api/clean/dateLessThan/fr"
---

# dateGreaterThan

`dateGreaterThan()` teste si une `Date` (wrappée) est strictement postérieure à un seuil (`Date` wrappée ou `DDate.TheDate`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/dateGreaterThan/examples/tryout.doc.ts"
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

- [`dateLessThan`](/v1/api/clean/dateLessThan/fr)
- [`dateMin`](/v1/api/clean/dateMin/fr)
