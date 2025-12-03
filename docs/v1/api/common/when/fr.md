---
outline: [2, 3]
prev:
  text: "Common"
  link: "/v1/api/common/fr"
next:
  text: "whenNot"
  link: "/v1/api/common/whenNot/fr"
---

# when

La fonction **`when()`** applique une transformation si un prédicat est vrai (ou si un type guard réussit). Sinon, la valeur d'entrée est renvoyée telle quelle. Existe en version immédiate ou currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/when/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function when<Input, Output>(
	input: Input,
	predicate: (input: Input) => boolean,
	mapper: (input: Input) => Output
): Output | Input

function when<Input, Output>(
	predicate: (input: Input) => boolean,
	mapper: (input: Input) => Output
): (input: Input) => Output | Input
```

## Paramètres

- `input` : La valeur à tester (optionnel en mode currifié).
- `predicate` : Fonction qui décide si la transformation s'applique (peut être un type guard).
- `mapper` : Fonction exécutée uniquement si le prédicat est vrai.

## Valeur de retour

Si le prédicat passe, renvoie le résultat de `mapper`. Sinon, renvoie la valeur d'entrée inchangée.

## Voir aussi

- [`whenNot`](/v1/api/common/whenNot/fr) - Exécute quand le prédicat échoue
- [`whenElse`](/v1/api/common/whenElse/fr) - Version avec deux branches explicites
