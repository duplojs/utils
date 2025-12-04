---
outline: [2, 3]
prev:
  text: "assign"
  link: "/v1/api/object/assign/fr"
next:
  text: "transformProperty"
  link: "/v1/api/object/transformProperty/fr"
---

# override

La méthode **`override()`** remplace les propriétés d'un objet par celles d'un autre, en ignorant les valeurs undefined.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/override/examples/tryout.doc.ts"
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

- [`assign`](/v1/api/object/assign/fr) - Fusionne plusieurs objets ensemble
