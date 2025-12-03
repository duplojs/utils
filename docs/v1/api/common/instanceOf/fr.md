---
outline: [2, 3]
prev:
  text: "isType"
  link: "/v1/api/common/isType/fr"
next:
  text: "loop"
  link: "/v1/api/common/loop/fr"
---

# instanceOf

La fonction **`instanceOf()`** crée un type guard basé sur un ou plusieurs constructeurs. Elle vérifie `instanceof` en conservant un typage précis.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/instanceOf/examples/tryout.doc.ts"
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

- [`isType`](/v1/api/common/isType/fr) - Vérifie un type runtime générique
- [`equal`](/v1/api/common/equal/fr) - Comparaison à des littéraux
