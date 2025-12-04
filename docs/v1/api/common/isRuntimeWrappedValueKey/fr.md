---
outline: [2, 3]
prev:
  text: "isWrappedValue"
  link: "/v1/api/common/isWrappedValue/fr"
next:
  text: "toWrappedValue"
  link: "/v1/api/common/toWrappedValue/fr"
---

# isRuntimeWrappedValueKey

La fonction **`isRuntimeWrappedValueKey()`** vérifie si une clé de chaîne correspond au marqueur runtime d'un `WrappedValue` (`@duplojs/utils/value`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/isRuntimeWrappedValueKey/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function isRuntimeWrappedValueKey(value: string): boolean;
```

## Paramètres

- `value` : Chaîne à comparer au marqueur runtime des valeurs wrappées.

## Valeur de retour

Un booléen indiquant si la chaîne correspond au marqueur `WrappedValue`.

## Voir aussi

- [`wrapValue`](/v1/api/common/wrapValue/fr) - Enveloppe une valeur
- [`isWrappedValue`](/v1/api/common/isWrappedValue/fr) - Type guard sur les valeurs wrappées
