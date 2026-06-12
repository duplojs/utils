---
outline: [2, 3]
description: "La fonction castMaxElements() réadapte une contrainte MaxElements existante vers un maximum moins restrictif, sans revérifier le tableau à l'exécution."
prev:
  text: "maxElements"
  link: "/fr/v1/api/array/maxElements"
next:
  text: "withMaxElements"
  link: "/fr/v1/api/array/withMaxElements"
---

# castMaxElements

La fonction **`castMaxElements()`** réadapte une contrainte `MaxElements` existante vers un maximum moins restrictif, sans revérifier le tableau à l'exécution. Elle sert dans les cas où le nouveau maximum est déjà induit par les contraintes portées par le tableau : par exemple, un tableau `MaxElements<10>` est compatible avec `MaxElements<15>`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/castMaxElements/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Signature classique

```typescript
function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number
>(
	array: GenericArray,
	maxLength: GenericLength
): GenericArray & MaxElements<GenericLength>
```

### Signature currifiée

```typescript
function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number
>(
	maxLength: GenericLength
): (array: GenericArray) => GenericArray & MaxElements<GenericLength>
```

## Paramètres

- `array` : Tableau qui porte déjà une contrainte `MaxElements`.
- `maxLength` : Nouveau maximum littéral à ajouter au type. Il doit être supérieur ou égal au maximum déjà connu.

## Valeur de retour

Le même tableau, avec un marqueur de type `MaxElements<maxLength>` supplémentaire.

La fonction ne valide pas la longueur à l'exécution. Utilisez d'abord [`maxElements`](/fr/v1/api/array/maxElements) pour obtenir la contrainte initiale.

## Voir aussi

- [`maxElements`](/fr/v1/api/array/maxElements) - Vérifie et crée une contrainte `MaxElements`
- [`withMaxElements`](/fr/v1/api/array/withMaxElements) - Ajoute une contrainte `MaxElements` à un tuple fini
- [`minElements`](/fr/v1/api/array/minElements) - Vérifie un minimum d'éléments
