---
outline: [2, 3]
prev:
  text: "entries"
  link: "/v1/api/object/entries/fr"
next:
  text: "fromEntries"
  link: "/v1/api/object/fromEntries/fr"
---

# entry

La méthode **`entry()`** crée une paire clé-valeur typée (tuple).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/entry/examples/tryout.doc.ts"
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
): readonly [GenericKey, GenericValue]
```

## Paramètres

- `key` : La clé de l'entrée (string, number ou symbol).
- `value` : La valeur associée à la clé.

## Valeur de retour

Un tuple en lecture seule `[clé, valeur]` avec un typage strict.

## Voir aussi

- [`entries`](/v1/api/object/entries/fr) - Retourne un tableau des paires clé-valeur d'un objet
- [`fromEntries`](/v1/api/object/fromEntries/fr) - Construit un objet à partir d'entries
