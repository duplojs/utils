---
outline: [2, 3]
description: "La fonction addWrappedProperties() ajoute dynamiquement des propriétés dérivées à une valeur wrappée, tout en conservant le type d'origine et en étendant le nouveau type."
prev:
  text: "unwrapGroup"
  link: "/fr/v1/api/common/unwrapGroup"
next:
  text: "clone"
  link: "/fr/v1/api/common/clone"
---

# addWrappedProperties

La fonction **`addWrappedProperties()`** ajoute dynamiquement des propriétés dérivées à une valeur wrappée, tout en conservant le type d'origine et en étendant le nouveau type.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/addWrappedProperties/tryout.doc.ts"
  majorVersion="v1"
  height="40px"
/>

## Syntaxe

```typescript
type GetWrappedProperties<
	GenericWrappedValue extends object = object,
	GenericProperties extends object = object
> = (params: {
	wrappedValue: GenericWrappedValue;
}) => GenericProperties;

function addWrappedProperties<
	GenericWrappedValue extends object,
	GenericGetWrappedProperties extends GetWrappedProperties<GenericWrappedValue>
>(
	wrappedValue: GenericWrappedValue,
	getProperties: GenericGetWrappedProperties
): GenericWrappedValue & ReturnType<GenericGetWrappedProperties>;
```

## Paramètres

- `wrappedValue` : Valeur wrappée (objet) à enrichir.
- `getProperties` : Fonction qui reçoit `wrappedValue` et retourne les propriétés ajoutées.

## Valeur de retour

La valeur wrappée enrichie avec les propriétés supplémentaires, typée avec l'union des deux.

## Voir aussi

- [`wrapValue`](/fr/v1/api/common/wrapValue) - Enveloppe une valeur
