---
outline: [2, 3]
description: "La fonction asyncGroup() regroupe les valeurs d'un itérable asynchrone dans un objet de tableaux avec une logique de regroupement asynchrone."
prev:
  text: "group"
  link: "/fr/v1/api/generator/group"
next:
  text: "reduce"
  link: "/fr/v1/api/generator/reduce"
---

# asyncGroup

La fonction **`asyncGroup()`** regroupe les valeurs d'un itérable asynchrone dans un objet de tableaux avec une logique de regroupement asynchrone.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="790px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	asyncIterator: AsyncIterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): Promise<GroupResult<GenericOutput>>
```

### Signature currifiée

```typescript
function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): (asyncIterator: AsyncIterable<GenericElement>) => Promise<GroupResult<GenericOutput>>
```

## Paramètres

- `asyncIterator` : Source itérable asynchrone à regrouper.
- `theFunction` : Fonction de regroupement asynchrone qui reçoit :
- `element` : Élément courant.
- `params.index` : Index courant.
- `params.output(group, value)` : Helper pour construire une sortie de groupe typée.

## Valeur de retour

Une `Promise` qui résout vers un objet où chaque clé est un nom de groupe et chaque valeur un tableau de valeurs regroupées.
Les clés sont optionnelles car un groupe peut être absent du résultat final.

## Voir aussi

- [`group`](/fr/v1/api/generator/group) - Version synchrone de asyncGroup
- [`asyncReduce`](/fr/v1/api/generator/asyncReduce) - Réduit des itérables asynchrones en une valeur unique
