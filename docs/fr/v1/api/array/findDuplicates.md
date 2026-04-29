---
outline: [2, 3]
description: "La fonction findDuplicates() retourne les valeurs dupliquées d'un tableau et conserve une seule occurrence pour chaque valeur dupliquée."
prev:
  text: "find"
  link: "/fr/v1/api/array/find"
next:
  text: "findLast"
  link: "/fr/v1/api/array/findLast"
---

# findDuplicates

La fonction **`findDuplicates()`** retourne les valeurs dupliquées d'un tableau et conserve une seule occurrence pour chaque valeur dupliquée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/findDuplicates/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

### Signature classique

```typescript
function findDuplicates<
  GenericInput extends readonly EligibleDuplicateElement[],
>(
  array: GenericInput,
): undefined | AnyTuple<GenericInput[number]>
```

## Paramètres

- `array` : Tableau d'entrée à parcourir pour détecter les doublons.

## Valeur de retour

Retourne `undefined` lorsqu'aucun doublon n'est trouvé, sinon retourne un tuple contenant les valeurs dupliquées (une occurrence par valeur).

## Voir aussi

- [`find`](/fr/v1/api/array/find) - Trouve une valeur correspondant à un prédicat
- [`group`](/fr/v1/api/array/group) - Regroupe les valeurs par clé
- [`includes`](/fr/v1/api/array/includes) - Vérifie la présence d'une valeur dans un tableau
