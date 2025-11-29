---
outline: [2, 3]
prev:
  text: "from"
  link: "/v1/api/array/from/fr"
next:
  text: "at"
  link: "/v1/api/array/at/fr"
---

# toTuple

La méthode **`toTuple()`** convertit une valeur en tuple en appliquant une série de fonctions de transformation.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/toTuple/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function toTuple<
	GenericInput extends unknown, 
	GenericShapeTuple extends ShapeTuple<GenericInput>
>(
	input: GenericInput, 
	shapeObject: ShapeTuple<GenericInput> & GenericShapeTuple
): ComputesResult<GenericShapeTuple>
```

### Signature currifiée

```typescript
function toTuple<
	GenericInput extends unknown, 
	GenericShapeTuple extends ShapeTuple<NoInfer<GenericInput>>
>(
	shapeObject: ShapeTuple<NoInfer<GenericInput>> & GenericShapeTuple
): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeTuple>>
```

## Paramètres

- `input` : La valeur d'entrée à transformer en tuple.
- `shapeObject` : Un tableau de fonctions à appliquer sur l'entrée pour créer le tuple.

## Valeur de retour

Un tuple contenant les résultats de chaque fonction appliquée sur l'entrée, avec un typage strict.

## Voir aussi

- [`from`](/v1/api/array/from/fr) - Crée un tableau à partir d'un itérable

## Sources

- [MDN Web Docs - Tuple](https://developer.mozilla.org/en-US/docs/Glossary/Tuple)
