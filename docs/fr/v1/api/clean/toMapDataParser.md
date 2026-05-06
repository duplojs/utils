---
outline: [2, 3]
description: "La fonction toMapDataParser() convertit un handler Clean (NewType, contrainte, primitive ou propriété d'entité) en DataParser qui renvoie une valeur wrappée."
prev:
  text: "castConstraint"
  link: "/fr/v1/api/clean/castConstraint"
next:
  text: "NewType"
  link: "/fr/v1/api/clean/newType"
---

# toMapDataParser

La fonction **`toMapDataParser()`** convertit un handler Clean (NewType, contrainte, primitive ou propriété d'entité) en `DataParser`.
Le résultat parse une entrée et renvoie un objet typé, en conservant les kinds métier (`newTypeKind`, `constrainedTypeKind`) quand ils existent.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/toMapDataParser/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

### Signature classique

```typescript
function toMapDataParser(
	input: ConstraintHandler | ConstraintsSetHandler | PrimitiveHandler | EntityPropertyDefinition,
	params?: { coerce?: boolean }
): DDataParser.DataParser<MappedValue, unknown>
```

## Paramètres

- `input` : Handler Clean à convertir (`NewType`, contrainte, ensemble de contraintes, primitive, ou définition de propriété d'entité).
- `params` : Options de conversion.
- `params.coerce` : Active la coercition sur les parseurs compatibles (string, number, boolean, date, time, etc.).

## Valeur de retour

Un `DDataParser.DataParser` qui :
- parse des `unknown`,
- mappe la sortie vers un objet typé exploitable côté domaine,
- conserve les marques de type métier quand elles sont présentes.

## Voir aussi

- [`constraints`](/fr/v1/api/clean/constraints)
- [`castConstraint`](/fr/v1/api/clean/castConstraint)
- [`newType`](/fr/v1/api/clean/newType)
- [`entity`](/fr/v1/api/clean/entity)
