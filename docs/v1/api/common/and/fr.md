---
outline: [2, 3]
prev:
  text: "whenElse"
  link: "/v1/api/common/whenElse/fr"
next:
  text: "or"
  link: "/v1/api/common/or/fr"
---

# and

La fonction **`and()`** combine plusieurs prédicats ou type guards. Tous doivent réussir pour que le résultat soit vrai et le type soit affiné à l'intersection.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/and/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function and<Input>(
	predicates: [(input: Input) => boolean, (input: Input) => boolean, ...(input: Input) => boolean[]]
): (input: Input) => boolean

function and<Input>(
	input: Input,
	predicates: [(input: Input) => boolean, (input: Input) => boolean, ...(input: Input) => boolean[]]
): boolean
```

## Paramètres

- `predicates` : Tableau de fonctions testant l'entrée (peuvent être des type guards).
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen (ou un type guard si les prédicats en sont) vrai uniquement si tous les prédicats passent.

## Voir aussi

- [`or`](/v1/api/common/or/fr) - Union de prédicats
- [`not`](/v1/api/common/not/fr) - Inversion d'un type guard
