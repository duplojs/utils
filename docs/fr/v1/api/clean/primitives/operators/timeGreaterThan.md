---
outline: [2, 3]
prev:
  text: "dateMax"
  link: "/fr/v1/api/clean/primitives/operators/dateMax"
next:
  text: "timeLessThan"
  link: "/fr/v1/api/clean/primitives/operators/timeLessThan"
---

# timeGreaterThan

`timeGreaterThan()` teste si un `Time` (wrappé) est strictement supérieur à un seuil (`Time` wrappé ou `DDate.TheTime`). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function timeGreaterThan(
	primitive: Time, 
	threshold: Time | TheTime
): boolean
```

### Signature currifiée

```typescript
function timeGreaterThan(
	threshold: Time | TheTime
): (primitive: Time) => boolean
```

## Paramètres

- `primitive` : `Time` wrappé (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `primitive > threshold`, sinon `false`.

## Voir aussi

- [`timeLessThan`](/fr/v1/api/clean/primitives/operators/timeLessThan)
- [`timeMin`](/fr/v1/api/clean/primitives/operators/timeMin)
