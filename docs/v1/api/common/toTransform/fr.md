---
outline: [2, 3]
prev:
  text: "toJSON"
  link: "/v1/api/common/toJSON/fr"
next:
  text: "toString"
  link: "/v1/api/common/toString/fr"
---

# toTransform

La fonction **`toTransform()`** applique récursivement les méthodes `toTransform` des objets et parcours tableaux/tuples pour produire une valeur prête à être transportée (DTO).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/toTransform/examples/tryout.doc.ts"
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

- [`toJSON`](/v1/api/common/toJSON/fr) - Prépare pour la sérialisation JSON
