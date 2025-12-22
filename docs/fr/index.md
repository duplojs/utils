---
layout: home

hero:
  name: "@duplojs/utils"
  text: "Utilitaires TypeScript"
  tagline: "Des utilitaires robustes avec une excellente expérience développeur."
  image: "/images/logo.png"
  actions:
    - theme: brand
      text: Commencer
      link: "/fr/v1/guide/"
    - theme: alt
      text: Voir sur GitHub
      link: "https://github.com/duplojs/utils"
---

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Type natif 💀</strong></p>
    <MonacoTSEditor
      src="/examples/v1/groupNative.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
  <div>
    <p><strong>Type @duplojs/utils 🤩</strong></p>
    <MonacoTSEditor
      src="/examples/v1/groupUtils.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
</div>

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Type natif 🤬</strong></p>
    <MonacoTSEditor
      src="/examples/v1/entriesNative.doc.ts"
      majorVersion="v1"
      height="500px"
    />
  </div>
  <div>
    <p><strong>Type @duplojs/utils 💪</strong></p>
    <MonacoTSEditor
      src="/examples/v1/entriesUtils.doc.ts"
      majorVersion="v1"
      height="500px"
    />
  </div>
</div>

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Type natif 🐒</strong></p>
    <MonacoTSEditor
      src="/examples/v1/reduceNative.doc.ts"
      majorVersion="v1"
      height="550px"
    />
  </div>
  <div>
    <p><strong>Type @duplojs/utils 🦁</strong></p>
    <MonacoTSEditor
      src="/examples/v1/reduceUtils.doc.ts"
      majorVersion="v1"
      height="550px"
    />
  </div>
</div>