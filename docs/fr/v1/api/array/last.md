---
outline: [2, 3]
prev:
  text: "first"
  link: "/fr/v1/api/array/first"
next:
  text: "length"
  link: "/fr/v1/api/array/length"
---

# last

La méthode **`last()`** retourne le dernier élément d'un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/last/tryout.doc.ts"
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

- [`at`](/fr/v1/api/array/at) - Retourne l'élément à un index donné
- [`first`](/fr/v1/api/array/first) - Retourne le premier élément du tableau

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
