---
outline: [2, 3]
description: "La fonction toTransform() applique récursivement les méthodes toTransform des objets et parcours tableaux/tuples pour produire une valeur prête à être transportée (DTO)."
prev:
  text: "toJSON"
  link: "/fr/v1/api/common/toJSON"
next:
  text: "toString"
  link: "/fr/v1/api/common/toString"
---

# toTransform

La fonction **`toTransform()`** applique récursivement les méthodes `toTransform` des objets et parcours tableaux/tuples pour produire une valeur prête à être transportée (DTO).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/toTransform/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
  :foldLines="[2]"
/>

## Syntaxe

```typescript
type ToTransform<GenericInput extends unknown> =
	GenericInput extends number | string | null | undefined
		? GenericInput
		: GenericInput extends { toTransform: AnyFunction }
			? ReturnType<GenericInput["toTransform"]>
			: GenericInput extends [infer InferredFirst, ...infer InferredRest]
				? [
					ToTransform<InferredFirst>,
					...(
						ToTransform<InferredRest> extends infer InferredSubRest extends any[]
							? IsEqual<InferredSubRest, never[]> extends false
								? InferredSubRest
								: []
							: []
					)
				]
				: GenericInput extends any[]
					? ToTransform<GenericInput[number]>[]
					: GenericInput extends Record<number, unknown>
						? {
							[Prop in keyof GenericInput]: ToTransform<GenericInput[Prop]>;
						}
						: GenericInput;

function toTransform<GenericInput extends unknown>(
	input: GenericInput
): ToTransform<GenericInput>;
```

## Paramètres

- `input` : Valeur à transformer via `toTransform` (si présent) ou par parcours récursif.

## Valeur de retour

Une valeur transformée selon les méthodes `toTransform` rencontrées, adaptée à une transmission ou un stockage.

## Voir aussi

- [`toJSON`](/fr/v1/api/common/toJSON) - Prépare pour la sérialisation JSON
