---
outline: [2, 3]
prev:
  text: "length"
  link: "/fr/v1/api/array/length"
next:
  text: "includes"
  link: "/fr/v1/api/array/includes"
---

# lengthEqual

La fonction **`lengthEqual()`** vérifie qu'un tableau contient exactement un nombre donné d'éléments. Elle agit comme un type guard pour inférer un tuple de taille fixe.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/lengthEqual/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	array: GenericArray,
	length: GenericLength
): array is CreateTuple<GenericArray[number], GenericLength>
```

### Signature currifiée

```typescript
function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	length: GenericLength
): (
	array: GenericArray
) => array is CreateTuple<GenericArray[number], GenericLength>
```

## Paramètres

- `array` : Tableau dont on souhaite garantir la taille exacte.
- `length` : Longueur attendue.

## Valeur de retour

`true` si la longueur du tableau est égale à `length`, sinon `false`. Lorsque la fonction retourne `true`, le type du tableau est affiné pour refléter une longueur fixe.

## Voir aussi

- [`minElements`](/fr/v1/api/array/minElements) - Vérifie un minimum d'éléments
- [`maxElements`](/fr/v1/api/array/maxElements) - Vérifie un maximum d'éléments
- [`length`](/fr/v1/api/array/length) - Retourne la taille exacte d'un tableau

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
