---
outline: [2, 3]
prev:
  text: "lastIndexOf"
  link: "/v1/api/array/lastIndexOf/fr"
next:
  text: "find"
  link: "/v1/api/array/find/fr"
---

# isLastIndex

La fonction **`isLastIndex()`** indique si un index correspond au dernier élément d'un tableau. Elle est currifiée pour s'intégrer facilement dans des compositions ou des réductions.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/isLastIndex/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function isLastIndex<
  GenericInput extends readonly unknown[],
>(
  input: GenericInput,
  index: number,
): boolean
```

### Signature currifiée

```typescript
function isLastIndex<
  GenericInput extends readonly unknown[],
>(
  index: number,
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Tableau concerné.
- `index` : Index à tester.

## Valeur de retour

`true` si `index` cible le dernier élément du tableau, `false` sinon.

## Voir aussi

- [`lastIndexOf`](/v1/api/array/lastIndexOf/fr) - Donne l'index de la dernière occurrence
- [`length`](/v1/api/array/length/fr) - Retourne la taille d'un tableau
- [`reduce`](/v1/api/array/reduce/fr) - Réduit un tableau en une valeur
