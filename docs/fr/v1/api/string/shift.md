---
outline: [2, 3]
description: "La fonction shift() retire le premier caractère d'une chaîne et retourne une nouvelle chaîne."
prev:
  text: "pop"
  link: "/fr/v1/api/string/pop"
next:
  text: "to"
  link: "/fr/v1/api/string/to"
---

# shift

La fonction **`shift()`** retire le premier caractère d'une chaîne et retourne une nouvelle chaîne.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/shift/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function shift<
	GenericInput extends string
>(
	input: GenericInput
): Shift<GenericInput>
```

## Paramètres

- `input` : Chaîne dont on veut retirer le premier caractère.

## Valeur de retour

Une nouvelle chaîne sans son premier caractère. Les types littéraux sont préservés quand c'est possible.

## Voir aussi

- [`pop`](/fr/v1/api/string/pop) - Retire le dernier caractère d'une chaîne
- [`substring`](/fr/v1/api/string/substring) - Extrait une partie d'une chaîne entre deux index
