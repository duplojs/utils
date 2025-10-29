---
outline: [2, 3]
prev:
  text: "subtract"
  link: "/v1/api/number/subtract/fr"
next:
  text: "divide"
  link: "/v1/api/number/divide/fr"
---

# multiply

La méthode **`multiply()`** multiplie deux nombres entre eux. Elle peut être utilisée en mode currifié pour créer des fonctions de multiplication partiellement appliquées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/multiply/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function multiply<
	GenericValue extends number,
>(operand: number): (value: GenericValue) => number

function multiply<
	GenericValue extends number,
>(value: GenericValue, operand: number): number
```

## Paramètres

- `value` : Le nombre à multiplier (multiplicande).
- `operand` : Le nombre multiplicateur.

## Valeur de retour

Le produit de la multiplication des deux nombres. Si un seul paramètre est fourni, retourne une fonction qui attend le second paramètre.

## Exemples

### Calculer des prix TTC

<MonacoTSEditor
  	src="/v1/api/number/multiply/examples/calculatePriceWithTax.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Convertir des unités

<MonacoTSEditor
  	src="/v1/api/number/multiply/examples/convertUnits.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Calculer des surfaces

<MonacoTSEditor
  	src="/v1/api/number/multiply/examples/calculateArea.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

## Voir aussi

- [`divide`](/v1/api/number/divide/fr) - Divise deux nombres
- [`add`](/v1/api/number/add/fr) - Additionne deux nombres
- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Multiplication (*)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
