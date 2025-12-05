---
outline: [2, 3]
prev:
  text: "first"
  link: "/v1/api/array/first/fr"
next:
  text: "length"
  link: "/v1/api/array/length/fr"
---

# last

La méthode **`last()`** retourne le dernier élément d'un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/last/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function last<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends readonly [...any[], infer InferredValue] 
	? InferredValue 
	: GenericInput[number] | undefined
```

## Paramètres

- `input` : Le tableau dont on veut récupérer le dernier élément.

## Valeur de retour

Le dernier élément du tableau, ou `undefined` si le tableau est vide.

## Voir aussi

- [`at`](/v1/api/array/at/fr) - Retourne l'élément à un index donné
- [`first`](/v1/api/array/first/fr) - Retourne le premier élément du tableau

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
