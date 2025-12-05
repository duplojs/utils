---
outline: [2, 3]
prev:
  text: "keys"
  link: "/v1/api/object/keys/fr"
next:
  text: "entries"
  link: "/v1/api/object/entries/fr"
---

# values

La méthode **`values()`** retourne un tableau des valeurs d'un objet.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/values/examples/tryout.doc.ts"
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

- [`keys`](/v1/api/object/keys/fr) - Retourne un tableau des clés d'un objet
- [`entries`](/v1/api/object/entries/fr) - Retourne un tableau des paires clé-valeur

## Sources

- [MDN Web Docs - Object.values()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
