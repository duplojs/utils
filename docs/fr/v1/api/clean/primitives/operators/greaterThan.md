---
outline: [2, 3]
prev:
  text: "max"
  link: "/fr/v1/api/clean/primitives/operators/max"
next:
  text: "lessThan"
  link: "/fr/v1/api/clean/primitives/operators/lessThan"
---

# greaterThan

`greaterThan()` teste si un `Number` est strictement supérieur à un seuil (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterThan(
	value: Number, 
	threshold: Number | number
): boolean
```

### Signature currifiée

```typescript
function greaterThan(
	threshold: Number | number
): (value: Number) => boolean
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `unwrap(value) > unwrap(threshold)`, sinon `false`.

## Voir aussi

- [`lessThan`](/fr/v1/api/clean/primitives/operators/lessThan)
