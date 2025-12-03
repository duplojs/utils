---
outline: [2, 3]
prev:
  text: "equal"
  link: "/v1/api/common/equal/fr"
next:
  text: "instanceOf"
  link: "/v1/api/common/instanceOf/fr"
---

# isType

La fonction **`isType()`** crée un type guard basé sur `typeof`, `Array.isArray`, itérables, fonctions, etc. Elle permet d'affiner un union vers le type vérifié.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/isType/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function isType<Input>(
	type: "string" | "number" | "boolean" | "function" | "bigint" | "undefined" | "null" | "symbol" | "object" | "iterable" | "asyncIterable" | "array"
): (input: Input) => boolean

function isType<Input>(
	input: Input,
	type: "string" | ... | "array"
): boolean
```

## Paramètres

- `type` : Le type runtime à vérifier.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen qui agit comme type guard en affinant l'union au type demandé.

## Voir aussi

- [`instanceOf`](/v1/api/common/instanceOf/fr) - Vérifie via un constructeur
- [`equal`](/v1/api/common/equal/fr) - Comparaison à des littéraux
