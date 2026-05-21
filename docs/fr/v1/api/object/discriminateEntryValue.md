---
outline: [2, 3]
description: "Applique un prédicat sur la valeur d'une entry d'objet et affine le type du tuple lorsque le prédicat est un type guard."
prev:
  text: "discriminateEntryKey"
  link: "/fr/v1/api/object/discriminateEntryKey"
next:
  text: "deepDiscriminate"
  link: "/fr/v1/api/object/deepDiscriminate"
---

# discriminateEntryValue

Applique un prédicat sur la valeur d'une entry d'objet et affine le type du tuple lorsque le prédicat est un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/discriminateEntryValue/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

### Signature classique

```typescript
function discriminateEntryValue<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryValue extends GenericEntry[1]
>(
  entry: GenericEntry,
  thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue
): entry is Extract<CleanObjectEntry<GenericEntry>, [string, GenericPredicateEntryValue]>;
```

### Signature currifiée

```typescript
function discriminateEntryValue<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryValue extends GenericEntry[1]
>(
  thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue
): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [string, GenericPredicateEntryValue]>;
```

## Paramètres

- `entry` : Tuple clé-valeur à inspecter.
- `thePredicate` : Prédicat appliqué au second élément du tuple, c'est-à-dire la valeur.

## Valeur de retour

Un booléen. Lorsque `thePredicate` est un type guard, le résultat affine aussi le type du tuple vers les entrées dont la valeur correspond au prédicat.

## Voir aussi

- [`entry`](/fr/v1/api/object/entry) - Crée des tuples clé-valeur typés.
- [`discriminateEntryKey`](/fr/v1/api/object/discriminateEntryKey) - Même idée mais appliquée à la clé de l'entry.
- [`discriminate`](/fr/v1/api/object/discriminate) - Discrimine des objets complets par propriété.
