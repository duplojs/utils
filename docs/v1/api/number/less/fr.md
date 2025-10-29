---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/v1/api/number/greaterThan/fr"
next:
  text: "lessThan"
  link: "/v1/api/number/lessThan/fr"
---

# less

La méthode **`less()`** vérifie si un nombre est inférieur ou égal (<=) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/less/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function less<GenericValue extends number>(
	threshold: number,
): (value: GenericValue) => boolean

function less<GenericValue extends number>(
	value: GenericValue,
	threshold: number,
): boolean
```

## Paramètres

- `value` : Le nombre à comparer (utilisé dans la forme à deux paramètres).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

- **Forme currifiée** : Retourne une fonction qui prend une valeur et vérifie si elle est <= au seuil.
- **Forme directe** : Retourne `true` si la valeur est inférieure ou égale au seuil, `false` sinon.

## Description

La fonction `less` effectue une comparaison inclusive (<=), ce qui signifie qu'elle retourne `true` si la valeur est strictement inférieure OU égale au seuil. Cela la différencie de `lessThan` qui effectue une comparaison stricte (<).

**Exemples de différence :**
- `less(5, 5)` retourne `true` (5 <= 5)
- `lessThan(5, 5)` retourne `false` (5 n'est pas < 5)

## Exemples

### Filtrer les produits abordables

<MonacoTSEditor
  	src="/v1/api/number/less/examples/filterAffordable.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Valider la capacité

<MonacoTSEditor
  	src="/v1/api/number/less/examples/validateCapacity.doc.ts"
  	majorVersion="v1"
	height="600px"
/>

### Catégoriser par score

<MonacoTSEditor
  	src="/v1/api/number/less/examples/categorizeByScore.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`lessThan`](/v1/api/number/lessThan/fr) - Vérifie si un nombre est strictement inférieur (<)
- [`greater`](/v1/api/number/greater/fr) - Vérifie si un nombre est supérieur ou égal (>=)
- [`greaterThan`](/v1/api/number/greaterThan/fr) - Vérifie si un nombre est strictement supérieur (>)

## Sources

- [MDN Web Docs - Less than or equal operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
