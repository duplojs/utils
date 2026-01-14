---
outline: [2, 3]
description: "La fonction set() remplace la valeur à un index donné et retourne un nouveau tableau, sans modifier l'original."
prev:
  text: "maxElements"
  link: "/fr/v1/api/array/maxElements"
next:
  text: "fill"
  link: "/fr/v1/api/array/fill"
---

# set

La fonction **`set()`** remplace la valeur à un index donné et retourne un nouveau tableau, sans modifier l'original.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/set/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

### Signature classique

```typescript
function set<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	index: number, 
	element: GenericElement
): GenericElement[];
```

### Signature currifiée

```typescript
function set<
	GenericElement extends unknown
>(
	index: number, 
	element: GenericElement
): (input: readonly GenericElement[]) => GenericElement[];
```

## Paramètres

- `input` : Le tableau source.
- `index` : L'index à remplacer (les index sont normalisés avec un modulo sur la longueur, donc les valeurs hors plage ciblent une position existante).
- `element` : La nouvelle valeur.

## Valeur de retour

Un nouveau tableau dont l'élément ciblé (après normalisation de l'index) correspond à `element`. Les autres éléments sont copiés tels quels.

## Voir aussi

- [`fill`](/fr/v1/api/array/fill) - Remplit une portion du tableau
- [`copyWithin`](/fr/v1/api/array/copyWithin) - Copie un segment à l'intérieur du même tableau

## Sources

- [MDN Web Docs - Array.prototype.with()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/with)
