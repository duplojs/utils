---
outline: [2, 3]
prev:
  text: "whenIsNullableEmpty"
  link: "/v1/api/either/whenIsNullableEmpty/fr"
next:
  text: "whenIsNullableFilled"
  link: "/v1/api/either/whenIsNullableFilled/fr"
---

# isNullableFilled

Type guard qui vérifie que l'Either nullable contient bien une valeur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isNullableFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
function isNullableFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullableFilled>;
```

## Paramètres

- `input` : Résultat de `nullable`.

## Valeur de retour

`true` si la valeur n'est pas `null`.

## Voir aussi

- [`whenIsNullableFilled`](/v1/api/either/whenIsNullableFilled/fr).
- [`isNullableEmpty`](/v1/api/either/isNullableEmpty/fr).
