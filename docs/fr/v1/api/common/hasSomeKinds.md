---
outline: [2, 3]
description: "La fonction hasSomeKinds() vérifie qu'une valeur possède au moins un des kinds demandés et agit comme type guard vers leur union."
prev:
  text: "hasKinds"
  link: "/fr/v1/api/common/hasKinds"
next:
  text: "truthy"
  link: "/fr/v1/api/common/truthy"
---

# hasSomeKinds

La fonction **`hasSomeKinds()`** vérifie qu'une valeur possède au moins un des kinds demandés et agit comme type guard vers leur union.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/hasSomeKinds/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

### Signature classique

```typescript
function hasSomeKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	input: GenericInput,
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;
```

### Signature currifiée

```typescript
function hasSomeKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): (input: GenericInput) => input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;
```

## Paramètres

- `kinds` : Tableau non vide de handlers de kind à vérifier.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un type guard qui est vrai si `input` possède au moins un des kinds listés.

## Voir aussi

- [`hasKinds`](/fr/v1/api/common/hasKinds) - Vérifie que tous les kinds sont présents
- [`kind`](/fr/v1/api/common/kind) - Créer et manipuler des kinds
