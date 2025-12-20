---
layout: home

hero:
  name: "@duplojs/utils"
  text: "TypeScript utilities"
  tagline: "Robust utilities with an excellent developer experience."
  image: "/images/logo.png"
  actions:
    - theme: brand
      text: Get started
      link: /v1/guide/en
    - theme: alt
      text: View on GitHub
      link: https://github.com/duplojs/utils
---

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Native type 💀</strong></p>
    <MonacoTSEditor
      src="/examples/v1/native.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
  <div>
    <p><strong>@duplojs/utils type 🤩</strong></p>
    <MonacoTSEditor
       src="/examples/v1/utils.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
</div>
