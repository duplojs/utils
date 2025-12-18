---
outline: [2, 3]
prev:
  text: "min"
  link: "/v1/api/clean/primitives/operators/min/fr"
next:
  text: "greaterThan"
  link: "/v1/api/clean/primitives/operators/greaterThan/fr"
---

# max

`max()` retourne le maximum d'un tuple de `Number` (wrappés ou bruts).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/max/examples/tryout.doc.ts"
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

- [`min`](/v1/api/clean/min/fr)
