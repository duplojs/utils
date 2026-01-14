---
outline: [2, 3]
description: "La méthode deepDiscriminate() discrimine un objet par la valeur d'une propriété profonde (type guard pour les unions)."
prev:
  text: "discriminate"
  link: "/fr/v1/api/object/discriminate"
next:
  text: "Object"
  link: "/fr/v1/api/object/"
---

# deepDiscriminate

La méthode **`deepDiscriminate()`** discrimine un objet par la valeur d'une propriété profonde (type guard pour les unions).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/deepDiscriminate/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
/>

## Syntaxe

### Signature classique

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericInput extends EligibleEqual
>(
	input: GenericInput,
	path: GenericPath,
	value: (MaybeArray<(GenericInput & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)
): input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericInput;
}>>
```

### Signature currifiee

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericInput extends EligibleEqual
>(
	path: GenericPath,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericInput;
}>>
```

## Paramètres

- `input` : L'objet à discriminer (souvent un type union).
- `path` : Le chemin vers la propriété discriminante (ex: "user.role").
- `input` : La valeur (ou tableau de valeurs) attendue pour la discrimination.

## Valeur de retour

Un booléen qui agit comme type guard pour affiner le type d'union.

## Voir aussi

- [`discriminate`](/fr/v1/api/object/discriminate) - Discrimine par une propriété de premier niveau
- [`getDeepProperty`](/fr/v1/api/object/getDeepProperty) - Récupère une propriété profonde
