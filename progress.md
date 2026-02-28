Original prompt: al hacer click en una card, debe abrir al costado un layout con información y portafolio, como este diseño

- Started: implement side panel opened by clicking 3D cards in Next.js page.
- Implemented click selection via Three.js raycaster on carousel cards.
- Added React state-driven side panel with close action and project portfolio content.
- Added frosted/glass panel styling + blurred background when panel is open.
- Test: ran Next.js dev server and Playwright client to verify card click opens side panel (`output/web-game-open/shot-0.png`).
- Test: ran Playwright open+close action sequence to verify close control (`output/web-game-close/shot-0.png`).
- Build check: `npm run build` passes.
- Note: Added `playwright` as dev dependency only for automated interaction validation.
