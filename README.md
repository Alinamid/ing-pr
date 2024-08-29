# \<ing-pr>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i ing-pr
```

## Usage Include the library in your HTML file and use the components:

```html
<body>
  <my-header></my-header>
  <main>
    <login-form></login-form>
  </main>
  <my-footer></my-footer>
  <script type="module">
    import 'ing-pr/ing-pr.js';
  </script>
</body>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm run start
```

To run a local development server that serves the basic demo located in `demo/index.html`
