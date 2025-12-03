---
outline: [2, 3]
prev:
  text: "whenNot"
  link: "/v1/api/common/whenNot/fr"
next:
  text: "and"
  link: "/v1/api/common/and/fr"
---

# whenElse

La fonction **`whenElse()`** offre deux branches explicites : si le prédicat est vrai, on exécute `thenFn`, sinon `elseFn`. Les types de retour restent disjoints et préservés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/whenElse/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function whenElse<Input, ThenOutput, ElseOutput>(
	input: Input,
	predicate: (input: Input) => boolean,
	thenFn: (input: Input) => ThenOutput,
	elseFn: (input: Input) => ElseOutput
): ThenOutput | ElseOutput

function whenElse<Input, ThenOutput, ElseOutput>(
	predicate: (input: Input) => boolean,
	thenFn: (input: Input) => ThenOutput,
	elseFn: (input: Input) => ElseOutput
): (input: Input) => ThenOutput | ElseOutput
```

## Paramètres

- `input` : La valeur testée (optionnel en mode currifié).
- `predicate` : Fonction de décision (peut être un type guard).
- `thenFn` : Fonction exécutée si le prédicat est vrai.
- `elseFn` : Fonction exécutée sinon.

## Valeur de retour

Le résultat de `thenFn` ou `elseFn` selon le résultat du prédicat, avec un typage distinct.

## Voir aussi

- [`when`](/v1/api/common/when/fr) - Transformation conditionnelle simple
- [`whenNot`](/v1/api/common/whenNot/fr) - Transformation quand le prédicat échoue
