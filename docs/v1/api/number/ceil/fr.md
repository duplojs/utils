---
outline: [2, 3]
prev:
  text: "round"
  link: "/v1/api/number/round/fr"
next:
  text: "floor"
  link: "/v1/api/number/floor/fr"
---

# ceil

La méthode **`ceil()`** arrondit un nombre vers le haut à l'entier supérieur ou égal. Cette fonction est utile pour garantir qu'on a toujours suffisamment de ressources (boîtes, pages, etc.).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/ceil/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function ceil<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Le nombre à arrondir vers le haut.

## Valeur de retour

Le plus petit entier supérieur ou égal au nombre donné.

## Exemples

### Calculer le nombre de boîtes nécessaires

<MonacoTSEditor
  	src="/v1/api/number/ceil/examples/calculateNeededBoxes.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Calculer les frais d'expédition

<MonacoTSEditor
  	src="/v1/api/number/ceil/examples/calculateShippingCost.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Calculer des étapes de progression

<MonacoTSEditor
  	src="/v1/api/number/ceil/examples/calculateProgressSteps.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

## Voir aussi

- [`round`](/v1/api/number/round/fr) - Arrondit à l'entier le plus proche
- [`floor`](/v1/api/number/floor/fr) - Arrondit vers le bas
- [`trunc`](/v1/api/number/trunc/fr) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.ceil()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
