---
outline: [2, 3]
description: "TheDate est une classe immutable qui étend Date. SerializedTheDate est son format sérialisé (`date${number}${\"+\" | \"-\"}`) pour le transport."
prev:
  text: "Date"
  link: "/fr/v1/api/date/"
next:
  text: "TheTime"
  link: "/fr/v1/api/date/theTime"
---

# TheDate

**`TheDate`** est une classe immutable qui étend `Date` pour manipuler des dates sans mutation accidentelle.
**`SerializedTheDate`** est son format sérialisé pour le transport et le stockage texte.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/theDate/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
class TheDate extends Date {}
type SerializedTheDate = `date${number}${"-" | "+"}`
```

## Relation entre TheDate et SerializedTheDate

- `TheDate` : objet immutable pour le code applicatif.
- `SerializedTheDate` : représentation sérialisée pour HTTP, JSON ou stockage texte.
- Conversion objet -> sérialisé : `D.serialize(theDate)`.
- Conversion sérialisé -> objet : `D.create(serialized)` ou `D.createOrThrow(serialized)`.

## Cas d'usage

- Manipuler une date en sécurité (`addDays`, `getYear`, `format`) avec un objet immutable.
- Sérialiser explicitement pour sortir de l'application (API, message bus, cache texte).

## Voir aussi

- [`create`](/fr/v1/api/date/create) - Construit un `TheDate` depuis plusieurs formats d'entrée.
- [`serialize`](/fr/v1/api/date/serialize) - Convertit `TheDate` en `SerializedTheDate`.
- [`isSerializedTheDate`](/fr/v1/api/date/isSerializedTheDate) - Vérifie le format sérialisé.
