# hwupathum.github.io

Personal site and article index for Udara Pathum, using the
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme.
GitHub Pages builds it directly from `main`; there is no build step or workflow.

## Adding an article

1. Copy `_templates/post.md` to `_posts/YYYY-MM-DD-your-slug.md`.
2. Fill in the front matter. For an article published elsewhere, set `link:`
   and the post list title opens the original.
3. Commit and push to `main` (or add the file in the GitHub web editor).
   The site updates in about a minute.

Site settings (title, bio, social links, skin) live in `_config.yml`.

## Optional local preview

Requires Ruby 3.x:

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
