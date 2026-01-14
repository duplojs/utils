---
outline: [2, 3]
description: "La méthode ceil() arrondit un nombre vers le haut à l'entier supérieur ou égal. Cette fonction est utile pour garantir qu'on a toujours suffisamment de ressources (boîtes, pages, etc.)."
prev:
  text: "round"
  link: "/fr/v1/api/number/round"
next:
  text: "floor"
  link: "/fr/v1/api/number/floor"
---

# ceil

La méthode **`ceil()`** arrondit un nombre vers le haut à l'entier supérieur ou égal. Cette fonction est utile pour garantir qu'on a toujours suffisamment de ressources (boîtes, pages, etc.).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/ceil/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function ceil<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre à arrondir vers le haut.

## Valeur de retour

Le plus petit entier supérieur ou égal au nombre donné.

## Voir aussi

- [`round`](/fr/v1/api/number/round) - Arrondit à l'entier le plus proche
- [`floor`](/fr/v1/api/number/floor) - Arrondit vers le bas
- [`trunc`](/fr/v1/api/number/trunc) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.ceil()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
