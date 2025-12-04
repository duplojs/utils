---
outline: [2, 3]
prev:
  text: "clone"
  link: "/v1/api/common/clone/fr"
next:
  text: "createEnum"
  link: "/v1/api/common/createEnum/fr"
---

# simpleClone

La fonction **`simpleClone()`** duplique rapidement une valeur sans logique avancée, pratique pour des copies superficielles ou des structures simples.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/simpleClone/examples/tryout.doc.ts"
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

- [`clone`](/v1/api/common/clone/fr) - Clone profond typé
