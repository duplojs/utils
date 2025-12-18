---
outline: [2, 3]
prev:
  text: "createEntity"
  link: "/v1/api/clean/createEntity/fr"
next:
  text: "constraints"
  link: "/v1/api/clean/constraints/fr"
---

# createConstraint

`createConstraint()` crée une **contrainte réutilisable** basée sur :

- un primitive handler (`String`, `Number`, …) pour le parsing/validation de base,
- un ou plusieurs `checker` de `DDataParser` pour imposer des règles métiers.

Le résultat est un `ConstraintHandler` avec des méthodes `create` / `createOrThrow` et un type guard `is`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createConstraint/examples/tryout.doc.ts"
  majorVersion="v1"
  height="480px"
/>

## Syntaxe

```typescript
function createConstraint(
	name: string,
	primitiveHandler: PrimitiveHandler,
	checker: DataParserChecker | readonly DataParserChecker[]
): ConstraintHandler
```

## Paramètres

- `name` : nom de la contrainte (tag runtime ajouté sur la valeur).
- `primitiveHandler` : handler de primitive (`String`, `Number`, `Date`, …).
- `checker` : checker (ou liste de checkers) appliqué(s) sur la valeur unwrap.

## Valeur de retour

Un `ConstraintHandler` exposant notamment :

- `create(data)` → `EitherRight`/`EitherLeft`
- `createOrThrow(data)` → valeur wrappée contrainte, ou throw `CreateConstrainedTypeError`
- `is(value)` → type guard

## Voir aussi

- [`createNewType`](/v1/api/clean/createNewType/fr)
- [`constraints`](/v1/api/clean/constraints/fr)
