---
outline: [2, 3]
prev:
  text: "memo"
  link: "/v1/api/common/memo/fr"
next:
  text: "toTransform"
  link: "/v1/api/common/toTransform/fr"
---

# toJSON

La fonction **`toJSON()`** prépare une valeur pour la sérialisation JSON en respectant les méthodes `toJSON` des objets, en parcourant tableaux/tuples et en excluant les fonctions.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/toJSON/examples/tryout.doc.ts"
  majorVersion="v1"
  height="800px"
/>

## Syntaxe

```typescript
type ToJSON<GenericValue extends unknown> =
	GenericValue extends number | string | null | undefined
		? GenericValue
		: GenericValue extends { toJSON: AnyFunction }
			? ReturnType<GenericValue["toJSON"]>
			: GenericValue extends [infer InferredFirst, ...infer InferredRest]
				? [
					ToJSON<InferredFirst>,
					...(
						ToJSON<InferredRest> extends infer InferredSubRest extends any[]
							? IsEqual<InferredSubRest, never[]> extends false
								? InferredSubRest
								: []
							: []
					)
				]
				: GenericValue extends any[]
					? ToJSON<GenericValue[number]>[]
					: GenericValue extends Record<number, unknown>
						? {
							[Prop in keyof GenericValue as GenericValue[Prop] extends AnyFunction ? never : Prop]:
								ToJSON<GenericValue[Prop]>;
						}
						: undefined;

function toJSON<
	GenericValue extends unknown
>(
	value: GenericValue
): ToJSON<GenericValue>;
```

## Paramètres

- `value` : Valeur à transformer en structure JSON-safe.

## Valeur de retour

Une valeur prête pour la sérialisation JSON, avec les méthodes `toJSON` respectées et les fonctions exclues.

## Voir aussi

- [`toTransform`](/v1/api/common/toTransform/fr) - Transformation générique via `toTransform`
