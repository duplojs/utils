---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/fr/v1/api/clean/primitives/operators/greaterThan"
next:
  text: "concat"
  link: "/fr/v1/api/clean/primitives/operators/concat"
---

# lessThan

`lessThan()` teste si un `Number` est strictement inférieur à un seuil (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function lessThan(
	value: Number, 
	threshold: Number | number
): boolean
```

### Signature currifiée

```typescript
function lessThan(
	threshold: Number | number
): (value: Number) => boolean
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `threshold` : seuil de comparaison.

## Valeur de retour

`true` si `unwrap(value) < unwrap(threshold)`, sinon `false`.

## Voir aussi

- [`greaterThan`](/fr/v1/api/clean/primitives/operators/greaterThan)
