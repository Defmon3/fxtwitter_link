# X: Copy fxtwitter URL Button with Popup

A minimal Tampermonkey userscript that adds a **native-style fxtwitter copy button** to every tweet on **X (Twitter)**.

![Screenshot](https://github.com/Defmon3/fxtwitter_link/blob/c2afa57167a471a5bcf3956ddd0ab2571f1dd2a5/readme_image.png?raw=true)

---

## ✨ Features

- Native-looking icon beside tweet actions  
- Copies the `fxtwitter.com` version of any tweet  
- **Shift-click** to copy the original `x.com` URL  
- Works on both `x.com` and `pro.x.com`  
- Injects automatically into new tweets — no reload needed

---

## 🧩 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/).  
2. Install via GitHub:  
   **➡ [Install Script](https://github.com/defmon3/x-fxtwitter-copy/raw/main/x-fxtwitter-copy.user.js)**  
3. Open [x.com](https://x.com) and use the new copy icon.

---

## 🧠 Implementation

Uses `MutationObserver` to detect new tweets, injects an SVG icon into each tweet footer, and copies URLs using `GM_setClipboard`.

---

## 📄 License

[MIT](LICENSE)  
© 2025 [defmon3](https://github.com/defmon3)
