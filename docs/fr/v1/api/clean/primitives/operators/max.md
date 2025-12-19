---
outline: [2, 3]
prev:
  text: "min"
  link: "/fr/v1/api/clean/primitives/operators/min"
next:
  text: "greaterThan"
  link: "/fr/v1/api/clean/primitives/operators/greaterThan"
---

# max

`max()` retourne le maximum d'un tuple de `Number` (wrappés ou bruts).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/max/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function max(input: AnyTuple<Number | number>): Number
```

## Paramètres

- `input` : tuple non-vide de nombres (wrappés ou bruts).

## Valeur de retour

Un `Number` wrappé contenant le maximum.

## Voir aussi

- [`min`](/fr/v1/api/clean/primitives/operators/min)
