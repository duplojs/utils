---
outline: [2, 3]
prev:
  text: "entries"
  link: "/fr/v1/api/object/entries"
next:
  text: "fromEntries"
  link: "/fr/v1/api/object/fromEntries"
---

# entry

La méthode **`entry()`** crée une paire clé-valeur typée (tuple).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/entry/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function entry<
	GenericKey extends ObjectKey,
	GenericValue extends AnyValue
>(
	key: GenericKey,
	value: GenericValue
): readonly [GenericKey, GenericInput]
```

## Paramètres

- `key` : La clé de l'entrée (string, number ou symbol).
- `value` : La valeur associée à la clé.

## Valeur de retour

Un tuple en lecture seule `[clé, valeur]` avec un typage strict.

## Voir aussi

- [`entries`](/fr/v1/api/object/entries) - Retourne un tableau des paires clé-valeur d'un objet
- [`fromEntries`](/fr/v1/api/object/fromEntries) - Construit un objet à partir d'entries
