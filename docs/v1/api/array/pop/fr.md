---
outline: [2, 3]
prev:
  text: "push"
  link: "/v1/api/array/push/fr"
next:
  text: "unshift"
  link: "/v1/api/array/unshift/fr"
---

# pop

La fonction **`pop()`** retourne un nouveau tableau sans son dernier élément. Les tuples sont mis à jour de façon exacte (via `PopTuple`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/pop/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`push`](/v1/api/array/push/fr) - Ajoute des éléments en fin de tableau
- [`shift`](/v1/api/array/shift/fr) - Retire le premier élément

## Sources

- [MDN Web Docs - Array.prototype.pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
