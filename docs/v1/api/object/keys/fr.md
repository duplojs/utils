---
outline: [2, 3]
prev:
  text: "Object"
  link: "/v1/api/object/fr"
next:
  text: "values"
  link: "/v1/api/object/values/fr"
---

# keys

La méthode **`keys()`** retourne un tableau des clés d'un objet avec un typage précis, excluant les symboles.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/keys/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function keys<
	GenericInput extends object
>(
	input: GenericInput
): (Exclude<keyof GenericInput, symbol>)[]
```

## Paramètres

- `input` : L'objet dont on veut récupérer les clés.

## Valeur de retour

Un tableau contenant toutes les clés de l'objet (excluant les symboles) avec un typage précis.

## Voir aussi

- [`values`](/v1/api/object/values/fr) - Retourne un tableau des valeurs d'un objet
- [`entries`](/v1/api/object/entries/fr) - Retourne un tableau des paires clé-valeur

## Sources

- [MDN Web Docs - Object.keys()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
