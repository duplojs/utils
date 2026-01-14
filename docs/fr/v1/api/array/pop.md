---
outline: [2, 3]
description: "La fonction pop() retourne un nouveau tableau sans son dernier élément. Les tuples sont mis à jour de façon exacte (via PopTuple)."
prev:
  text: "push"
  link: "/fr/v1/api/array/push"
next:
  text: "unshift"
  link: "/fr/v1/api/array/unshift"
---

# pop

La fonction **`pop()`** retourne un nouveau tableau sans son dernier élément. Les tuples sont mis à jour de façon exacte (via `PopTuple`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/pop/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function pop<
	const GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? PopTuple<GenericInput> : GenericInput
```

## Paramètres

- `input` : Tableau dont on veut retirer le dernier élément.

## Valeur de retour

Un nouveau tableau privé de son dernier élément. Les autres valeurs sont copiées à l'identique.

## Voir aussi

- [`push`](/fr/v1/api/array/push) - Ajoute des éléments en fin de tableau
- [`shift`](/fr/v1/api/array/shift) - Retire le premier élément

## Sources

- [MDN Web Docs - Array.prototype.pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
