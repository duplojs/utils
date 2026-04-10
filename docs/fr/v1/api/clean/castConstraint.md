---
outline: [2, 3]
prev:
  text: "Contraintes"
  link: "/fr/v1/api/clean/constraints"
next:
  text: "NewType"
  link: "/fr/v1/api/clean/newType"
description: "Étend le typage d'une valeur contrainte en ajoutant des contraintes compatibles sans revalider."
---

# castConstraint

`castConstraint` étend le typage d'une valeur déjà contrainte en ajoutant une ou plusieurs contraintes compatibles.
La valeur n'est pas revalidée : seules les marques de contraintes sont ajoutées. TypeScript empêche les casts invalides.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/castConstraint/tryout.doc.ts"
  majorVersion="v1"
  height="628px"
/>

## Syntaxe

### Signature classique

```typescript
function castConstraint(
	constrainedType: ConstrainedType,
	constraintHandler: ConstraintHandler | ConstraintHandler[]
): ConstrainedType
```

## Paramètres

- `constrainedType` : Une valeur qui porte déjà une ou plusieurs contraintes.
- `constraintHandler` : Une contrainte (ou un tableau de contraintes) à ajouter.

## Valeur de retour

Une nouvelle valeur contrainte avec la même valeur wrappée et les contraintes ajoutées.

## Voir aussi

- [`constraints`](/fr/v1/api/clean/constraints)
- [`newType`](/fr/v1/api/clean/newType)
