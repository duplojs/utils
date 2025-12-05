---
outline: [2, 3]
prev:
  text: "at"
  link: "/v1/api/array/at/fr"
next:
  text: "last"
  link: "/v1/api/array/last/fr"
---

# first

La méthode **`first()`** retourne le premier élément d'un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/first/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function first<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple 
	? GenericInput[0] 
	: GenericInput[number] | undefined
```

## Paramètres

- `input` : Le tableau dont on veut récupérer le premier élément.

## Valeur de retour

Le premier élément du tableau, ou `undefined` si le tableau est vide.

## Voir aussi

- [`at`](/v1/api/array/at/fr) - Retourne l'élément à un index donné
- [`last`](/v1/api/array/last/fr) - Retourne le dernier élément du tableau

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
