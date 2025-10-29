---
outline: [2, 3]
prev:
  text: "greater"
  link: "/v1/api/number/greater/fr"
next:
  text: "less"
  link: "/v1/api/number/less/fr"
---

# greaterThan

La méthode **`greaterThan()`** vérifie si un nombre est strictement supérieur (>) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/greaterThan/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function greaterThan<GenericValue extends number>(
	threshold: number,
): (value: GenericValue) => boolean

function greaterThan<GenericValue extends number>(
	value: GenericValue,
	threshold: number,
): boolean
```

## Paramètres

- `value` : Le nombre à comparer (utilisé dans la forme à deux paramètres).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

- **Forme currifiée** : Retourne une fonction qui prend une valeur et vérifie si elle est > au seuil.
- **Forme directe** : Retourne `true` si la valeur est strictement supérieure au seuil, `false` sinon.

## Description

La fonction `greaterThan` effectue une comparaison stricte (>), ce qui signifie qu'elle retourne `true` uniquement si la valeur est strictement supérieure au seuil (et non égale). Cela la différencie de `greater` qui effectue une comparaison inclusive (>=).

**Exemples de différence :**
- `greaterThan(5, 5)` retourne `false` (5 n'est pas > 5)
- `greater(5, 5)` retourne `true` (5 >= 5)

## Exemples

### Filtrer les prix élevés

<MonacoTSEditor
  	src="/v1/api/number/greaterThan/examples/filterHighPrices.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Détecter les excès

<MonacoTSEditor
  	src="/v1/api/number/greaterThan/examples/detectExcess.doc.ts"
  	majorVersion="v1"
	height="600px"
/>

### Compter les dépassements

<MonacoTSEditor
  	src="/v1/api/number/greaterThan/examples/countExceeding.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`greater`](/v1/api/number/greater/fr) - Vérifie si un nombre est supérieur ou égal (>=)
- [`less`](/v1/api/number/less/fr) - Vérifie si un nombre est inférieur ou égal (<=)
- [`lessThan`](/v1/api/number/lessThan/fr) - Vérifie si un nombre est strictement inférieur (<)

## Sources

- [MDN Web Docs - Greater than operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
