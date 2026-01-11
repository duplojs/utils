---
outline: [2, 3]
description: "La méthode to() transforme une valeur en un nouvel objet selon un schéma de transformation."
prev:
  text: "transformProperties"
  link: "/fr/v1/api/object/transformProperties"
next:
  text: "hasKeys"
  link: "/fr/v1/api/object/hasKeys"
---

# to

La méthode **`to()`** transforme une valeur en un nouvel objet selon un schéma de transformation.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/to/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<GenericInput>
>(
	input: GenericInput,
	shapeObject: FixDeepFunctionInfer<ShapeObject<GenericInput>, GenericShapeObject>
): ComputesResult<GenericShapeObject>
```

### Signature currifiee

```typescript
function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<NoInfer<GenericInput>>
>(
	shapeObject: ShapeObject<NoInfer<GenericInput>> & GenericShapeObject
): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeObject>>
```

## Paramètres

- `input` : La valeur source à transformer.
- `shapeObject` : Un objet définissant la forme du résultat, où chaque propriété est une fonction qui prend l'input et retourne une valeur.

## Valeur de retour

Un nouvel objet construit selon le schéma de transformation.

## Voir aussi

- [`transformProperties`](/fr/v1/api/object/transformProperties) - Transforme plusieurs propriétés d'un objet existant
