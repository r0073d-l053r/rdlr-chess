## 2024-05-13 - Vanilla JS Chess Accessibility
**Learning:** Adding keyboard navigation (`tabindex`, `role="button"`, `onkeydown` for Enter/Space) and dynamic `aria-label`s to a dynamically rendered grid (like a chess board) vastly improves accessibility, but resetting `innerHTML` on every render causes focus loss.
**Action:** While acceptable for a micro-UX improvement, future vanilla JS grid implementations should consider focus management (restoring focus after DOM updates) for a complete keyboard experience.
