---
outline: [2, 3]
description: "La fonction forwardAsserts() valide une entrée avec un predicate, lance une erreur si il echoue, puis retourne la valeur validée. Elle existe en version classique et currifiée."
prev:
  text: "asserts"
  link: "/fr/v1/api/common/asserts"
next:
  text: "instanceOf"
  link: "/fr/v1/api/common/instanceOf"
---

# forwardAsserts

La fonction **`forwardAsserts()`** valide une entrée avec un predicate, lance une erreur quand il échoue, puis retourne la valeur validée. Elle existe en version classique et currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/forwardAsserts/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

### Signatures classiques

```typescript
function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate
): GenericPredicate;

function forwardAsserts<
	GenericInput extends unknown
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean
): GenericInput;
```

### Signatures currifiées

```typescript
function forwardAsserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	predicate: (input: GenericInput) => input is GenericPredicate
): (input: GenericInput) => GenericPredicate;

function forwardAsserts<
	GenericInput extends unknown
>(
	predicate: (input: GenericInput) => boolean
): (input: GenericInput) => GenericInput;
```

## Paramètres

- `input` : La valeur à valider en mode direct.
- `predicate` : Un predicate booléen ou un type guard utilisé pour valider l'entrée.

## Valeur de retour

Retourne l'entrée validée. Avec un predicate type guard, le type retourné est affiné. Avec un predicate booléen, le type d'origine est conservé. Lance un `AssertsError` quand la validation échoue.

## Voir aussi

- [`asserts`](/fr/v1/api/common/asserts) - Lance une erreur sans retourner la valeur validée
- [`isType`](/fr/v1/api/common/isType) - Construit des type guards runtime
- [`pipe`](/fr/v1/api/common/pipe) - Chaîne facilement la version currifiée dans un pipeline
