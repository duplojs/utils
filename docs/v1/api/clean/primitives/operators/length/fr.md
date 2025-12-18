---
outline: [2, 3]
prev:
  text: "concat"
  link: "/v1/api/clean/primitives/operators/concat/fr"
next:
  text: "lengthEqual"
  link: "/v1/api/clean/primitives/operators/lengthEqual/fr"
---

# length

`length()` retourne la longueur d'un `String` sous forme de `Number` (wrappé).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/length/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function length(primitive: String): Number
```

## Paramètres

- `primitive` : `String` wrappé.

## Valeur de retour

Un `Number` wrappé contenant la longueur.

## Voir aussi

- [`lengthEqual`](/v1/api/clean/primitives/operators/lengthEqual/fr)
- [`lengthGreaterThan`](/v1/api/clean/primitives/operators/lengthGreaterThan/fr)
- [`lengthLessThan`](/v1/api/clean/primitives/operators/lengthLessThan/fr)
