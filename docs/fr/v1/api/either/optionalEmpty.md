---
outline: [2, 3]
description: "Construit un Left<\"optional\"> contenant undefined."
prev:
  text: "optional"
  link: "/fr/v1/api/either/optional"
next:
  text: "optionalFilled"
  link: "/fr/v1/api/either/optionalFilled"
---

# optionalEmpty

Construit un `Left<"optional">` contenant `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/optionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function optionalEmpty(): OptionalEmpty;
```

## Paramètres

Aucun.

## Valeur de retour

`OptionalEmpty` pour signaler l'absence.

## Voir aussi

- [`optionalFilled`](/fr/v1/api/either/optionalFilled).
- [`whenIsOptionalEmpty`](/fr/v1/api/either/whenIsOptionalEmpty).
