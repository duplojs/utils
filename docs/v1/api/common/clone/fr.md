---
outline: [2, 3]
prev:
  text: "addWrappedProperties"
  link: "/v1/api/common/addWrappedProperties/fr"
next:
  text: "simpleClone"
  link: "/v1/api/common/simpleClone/fr"
---

# clone

La fonction **`clone()`** réalise une copie profonde typée d'une valeur en préservant sa structure et ses types.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/clone/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
type SimplifyTypeForce<
	GenericValue extends unknown
> = GenericValue extends object 
	? {
    	[Prop in keyof GenericValue]: SimplifyTypeForce<GenericValue[Prop]>;
	} 
	: GenericValue;

function clone<
	GenericInput extends unknown = unknown
>(
	input: GenericInput
): SimplifyTypeForce<GenericInput>;
```

## Paramètres

- `input` : Valeur à cloner en profondeur.

## Valeur de retour

Une nouvelle valeur identique structurellement à l'originale, avec le type simplifié (`SimplifyTypeForce`).

## Voir aussi

- [`simpleClone`](/v1/api/common/simpleClone/fr) - Clone léger sans logique avancée
