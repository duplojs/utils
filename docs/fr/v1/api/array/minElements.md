---
outline: [2, 3]
description: "La fonction minElements() vérifie qu'un tableau contient au moins un nombre donné d'éléments. Elle agit comme un type guard, ce qui permet à TypeScript d'inférer un tuple d'au minimum minLength éléments."
prev:
  text: "maxOf"
  link: "/fr/v1/api/array/maxOf"
next:
  text: "maxElements"
  link: "/fr/v1/api/array/maxElements"
---

# minElements

La fonction **`minElements()`** vérifie qu'un tableau contient au moins un nombre donné d'éléments. Elle agit comme un type guard, ce qui permet à TypeScript d'inférer un tuple d'au minimum `minLength` éléments.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/minElements/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function minElements<
	GenericInput extends readonly unknown[],
	GenericLength extends number
>(
	input: GenericInput,
	minLength: GenericLength
): input is [
	...CreateTuple<GenericInput[number], GenericLength>,
	...GenericInput[number][]
]
```

### Signature currifiée

```typescript
function minElements<
	GenericInput extends readonly unknown[],
	GenericLength extends number
>(
	minLength: GenericLength
): (
	input: GenericInput
) => input is [
	...CreateTuple<GenericInput[number], GenericLength>,
	...GenericInput[number][]
]
```

## Paramètres

- `input` : Tableau dont on souhaite garantir un nombre minimal d'éléments.
- `minLength` : Nombre minimum attendu.

## Valeur de retour

`true` si la longueur du tableau est supérieure ou égale à `minLength`, sinon `false`. Lorsque la fonction retourne `true`, le type du tableau est affiné afin de refléter la contrainte.

## Voir aussi

- [`maxElements`](/fr/v1/api/array/maxElements) - Impose un nombre maximal d'éléments
- [`length`](/fr/v1/api/array/length) - Retourne la taille exacte d'un tableau

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
