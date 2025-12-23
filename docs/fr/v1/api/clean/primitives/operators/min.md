---
outline: [2, 3]
prev:
  text: "divide"
  link: "/fr/v1/api/clean/primitives/operators/divide"
next:
  text: "max"
  link: "/fr/v1/api/clean/primitives/operators/max"
---

# min

`min()` retourne le minimum d'un tuple de `Number` (wrappés ou bruts).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/min/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function min(input: AnyTuple<Number | number>): Number
```

## Paramètres

- `input` : tuple non-vide de nombres (wrappés ou bruts).

## Valeur de retour

Un `Number` wrappé contenant le minimum.

## Voir aussi

- [`max`](/fr/v1/api/clean/primitives/operators/max)
