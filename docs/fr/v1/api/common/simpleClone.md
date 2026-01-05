---
outline: [2, 3]
description: "La fonction simpleClone() duplique rapidement une valeur sans logique avancée, pratique pour des copies superficielles ou des structures simples."
prev:
  text: "clone"
  link: "/fr/v1/api/common/clone"
next:
  text: "createEnum"
  link: "/fr/v1/api/common/createEnum"
---

# simpleClone

La fonction **`simpleClone()`** duplique rapidement une valeur sans logique avancée, pratique pour des copies superficielles ou des structures simples.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/simpleClone/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function simpleClone<
	GenericInput extends unknown = unknown
>(
	input: GenericInput
): GenericInput;
```

## Paramètres

- `input` : Valeur à dupliquer.

## Valeur de retour

Une nouvelle valeur identique (copie peu coûteuse).

## Voir aussi

- [`clone`](/fr/v1/api/common/clone) - Clone profond typé
