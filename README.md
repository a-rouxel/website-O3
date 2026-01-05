# O3 — Orchestrator of Orbital Operations

Documentation website for the O3 project, a system for orchestrating orbital operations.

## Local Preview

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. Note that some features may not work correctly due to browser security restrictions with local files.

### Option 2: Local Server (Recommended)
Use a simple HTTP server to preview the site:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

1. Push this repository to GitHub.

2. Go to your repository settings → Pages.

3. Under "Source", select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`

4. Click Save. GitHub Pages will publish your site at:
   - `https://<username>.github.io/<repository-name>/`

### Path Configuration

The site uses absolute paths (starting with `/`) which work correctly when:
- The site is published from the repository root
- The repository name matches the GitHub Pages URL path

If you need to publish from a subdirectory or use a different base path, update the paths in:
- `index.html` and all files in `pages/`
- Change `/assets/...` to `../assets/...` or use relative paths

## Project Structure

```
website-O3/
├── index.html              # Landing page
├── pages/
│   ├── architecture.html   # System architecture
│   ├── concepts.html       # Terminology and concepts
│   └── updates.html        # Project updates and timeline
├── assets/
│   ├── css/
│   │   └── styles.css      # Shared styles
│   ├── js/
│   │   └── main.js         # Shared JavaScript
│   └── img/                # Images and diagrams
└── README.md               # This file
```

## Customization

- **Content**: Edit the HTML files in the root and `pages/` directory
- **Styling**: Modify `assets/css/styles.css`
- **Behavior**: Update `assets/js/main.js`
- **Images**: Replace placeholder SVGs in `assets/img/` with your own images

## License

[Add your license information here]

