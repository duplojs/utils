---
outline: [2, 3]
description: "Construit un EitherLeft<\"optional\"> contenant undefined."
prev:
  text: "optional"
  link: "/fr/v1/api/either/optional"
next:
  text: "optionalFilled"
  link: "/fr/v1/api/either/optionalFilled"
---

# optionalEmpty

Construit un `EitherLeft<"optional">` contenant `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/optionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function optionalEmpty(): EitherOptionalEmpty;
```

## Paramètres

Aucun.

## Valeur de retour

`EitherOptionalEmpty` pour signaler l'absence.

## Voir aussi

- [`optionalFilled`](/fr/v1/api/either/optionalFilled).
- [`whenIsOptionalEmpty`](/fr/v1/api/either/whenIsOptionalEmpty).
