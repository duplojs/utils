---
outline: [2, 3]
prev:
  text: "optional"
  link: "/v1/api/either/optional/fr"
next:
  text: "optionalFilled"
  link: "/v1/api/either/optionalFilled/fr"
---

# optionalEmpty

Construit un `EitherLeft<"optional">` contenant `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/optionalEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```ts
function optionalEmpty(): EitherOptionalEmpty;
```

## Paramètres

Aucun.

## Valeur de retour

`EitherOptionalEmpty` pour signaler l'absence.

## Voir aussi

- [`optionalFilled`](/v1/api/either/optionalFilled/fr).
- [`whenIsOptionalEmpty`](/v1/api/either/whenIsOptionalEmpty/fr).
