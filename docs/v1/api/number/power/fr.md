---
outline: [2, 3]
prev:
  text: "modulo"
  link: "/v1/api/number/modulo/fr"
next:
  text: "negate"
  link: "/v1/api/number/negate/fr"
---

# power

La méthode **`power()`** élève un nombre à une puissance donnée. Elle calcule la valeur d'un nombre multiplié par lui-même un certain nombre de fois.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/power/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function power<
	GenericValue extends number,
>(exponent: number): (value: GenericValue) => number

function power<
	GenericValue extends number,
>(value: GenericValue, exponent: number): number
```

## Paramètres

- `value` : Le nombre de base à élever à une puissance.
- `exponent` : L'exposant auquel élever le nombre.

## Valeur de retour

Le résultat de `value` élevé à la puissance `exponent`. Équivaut à `value ** exponent` ou `Math.pow(value, exponent)`.

## Exemples

### Calculer des aires

<MonacoTSEditor
  	src="/v1/api/number/power/examples/calculateArea.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Croissance exponentielle

<MonacoTSEditor
  	src="/v1/api/number/power/examples/exponentialGrowth.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`multiply`](/v1/api/number/multiply/fr) - Multiplie deux nombres
- [`sqrt`](/v1/api/number/sqrt/fr) - Calcule la racine carrée

## Sources

- [MDN Web Docs - Math.pow()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
