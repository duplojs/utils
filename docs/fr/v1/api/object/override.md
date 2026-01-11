---
outline: [2, 3]
description: "La méthode override() remplace les propriétés d'un objet par celles d'un autre, en ignorant les valeurs undefined."
prev:
  text: "assign"
  link: "/fr/v1/api/object/assign"
next:
  text: "transformProperty"
  link: "/fr/v1/api/object/transformProperty"
---

# override

La méthode **`override()`** remplace les propriétés d'un objet par celles d'un autre, en ignorant les valeurs undefined.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/override/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function override<
	GenericInput extends object
>(
	input: GenericInput,
	value: Partial<NoInfer<GenericInput>>
): GenericInput
```

### Signature currifiee

```typescript
function override<
	GenericInput extends object
>(
	value: Partial<NoInfer<GenericInput>>
): (input: GenericInput) => GenericInput
```

## Paramètres

- `input` : L'objet de base.
- `input` : Un objet partiel contenant les propriétés à remplacer.

## Valeur de retour

Un nouvel objet avec les propriétés remplacées (les valeurs undefined sont ignorées).

## Voir aussi

- [`assign`](/fr/v1/api/object/assign) - Fusionne plusieurs objets ensemble
