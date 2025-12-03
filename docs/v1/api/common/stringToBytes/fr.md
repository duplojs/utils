---
outline: [2, 3]
prev:
  text: "stringToMillisecond"
  link: "/v1/api/common/stringToMillisecond/fr"
next:
  text: "escapeRegExp"
  link: "/v1/api/common/escapeRegExp/fr"
---

# stringToBytes

La fonction **`stringToBytes()`** convertit une taille (`"10mb"`, `"2gb"`, etc.) ou un nombre en octets. Elle lève une erreur typée si le format est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/stringToBytes/examples/tryout.doc.ts"
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

- [`stringToMillisecond`](/v1/api/common/stringToMillisecond/fr) - Conversion de durées
