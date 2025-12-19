---
outline: [2, 3]
prev:
  text: "atan2"
  link: "/fr/v1/api/number/atan2"
next:
  text: "greaterThan"
  link: "/fr/v1/api/number/greaterThan"
---

# greater

La méthode **`greater()`** vérifie si un nombre est supérieur ou égal (>=) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/greater/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function greater<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Signature currifiée

```typescript
function greater<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à comparer (uniquement en signature classique).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

**Signature classique** : retourne `true` si la valeur est supérieure ou égale au seuil, `false` sinon.

**Signature currifiée** : retourne une fonction qui prend une valeur et vérifie si elle est >= au seuil.

## Description

La fonction `greater` effectue une comparaison inclusive (>=), ce qui signifie qu'elle retourne `true` si la valeur est strictement supérieure OU égale au seuil. Cela la différencie de `greaterThan` qui effectue une comparaison stricte (>).

**Exemples de différence :**
- `greater(5, 5)` retourne `true` (5 >= 5)
- `greaterThan(5, 5)` retourne `false` (5 n'est pas > 5)

## Voir aussi

- [`greaterThan`](/fr/v1/api/number/greaterThan) - Vérifie si un nombre est strictement supérieur (>)
- [`less`](/fr/v1/api/number/less) - Vérifie si un nombre est inférieur ou égal (<=)
- [`lessThan`](/fr/v1/api/number/lessThan) - Vérifie si un nombre est strictement inférieur (<)

## Sources

- [MDN Web Docs - Greater than or equal operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
