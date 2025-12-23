---
outline: [2, 3]
prev:
  text: "lastIndexOf"
  link: "/fr/v1/api/array/lastIndexOf"
next:
  text: "find"
  link: "/fr/v1/api/array/find"
---

# isLastIndex

La fonction **`isLastIndex()`** indique si un index correspond au dernier élément d'un tableau. Elle est currifiée pour s'intégrer facilement dans des compositions ou des réductions.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/isLastIndex/tryout.doc.ts"
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

- [`lastIndexOf`](/fr/v1/api/array/lastIndexOf) - Donne l'index de la dernière occurrence
- [`length`](/fr/v1/api/array/length) - Retourne la taille d'un tableau
- [`reduce`](/fr/v1/api/array/reduce) - Réduit un tableau en une valeur
