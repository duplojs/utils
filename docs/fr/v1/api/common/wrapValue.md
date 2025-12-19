---
outline: [2, 3]
prev:
  text: "interpolation"
  link: "/fr/v1/api/common/interpolation"
next:
  text: "isWrappedValue"
  link: "/fr/v1/api/common/isWrappedValue"
---

# wrapValue

La fonction **`wrapValue()`** enveloppe une valeur dans un conteneur marqué (`SymbolWrappedValue`) pour l'identifier sans ambiguïté dans des structures composites.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/wrapValue/tryout.doc.ts"
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

- [`toWrappedValue`](/fr/v1/api/common/toWrappedValue) - Enveloppe si nécessaire (idempotent)
- [`unwrap`](/fr/v1/api/common/unwrap) - Récupère la valeur interne
