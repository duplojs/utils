---
outline: [2, 3]
description: "La fonction forward() renvoie l'argument passé sans le modifier. Utile pour homogénéiser une API qui attend une fonction, ou pour améliorer la lisibilité dans un pipeline."
prev:
  text: "asyncInnerPipe"
  link: "/fr/v1/api/common/asyncInnerPipe"
next:
  text: "forwardLog"
  link: "/fr/v1/api/common/forwardLog"
---

# forward

La fonction **`forward()`** renvoie l'argument passé sans le modifier. Utile pour homogénéiser une API qui attend une fonction, ou pour améliorer la lisibilité dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/forward/tryout.doc.ts"
  majorVersion="v1"
  height="370px"
/>

## Syntaxe

```typescript
function forward<
	GenericInput extends unknown
>(input: GenericInput): GenericInput;
```

## Paramètres

- `input` : La valeur à renvoyer telle quelle.

## Valeur de retour

La valeur fournie en entrée, inchangée.

## Voir aussi

- [`forwardLog`](/fr/v1/api/common/forwardLog) - Renvoie la valeur après l'avoir loggée
- [`justReturn`](/fr/v1/api/common/justReturn) - Construit une fonction constante
