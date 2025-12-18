---
outline: [2, 3]
prev:
  text: "max"
  link: "/v1/api/clean/max/fr"
next:
  text: "lessThan"
  link: "/v1/api/clean/lessThan/fr"
---

# greaterThan

`greaterThan()` teste si un `Number` est strictement supérieur à un seuil (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/greaterThan/examples/tryout.doc.ts"
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

- [`lessThan`](/v1/api/clean/lessThan/fr)
