---
outline: [2, 3]
description: "TheTime est une classe immutable qui représente une durée normalisée. SerializedTheTime est son format sérialisé (`time${number}${\"+\" | \"-\"}`)."
prev:
  text: "theDate"
  link: "/fr/v1/api/date/theDate"
next:
  text: "create"
  link: "/fr/v1/api/date/create"
---

# TheTime

**`TheTime`** est une classe immutable qui représente une durée en millisecondes de manière type-safe.
Il s'utilise dans le contexte du namespace date, en particulier avec **`TheDate`** (ex: `addTime`, `subtractTime`, `formatTime`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/theTime/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

```typescript
class TheTime {}
type SerializedTheTime = `time${number}${"-" | "+"}`
```

## Relation entre TheTime et SerializedTheTime

- `TheTime` : objet immutable pour les calculs de durée dans les APIs `date`.
- `SerializedTheTime` : représentation sérialisée pour transport/stockage texte.
- Conversion objet -> sérialisé : `D.serialize(theTime)`.
- Conversion sérialisé -> objet : `D.createTime(serialized)` ou `D.createTimeOrThrow(serialized)`.

## Cas d'usage

- Représenter une durée normalisée (heures, minutes, secondes) en une valeur immutable.
- Ajouter ou soustraire une durée à une date (`TheDate`) avec `addTime` et `subtractTime`.
- Formater une durée via `formatTime`.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime) - Construit une valeur `TheTime`.
- [`serialize`](/fr/v1/api/date/serialize) - Convertit `TheTime` en `SerializedTheTime`.
- [`addTime`](/fr/v1/api/date/addTime) - Ajoute une durée à `TheDate` ou `TheTime`.
