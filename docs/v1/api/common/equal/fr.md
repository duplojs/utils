---
outline: [2, 3]
prev:
  text: "not"
  link: "/v1/api/common/not/fr"
next:
  text: "isType"
  link: "/v1/api/common/isType/fr"
---

# equal

La fonction **`equal()`** compare une valeur à un ou plusieurs littéraux. Avec des primitives, elle agit comme type guard et restreint le type aux valeurs fournies.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/equal/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function equal<Input, Value>(input: Input, value: Value | Value[]): input is Value
function equal<Input, Value>(value: Value | Value[]): (input: Input) => boolean
```

## Paramètres

- `value` : Littéral ou tableau de littéraux autorisés.
- `input` (surcharge directe) : Valeur à comparer.

## Valeur de retour

Un booléen (ou un type guard pour les primitives) indiquant si l'entrée correspond à l'une des valeurs.

## Voir aussi

- [`isType`](/v1/api/common/isType/fr) - Type guard générique basé sur le type runtime
- [`instanceOf`](/v1/api/common/instanceOf/fr) - Vérifie une instance de constructeur
