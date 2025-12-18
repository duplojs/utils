---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/v1/api/clean/primitives/operators/greaterThan/fr"
next:
  text: "concat"
  link: "/v1/api/clean/primitives/operators/concat/fr"
---

# lessThan

`lessThan()` teste si un `Number` est strictement inférieur à un seuil (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/lessThan/examples/tryout.doc.ts"
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

- [`greaterThan`](/v1/api/clean/primitives/operators/greaterThan/fr)
