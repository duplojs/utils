---
outline: [2, 3]
description: "Unwrap le payload d'un Left et renvoie l'entrée inchangée lorsque l'entrée n'est pas Left."
prev:
  text: "whenIsLeftElse"
  link: "/fr/v1/api/either/whenIsLeftElse"
next:
  text: "unwrapLeftOrThrow"
  link: "/fr/v1/api/either/unwrapLeftOrThrow"
---

# unwrapLeft

Unwrap le payload d'un `Left` et renvoie l'entrée inchangée lorsque l'entrée n'est pas `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapLeft/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function unwrapLeft<
  GenericInput extends unknown
>(
  input: GenericInput
): GenericInput extends Left
  ? Unwrap<GenericInput>
  : GenericInput
```

## Paramètres

- `input` : Valeur à unwrap lorsqu'elle est un `Left`.

## Valeur de retour

Retourne le payload unwrap pour `Left`, sinon renvoie `input` inchangé.

## Voir aussi

- [`unwrapLeftOrThrow`](/fr/v1/api/either/unwrapLeftOrThrow) – Variante bloquante si l'entrée n'est pas `Left`.
- [`isLeft`](/fr/v1/api/either/isLeft) – Type guard pour vérifier le côté left.
- [`unwrapByInformation`](/fr/v1/api/either/unwrapByInformation) – Unwrap non bloquant basé sur l'information.
