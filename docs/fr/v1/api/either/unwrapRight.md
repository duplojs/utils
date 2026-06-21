---
outline: [2, 3]
description: "Unwrap le payload d'un Right et renvoie l'entrée inchangée lorsque l'entrée n'est pas Right."
prev:
  text: "whenIsRightOtherwise"
  link: "/fr/v1/api/either/whenIsRightOtherwise"
next:
  text: "unwrapRightOrThrow"
  link: "/fr/v1/api/either/unwrapRightOrThrow"
---

# unwrapRight

Unwrap le payload d'un `Right` et renvoie l'entrée inchangée lorsque l'entrée n'est pas `Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapRight/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function unwrapRight<
  GenericInput extends unknown
>(
  input: GenericInput
): GenericInput extends Right
  ? Unwrap<GenericInput>
  : GenericInput
```

## Paramètres

- `input` : Valeur à unwrap lorsqu'elle est un `Right`.

## Valeur de retour

Retourne le payload unwrap pour `Right`, sinon renvoie `input` inchangé.

## Voir aussi

- [`unwrapRightOrThrow`](/fr/v1/api/either/unwrapRightOrThrow) – Variante bloquante si l'entrée n'est pas `Right`.
- [`isRight`](/fr/v1/api/either/isRight) – Type guard pour vérifier le côté right.
- [`unwrapByInformation`](/fr/v1/api/either/unwrapByInformation) – Unwrap non bloquant basé sur l'information.
