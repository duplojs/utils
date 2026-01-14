---
outline: [2, 3]
description: "La méthode transformProperties() transforme plusieurs propriétés d'un objet via des fonctions."
prev:
  text: "transformProperty"
  link: "/fr/v1/api/object/transformProperty"
next:
  text: "to"
  link: "/fr/v1/api/object/to"
---

# transformProperties

La méthode **`transformProperties()`** transforme plusieurs propriétés d'un objet via des fonctions.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/transformProperties/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

### Signature classique

```typescript
function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<GenericObjectInput>
>(
	input: GenericObjectInput,
	transformObject: FixDeepFunctionInfer<TransformObject<GenericObjectInput>, GenericTransformObject>
): ComputesResult<GenericObjectInput, GenericTransformObject>
```

### Signature currifiee

```typescript
function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<NoInfer<GenericObjectInput>>
>(
	transformObject: TransformObject<NoInfer<GenericObjectInput>> & GenericTransformObject
): (input: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>
```

## Paramètres

- `input` : L'objet source.
- `transformObject` : Un objet où chaque clé correspond à une propriété à transformer et la valeur est une fonction de transformation.

## Valeur de retour

Un nouvel objet avec les propriétés transformées.

## Voir aussi

- [`transformProperty`](/fr/v1/api/object/transformProperty) - Transforme une seule propriété
- [`to`](/fr/v1/api/object/to) - Transforme une valeur en un nouvel objet
