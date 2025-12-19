---
outline: [2, 3]
prev:
  text: "keys"
  link: "/fr/v1/api/object/keys"
next:
  text: "entries"
  link: "/fr/v1/api/object/entries"
---

# values

La méthode **`values()`** retourne un tableau des valeurs d'un objet.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/values/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function values<
	GenericValue extends AnyValue
>(
	object: {
		[key: string]: GenericValue;
	} | ArrayLike<GenericInput>
): GenericInput[]
```

## Paramètres

- `object` : L'objet ou structure array-like dont on veut récupérer les valeurs.

## Valeur de retour

Un tableau contenant toutes les valeurs de l'objet.

## Voir aussi

- [`keys`](/fr/v1/api/object/keys) - Retourne un tableau des clés d'un objet
- [`entries`](/fr/v1/api/object/entries) - Retourne un tableau des paires clé-valeur

## Sources

- [MDN Web Docs - Object.values()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
