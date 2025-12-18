---
outline: [2, 3]
prev:
  text: "createConstraint"
  link: "/v1/api/clean/createConstraint/fr"
next:
  text: "createRepository"
  link: "/v1/api/clean/createRepository/fr"
---

# constraints

Contraintes prêtes à l'emploi (basées sur `createConstraint`). Elles sont conçues pour être utilisées directement (`C.Int.create(...)`) ou injectées dans `createNewType(..., constraint)`.

## Email

Contrainte email (basée sur `String`).

<MonacoTSEditor
  src="/v1/api/clean/constraints/examples/email.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Url

Contrainte URL (basée sur `String`).

<MonacoTSEditor
  src="/v1/api/clean/constraints/examples/url.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Int

Contrainte entier (basée sur `Number`).

<MonacoTSEditor
  src="/v1/api/clean/constraints/examples/int.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Positive

Contrainte nombre strictement positif (basée sur `Number`).

<MonacoTSEditor
  src="/v1/api/clean/constraints/examples/positive.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Negative

Contrainte nombre strictement négatif (basée sur `Number`).

<MonacoTSEditor
  src="/v1/api/clean/constraints/examples/negative.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Voir aussi

- [`createConstraint`](/v1/api/clean/createConstraint/fr)
- [`createNewType`](/v1/api/clean/createNewType/fr)
