---
outline: [2, 3]
prev:
  text: "addWrappedProperties"
  link: "/fr/v1/api/common/addWrappedProperties"
next:
  text: "simpleClone"
  link: "/fr/v1/api/common/simpleClone"
---

# clone

La fonction **`clone()`** réalise une copie profonde typée d'une valeur en préservant sa structure et ses types.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/clone/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
type SimplifyTypeForce<
	GenericInput extends unknown
> = GenericInput extends object 
	? {
    	[Prop in keyof GenericInput]: SimplifyTypeForce<GenericInput[Prop]>;
	} 
	: GenericInput;

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

- [`simpleClone`](/fr/v1/api/common/simpleClone) - Clone léger sans logique avancée
