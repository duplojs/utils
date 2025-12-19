---
outline: [2, 3]
prev:
  text: "values"
  link: "/fr/v1/api/object/values"
next:
  text: "entry"
  link: "/fr/v1/api/object/entry"
---

# entries

La méthode **`entries()`** retourne un tableau des paires clé-valeur d'un objet avec un typage strict.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/entries/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
type GetEntry<
	GenericKey extends ObjectKey,
	GenericInput extends unknown,
> = GenericInput extends any
	? GenericKey extends string | number
		? [`${GenericKey}`, GenericInput]
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

function entries<
	GenericInput extends object
>(
	input: GenericInput
): SimplifyTopLevel<GetEntries<GenericInput>>
```

## Paramètres

- `input` : L'objet dont on veut récupérer les paires clé-valeur.

## Valeur de retour

Un tableau de tuples `[clé, valeur]` avec un typage strict qui préserve les types exacts de chaque propriété.

## Voir aussi

- [`keys`](/fr/v1/api/object/keys) - Retourne un tableau des clés d'un objet
- [`values`](/fr/v1/api/object/values) - Retourne un tableau des valeurs d'un objet
- [`entry`](/fr/v1/api/object/entry) - Crée une paire clé-valeur typée
- [`fromEntries`](/fr/v1/api/object/fromEntries) - Construit un objet à partir d'entries

## Sources

- [MDN Web Docs - Object.entries()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
