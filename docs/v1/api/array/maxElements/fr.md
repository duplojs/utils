---
outline: [2, 3]
prev:
  text: "minElements"
  link: "/v1/api/array/minElements/fr"
next:
  text: "set"
  link: "/v1/api/array/set/fr"
---

# maxElements

La fonction **`maxElements()`** vérifie qu'un tableau contient au plus un certain nombre d'éléments. Elle est pratique pour refuser une liste trop longue avant un traitement coûteux.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/maxElements/examples/tryout.doc.ts"
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

- [`minElements`](/v1/api/array/minElements/fr) - Vérifie un minimum d'éléments
- [`set`](/v1/api/array/set/fr) - Modifie un élément à un index précis

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
