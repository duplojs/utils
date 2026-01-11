---
outline: [2, 3]
description: "La fonction maxElements() vérifie qu'un tableau contient au plus un certain nombre d'éléments. Elle est pratique pour refuser une liste trop longue avant un traitement coûteux."
prev:
  text: "minElements"
  link: "/fr/v1/api/array/minElements"
next:
  text: "set"
  link: "/fr/v1/api/array/set"
---

# maxElements

La fonction **`maxElements()`** vérifie qu'un tableau contient au plus un certain nombre d'éléments. Elle est pratique pour refuser une liste trop longue avant un traitement coûteux.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/maxElements/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function maxElements<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
	maxLength: number
): boolean
```

### Signature currifiée

```typescript
function maxElements<
	GenericInput extends readonly unknown[]
>(
	maxLength: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Tableau dont on souhaite limiter la taille.
- `maxLength` : Nombre maximum autorisé.

## Valeur de retour

`true` si le nombre d'éléments est inférieur ou égal à `maxLength`, sinon `false`.

## Voir aussi

- [`minElements`](/fr/v1/api/array/minElements) - Vérifie un minimum d'éléments
- [`set`](/fr/v1/api/array/set) - Modifie un élément à un index précis

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
