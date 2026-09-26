# Personal Homepage

Source code for Moran Li's academic homepage, built with Jekyll and deployed on GitHub Pages.

## Local development

Use Ruby 3.1.7, matching the GitHub Pages workflow.

```bash
bundle install
bundle exec jekyll serve --livereload
```

The site is available at <http://localhost:4000>. Validate a production build with:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Project structure

- `_pages/` contains the homepage, CV, publications index, and 404 page.
- `_publications/` contains one Markdown file per publication.
- `_includes/` contains reusable Liquid components.
- `_layouts/` defines page-level composition.
- `_sass/` contains component and layout styles; `assets/css/main.scss` is the entry point.
- `assets/js/main.js` contains the small amount of client-side behavior.
- `images/paper/` contains publication preview images.

Publication metadata belongs in front matter. Presentation belongs in `_includes/archive-single-publication.html` and `_sass/layout/_publications.scss`; avoid adding inline styles to content files.
