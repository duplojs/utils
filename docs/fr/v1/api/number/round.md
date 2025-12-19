---
outline: [2, 3]
prev:
  text: "abs"
  link: "/fr/v1/api/number/abs"
next:
  text: "ceil"
  link: "/fr/v1/api/number/ceil"
---

# round

La méthode **`round()`** arrondit un nombre à l'entier le plus proche. Si la partie décimale est exactement 0.5, le nombre est arrondi vers l'entier supérieur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/round/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function round<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre à arrondir.

## Valeur de retour

Le nombre arrondi à l'entier le plus proche.

## Voir aussi

- [`floor`](/fr/v1/api/number/floor) - Arrondit vers le bas
- [`ceil`](/fr/v1/api/number/ceil) - Arrondit vers le haut
- [`trunc`](/fr/v1/api/number/trunc) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.round()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
