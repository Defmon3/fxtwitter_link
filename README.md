# X: Copy fxtwitter URL Button with Popup

A lightweight Tampermonkey userscript that adds a **native-style "Copy fxtwitter URL" button** to every tweet on **X (Twitter)**.  
Copies the tweet’s `fxtwitter.com` link (with `/en` suffix) to clipboard, showing a **1-second “Copied” popup** for instant feedback.

---

## ✨ Features

- Adds a small **native-styled icon** next to each tweet action bar  
- **Copies** the `fxtwitter.com` version of the tweet URL (for easy embedding/viewing)  
- **Shift-click** → copy original `x.com` URL instead  
- 1-second **"Copied"** popup for quick confirmation  
- Smooth opacity hover animation  
- Works on both `https://x.com/*` and `https://pro.x.com/*`  
- Auto-injected via **DOM observer** (no reloads needed)

---

## 🧩 Installation

1. Install **[Tampermonkey](https://www.tampermonkey.net/)** for your browser.  
2. Click the button below to install the script:

   **➡ [Install via GitHub](https://github.com/defmon3/x-fxtwitter-copy/raw/main/x-fxtwitter-copy.user.js)**

3. Visit [x.com](https://x.com) — you’ll now see a copy icon beside each tweet.

---

## ⚙️ Behavior

| Action | Result |
|--------|---------|
| Click | Copies `fxtwitter.com/.../en` URL |
| Shift + Click | Copies original `x.com` URL |
| Hover | Increases icon opacity |
| After Copy | Shows “Copied” popup for 1 s |

---

## 🧠 How It Works

- Observes new tweets using `MutationObserver`  
- Locates each tweet’s action bar (`div[role="group"]`)  
- Injects a minimal SVG-based copy icon  
- Uses `GM_setClipboard` to safely copy links  
- Automatically cleans up duplicate buttons

---
