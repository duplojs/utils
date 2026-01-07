---
outline: [2, 3]
prev:
  text: "timeGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/timeGreaterThan"
next:
  text: "timeMin"
  link: "/fr/v1/api/clean/primitives/operators/timeMin"
---

# timeLessThan

`timeLessThan()` teste si un `Time` (wrappé) est strictement inférieur à un seuil (`Time` wrappé ou `DDate.TheTime`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function timeLessThan(
	primitive: Time, 
	threshold: Time | TheTime
): boolean
```

### Signature currifiée

```typescript
function timeLessThan(
	threshold: Time | TheTime
): (primitive: Time) => boolean
```

## Paramètres

- `primitive` : `Time` wrappé (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `primitive < threshold`, sinon `false`.

## Voir aussi

- [`timeGreaterThan`](/fr/v1/api/clean/primitives/operators/timeGreaterThan)
- [`timeMax`](/fr/v1/api/clean/primitives/operators/timeMax)
