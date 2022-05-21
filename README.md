# Fiberplane theme - using reveal-md

This is a Fiberplane theme for using the [reveal.js](https://www.revealjs.com) HTML slides framework via the reveal-md engine.

The template allows writing the entire deck in markdown using `---` as slide separators, adding text, images, and code and renders the final output in a `dist` folder that can be deployed as a static site.

## How to get started

1. Pull down the repo
2. Install the dependencies `npm i`
3. Create your deck as a markdown document in the `content/` directory (add images/files to `content/attachments/`). You can use the existing `fiberplane.md` as a reference.
4. Run `npm run start` to write your deck locally
5. Run `npm run build` to create a static HTML output that can be published on Netlify/Vercel or other.
