---
outline: [2, 3]
prev:
  text: "values"
  link: "/v1/api/object/values/fr"
next:
  text: "entry"
  link: "/v1/api/object/entry/fr"
---

# entries

La méthode **`entries()`** retourne un tableau des paires clé-valeur d'un objet avec un typage strict.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/entries/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
type GetEntry<
	GenericKey extends ObjectKey,
	GenericValue extends unknown,
> = GenericValue extends any
	? GenericKey extends string | number
		? [`${GenericKey}`, GenericValue]
		: never
	: never;

type GetEntries<
	GenericObject extends object,
> = (
	{
		[Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>
	}[keyof GenericObject]
) extends infer InferredResult extends ObjectEntry
	? IsEqual<InferredResult, never> extends true
		? []
		: InferredResult[]
	: never;

function entries<GenericObject extends object>(
	object: GenericObject
): SimplifyTopLevel<GetEntries<GenericObject>>
```

## Paramètres

- `object` : L'objet dont on veut récupérer les paires clé-valeur.

## Valeur de retour

Un tableau de tuples `[clé, valeur]` avec un typage strict qui préserve les types exacts de chaque propriété.

## Voir aussi

- [`keys`](/v1/api/object/keys/fr) - Retourne un tableau des clés d'un objet
- [`values`](/v1/api/object/values/fr) - Retourne un tableau des valeurs d'un objet
- [`entry`](/v1/api/object/entry/fr) - Crée une paire clé-valeur typée
- [`fromEntries`](/v1/api/object/fromEntries/fr) - Construit un objet à partir d'entries

## Sources

- [MDN Web Docs - Object.entries()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
