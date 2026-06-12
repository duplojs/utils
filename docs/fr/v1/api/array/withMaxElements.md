---
outline: [2, 3]
description: "La fonction withMaxElements() ajoute une contrainte MaxElements à un tuple fini, sans le revérifier à l'exécution."
prev:
  text: "castMaxElements"
  link: "/fr/v1/api/array/castMaxElements"
next:
  text: "set"
  link: "/fr/v1/api/array/set"
---

# withMaxElements

La fonction **`withMaxElements()`** ajoute une contrainte `MaxElements` à un tuple fini, sans le revérifier à l'exécution. Elle est utile quand le tuple est déjà connu à la compilation et doit respecter un contrat d'API comme `MaxElements<5>`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/withMaxElements/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntaxe

### Longueur courante du tuple

```typescript
function withMaxElements<
	GenericArray extends AnyTuple<unknown>
>(
	array: GenericArray
): GenericArray & MaxElements<GenericArray["length"]>
```

### Longueur max explicite

```typescript
function withMaxElements<
	GenericArray extends AnyTuple<unknown>,
	GenericLength extends number
>(
	array: GenericArray,
	length: GenericLength
): GenericArray & MaxElements<GenericLength>
```

## Paramètres

- `array` : Tuple dont la longueur est connue par TypeScript.
- `length` : Maximum littéral optionnel. Il doit être supérieur ou égal à la longueur du tuple.

## Valeur de retour

La même référence de tuple, avec un marqueur de type `MaxElements<length>`.

Quand `length` est omis, TypeScript peut inférer le maximum depuis la longueur du tuple ou depuis un contrat contextuel :

```typescript
const roles = A.withMaxElements(["admin"]) satisfies A.MaxElements<5>;
```

La fonction ne valide pas les tableaux dynamiques à l'exécution. Utilisez [`maxElements`](/fr/v1/api/array/maxElements) pour les vérifications runtime, et [`castMaxElements`](/fr/v1/api/array/castMaxElements) pour élargir une contrainte `MaxElements` existante.

## Voir aussi

- [`maxElements`](/fr/v1/api/array/maxElements) - Vérifie et crée une contrainte `MaxElements` à l'exécution
- [`castMaxElements`](/fr/v1/api/array/castMaxElements) - Réadapte une contrainte `MaxElements` existante
- [`toTuple`](/fr/v1/api/array/toTuple) - Convertit des valeurs en tuple strictement typé
