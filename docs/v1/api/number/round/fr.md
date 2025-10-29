---
outline: [2, 3]
prev:
  text: "abs"
  link: "/v1/api/number/abs/fr"
next:
  text: "ceil"
  link: "/v1/api/number/ceil/fr"
---

# round

La méthode **`round()`** arrondit un nombre à l'entier le plus proche. Si la partie décimale est exactement 0.5, le nombre est arrondi vers l'entier supérieur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/round/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function round<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Le nombre à arrondir.

## Valeur de retour

Le nombre arrondi à l'entier le plus proche.

## Exemples

### Formater des prix avec TVA

<MonacoTSEditor
  	src="/v1/api/number/round/examples/formatPrices.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Calculer une moyenne arrondie

<MonacoTSEditor
  	src="/v1/api/number/round/examples/calculateAverage.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Convertir des unités

<MonacoTSEditor
  	src="/v1/api/number/round/examples/convertUnits.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

## Voir aussi

- [`floor`](/v1/api/number/floor/fr) - Arrondit vers le bas
- [`ceil`](/v1/api/number/ceil/fr) - Arrondit vers le haut
- [`trunc`](/v1/api/number/trunc/fr) - Tronque la partie décimale

## Sources

- [MDN Web Docs - Math.round()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
