---
outline: [2, 3]
prev:
  text: "fromEntries"
  link: "/v1/api/object/fromEntries/fr"
next:
  text: "getDeepProperty"
  link: "/v1/api/object/getDeepProperty/fr"
---

# getProperty

La méthode **`getProperty()`** récupère la valeur d'une propriété d'un objet.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/getProperty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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
	GenericObject extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericObject>,
	GenericKey extends keyof GenericFullObject
>(
	obj: GenericObject,
	key: GenericKey
): GenericFullObject[GenericKey]
```

### Signature currifiee

```typescript
function getProperty<
	GenericObject extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericObject>,
	GenericKey extends keyof GenericFullObject
>(
	key: GenericKey
): (obj: GenericObject) => GenericFullObject[GenericKey]
```

## Paramètres

- `obj` : L'objet source.
- `key` : La clé de la propriété à récupérer.

## Valeur de retour

La valeur de la propriété spécifiée, avec son type exact.

## Voir aussi

- [`getDeepProperty`](/v1/api/object/getDeepProperty/fr) - Récupère une propriété via un chemin profond
