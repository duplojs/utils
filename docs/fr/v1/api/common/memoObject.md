---
outline: [2, 3]
description: "La fonction memoObject() crée un proxy autour d'un objet mémorisé. Le getter n'est évalué qu'une fois, puis les lectures/écritures passent par la même référence."
prev:
  text: "memo"
  link: "/fr/v1/api/common/memo"
next:
  text: "memoPromise"
  link: "/fr/v1/api/common/memoPromise"
---

# memoObject

La fonction **`memoObject()`** crée un proxy autour d'un objet mémorisé. Le getter est évalué paresseusement au premier accès, puis toutes les lectures/écritures utilisent le même objet.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/memoObject/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

```typescript
function memoObject<
	GenericOutput extends object
>(
	getter: () => GenericOutput
): GenericOutput;
```

## Paramètres

- `getter` : Fonction appelée au premier accès pour produire l'objet proxifié.

## Valeur de retour

Un objet de type `GenericOutput` proxifié :
- les lectures (`obj.prop`) renvoient les valeurs de l'objet mémorisé ;
- les écritures (`obj.prop = value`) modifient l'objet mémorisé ;
- `Object.keys()` et l'opérateur `in` reflètent les clés après écriture.

## Voir aussi

- [`memo`](/fr/v1/api/common/memo) - Mémoïsation paresseuse synchrone
- [`memoPromise`](/fr/v1/api/common/memoPromise) - Mémoïsation paresseuse pour valeurs async
- [`override`](/fr/v1/api/common/override) - Surcharger méthodes et propriétés d'un objet
