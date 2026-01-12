---
outline: [2, 3]
description: "La méthode lessThan() vérifie si un nombre est strictement inférieur (<) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle."
prev:
  text: "less"
  link: "/fr/v1/api/number/less"
next:
  text: "Number"
  link: "/fr/v1/api/number/"
---

# lessThan

La méthode **`lessThan()`** vérifie si un nombre est strictement inférieur (<) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function lessThan<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Signature currifiée

```typescript
function lessThan<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à comparer (uniquement en signature classique).
- `threshold` : Le seuil de comparaison.

## Valeur de retour

retourne `true` si la valeur est strictement inférieure au seuil, `false` sinon.

## Voir aussi

- [`less`](/fr/v1/api/number/less) - Vérifie si un nombre est inférieur ou égal (<=)
- [`greater`](/fr/v1/api/number/greater) - Vérifie si un nombre est supérieur ou égal (>=)
- [`greaterThan`](/fr/v1/api/number/greaterThan) - Vérifie si un nombre est strictement supérieur (>)

## Sources

- [MDN Web Docs - Less than operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than)
