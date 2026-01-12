---
outline: [2, 3]
description: "La méthode less() vérifie si un nombre est inférieur ou égal (<=) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle."
prev:
  text: "greaterThan"
  link: "/fr/v1/api/number/greaterThan"
next:
  text: "lessThan"
  link: "/fr/v1/api/number/lessThan"
---

# less

La méthode **`less()`** vérifie si un nombre est inférieur ou égal (<=) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/less/tryout.doc.ts"
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

retourne `true` si la valeur est inférieure ou égale au seuil, `false` sinon.

## Voir aussi

- [`lessThan`](/fr/v1/api/number/lessThan) - Vérifie si un nombre est strictement inférieur (<)
- [`greater`](/fr/v1/api/number/greater) - Vérifie si un nombre est supérieur ou égal (>=)
- [`greaterThan`](/fr/v1/api/number/greaterThan) - Vérifie si un nombre est strictement supérieur (>)

## Sources

- [MDN Web Docs - Less than or equal operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
