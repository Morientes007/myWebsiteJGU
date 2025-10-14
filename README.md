# Academic Website - Prashant Kumar

A modern, clean, and maintainable academic website built with pure HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Clean, modern aesthetic
- Easy to update and maintain
- No build process required
- GitHub Pages ready

## Structure

```
Website/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # Interactive features
├── CV.pdf                  # Your CV
├── Publications.pdf        # Publications list
├── Teaching_Statement.pdf  # Teaching statement
├── Picture_Prashant.jpg    # Your photo
└── README.md              # This file
```

## How to Update Content

### 1. Adding a New Publication

Open `index.html` and find the Publications section (`id="publications"`). Add a new publication by copying this template:

```html
<div class="publication">
    <div class="pub-year">2025</div>
    <div class="pub-details">
        <p class="pub-title">Your Paper Title Here</p>
        <p class="pub-authors">Author1, Author2, Author3</p>
        <p class="pub-venue">Conference/Journal Name</p>
    </div>
</div>
```

For an award-winning publication, add the `highlight` class:

```html
<div class="publication highlight">
    <div class="pub-year">2025</div>
    <div class="pub-details">
        <p class="pub-title">Your Award-Winning Paper</p>
        <p class="pub-authors">Author1, Author2</p>
        <p class="pub-venue">Conference Name</p>
        <p class="pub-award">Best Paper Award</p>
    </div>
</div>
```

### 2. Updating Contact Information

Find the Contact section in `index.html` and update the relevant `<div class="contact-card">` blocks with your new information.

### 3. Adding Research Projects

In the Research section, copy this template:

```html
<div class="research-card">
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
</div>
```

### 4. Updating Teaching Information

Add new courses in the Teaching section:

```html
<div class="teaching-item">
    <strong>Course Name</strong>
    <span>Institution Name (Semester/Year)</span>
</div>
```

### 5. Changing Colors

All colors are defined in `styles.css` at the top in the `:root` section:

```css
:root {
    --primary-color: #2563eb;      /* Change this for main color */
    --secondary-color: #1e40af;    /* Change this for secondary color */
    --accent-color: #059669;       /* Change this for accent color */
    /* ... */
}
```

### 6. Updating Your Photo

Simply replace `Picture_Prashant.jpg` with your new photo (keep the same filename, or update the filename in `index.html` line with `<img src="Picture_Prashant.jpg">`).

### 7. Updating PDFs

Replace the PDF files with new versions:
- `CV.pdf`
- `Publications.pdf`
- `Teaching_Statement.pdf`

## Testing Locally

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit: http://localhost:8000
   ```

## Deploying to GitHub Pages

See `GITHUB_DEPLOYMENT.md` for detailed instructions.

## Quick Tips

- Save your changes and refresh the browser to see updates
- Use the browser's developer tools (F12) to inspect elements
- Keep backups of your files before making major changes
- Test on mobile devices using browser developer tools

## Support

If you encounter any issues or need help updating the website, refer to:
- HTML basics: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS basics: https://developer.mozilla.org/en-US/docs/Web/CSS
- GitHub Pages docs: https://docs.github.com/en/pages

## License

This website template is free to use and modify for your personal academic website.
