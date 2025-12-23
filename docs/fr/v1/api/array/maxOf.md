---
outline: [2, 3]
prev:
  text: "minOf"
  link: "/fr/v1/api/array/minOf"
next:
  text: "minElements"
  link: "/fr/v1/api/array/minElements"
---

# maxOf

La fonction **`maxOf()`** retourne la plus grande valeur numérique d'un tableau (ou tuple) sans toucher à l'original.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/maxOf/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function maxOf<
	GenericInput extends readonly number[]
>(
	input: GenericInput
): number | undefined
```

## Paramètres

- `input` : Tableau de nombres dont on cherche le maximum.

## Valeur de retour

Le plus grand nombre trouvé, ou `undefined` si le tableau est vide.

## Voir aussi

- [`minOf`](/fr/v1/api/array/minOf) - Calcule la valeur minimale
- [`maxElements`](/fr/v1/api/array/maxElements) - Vérifie un nombre maximal d'éléments

## Sources

- [MDN Web Docs - Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
