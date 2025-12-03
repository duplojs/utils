---
outline: [2, 3]
prev:
  text: "when"
  link: "/v1/api/common/when/fr"
next:
  text: "whenElse"
  link: "/v1/api/common/whenElse/fr"
---

# whenNot

La fonction **`whenNot()`** applique une transformation uniquement quand le prédicat échoue (ou que le type guard ne correspond pas). Sinon, l'entrée est retournée telle quelle. Existe en version immédiate et currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/whenNot/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function whenNot<Input, Output>(
	input: Input,
	predicate: (input: Input) => boolean,
	mapper: (input: Input) => Output
): Output | Input

function whenNot<Input, Output>(
	predicate: (input: Input) => boolean,
	mapper: (input: Input) => Output
): (input: Input) => Output | Input
```

## Paramètres

- `input` : La valeur à tester (optionnel en mode currifié).
- `predicate` : Fonction qui décide si on saute ou non la transformation (peut être un type guard).
- `mapper` : Fonction exécutée uniquement si le prédicat échoue.

## Valeur de retour

Si le prédicat échoue, renvoie le résultat de `mapper`. Sinon, renvoie l'entrée inchangée.

## Voir aussi

- [`when`](/v1/api/common/when/fr) - Version inverse
- [`whenElse`](/v1/api/common/whenElse/fr) - Deux branches explicites
