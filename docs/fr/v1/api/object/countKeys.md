---
outline: [2, 3]
prev:
  text: "keys"
  link: "/fr/v1/api/object/keys"
next:
  text: "values"
  link: "/fr/v1/api/object/values"
description: "Compte le nombre de clés d'un objet en ignorant les clés internes."
---

# countKeys

La méthode **`countKeys()`** compte le nombre de clés d'un objet en ignorant les clés internes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/countKeys/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function countKeys<
	GenericObject extends object
>(
	object: GenericObject
): number
```

## Paramètres

- `object` : L'objet dont on veut compter les clés.

## Valeur de retour

Le nombre de clés de l'objet, en excluant les clés internes.

## Voir aussi

- [`keys`](/fr/v1/api/object/keys) - Retourne un tableau des clés d'un objet
- [`values`](/fr/v1/api/object/values) - Retourne un tableau des valeurs d'un objet
- [`entries`](/fr/v1/api/object/entries) - Retourne un tableau des paires clé-valeur

## Sources

- [MDN Web Docs - Object.keys()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
