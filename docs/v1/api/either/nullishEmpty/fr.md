---
outline: [2, 3]
prev:
  text: "nullish"
  link: "/v1/api/either/nullish/fr"
next:
  text: "nullishFilled"
  link: "/v1/api/either/nullishFilled/fr"
---

# nullishEmpty

Construit explicitement un `EitherLeft<"nullish">` avec `null` ou `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullishEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function nullishEmpty<
	const GenericInput extends NullishValue = undefined
>(
  value?: GenericInput
): EitherNullishEmpty<GenericInput>;
```

## Paramètres

- `input` : `null` ou `undefined` (optionnel).

## Valeur de retour

`EitherNullishEmpty<GenericInput>` permettant de signaler explicitement l'absence de valeur.

## Voir aussi

- [`whenIsNullishEmpty`](/v1/api/either/whenIsNullishEmpty/fr).
- [`nullishFilled`](/v1/api/either/nullishFilled/fr).
