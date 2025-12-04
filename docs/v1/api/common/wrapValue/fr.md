---
outline: [2, 3]
prev:
  text: "interpolation"
  link: "/v1/api/common/interpolation/fr"
next:
  text: "isWrappedValue"
  link: "/v1/api/common/isWrappedValue/fr"
---

# wrapValue

La fonction **`wrapValue()`** enveloppe une valeur dans un conteneur marqué (`SymbolWrappedValue`) pour l'identifier sans ambiguïté dans des structures composites.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/wrapValue/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function wrapValue<
	const GenericInput extends unknown
>(
	input: GenericInput
): WrappedValue<GenericInput>;
```

## Paramètres

- `input` : Valeur à envelopper.

## Valeur de retour

Un objet `WrappedValue` contenant la valeur d'origine et le marqueur symbolique.

## Voir aussi

- [`toWrappedValue`](/v1/api/common/toWrappedValue/fr) - Enveloppe si nécessaire (idempotent)
- [`unwrap`](/v1/api/common/unwrap/fr) - Récupère la valeur interne
