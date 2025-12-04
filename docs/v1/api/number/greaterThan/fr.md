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

### Signature classique

```typescript
function greaterThan<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Signature currifiée

```typescript
function greaterThan<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à comparer (uniquement en signature classique).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

**Signature classique** : retourne `true` si la valeur est strictement supérieure au seuil, `false` sinon.

**Signature currifiée** : retourne une fonction qui prend une valeur et vérifie si elle est > au seuil.

## Description

La fonction `greaterThan` effectue une comparaison stricte (>), ce qui signifie qu'elle retourne `true` uniquement si la valeur est strictement supérieure au seuil (et non égale). Cela la différencie de `greater` qui effectue une comparaison inclusive (>=).

**Exemples de différence :**
- `greaterThan(5, 5)` retourne `false` (5 n'est pas > 5)
- `greater(5, 5)` retourne `true` (5 >= 5)

## Voir aussi

- [`greater`](/v1/api/number/greater/fr) - Vérifie si un nombre est supérieur ou égal (>=)
- [`less`](/v1/api/number/less/fr) - Vérifie si un nombre est inférieur ou égal (<=)
- [`lessThan`](/v1/api/number/lessThan/fr) - Vérifie si un nombre est strictement inférieur (<)

## Sources

- [MDN Web Docs - Greater than operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
