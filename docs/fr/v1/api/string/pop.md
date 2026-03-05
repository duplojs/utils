---
outline: [2, 3]
description: "La fonction pop() retire le dernier caractère d'une chaîne et retourne une nouvelle chaîne."
prev:
  text: "prepend"
  link: "/fr/v1/api/string/prepend"
next:
  text: "shift"
  link: "/fr/v1/api/string/shift"
---

# pop

La fonction **`pop()`** retire le dernier caractère d'une chaîne et retourne une nouvelle chaîne.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/pop/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function pop<
	GenericInput extends string
>(
	input: GenericInput
): Pop<GenericInput>
```

## Paramètres

- `input` : Chaîne dont on veut retirer le dernier caractère.

## Valeur de retour

Une nouvelle chaîne sans son dernier caractère. Les types littéraux sont préservés quand c'est possible.

## Voir aussi

- [`shift`](/fr/v1/api/string/shift) - Retire le premier caractère d'une chaîne
- [`prepend`](/fr/v1/api/string/prepend) - Ajoute des préfixes avant l'entrée
