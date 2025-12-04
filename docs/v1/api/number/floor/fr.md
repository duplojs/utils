---
outline: [2, 3]
prev:
  text: "ceil"
  link: "/v1/api/number/ceil/fr"
next:
  text: "trunc"
  link: "/v1/api/number/trunc/fr"
---

# floor

La méthode **`floor()`** arrondit un nombre vers le bas à l'entier inférieur ou égal. Cette fonction est utile pour garantir qu'un nombre ne dépasse jamais une certaine valeur entière.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/floor/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

- [`round`](/v1/api/number/round/fr) - Arrondit à l'entier le plus proche
- [`ceil`](/v1/api/number/ceil/fr) - Arrondit vers le haut
- [`trunc`](/v1/api/number/trunc/fr) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.floor()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
