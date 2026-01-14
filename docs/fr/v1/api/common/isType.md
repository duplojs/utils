---
outline: [2, 3]
description: "La fonction isType() crée un type guard basé sur typeof, Array.isArray, itérables, fonctions, etc. Elle permet d'affiner un union vers le type vérifié."
prev:
  text: "equal"
  link: "/fr/v1/api/common/equal"
next:
  text: "instanceOf"
  link: "/fr/v1/api/common/instanceOf"
---

# isType

La fonction **`isType()`** crée un type guard basé sur `typeof`, `Array.isArray`, itérables, fonctions, etc. Elle permet d'affiner un union vers le type vérifié.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/isType/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

### Signature classique

```typescript
function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>
>(
	input: GenericInput,
	type: GenericType
): input is ComputeResult<GenericInput, Type[GenericType]>;
```

### Signature currifiée

```typescript
function isType<
	GenericInput extends unknown,
	GenericType extends EligibleType<GenericInput>
>(
	type: GenericType
): (input: GenericInput) => input is ComputeResult<GenericInput, Type[GenericType]>;
```

## Paramètres

- `type` : Le type runtime à vérifier.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen qui agit comme type guard en affinant l'union au type demandé.

## Voir aussi

- [`instanceOf`](/fr/v1/api/common/instanceOf) - Vérifie via un constructeur
- [`equal`](/fr/v1/api/common/equal) - Comparaison à des littéraux
