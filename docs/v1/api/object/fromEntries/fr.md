---
outline: [2, 3]
prev:
  text: "entry"
  link: "/v1/api/object/entry/fr"
next:
  text: "getProperty"
  link: "/v1/api/object/getProperty/fr"
---

# fromEntries

La méthode **`fromEntries()`** construit un objet à partir d'un tableau de paires clé-valeur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/fromEntries/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
type ComputeEntries<
	GenericEntry extends ObjectEntry,
> = SimplifyTopLevel<{
	[Entry in GenericEntry as Entry[0]]?: Entry[1]
}>;

function fromEntries<
	GenericKey extends ObjectKey,
	GenericInput extends AnyValue,
	GenericEntry extends readonly [GenericKey, GenericInput]
>(
	input: readonly GenericEntry[]
): ComputeEntries<GenericEntry>
```

## Paramètres

- `input` : Un tableau de tuples `[clé, valeur]`.

## Valeur de retour

Un objet construit à partir des paires clé-valeur, avec un typage strict qui préserve les types exacts.

## Voir aussi

- [`entries`](/v1/api/object/entries/fr) - Retourne un tableau des paires clé-valeur d'un objet
- [`entry`](/v1/api/object/entry/fr) - Crée une paire clé-valeur typée

## Sources

- [MDN Web Docs - Object.fromEntries()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
