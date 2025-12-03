---
outline: [2, 3]
prev:
  text: "isType"
  link: "/v1/api/common/isType/fr"
next:
  text: "Common"
  link: "/v1/api/common/fr"
---

# instanceOf

La fonction **`instanceOf()`** crée un type guard basé sur un ou plusieurs constructeurs. Elle vérifie `instanceof` en conservant un typage précis.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/instanceOf/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
function instanceOf<Input, Ctor extends new (...args: any) => any>(
	input: Input,
	ctor: Ctor | Ctor[]
): input is InstanceType<Ctor>

function instanceOf<Input, Ctor extends new (...args: any) => any>(
	ctor: Ctor | Ctor[]
): (input: Input) => input is InstanceType<Ctor>
```

## Paramètres

- `ctor` : Constructeur ou tableau de constructeurs acceptés.
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un type guard qui est vrai lorsque `input` est une instance de l'un des constructeurs.

## Voir aussi

- [`isType`](/v1/api/common/isType/fr) - Vérifie un type runtime générique
- [`equal`](/v1/api/common/equal/fr) - Comparaison à des littéraux
