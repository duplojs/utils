---
outline: [2, 3]
description: "Applique un prédicat sur la clé d'une entry d'objet et affine le type du tuple lorsque le prédicat est un type guard."
prev:
  text: "discriminate"
  link: "/fr/v1/api/object/discriminate"
next:
  text: "discriminateEntryValue"
  link: "/fr/v1/api/object/discriminateEntryValue"
---

# discriminateEntryKey

Applique un prédicat sur la clé d'une entry d'objet et affine le type du tuple lorsque le prédicat est un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/discriminateEntryKey/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

### Signature classique

```typescript
function discriminateEntryKey<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryKey extends GenericEntry[0]
>(
  entry: GenericEntry,
  thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey
): entry is Extract<CleanObjectEntry<GenericEntry>, [GenericPredicateEntryKey, unknown]>;
```

### Signature currifiée

```typescript
function discriminateEntryKey<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryKey extends GenericEntry[0]
>(
  thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey
): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [GenericPredicateEntryKey, unknown]>;
```

## Paramètres

- `entry` : Tuple clé-valeur à inspecter.
- `thePredicate` : Prédicat appliqué au premier élément du tuple, c'est-à-dire la clé.

## Valeur de retour

Un booléen. Lorsque `thePredicate` est un type guard, le résultat affine aussi le type du tuple vers les entrées dont la clé correspond au prédicat.

## Voir aussi

- [`entry`](/fr/v1/api/object/entry) - Crée des tuples clé-valeur typés.
- [`discriminateEntryValue`](/fr/v1/api/object/discriminateEntryValue) - Même idée mais appliquée à la valeur de l'entry.
- [`discriminate`](/fr/v1/api/object/discriminate) - Discrimine des objets complets par propriété.
