---
outline: [2, 3]
prev:
  text: "trunc"
  link: "/v1/api/number/trunc/fr"
next:
  text: "min"
  link: "/v1/api/number/min/fr"
---

# max

La méthode **`max()`** retourne la plus grande valeur parmi les nombres fournis. Elle permet de comparer plusieurs valeurs et d'obtenir le maximum.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/max/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function max<
	GenericInput extends number
>(
	input: GenericInput,
	comparison: number
): number
```

### Signature currifiée

```typescript
function max<
	GenericInput extends number
>(
	comparison: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : La valeur à comparer (uniquement en signature classique).
- `comparison` : Le nombre de comparaison.

## Valeur de retour

**Signature classique** : retourne le plus grand des deux nombres.

**Signature currifiée** : retourne une fonction qui prend une valeur et retourne le plus grand des deux nombres.

## Voir aussi

- [`min`](/v1/api/number/min/fr) - Retourne la valeur minimale
- [`clamp`](/v1/api/number/clamp/fr) - Limite un nombre dans un intervalle

## Sources

- [MDN Web Docs - Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
