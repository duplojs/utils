---
outline: [2, 3]
prev:
  text: "override"
  link: "/v1/api/object/override/fr"
next:
  text: "transformProperties"
  link: "/v1/api/object/transformProperties/fr"
---

# transformProperty

La méthode **`transformProperty()`** transforme une propriété spécifique d'un objet via une fonction.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/transformProperty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function transformProperty<
	GenericObject extends object,
	GenericKey extends keyof GenericObject,
	GenericNewValue extends unknown
>(
	obj: GenericObject,
	key: GenericKey,
	transform: (value: GenericObject[GenericKey]) => GenericNewValue
): SimplifyTopLevel<{
	[Prop in GenericKey]: GenericNewValue;
} & Omit<GenericObject, GenericKey>>
```

### Signature currifiee

```typescript
function transformProperty<
	GenericObject extends object,
	GenericKey extends keyof GenericObject,
	GenericNewValue extends unknown
>(
	key: GenericKey,
	transform: (value: GenericObject[GenericKey]) => GenericNewValue
): (obj: GenericObject) => SimplifyTopLevel<...>
```

## Paramètres

- `obj` : L'objet source.
- `key` : La clé de la propriété à transformer.
- `transform` : La fonction de transformation qui prend l'ancienne valeur et retourne la nouvelle.

## Valeur de retour

Un nouvel objet avec la propriété transformée.

## Voir aussi

- [`transformProperties`](/v1/api/object/transformProperties/fr) - Transforme plusieurs propriétés à la fois
