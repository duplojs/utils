---
outline: [2, 3]
prev:
  text: "length"
  link: "/v1/api/array/length/fr"
next:
  text: "notIncludes"
  link: "/v1/api/array/notIncludes/fr"
---

# includes

La méthode **`includes()`** vérifie si un tableau contient un élément donné.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/includes/examples/tryout.doc.ts"
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

- [`indexOf`](/v1/api/array/indexOf/fr) - Retourne l'index de la première occurrence
- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
