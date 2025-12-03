---
outline: [2, 3]
prev:
  text: "toJSON"
  link: "/v1/api/common/toJson/fr"
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
type ToTransform<GenericValue extends unknown> =
	GenericValue extends number | string | null | undefined
		? GenericValue
		: GenericValue extends { toTransform: AnyFunction }
			? ReturnType<GenericValue["toTransform"]>
			: GenericValue extends [infer InferredFirst, ...infer InferredRest]
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
				: GenericValue extends any[]
					? ToTransform<GenericValue[number]>[]
					: GenericValue extends Record<number, unknown>
						? {
							[Prop in keyof GenericValue]: ToTransform<GenericValue[Prop]>;
						}
						: GenericValue;

function toTransform<GenericValue extends unknown>(
	value: GenericValue
): ToTransform<GenericValue>;
```

## Paramètres

- `value` : Valeur à transformer via `toTransform` (si présent) ou par parcours récursif.

## Valeur de retour

Une valeur transformée selon les méthodes `toTransform` rencontrées, adaptée à une transmission ou un stockage.

## Voir aussi

- [`toJSON`](/v1/api/common/toJson/fr) - Prépare pour la sérialisation JSON
