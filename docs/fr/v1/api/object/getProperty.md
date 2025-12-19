---
outline: [2, 3]
prev:
  text: "fromEntries"
  link: "/fr/v1/api/object/fromEntries"
next:
  text: "getDeepProperty"
  link: "/fr/v1/api/object/getDeepProperty"
---

# getProperty

La méthode **`getProperty()`** récupère la valeur d'une propriété d'un objet.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/getProperty/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

```typescript
type MergeTopLevelUnionObject<
	GenericObject extends object,
	GenericFullObjectKeys extends keyof UnionObjectToIntersection<GenericObject>
	= keyof UnionObjectToIntersection<GenericObject>,
> = PartialKeys<
	{
		[Prop in GenericFullObjectKeys]: (
			GenericObject extends object
				? Prop extends keyof GenericObject
					? GenericObject[Prop]
					: never
				: never
		)
	},
	Exclude<
		GenericFullObjectKeys,
		keyof GenericObject
	>
>;
```

### Signature classique

```typescript
function getProperty<
	GenericInput extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericInput>,
	GenericKey extends keyof GenericFullObject
>(
	input: GenericInput,
	key: GenericKey
): GenericFullObject[GenericKey]
```

### Signature currifiee

```typescript
function getProperty<
	GenericInput extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericInput>,
	GenericKey extends keyof GenericFullObject
>(
	key: GenericKey
): (input: GenericInput) => GenericFullObject[GenericKey]
```

## Paramètres

- `input` : L'objet source.
- `key` : La clé de la propriété à récupérer.

## Valeur de retour

La valeur de la propriété spécifiée, avec son type exact.

## Voir aussi

- [`getDeepProperty`](/fr/v1/api/object/getDeepProperty) - Récupère une propriété via un chemin profond
