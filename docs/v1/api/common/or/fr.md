---
outline: [2, 3]
prev:
  text: "and"
  link: "/v1/api/common/and/fr"
next:
  text: "not"
  link: "/v1/api/common/not/fr"
---

# or

La fonction **`or()`** combine plusieurs prédicats ou type guards : si au moins un passe, le résultat est vrai et le type est affiné à l'union des cas acceptés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/or/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function or<Input>(
	predicates: [(input: Input) => boolean, (input: Input) => boolean, ...(input: Input) => boolean[]]
): (input: Input) => boolean

function or<Input>(
	input: Input,
	predicates: [(input: Input) => boolean, (input: Input) => boolean, ...(input: Input) => boolean[]]
): boolean
```

## Paramètres

- `predicates` : Tableau de fonctions testant l'entrée (peuvent être des type guards).
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen (ou un type guard si les prédicats en sont) vrai si au moins un prédicat passe.

## Voir aussi

- [`and`](/v1/api/common/and/fr) - Intersection de prédicats
- [`not`](/v1/api/common/not/fr) - Inversion d'un type guard
