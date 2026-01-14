---
outline: [2, 3]
description: "La fonction isRuntimeWrappedValueKey() vérifie si une clé de chaîne correspond au marqueur runtime d'un WrappedValue (@duplojs/utils/value)."
prev:
  text: "isWrappedValue"
  link: "/fr/v1/api/common/isWrappedValue"
next:
  text: "toWrappedValue"
  link: "/fr/v1/api/common/toWrappedValue"
---

# isRuntimeWrappedValueKey

La fonction **`isRuntimeWrappedValueKey()`** vérifie si une clé de chaîne correspond au marqueur runtime d'un `WrappedValue` (`@duplojs/utils/value`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/isRuntimeWrappedValueKey/tryout.doc.ts"
  majorVersion="v1"
  height="124px"
/>

## Syntaxe

```typescript
function isRuntimeWrappedValueKey(value: string): boolean;
```

## Paramètres

- `input` : Chaîne à comparer au marqueur runtime des valeurs wrappées.

## Valeur de retour

Un booléen indiquant si la chaîne correspond au marqueur `WrappedValue`.

## Voir aussi

- [`wrapValue`](/fr/v1/api/common/wrapValue) - Enveloppe une valeur
- [`isWrappedValue`](/fr/v1/api/common/isWrappedValue) - Type guard sur les valeurs wrappées
