---
outline: [2, 3]
prev:
  text: "transformProperty"
  link: "/v1/api/object/transformProperty/fr"
next:
  text: "to"
  link: "/v1/api/object/to/fr"
---

# transformProperties

La méthode **`transformProperties()`** transforme plusieurs propriétés d'un objet via des fonctions.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/transformProperties/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<GenericObjectInput>
>(
	obj: GenericObjectInput,
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
): (obj: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>
```

## Paramètres

- `obj` : L'objet source.
- `transformObject` : Un objet où chaque clé correspond à une propriété à transformer et la valeur est une fonction de transformation.

## Valeur de retour

Un nouvel objet avec les propriétés transformées.

## Voir aussi

- [`transformProperty`](/v1/api/object/transformProperty/fr) - Transforme une seule propriété
- [`to`](/v1/api/object/to/fr) - Transforme une valeur en un nouvel objet
