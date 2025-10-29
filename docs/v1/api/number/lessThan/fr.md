---
outline: [2, 3]
prev:
  text: "less"
  link: "/v1/api/number/less/fr"
next:
  text: "Number"
  link: "/v1/api/number/fr"
---

# lessThan

La méthode **`lessThan()`** vérifie si un nombre est strictement inférieur (<) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/lessThan/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function lessThan<GenericValue extends number>(
	threshold: number,
): (value: GenericValue) => boolean

function lessThan<GenericValue extends number>(
	value: GenericValue,
	threshold: number,
): boolean
```

## Paramètres

- `value` : Le nombre à comparer (utilisé dans la forme à deux paramètres).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

- **Forme currifiée** : Retourne une fonction qui prend une valeur et vérifie si elle est < au seuil.
- **Forme directe** : Retourne `true` si la valeur est strictement inférieure au seuil, `false` sinon.

## Description

La fonction `lessThan` effectue une comparaison stricte (<), ce qui signifie qu'elle retourne `true` uniquement si la valeur est strictement inférieure au seuil (et non égale). Cela la différencie de `less` qui effectue une comparaison inclusive (<=).

**Exemples de différence :**
- `lessThan(5, 5)` retourne `false` (5 n'est pas < 5)
- `less(5, 5)` retourne `true` (5 <= 5)

## Exemples

### Filtrer les prix bas

<MonacoTSEditor
  	src="/v1/api/number/lessThan/examples/filterLowPrices.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Détecter les sous-poids

<MonacoTSEditor
  	src="/v1/api/number/lessThan/examples/detectUnderweight.doc.ts"
  	majorVersion="v1"
	height="600px"
/>

### Compter sous le seuil

<MonacoTSEditor
  	src="/v1/api/number/lessThan/examples/countBelowThreshold.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`less`](/v1/api/number/less/fr) - Vérifie si un nombre est inférieur ou égal (<=)
- [`greater`](/v1/api/number/greater/fr) - Vérifie si un nombre est supérieur ou égal (>=)
- [`greaterThan`](/v1/api/number/greaterThan/fr) - Vérifie si un nombre est strictement supérieur (>)

## Sources

- [MDN Web Docs - Less than operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than)
