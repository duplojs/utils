---
outline: [2, 3]
description: "La méthode includes() vérifie si un tableau contient un élément donné."
prev:
  text: "lengthEqual"
  link: "/fr/v1/api/array/lengthEqual"
next:
  text: "notIncludes"
  link: "/fr/v1/api/array/notIncludes"
---

# includes

La méthode **`includes()`** vérifie si un tableau contient un élément donné.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/includes/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function includes<
	GenericArrayValue extends unknown
>(
	input: readonly GenericArrayValue[], 
	value: NoInfer<GenericArrayValue>
): boolean
```

### Signature currifiée

```typescript
function includes<
	GenericArrayValue extends unknown
>(
	value: NoInfer<GenericArrayValue>
): (input: readonly GenericArrayValue[]) => boolean
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `value` : La valeur à rechercher dans le tableau.

## Valeur de retour

`true` si le tableau contient la valeur, `false` sinon.

## Voir aussi

- [`indexOf`](/fr/v1/api/array/indexOf) - Retourne l'index de la première occurrence
- [`find`](/fr/v1/api/array/find) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
