---
outline: [2, 3]
prev:
  text: "transformProperties"
  link: "/v1/api/object/transformProperties/fr"
next:
  text: "hasKeys"
  link: "/v1/api/object/hasKeys/fr"
---

# to

La méthode **`to()`** transforme une valeur en un nouvel objet selon un schéma de transformation.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/to/examples/tryout.doc.ts"
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

- [`transformProperties`](/v1/api/object/transformProperties/fr) - Transforme plusieurs propriétés d'un objet existant
