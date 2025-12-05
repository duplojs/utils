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

### Signature classique

```typescript
function less<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Signature currifiée

```typescript
function less<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à comparer (uniquement en signature classique).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

**Signature classique** : retourne `true` si la valeur est inférieure ou égale au seuil, `false` sinon.

**Signature currifiée** : retourne une fonction qui prend une valeur et vérifie si elle est <= au seuil.

## Description

La fonction `less` effectue une comparaison inclusive (<=), ce qui signifie qu'elle retourne `true` si la valeur est strictement inférieure OU égale au seuil. Cela la différencie de `lessThan` qui effectue une comparaison stricte (<).

**Exemples de différence :**
- `less(5, 5)` retourne `true` (5 <= 5)
- `lessThan(5, 5)` retourne `false` (5 n'est pas < 5)

## Voir aussi

- [`lessThan`](/v1/api/number/lessThan/fr) - Vérifie si un nombre est strictement inférieur (<)
- [`greater`](/v1/api/number/greater/fr) - Vérifie si un nombre est supérieur ou égal (>=)
- [`greaterThan`](/v1/api/number/greaterThan/fr) - Vérifie si un nombre est strictement supérieur (>)

## Sources

- [MDN Web Docs - Less than or equal operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
