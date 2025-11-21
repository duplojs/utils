---
outline: [2, 3]
prev:
  text: "copyWithin"
  link: "/v1/api/array/copyWithin/fr"
next:
  text: "pop"
  link: "/v1/api/array/pop/fr"
---

# push

La fonction **`push()`** ajoute un ou plusieurs éléments à la fin du tableau et renvoie une nouvelle instance, l'entrée restant intacte.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/push/examples/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntaxe

### Signature classique

```typescript
function push<GenericElement>(
	array: readonly GenericElement[],
	item: NoInfer<GenericElement>,
	...items: NoInfer<GenericElement>[]
): GenericElement[]
```

### Signature currifiée

```typescript
function push<GenericElement>(
	item: NoInfer<GenericElement>
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `item`, `...items` : Valeurs à ajouter à la fin.

## Valeur de retour

Un nouveau tableau contenant tous les éléments originaux suivis des éléments ajoutés.

## Voir aussi

- [`unshift`](/v1/api/array/unshift/fr) - Ajoute au début du tableau
- [`concat`](/v1/api/array/concat/fr) - Fusionne plusieurs tableaux

## Sources

- [MDN Web Docs - Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
