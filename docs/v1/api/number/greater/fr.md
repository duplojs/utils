---
outline: [2, 3]
prev:
  text: "atan2"
  link: "/v1/api/number/atan2/fr"
next:
  text: "greaterThan"
  link: "/v1/api/number/greaterThan/fr"
---

# greater

La méthode **`greater()`** vérifie si un nombre est supérieur ou égal (>=) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/greater/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function greater<GenericValue extends number>(
	value: GenericValue,
	threshold: number
): boolean
```

### Signature currifiée

```typescript
function greater<GenericValue extends number>(
	threshold: number
): (value: GenericValue) => boolean
```

## Paramètres

- `value` : Le nombre à comparer (uniquement en signature classique).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

**Signature classique** : retourne `true` si la valeur est supérieure ou égale au seuil, `false` sinon.

**Signature currifiée** : retourne une fonction qui prend une valeur et vérifie si elle est >= au seuil.

## Description

La fonction `greater` effectue une comparaison inclusive (>=), ce qui signifie qu'elle retourne `true` si la valeur est strictement supérieure OU égale au seuil. Cela la différencie de `greaterThan` qui effectue une comparaison stricte (>).

**Exemples de différence :**
- `greater(5, 5)` retourne `true` (5 >= 5)
- `greaterThan(5, 5)` retourne `false` (5 n'est pas > 5)

## Exemples

### Filtrer les scores valides

<MonacoTSEditor
  	src="/v1/api/number/greater/examples/filterValidScores.doc.ts"
  	majorVersion="v1"
	height="300px"
/>

### Valider un stock

<MonacoTSEditor
  	src="/v1/api/number/greater/examples/validateStock.doc.ts"
  	majorVersion="v1"
	height="800px"
/>

### Catégoriser par âge

<MonacoTSEditor
  	src="/v1/api/number/greater/examples/categorizeByAge.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`greaterThan`](/v1/api/number/greaterThan/fr) - Vérifie si un nombre est strictement supérieur (>)
- [`less`](/v1/api/number/less/fr) - Vérifie si un nombre est inférieur ou égal (<=)
- [`lessThan`](/v1/api/number/lessThan/fr) - Vérifie si un nombre est strictement inférieur (<)

## Sources

- [MDN Web Docs - Greater than or equal operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
