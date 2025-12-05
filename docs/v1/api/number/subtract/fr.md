---
outline: [2, 3]
prev:
  text: "add"
  link: "/v1/api/number/add/fr"
next:
  text: "multiply"
  link: "/v1/api/number/multiply/fr"
---

# subtract

La méthode **`subtract()`** soustrait un nombre d'un autre. Elle supporte deux formes d'utilisation : une forme curryfiée pour la composition fonctionnelle et une forme directe pour un calcul immédiat.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/subtract/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function subtract<
	GenericInput extends number
>(
	input: GenericInput,
	subtrahend: number
): number
```

### Signature currifiée

```typescript
function subtract<
	GenericInput extends number
>(
	subtrahend: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre duquel soustraire (uniquement en signature classique).
- `subtrahend` : Le nombre à soustraire.

## Valeur de retour

**Signature classique** : retourne le résultat de la soustraction `value - subtrahend`.

**Signature currifiée** : retourne une fonction qui prend une valeur et soustrait le subtrahend.

## Voir aussi

- [`add`](/v1/api/number/add/fr) - Additionne deux nombres
- [`negate`](/v1/api/number/negate/fr) - Inverse le signe d'un nombre
- [`abs`](/v1/api/number/abs/fr) - Retourne la valeur absolue d'un nombre

## Sources

- [MDN Web Docs - Soustraction (-)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
