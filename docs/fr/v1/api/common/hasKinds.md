---
outline: [2, 3]
prev:
  text: "instanceOf"
  link: "/fr/v1/api/common/instanceOf"
next:
  text: "loop"
  link: "/fr/v1/api/common/loop"
---

# hasKinds

La fonction **`hasKinds()`** vérifie qu'une valeur possède tous les kinds demandés et agit comme type guard vers leur intersection.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/hasKinds/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Syntaxe

### Signature classique

```typescript
function hasKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	input: GenericInput,
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;
```

### Signature currifiée

```typescript
function hasKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): (input: GenericInput) => input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;
```

## Paramètres

- `kinds` : Tableau non vide de handlers de kind à vérifier.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un type guard qui est vrai si `input` possède tous les kinds listés.

## Voir aussi

- [`kind`](/fr/v1/api/common/kind) - Créer et manipuler des kinds
- [`instanceOf`](/fr/v1/api/common/instanceOf) - Type guard basé sur `instanceof`
