# Project Rules

- Opacity modifiers on Tailwind color utilities must use a step that exists in the configured opacity scale (or the bracket form `/[0.98]`). Values like `/82` or `/68` are silently dropped, so the gradient stop falls back to transparent — verify the rendered gradient in the browser (`getComputedStyle(el).backgroundImage`), not just the class name.
