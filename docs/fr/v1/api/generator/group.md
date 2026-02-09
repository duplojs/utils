---
outline: [2, 3]
description: "La fonction group() regroupe les éléments d'un itérable dans un objet de tableaux à partir du nom de groupe renvoyé par votre callback."
prev:
  text: "chunk"
  link: "/fr/v1/api/generator/chunk"
next:
  text: "asyncGroup"
  link: "/fr/v1/api/generator/asyncGroup"
---

# group

La fonction **`group()`** regroupe les éléments d'un itérable dans un objet de tableaux à partir du nom de groupe renvoyé par votre callback.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/group/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	iterator: Iterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): GroupResult<GenericOutput>
```

### Signature currifiée

```typescript
function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): (iterator: Iterable<GenericElement>) => GroupResult<GenericOutput>
```

## Paramètres

- `iterator` : Source itérable à regrouper.
- `theFunction` : Fonction de regroupement qui reçoit :
- `element` : Élément courant.
- `params.index` : Index courant.
- `params.output(group, value)` : Helper pour construire une sortie de groupe typée.

## Valeur de retour

Un objet où chaque clé est un nom de groupe et chaque valeur un tableau de valeurs regroupées.
Les clés sont optionnelles car un groupe peut être absent du résultat final.

## Voir aussi

- [`asyncGroup`](/fr/v1/api/generator/asyncGroup) - Version asynchrone de group
- [`reduce`](/fr/v1/api/generator/reduce) - Réduit un générateur en une valeur unique
