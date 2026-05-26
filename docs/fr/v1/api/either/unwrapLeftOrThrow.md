---
outline: [2, 3]
description: "Unwrap le payload d'un Left et lève une NotLeftError lorsque l'entrée n'est pas Left."
prev:
  text: "unwrapLeft"
  link: "/fr/v1/api/either/unwrapLeft"
next:
  text: "rightPipe"
  link: "/fr/v1/api/either/rightPipe"
---

# unwrapLeftOrThrow

Unwrap le payload d'un `Left` et lève une `NotLeftError` lorsque l'entrée n'est pas `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapLeftOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
function unwrapLeftOrThrow<
  GenericInput extends unknown
>(
  input: GenericInput
): Unwrap<Extract<GenericInput, Left>>
```

## Paramètres

- `input` : Valeur censée être un `Left`.

## Valeur de retour

Retourne le payload unwrap lorsque l'entrée est un `Left`. Sinon, la fonction lève `E.NotLeftError`.

## Voir aussi

- [`isLeft`](/fr/v1/api/either/isLeft) – Type guard pour vérifier l'entrée avant l'unwrap.
- [`left`](/fr/v1/api/either/left) – Constructeur générique de `Left`.
- [`unwrapByInformationOrThrow`](/fr/v1/api/either/unwrapByInformationOrThrow) – Variante qui cible une information précise.
