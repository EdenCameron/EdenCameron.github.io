# THE 9 EYES — EDITING GUIDE
## How to edit this website in VS Code

---

### FILE STRUCTURE

```
9eyes/
├── index.html      ← All page content (edit this)
├── style.css       ← All visual styles (edit this)
├── script.js       ← Cursor + animations (rarely need to edit)
├── fonts/          ← Create this folder & put your font files here
└── images/         ← Create this folder & put your images here
```

---

### ADDING YOUR TEXT

Search for the comment tags `<!-- PASTE YOUR TEXT HERE -->` in `index.html`.
Replace the placeholder text with your own writing inside the `<p class="body-text">` tags.

Each `<p class="body-text">` is one paragraph. To add more paragraphs, copy and paste:
```html
<p class="body-text">Your text here.</p>
```

---

### ADDING YOUR IMAGES

1. Create an `images/` folder inside the `9eyes/` folder.
2. Drop your image files in there (e.g. `genesis.jpg`, `platonic.jpg`).
3. In `index.html`, find the `<div class="image-placeholder">` blocks.
4. Replace the entire `<div class="image-placeholder">...</div>` with:
```html
<img src="images/YOUR-IMAGE-NAME.jpg" alt="Description of your image" />
```

For example:
```html
<!-- BEFORE (placeholder) -->
<div class="image-placeholder">
  <div class="placeholder-eye">◉</div>
  <p class="mono-text">INSERT IMAGE HERE<br/>images/genesis.jpg</p>
</div>

<!-- AFTER (your real image) -->
<img src="images/genesis.jpg" alt="Google Street View camera rig" />
```

---

### FONTS

**BD Geminis** (big titles) and **Input Mono Condensed** (body/small text):

1. Purchase / download the font files (.woff2 format).
2. Create a `fonts/` folder in `9eyes/`.
3. Place the font files there.
4. Open `style.css` and uncomment the `@font-face` blocks at the top (remove the `/*` and `*/`).

**Helvetica Neue Medium** is a system font on macOS and should work automatically. For Windows, you may need to add it the same way.

---

### COLOURS

All colours are defined as CSS variables at the top of `style.css`:
```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --red: #FF0000;      /* Full RGB red */
  --yellow: #FFFF00;   /* Full RGB yellow */
}
```

---

### ADDING MORE THEORY SECTIONS

Copy the entire `<div class="theory-block">...</div>` block and paste it below the last one. Update:
- The `THEORY_0X` number
- The theory title
- The body text
- The image path

---

### NAVIGATION LINKS

The nav links (`#genesis`, `#platonic`, etc.) match the `id=""` attributes on each `<section>`. If you rename a section, update both.

---

### OPENING IN A BROWSER

Open `index.html` directly in Chrome or Firefox. For best results, use the **Live Server** extension in VS Code (right-click `index.html` → "Open with Live Server").

---

### SECTION MAP

| Section ID     | Content                        |
|----------------|-------------------------------|
| `#hero`        | Opening title / planet eye    |
| `#genesis`     | Origin of Street View          |
| `#platonic`    | Platonic forms theory          |
| `#pagan`       | Paganism & mythology           |
| `#omniscience` | All-seeing / all-knowing       |
| `#theories`    | Your personal theories         |
| `#conclusion`  | Closing + bibliography         |
