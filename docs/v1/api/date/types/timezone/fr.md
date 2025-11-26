---
outline: [2, 3]
prev:
  text: "constants"
  link: "/v1/api/date/constants/fr"
next:
  text: "types/unit"
  link: "/v1/api/date/types/unit/fr"
---

# types/timezone

Énumération exhaustive des fuseaux horaires IANA (ex. `"Europe/Paris"`, `"America/New_York"`). Utile pour alimenter une liste déroulante ou valider une entrée utilisateur.

## Utilisation

<MonacoTSEditor
  src="/v1/api/date/types/timezone/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

`timezone` est un objet clé/valeur dont chaque clé correspond à une zone IANA.

## Voir aussi

- [`types/unit`](/v1/api/date/types/unit/fr)
- [`getHour`](/v1/api/date/getHour/fr) – accepte un fuseau comme deuxième argument
