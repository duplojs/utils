---
outline: [2, 3]
description: "La méthode assign() fusionne plusieurs objets ensemble (similaire à Object.assign mais type-safe)."
prev:
  text: "omit"
  link: "/fr/v1/api/object/omit"
next:
  text: "override"
  link: "/fr/v1/api/object/override"
---

# assign

La méthode **`assign()`** fusionne plusieurs objets ensemble (similaire à Object.assign mais type-safe).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/assign/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

### Signature classique

```typescript
function assign<
	GenericInput extends object,
	GenericUpdate extends Partial<Record<keyof GenericInput, unknown>> & AnyObject
>(
	input: GenericInput,
	update: GenericUpdate
): AssignObjects<GenericInput, GenericUpdate>
```

### Signature currifiee

```typescript
function assign<
	GenericInput extends object,
	GenericUpdate extends Partial<Record<keyof GenericInput, unknown>> & AnyObject
>(
	input: GenericUpdate
): (input: GenericInput) => AssignObjects<GenericInput, GenericUpdate>
```

## Paramètres

- `input` : L'objet de base.
- `update` : L'objet à fusionner avec l'objet de base.

## Valeur de retour

Un nouvel objet résultant de la fusion, avec un typage précis.

## Voir aussi

- [`override`](/fr/v1/api/object/override) - Remplace les propriétés en ignorant les undefined

## Sources

- [MDN Web Docs - Object.assign()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
