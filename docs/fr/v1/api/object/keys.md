---
outline: [2, 3]
prev:
  text: "Object"
  link: "/fr/v1/api/object/"
next:
  text: "values"
  link: "/fr/v1/api/object/values"
---

# keys

La méthode **`keys()`** retourne un tableau des clés d'un objet avec un typage précis, excluant les symboles.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/keys/tryout.doc.ts"
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

- [`values`](/fr/v1/api/object/values) - Retourne un tableau des valeurs d'un objet
- [`entries`](/fr/v1/api/object/entries) - Retourne un tableau des paires clé-valeur

## Sources

- [MDN Web Docs - Object.keys()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
