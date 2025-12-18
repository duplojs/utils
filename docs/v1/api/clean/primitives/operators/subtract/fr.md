---
outline: [2, 3]
prev:
  text: "add"
  link: "/v1/api/clean/primitives/operators/add/fr"
next:
  text: "multiply"
  link: "/v1/api/clean/primitives/operators/multiply/fr"
---

# subtract

`subtract()` soustrait un nombre à un `Number` (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/subtract/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function subtract(
	value: Number, 
	subtrahend: Number | number
): Number
```

### Signature currifiée

```typescript
function subtract(
	subtrahend: Number | number
): (value: Number) => Number
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `subtrahend` : valeur à soustraire.

## Valeur de retour

Un `Number` wrappé contenant le résultat.

## Voir aussi

- [`add`](/v1/api/clean/primitives/operators/add/fr)
- [`multiply`](/v1/api/clean/primitives/operators/multiply/fr)
