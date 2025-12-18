---
outline: [2, 3]
prev:
  text: "unknown"
  link: "/v1/api/dataParser/unknown/fr"
next:
  text: "array"
  link: "/v1/api/dataParser/array/fr"
---

# object

Décrit un objet typé via un dictionnaire de parsers. `DDataParser.object()` construit un schéma structuré, applique chaque parser enfant, agrège les erreurs avec leur chemin (`user.address.city`) et renvoie la valeur immuable validée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/object/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `shape` : dictionnaire `{ key: DataParser }` (tous les parsers disponibles sont acceptés, y compris ceux composés via `pipe`).
- `checkers` : `checkerRefine` et helpers personnalisés pour valider le résultat complet (ex: vérifier des dépendances inter-champs).
- `errorMessage` : message général utilisé quand l'entrée n'est pas un objet conforme.

## Valeur de retour

Un `DataParserObject` avec les méthodes `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `schema.parse(data)` renvoie `DEither.success<Shape>` si tout passe ou `DEither.error<DataParserError>` regroupant toutes les issues.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/v1/api/dataParser/object/examples/checkers.doc.ts"
  majorVersion="v1"
  height="700px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/object/examples/extended.doc.ts"
  majorVersion="v1"
  height="700px"
/>

### Projection avec `pick`

Sélectionnez uniquement les champs exposés publiquement depuis un schéma plus large.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Version standard</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/pick/default.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
  <div>
    <p><strong>Version étendue</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/pick/extended.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
</div>

### Masquage avec `omit`

Retirez les secrets (mot de passe, tokens, etc.) avant de renvoyer vos objets.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Version standard</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/omit/default.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
  <div>
    <p><strong>Version étendue</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/omit/extended.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
</div>

### Schéma de mise à jour avec `partial`

Rendez toutes les clés optionnelles (utile pour les payloads de patch/update), sans perdre les validations des champs.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Version standard</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/partial/default.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
  <div>
    <p><strong>Version étendue</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/partial/extended.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
</div>

### Champs obligatoires avec `required`

Retirez l'optionnalité (wrappers `optional`) sur un schéma d'objet : pratique après un `partial` ou si vous avez marqué des champs optionnels trop tôt.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Version standard</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/required/default.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
  <div>
    <p><strong>Version étendue</strong></p>
    <MonacoTSEditor
      src="/v1/api/dataParser/object/examples/required/extended.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
</div>

## Voir aussi

- [`string`](/v1/api/dataParser/string/fr) - Parser pour les chaînes de caractères
- [`array`](/v1/api/dataParser/array/fr) - Parser pour les tableaux
