---
outline: [2, 3]
prev:
  text: "discriminate"
  link: "/v1/api/object/discriminate/fr"
next:
  text: "Object"
  link: "/v1/api/object/fr"
---

# deepDiscriminate

La méthode **`deepDiscriminate()`** discrimine un objet par la valeur d'une propriété profonde (type guard pour les unions).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/deepDiscriminate/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericValue extends EligibleEqual
>(
	input: GenericInput,
	path: GenericPath,
	value: (MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)
): input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericValue;
}>>
```

### Signature currifiee

```typescript
function deepDiscriminate<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection,
	GenericValue extends EligibleEqual
>(
	path: GenericPath,
	value: ...
): (input: GenericInput) => input is Extract<GenericInput, UnFlatObject<{
	[Prop in GenericPath]: GenericValue;
}>>
```

## Paramètres

- `input` : L'objet à discriminer (souvent un type union).
- `path` : Le chemin vers la propriété discriminante (ex: "user.role").
- `value` : La valeur (ou tableau de valeurs) attendue pour la discrimination.

## Valeur de retour

Un booléen qui agit comme type guard pour affiner le type d'union.

## Voir aussi

- [`discriminate`](/v1/api/object/discriminate/fr) - Discrimine par une propriété de premier niveau
- [`getDeepProperty`](/v1/api/object/getDeepProperty/fr) - Récupère une propriété profonde
