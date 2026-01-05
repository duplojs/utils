---
outline: [2, 3]
description: "La méthode transformProperty() transforme une propriété spécifique d'un objet via une fonction."
prev:
  text: "override"
  link: "/fr/v1/api/object/override"
next:
  text: "transformProperties"
  link: "/fr/v1/api/object/transformProperties"
---

# transformProperty

La méthode **`transformProperty()`** transforme une propriété spécifique d'un objet via une fonction.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/transformProperty/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

### Signature classique

```typescript
function transformProperty<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericNewValue extends unknown
>(
	input: GenericInput,
	key: GenericKey,
	transform: (value: GenericInput[GenericKey]) => GenericNewValue
): SimplifyTopLevel<{
	[Prop in GenericKey]: GenericNewValue;
} & Omit<GenericInput, GenericKey>>
```

### Signature currifiee

```typescript
function transformProperty<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericNewValue extends unknown
>(
	key: GenericKey,
	transform: (value: GenericInput[GenericKey]) => GenericNewValue
): (input: GenericInput) => SimplifyTopLevel<...>
```

## Paramètres

- `input` : L'objet source.
- `key` : La clé de la propriété à transformer.
- `transform` : La fonction de transformation qui prend l'ancienne valeur et retourne la nouvelle.

## Valeur de retour

Un nouvel objet avec la propriété transformée.

## Voir aussi

- [`transformProperties`](/fr/v1/api/object/transformProperties) - Transforme plusieurs propriétés à la fois
