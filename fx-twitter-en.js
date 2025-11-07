// ==UserScript==
// @name         X: Copy fxtwitter URL Button with Popup
// @namespace    https://x.com/
// @version      1.5
// @description  Copy fxtwitter URL (/en) with native icon + 1s "Copied" popup
// @match        https://x.com/*
// @match        https://pro.x.com/*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const BUTTON_CLASS = 'x-native-copy-btn';

    function createIcon(tweet) {
        const div = document.createElement('div');
        div.className = `${BUTTON_CLASS} css-175oi2r r-1777fci r-t38ddu`;
        div.style.cursor = 'pointer';
        div.style.marginLeft = '12px';
        div.style.position = 'relative';
        div.style.opacity = '0.65';
        div.style.transition = 'opacity 0.2s ease-in-out';

        div.onmouseenter = () => div.style.opacity = '1.0';
        div.onmouseleave = () => div.style.opacity = '0.65';

        div.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true"
                 class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx">
                <g>
                    <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                </g>
            </svg>
        `;

        return div;
    }

    function showPopup(parent) {
        const popup = document.createElement('div');
        popup.textContent = 'Copied';
        popup.style.position = 'absolute';
        popup.style.top = '-24px';
        popup.style.right = '0';
        popup.style.padding = '2px 6px';
        popup.style.fontSize = '12px';
        popup.style.background = '#222';
        popup.style.color = '#fff';
        popup.style.borderRadius = '4px';
        popup.style.zIndex = '9999';
        popup.style.opacity = '0.95';
        parent.appendChild(popup);
        setTimeout(() => popup.remove(), 1000);
    }

    function transformURL(url) {
        return url
            .replace('twitter.com', 'fxtwitter.com')
            .replace('x.com', 'fxtwitter.com')
            .replace(/\/$/, '') + '/en';
    }

    function injectButton(tweet) {
        if (tweet.querySelector(`.${BUTTON_CLASS}`)) return;

        const footer = tweet.querySelector('div[role="group"]');
        if (!footer) return;

        const rawLink = tweet.querySelector('a[href*="/status/"]')?.href;
        if (!rawLink) return;

        const url = transformURL(rawLink);
        const icon = createIcon(tweet);

        icon.onclick = (e) => {
            e.stopPropagation();

            const finalURL = e.shiftKey ? rawLink : url;

            GM_setClipboard(finalURL);
            showPopup(icon);
        };

        footer.appendChild(icon);
    }

    function scanTweets() {
        document.querySelectorAll('article').forEach(injectButton);
    }

    const observer = new MutationObserver(scanTweets);
    observer.observe(document.body, { childList: true, subtree: true });

    scanTweets();
})();
