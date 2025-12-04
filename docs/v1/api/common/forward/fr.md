---
outline: [2, 3]
prev:
  text: "asyncInnerPipe"
  link: "/v1/api/common/asyncInnerPipe/fr"
next:
  text: "forwardLog"
  link: "/v1/api/common/forwardLog/fr"
---

# forward

La fonction **`forward()`** renvoie l'argument passé sans le modifier. Utile pour homogénéiser une API qui attend une fonction, ou pour améliorer la lisibilité dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/forward/examples/tryout.doc.ts"
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

- [`forwardLog`](/v1/api/common/forwardLog/fr) - Renvoie la valeur après l'avoir loggée
- [`justReturn`](/v1/api/common/justReturn/fr) - Construit une fonction constante
