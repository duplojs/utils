---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/v1/api/number/multiply/fr"
next:
  text: "modulo"
  link: "/v1/api/number/modulo/fr"
---

# divide

La méthode **`divide()`** effectue la division de deux nombres. Elle peut être utilisée de manière currifiée pour créer des fonctions de division réutilisables.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/divide/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function divide<GenericValue extends number>(
	value: GenericValue,
	divisor: number
): number
```

### Signature currifiée

```typescript
function divide<GenericValue extends number>(
	divisor: number
): (value: GenericValue) => number
```

## Paramètres

- `value` : Le nombre à diviser (dividende, uniquement en signature classique).
- `divisor` : Le nombre par lequel diviser (diviseur).

## Valeur de retour

**Signature classique** : retourne le résultat de la division `value / divisor`.

**Signature currifiée** : retourne une fonction qui prend une valeur et la divise par le diviseur.

## Exemples

### Calculer une moyenne

<MonacoTSEditor
  	src="/v1/api/number/divide/examples/calculateAverage.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Diviser un budget

<MonacoTSEditor
  	src="/v1/api/number/divide/examples/splitBudget.doc.ts"
  	majorVersion="v1"
	height="650px"
/>

### Calculer des ratios

<MonacoTSEditor
  	src="/v1/api/number/divide/examples/calculateRatio.doc.ts"
  	majorVersion="v1"
	height="800px"
/>

## Voir aussi

- [`multiply`](/v1/api/number/multiply/fr) - Multiplie deux nombres
- [`modulo`](/v1/api/number/modulo/fr) - Calcule le reste d'une division
- [`add`](/v1/api/number/add/fr) - Additionne deux nombres
- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Division (/)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Division)
