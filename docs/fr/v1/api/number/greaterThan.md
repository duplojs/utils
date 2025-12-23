---
outline: [2, 3]
prev:
  text: "greater"
  link: "/fr/v1/api/number/greater"
next:
  text: "less"
  link: "/fr/v1/api/number/less"
---

# greaterThan

La méthode **`greaterThan()`** vérifie si un nombre est strictement supérieur (>) à un seuil donné. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/greaterThan/tryout.doc.ts"
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

retourne `true` si la valeur est strictement supérieure au seuil, `false` sinon.

## Voir aussi

- [`greater`](/fr/v1/api/number/greater) - Vérifie si un nombre est supérieur ou égal (>=)
- [`less`](/fr/v1/api/number/less) - Vérifie si un nombre est inférieur ou égal (<=)
- [`lessThan`](/fr/v1/api/number/lessThan) - Vérifie si un nombre est strictement inférieur (<)

## Sources

- [MDN Web Docs - Greater than operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
