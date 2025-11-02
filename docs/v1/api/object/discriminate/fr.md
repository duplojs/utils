---
outline: [2, 3]
prev:
  text: "hasKeys"
  link: "/v1/api/object/hasKeys/fr"
next:
  text: "deepDiscriminate"
  link: "/v1/api/object/deepDiscriminate/fr"
---

# discriminate

La méthode **`discriminate()`** discrimine un objet par la valeur d'une propriété (type guard pour les unions).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/discriminate/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericValue extends EligibleEqual
>(
	input: GenericInput,
	key: GenericKey,
	value: (MaybeArray<(GenericValue & Extract<GenericInput[GenericKey], EligibleEqual>)> | MaybeArray<Extract<GenericInput[GenericKey], EligibleEqual>>)
): input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericValue;
}>
```

### Signature currifiee

```typescript
function discriminate<
	GenericInput extends object,
	GenericKey extends keyof GenericInput,
	GenericValue extends EligibleEqual
>(
	key: GenericKey,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, {
	[Prop in GenericKey]: GenericValue;
}>
```

## Paramètres

- `input` : L'objet à discriminer (souvent un type union).
- `key` : La clé de la propriété discriminante.
- `value` : La valeur (ou tableau de valeurs) attendue pour la discrimination.

## Valeur de retour

Un booléen qui agit comme type guard pour affiner le type d'union.

## Voir aussi

- [`deepDiscriminate`](/v1/api/object/deepDiscriminate/fr) - Discrimine par une propriété profonde
- [`hasKeys`](/v1/api/object/hasKeys/fr) - Vérifie la présence de clés
