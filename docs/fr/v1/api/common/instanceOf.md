---
outline: [2, 3]
description: "La fonction instanceOf() crée un type guard basé sur un ou plusieurs constructeurs. Elle vérifie instanceof en conservant un typage précis."
prev:
  text: "isType"
  link: "/fr/v1/api/common/isType"
next:
  text: "hasKinds"
  link: "/fr/v1/api/common/hasKinds"
---

# instanceOf

La fonction **`instanceOf()`** crée un type guard basé sur un ou plusieurs constructeurs. Elle vérifie `instanceof` en conservant un typage précis.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/instanceOf/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor
>(
	input: GenericInput,
	constructor: GenericConstructor | GenericConstructor[]
): input is Extract<GenericInput, InstanceType<GenericConstructor>>;
```

### Signature currifiée

```typescript
function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor
>(
	constructor: GenericConstructor | GenericConstructor[]
): (input: GenericInput) => input is Extract<GenericInput, InstanceType<GenericConstructor>>;
```

## Paramètres

- `constructor` : Constructeur ou tableau de constructeurs acceptés.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un type guard qui est vrai lorsque `input` est une instance de l'un des constructeurs.

## Voir aussi

- [`isType`](/fr/v1/api/common/isType) - Vérifie un type runtime générique
- [`equal`](/fr/v1/api/common/equal) - Comparaison à des littéraux
