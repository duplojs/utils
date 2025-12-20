---
outline: [2, 3]
prev:
  text: "entry"
  link: "/fr/v1/api/object/entry"
next:
  text: "getProperty"
  link: "/fr/v1/api/object/getProperty"
---

# fromEntries

La méthode **`fromEntries()`** construit un objet à partir d'un tableau de paires clé-valeur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/fromEntries/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function fromEntries<
	GenericKey extends ObjectKey, 
	const GenericEntry extends readonly [GenericKey, unknown]
>(
	entries: readonly GenericEntry[]
): ComputeEntries<GenericEntry>;
```

## Paramètres

- `input` : Un tableau de tuples `[clé, valeur]`.

## Valeur de retour

Un objet construit à partir des paires clé-valeur, avec un typage strict qui préserve les types exacts.

## Voir aussi

- [`entries`](/fr/v1/api/object/entries) - Retourne un tableau des paires clé-valeur d'un objet
- [`entry`](/fr/v1/api/object/entry) - Crée une paire clé-valeur typée

## Sources

- [MDN Web Docs - Object.fromEntries()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
