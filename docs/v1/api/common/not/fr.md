---
outline: [2, 3]
prev:
  text: "or"
  link: "/v1/api/common/or/fr"
next:
  text: "equal"
  link: "/v1/api/common/equal/fr"
---

# not

La fonction **`not()`** inverse un type guard ou un prédicat. Pratique pour filtrer tout sauf un cas précis sans réécrire le test.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/not/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function not<Input, Predicate extends (input: Input) => boolean>(
	predicate: Predicate
): (input: Input) => boolean

function not<Input, Predicate extends (input: Input) => boolean>(
	input: Input,
	predicate: Predicate
): boolean
```

## Paramètres

- `predicate` : Fonction à inverser (peut être un type guard).
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen (ou un type guard inversé) qui est vrai lorsque le prédicat d'origine échoue.

## Voir aussi

- [`and`](/v1/api/common/and/fr) - Intersection de prédicats
- [`or`](/v1/api/common/or/fr) - Union de prédicats
