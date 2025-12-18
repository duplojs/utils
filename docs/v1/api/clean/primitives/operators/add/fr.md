---
outline: [2, 3]
prev:
  text: "equal"
  link: "/v1/api/clean/primitives/operators/equal/fr"
next:
  text: "subtract"
  link: "/v1/api/clean/primitives/operators/subtract/fr"
---

# add

`add()` additionne deux `Number` (wrappés ou bruts). Supporte la version currifiée pour être utilisée facilement dans un `pipe`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/add/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function add(
	value: Number, 
	operand: Number | number
): Number
```

### Signature currifiée

```typescript
function add(
	operand: Number | number
): (value: Number) => Number
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `operand` : opérande à additionner.

## Valeur de retour

Un `Number` wrappé contenant la somme.

## Voir aussi

- [`subtract`](/v1/api/clean/primitives/operators/subtract/fr)
- [`multiply`](/v1/api/clean/primitives/operators/multiply/fr)
- [`divide`](/v1/api/clean/primitives/operators/divide/fr)
