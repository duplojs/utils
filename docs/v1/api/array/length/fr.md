---
outline: [2, 3]
prev:
  text: "toTuple"
  link: "/v1/api/array/toTuple/fr"
next:
  text: "includes"
  link: "/v1/api/array/includes/fr"
---

# length

La méthode **`length()`** retourne la longueur d'un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/length/examples/tryout.doc.ts"
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

- [`at`](/v1/api/array/at/fr) - Retourne l'élément à un index

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
