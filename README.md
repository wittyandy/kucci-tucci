# Kucci Tucci Game-Making Tutorial

This GitHub-ready package teaches young creators to build an original room-decorating browser game in seven safe versions using simple natural-language prompts.

## Open locally

Open `index.html` to view the tutorial. Select **Play the complete game** to open the included demo.

The demo welcome screen includes a fail-safe **Design a room** action, so entering the game does not depend on audio initialization or the larger game script finishing successfully.

## Publish on GitHub Pages

1. Create a public GitHub repository named `kucci-tucci`.
2. Upload everything inside this folder. Keep `index.html` at the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, then `main` and `/(root)`.
5. Visit `https://YOUR-USERNAME.github.io/kucci-tucci/`.

An adult should manage accounts and publishing for elementary-age students. Do not publish a child's private information.

## Package map

- `index.html` — interactive tutorial landing page
- `site.css` — tutorial appearance and responsive layout
- `site.js` — prompt-copy buttons and saved lesson progress
- `site-assets/` — artwork used by the tutorial page
- `finished-game/` — complete playable Kucci Tucci demo

No paid software, AI subscription, web server, build step, or terminal command is required.

## Change starting object sizes manually

Open `finished-game/app.js` in VS Code and search for `function defaultItemScale`. The numbers returned by this function control the size of newly added objects. For example, `if(type==='sofa')return 1.26` controls only the red sofa, the following sofa rule controls the other sofas, and `if(profileTypes.bed.has(type))return 1.4535` controls every bed. A value of `1` means 100 percent, `1.1` means 110 percent, and `0.9` means 90 percent. Save the file, refresh the browser, and add a new copy of the object to see the change; objects already stored in a saved room keep their saved size.

The underlying unscaled object boxes are in `finished-game/styles.css`. Search for selectors such as `.placed.type-sofa`, `.placed.type-sofa-blue`, and `.placed.type-bed`. Change these CSS widths and heights only when you want to change an object's base proportions or resizing box, rather than its normal starting magnification.

## Finished-demo highlights

- Separate Front, East, and West raster views for directional furniture, Kucci, Tucci, and every pet; perspective Front-only rugs
- Dynamically padded white dotted selection boundaries measured from the exact image displayed on screen, with invisible full-edge resize areas
- Independent horizontal and vertical stretching plus proportional corner resizing
- Furniture-only recoloring for sofas, chairs, beds, and tables
- Rebuilt, fully opaque Scottie and Emi sprites with one clean character per image and enlarged silhouettes inside standard-size mystery icons
- Carefully calibrated starting sizes—including a 10% smaller red sofa and 5% smaller beds—while every placed object remains freely resizable
- Full uncropped sofa sprites with tightly trimmed transparent margins and a side-profile Scottie mystery silhouette
- Three open window coverings—including a raised Roman blind—sized to frame the room window, with their direction and rotation controls removed
- Animals, toys, and books start 5% larger
- Complete wrapped object names above compact two-row floating controls
- Responsive controls, saved rooms, custom room photos, four day/night soundscapes, and downloadable PNG Snapshots
