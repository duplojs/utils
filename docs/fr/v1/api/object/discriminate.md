---
outline: [2, 3]
description: "La méthode discriminate() discrimine un objet par la valeur d'une propriété (type guard pour les unions)."
prev:
  text: "hasKeys"
  link: "/fr/v1/api/object/hasKeys"
next:
  text: "deepDiscriminate"
  link: "/fr/v1/api/object/deepDiscriminate"
---

# discriminate

La méthode **`discriminate()`** discrimine un objet par la valeur d'une propriété (type guard pour les unions).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/discriminate/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntaxe

### Signature classique

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericInput extends EligibleEqual
>(
	input: GenericInput,
	key: GenericKey,
	value: (MaybeArray<(GenericInput & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)
): input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericInput;
}>
```

### Signature currifiee

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericInput extends EligibleEqual
>(
	key: GenericKey,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericInput;
}>
```

## Paramètres

- `input` : L'objet à discriminer (souvent un type union).
- `key` : La clé de la propriété discriminante.
- `input` : La valeur (ou tableau de valeurs) attendue pour la discrimination.

## Valeur de retour

Un booléen qui agit comme type guard pour affiner le type d'union.

## Voir aussi

- [`deepDiscriminate`](/fr/v1/api/object/deepDiscriminate) - Discrimine par une propriété profonde
- [`hasKeys`](/fr/v1/api/object/hasKeys) - Vérifie la présence de clés
