# hwupathum.github.io

Personal site of Udara Pathum: a small custom Jekyll site (no theme).
GitHub Pages builds it directly from `main`; there is no build step or workflow.

Everything marked "Sample" is placeholder content to replace.

## Where things live

| Section | Edit |
|---|---|
| Name, tagline, intro, topics, photo | `_config.yml` (`author`) |
| Footer heading and social links | `_config.yml` (`contact`, `links`) |
| Recent updates (home) | `_data/updates.yml` |
| Experience timeline (home) | `_data/experience.yml` |
| Articles | `_posts/YYYY-MM-DD-slug.md` (template: `_templates/post.md`) |
| Talks | `_talks/YYYY-MM-DD-slug.md` (template: `_templates/talk.md`) |
| Projects | `_projects/slug.md` (template: `_templates/project.md`) |
| Colours, fonts, styles | `assets/css/main.scss` (accent is `--accent`) |
| Page layouts | `_layouts/`, `_includes/`, `index.html` |

For an article published elsewhere, set `link:` in its front matter; lists then
open the original.

Commit and push to `main` (or edit in the GitHub web editor); the site updates
in about a minute.
