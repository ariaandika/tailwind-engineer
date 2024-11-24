# Tailwind Engineer

trying tailwind version 4 beta

## Notes

tailwind use css for configuration

```css
@import "tailwindcss";
```

> only tested in vite

## Design Token

tailwind uses naming convention

```css
@theme {
  --color-primary: var(--color-indigo-600);
  --color-primary-hover: var(--color-indigo-500);
  --color-primary-active: var(--color-indigo-400);
}
```

```html
<button class="bg-primary">Button</button>
```

## Component

use `@utility`

```css
@utility btn-primary {
    @apply bg-primary text-white fontb-bold;
}
```

