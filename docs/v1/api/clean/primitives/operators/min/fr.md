---
outline: [2, 3]
prev:
  text: "divide"
  link: "/v1/api/clean/primitives/operators/divide/fr"
next:
  text: "max"
  link: "/v1/api/clean/primitives/operators/max/fr"
---

# min

`min()` retourne le minimum d'un tuple de `Number` (wrappés ou bruts).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/min/examples/tryout.doc.ts"
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

- [`max`](/v1/api/clean/primitives/operators/max/fr)
