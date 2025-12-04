---
outline: [2, 3]
prev:
  text: "unwrap"
  link: "/v1/api/common/unwrap/fr"
next:
  text: "clone"
  link: "/v1/api/common/clone/fr"
---

# addWrappedProperties

La fonction **`addWrappedProperties()`** ajoute dynamiquement des propriétés dérivées à une valeur wrappée, tout en conservant le type d'origine et en étendant le nouveau type.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/addWrappedProperties/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
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

- [`wrapValue`](/v1/api/common/wrapValue/fr) - Enveloppe une valeur
