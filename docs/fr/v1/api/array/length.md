---
outline: [2, 3]
prev:
  text: "toTuple"
  link: "/fr/v1/api/array/toTuple"
next:
  text: "includes"
  link: "/fr/v1/api/array/includes"
---

# length

La méthode **`length()`** retourne la longueur d'un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/length/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function length<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput["length"]
```

## Paramètres

- `input` : Le tableau dont on veut obtenir la longueur.

## Valeur de retour

La longueur du tableau avec un typage précis.

## Voir aussi

- [`at`](/fr/v1/api/array/at) - Retourne l'élément à un index

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
