---
outline: [2, 3]
description: "La méthode floor() arrondit un nombre vers le bas à l'entier inférieur ou égal. Cette fonction est utile pour garantir qu'un nombre ne dépasse jamais une certaine valeur entière."
prev:
  text: "ceil"
  link: "/fr/v1/api/number/ceil"
next:
  text: "trunc"
  link: "/fr/v1/api/number/trunc"
---

# floor

La méthode **`floor()`** arrondit un nombre vers le bas à l'entier inférieur ou égal. Cette fonction est utile pour garantir qu'un nombre ne dépasse jamais une certaine valeur entière.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/floor/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function floor<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre à arrondir vers le bas.

## Valeur de retour

Le plus grand entier inférieur ou égal au nombre donné.

## Voir aussi

- [`round`](/fr/v1/api/number/round) - Arrondit à l'entier le plus proche
- [`ceil`](/fr/v1/api/number/ceil) - Arrondit vers le haut
- [`trunc`](/fr/v1/api/number/trunc) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.floor()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
