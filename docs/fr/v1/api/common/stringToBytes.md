---
outline: [2, 3]
prev:
  text: "stringToMillisecond"
  link: "/fr/v1/api/common/stringToMillisecond"
next:
  text: "escapeRegExp"
  link: "/fr/v1/api/common/escapeRegExp"
---

# stringToBytes

La fonction **`stringToBytes()`** convertit une taille (`"10mb"`, `"2gb"`, etc.) ou un nombre en octets. Elle lève une erreur typée si le format est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/stringToBytes/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
const unitMapper: {
    b: number;
    kb: number;
    mb: number;
    gb: number;
    tb: number;
    pb: number;
};

type BytesInString = `${number}${keyof typeof unitMapper}`;

function stringToBytes(
	bytesInString: BytesInString | number
): number;
```

## Paramètres

- `bytesInString` : Taille en string (avec unité) ou nombre.

## Valeur de retour

Un nombre représentant la taille en octets.

## Voir aussi

- [`stringToMillisecond`](/fr/v1/api/common/stringToMillisecond) - Conversion de durées
