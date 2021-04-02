# Anson Heung - Personal Site

## Sass Watch

1. Open Terminal and change directory to the root of this repository
2. Run `sass app/scss:css --watch` and leave it running in background

## Note

In `_globals.scss`, there is the following rule:

```scss
html {
  font-size: 62.5%;
  /* ... */
}
```

This is used such that at default font size of 16px, `0.1rem` is equal to `1px`. Therefore, we can write `1.6rem` instead of `16px`.
