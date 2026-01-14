---
outline: [2, 3]
prev:
  text: "constants"
  link: "/fr/v1/api/date/constants"
next:
  text: "types/unit"
  link: "/fr/v1/api/date/types/unit"
---

# types/timezone

Énumération exhaustive des fuseaux horaires IANA (ex. `"Europe/Paris"`, `"America/New_York"`). Utile pour alimenter une liste déroulante ou valider une entrée utilisateur.

## Utilisation

<MonacoTSEditor
  src="/examples/v1/api/date/types/timezone/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

`timezone` est un objet clé/valeur dont chaque clé correspond à une zone IANA.

## Voir aussi

- [`types/unit`](/fr/v1/api/date/types/unit)
- [`getHour`](/fr/v1/api/date/getHour) – accepte un fuseau comme deuxième argument
