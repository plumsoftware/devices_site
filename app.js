/* Devices diagnostic website — bilingual UI and browser-native checks. */

const translations = {
    'Девайсы': 'Devices',
    'Клавиатура': 'Keyboard',
    'Мышь': 'Mouse',
    'Динамики': 'Speakers',
    'Наушники': 'Headphones',
    'Микрофон': 'Microphone',
    'Камера': 'Camera',
    'Экран': 'Display',
    'USB-порты': 'USB ports',
    'Wi-Fi': 'Wi-Fi',
    'Bluetooth': 'Bluetooth',
    'И другие': 'More',
    'Быстрая и точная': 'Fast and accurate',
    'диагностика устройств': 'device diagnostics',
    'Переключить тему': 'Toggle theme',
    'Язык сайта': 'Website language',
    'Русский': 'Russian',
    'English': 'English',
    'Проверка': 'Test',
    'клавиатуры': 'keyboard',
    'Нажимайте на клавиши — они будут подсвечиваться. Если клавиша не реагирует, это может указывать на проблему.': 'Press the keys to highlight them. If a key does not respond, it may indicate a problem.',
    'Нажимайте на клавиши — они будут подсвечиваться': 'Press keys to highlight them',
    'Начать проверку': 'Start test',
    'Как это работает?': 'How does it work?',
    'Комплексный тест': 'Complete device check',
    'Клавиатура, Мышь, Звук, Экран': 'Keyboard, mouse, audio and display',
    'Быстро': 'Fast',
    'Проверка в один клик': 'Start in one click',
    'Безопасно': 'Private',
    'Всё работает в браузере': 'Runs in your browser',
    'Бесплатно': 'Free',
    'Без регистрации и скачивания': 'No sign-up or download',
    'Для любых устройств': 'Works across devices',
    'ПК, ноутбуки, планшеты': 'PCs, laptops and tablets',
    'Выберите устройство для проверки': 'Choose a device to test',
    'Найти тест...': 'Search tests...',
    'Проверьте все клавиши и их отклик': 'Check every key and its response',
    'Проверьте звук и громкость': 'Check audio output and volume',
    'Проверьте вывод звука в наушники': 'Check headphone output',
    'Проверьте чувствительность и запись': 'Check microphone input level',
    'Проверьте кнопки, колёсико и отклик': 'Check buttons, scroll wheel and response',
    'Проверьте изображение с веб-камеры': 'Check the webcam image',
    'Проверьте цвета, битые пиксели': 'Check colors and dead pixels',
    'Система': 'System',
    'Проверьте информацию о системе': 'Inspect system information',
    'Интернет': 'Internet',
    'Проверьте скорость и пинг': 'Check connection and response time',
    'Проверьте подключение USB': 'Check USB device access',
    'Проверьте работу Bluetooth': 'Check Bluetooth device access',
    'И другие тесты': 'More tests',
    'Ещё больше инструментов': 'Additional tools',
    'Проверьте, что все клавиши работают корректно': 'Check that all keys respond correctly',
    'Нажато:': 'Pressed:',
    'Клавиатура работает!': 'Keyboard is responding!',
    'Все клавиши определяются корректно.': 'Detected keys respond to input.',
    'Прогресс теста': 'Test progress',
    'Начать заново': 'Reset test',
    'Проверка мыши и колесика': 'Mouse and scroll wheel test',
    'Кликайте кнопками мыши и крутите колесико для проверки отклика.': 'Click each mouse button and scroll the wheel to test its response.',
    'ЛКМ': 'Left',
    'ПКМ': 'Right',
    'СКМ': 'Middle',
    'Левая кнопка (ЛКМ)': 'Left button',
    'Правая кнопка (ПКМ)': 'Right button',
    'Колесико (СКМ)': 'Middle button',
    'Прокрутка колесика': 'Scroll direction',
    'Ожидание...': 'Waiting...',
    'Вверх ↑': 'Up ↑',
    'Вниз ↓': 'Down ↓',
    'Проверка динамиков и наушников': 'Speaker and headphone test',
    'Проверьте левый и правый аудиоканалы и воспроизведение частот.': 'Play a tone through the left and right audio channels.',
    'Левый канал (L)': 'Left channel (L)',
    'Правый канал (R)': 'Right channel (R)',
    'Проверка микрофона': 'Microphone test',
    'Разрешите доступ к микрофону для визуализации уровня звука.': 'Allow microphone access to see the input level in real time.',
    'СИГНАЛ МИКРОФОНА': 'MICROPHONE LEVEL',
    'Включить микрофон': 'Enable microphone',
    'Отключить микрофон': 'Disable microphone',
    'Проверка веб-камеры': 'Webcam test',
    'Проверьте четкость изображения и видеопоток.': 'Check image clarity and the live video stream.',
    'Камера выключена': 'Camera is off',
    'Включить камеру': 'Enable camera',
    'Отключить камеру': 'Disable camera',
    'Тест экрана и битых пикселей': 'Display and dead pixel test',
    'Экран будет последовательно переключаться между базовыми цветами. Кликайте для смены цвета, ESC для выхода.': 'The display will cycle through solid colors. Click to change color or press ESC to exit.',
    'Запустить полноэкранный тест': 'Start full-screen test',
    'Диагностика модуля': 'Module diagnostics',
    'Проверка системных компонентов в реальном времени.': 'Check supported system features in your browser.',
    'Как работает сайт?': 'How does this site work?',
    'Сервис «Девайсы» использует стандартные API браузера (HTML5, Web Audio API, WebRTC и Web Bluetooth / WebUSB там, где они поддерживаются) для диагностики прямо на устройстве. Доступ к камере, микрофону, USB и Bluetooth запрашивается только после вашего действия. Некоторые сведения о железе браузер не раскрывает.': 'Devices uses standard browser APIs (HTML5, Web Audio, WebRTC and Web Bluetooth / WebUSB where supported) to run checks on your device. Camera, microphone, USB and Bluetooth access is requested only after you choose to start a test. Browsers do not expose every hardware detail.',
    'Понятно': 'Got it',
    'Реклама': 'Advertisement'
};

function readSetting(key) {
    try { return window.localStorage.getItem(key); } catch (_) { return null; }
}
function writeSetting(key, value) {
    try { window.localStorage.setItem(key, value); } catch (_) { /* Storage can be unavailable for file or opaque origins. */ }
}
const T = (ru, en) => currentLang === 'en' ? (en || translations[ru] || ru) : ru;
let currentLang = readSetting('devices-language') || 'ru';
let currentPage = 'main';
const originalText = new WeakMap();

function translateDocument() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (!originalText.has(node)) originalText.set(node, node.nodeValue);
        const original = originalText.get(node);
        const trimmed = original.trim();
        if (!trimmed) continue;
        const translated = currentLang === 'en' ? (translations[trimmed] || trimmed) : trimmed;
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + translated + trailing;
    }

    const search = document.getElementById('testSearchInput');
    if (search) search.placeholder = currentLang === 'en' ? 'Search tests...' : 'Найти тест...';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = currentLang;
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const dark = document.body.classList.contains('dark-mode');
        themeToggle.title = T('Переключить тему', 'Toggle theme');
        themeToggle.setAttribute('aria-label', themeToggle.title);
        themeToggle.innerHTML = `<i data-lucide="${dark ? 'sun' : 'moon'}" class="w-4 h-4"></i>`;
        if (window.lucide) window.lucide.createIcons();
    }
    document.documentElement.lang = currentLang;
    document.title = currentLang === 'en' ? 'Devices — online device diagnostics' : 'Девайсы — диагностика устройств';
}

function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'ru';
    writeSetting('devices-language', currentLang);
    translateDocument();
    if (['usb', 'wifi', 'system', 'bluetooth', 'more'].includes(currentPage)) openGenericView(currentPage);
    if (currentPage === 'speakers' || currentPage === 'headphones') {
        document.getElementById('audioTitle').textContent = currentPage === 'speakers'
            ? T('Проверка динамиков', 'Speaker test')
            : T('Проверка наушников', 'Headphone test');
    }
}

function switchPage(pageId) {
    const previousPage = currentPage;
    currentPage = pageId;
    document.querySelectorAll('.view-panel').forEach(panel => panel.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-blue-50/80', 'text-blue-600', 'shadow-sm');
        btn.classList.add('text-slate-600');
    });

    const activeNavBtn = document.querySelector(`[data-tab="${pageId}"]`);
    if (activeNavBtn) {
        activeNavBtn.classList.add('bg-blue-50/80', 'text-blue-600', 'shadow-sm');
        activeNavBtn.classList.remove('text-slate-600');
    }

    if (pageId === 'main') {
        document.getElementById('view-main').classList.remove('hidden');
    } else if (pageId === 'keyboard') {
        document.getElementById('view-keyboard').classList.remove('hidden');
    } else if (pageId === 'mouse') {
        document.getElementById('view-mouse').classList.remove('hidden');
    } else if (pageId === 'speakers' || pageId === 'headphones') {
        document.getElementById('view-audio').classList.remove('hidden');
        document.getElementById('audioTitle').textContent = pageId === 'speakers'
            ? T('Проверка динамиков', 'Speaker test')
            : T('Проверка наушников', 'Headphone test');
    } else if (pageId === 'mic') {
        document.getElementById('view-mic').classList.remove('hidden');
    } else if (pageId === 'camera') {
        document.getElementById('view-camera').classList.remove('hidden');
    } else if (pageId === 'screen') {
        document.getElementById('view-screen').classList.remove('hidden');
    } else {
        openGenericView(pageId);
    }

    if (previousPage !== pageId && previousPage !== 'main' && typeof window.devicesShowInterstitial === 'function') {
        window.devicesShowInterstitial();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    writeSetting('devices-theme', isDark ? 'dark' : 'light');
    translateDocument();
}

const tklLayout = [
    ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrintScreen', 'ScrollLock', 'Pause'],
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

const keyLabels = {
    'Escape': 'Esc', 'PrintScreen': 'PrtSc', 'ScrollLock': 'ScrLk', 'Pause': 'Pause',
    'Backquote': '~ `', 'Minus': '- _', 'Equal': '= +', 'Backspace': 'Backspace',
    'Insert': 'Ins', 'Home': 'Home', 'PageUp': 'PgUp', 'Delete': 'Del', 'End': 'End', 'PageDown': 'PgDn',
    'Tab': 'Tab', 'CapsLock': 'Caps Lock', 'Enter': 'Enter', 'ShiftLeft': 'Shift ⇧', 'ShiftRight': 'Shift ⇧',
    'ControlLeft': 'Ctrl', 'MetaLeft': 'Win', 'AltLeft': 'Alt', 'Space': '', 'AltRight': 'Alt',
    'MetaRight': 'Win', 'ContextMenu': '≣', 'ControlRight': 'Ctrl',
    'ArrowUp': '↑', 'ArrowLeft': '←', 'ArrowDown': '↓', 'ArrowRight': '→'
};

const testedKeysSet = new Set();
const totalKeys = 87;

function initKeyboardGrid() {
    const grid = document.getElementById('keyboardGrid');
    if (!grid) return;
    grid.innerHTML = '';
    tklLayout.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'flex gap-1.5 justify-center';
        row.forEach(code => {
            const keyEl = document.createElement('div');
            keyEl.id = `key-${code}`;
            keyEl.className = 'keycap h-12 px-3 rounded-xl flex items-center justify-center text-xs font-bold cursor-pointer';
            if (code === 'Backspace' || code === 'Enter') keyEl.style.minWidth = '80px';
            else if (code === 'Tab' || code === 'CapsLock' || code === 'ShiftLeft' || code === 'ShiftRight') keyEl.style.minWidth = '70px';
            else if (code === 'Space') keyEl.style.minWidth = '260px';
            else keyEl.style.minWidth = '42px';
            keyEl.textContent = keyLabels[code] || code.replace('Key', '').replace('Digit', '');
            rowEl.appendChild(keyEl);
        });
        grid.appendChild(rowEl);
    });
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && screenOverlay) {
        screenOverlay.remove();
        screenOverlay = null;
        return;
    }
    if (currentPage !== 'keyboard') return;
    const keyEl = document.getElementById(`key-${e.code}`);
    if (keyEl) {
        keyEl.classList.add('active');
        if (!testedKeysSet.has(e.code)) {
            testedKeysSet.add(e.code);
            updateKeyboardProgress();
        }
        if (['Tab', 'Space'].includes(e.code)) e.preventDefault();
    }
});

window.addEventListener('keyup', (e) => {
    const keyEl = document.getElementById(`key-${e.code}`);
    if (keyEl && currentPage === 'keyboard') {
        keyEl.classList.remove('active');
        keyEl.classList.add('tested');
    }
});

function updateKeyboardProgress() {
    const count = testedKeysSet.size;
    const countEl = document.getElementById('pressedCount');
    const percentEl = document.getElementById('progressPercent');
    const bar = document.getElementById('progressBar');
    if (countEl) countEl.textContent = count;
    const percent = Math.min(100, Math.round((count / totalKeys) * 100));
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
}

function resetKeyboardTest() {
    testedKeysSet.clear();
    updateKeyboardProgress();
    document.querySelectorAll('.keycap').forEach(el => el.classList.remove('active', 'tested'));
}

let lmb = 0, rmb = 0, mmb = 0;
function initMouseEvents() {
    window.addEventListener('mousedown', (e) => {
        if (currentPage !== 'mouse') return;
        if (e.button === 0) { lmb++; document.getElementById('lmbCount').textContent = lmb; setHighlight('mouseLMB', true); }
        if (e.button === 2) { rmb++; document.getElementById('rmbCount').textContent = rmb; setHighlight('mouseRMB', true); }
        if (e.button === 1) { mmb++; document.getElementById('mmbCount').textContent = mmb; setHighlight('mouseWheel', true); }
    });
    window.addEventListener('mouseup', (e) => {
        if (currentPage !== 'mouse') return;
        if (e.button === 0) setHighlight('mouseLMB', false);
        if (e.button === 2) setHighlight('mouseRMB', false);
        if (e.button === 1) setHighlight('mouseWheel', false);
    });
    window.addEventListener('wheel', (e) => {
        if (currentPage !== 'mouse') return;
        const target = document.getElementById('scrollDir');
        if (target) target.textContent = e.deltaY < 0 ? T('Вверх ↑', 'Up ↑') : T('Вниз ↓', 'Down ↓');
    }, { passive: true });
    window.addEventListener('contextmenu', e => { if (currentPage === 'mouse') e.preventDefault(); });
}

function setHighlight(id, active) {
    const el = document.getElementById(id);
    if (!el) return;
    if (active) el.classList.add('bg-blue-500', 'text-white');
    else el.classList.remove('bg-blue-500', 'text-white');
}

function playAudioChannel(channel) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return alert(T('Web Audio API не поддерживается этим браузером.', 'Web Audio API is not supported by this browser.'));
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    if (panner) {
        panner.pan.setValueAtTime(channel === 'left' ? -1 : 1, ctx.currentTime);
        osc.connect(panner);
        panner.connect(gain);
    } else {
        osc.connect(gain);
    }
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
    osc.onended = () => ctx.close();
}

let micStream = null;
let micContext = null;
async function toggleMicrophone() {
    const bar = document.getElementById('micBar');
    const db = document.getElementById('micDb');
    const text = document.getElementById('micBtnText');
    if (!micStream) {
        try {
            if (!navigator.mediaDevices?.getUserMedia) throw new Error(T('Браузер не поддерживает доступ к микрофону или сайт открыт не по HTTPS.', 'This browser does not support microphone access, or the site is not using HTTPS.'));
            micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            text.textContent = T('Отключить микрофон', 'Disable microphone');
            micContext = new (window.AudioContext || window.webkitAudioContext)();
            const mic = micContext.createMediaStreamSource(micStream);
            const analyser = micContext.createAnalyser();
            analyser.fftSize = 64;
            mic.connect(analyser);
            const data = new Uint8Array(analyser.frequencyBinCount);
            const draw = () => {
                if (!micStream) return;
                requestAnimationFrame(draw);
                analyser.getByteFrequencyData(data);
                const avg = data.reduce((a, b) => a + b, 0) / data.length;
                const val = Math.min(100, Math.round((avg / 128) * 100));
                bar.style.width = `${val}%`;
                db.textContent = `${val}%`;
            };
            draw();
        } catch (err) {
            alert(T('Ошибка доступа к микрофону: ', 'Microphone access error: ') + err.message);
            if (micStream) micStream.getTracks().forEach(track => track.stop());
            micStream = null;
        }
    } else {
        micStream.getTracks().forEach(track => track.stop());
        micStream = null;
        if (micContext) { micContext.close(); micContext = null; }
        text.textContent = T('Включить микрофон', 'Enable microphone');
        bar.style.width = '0%';
        db.textContent = '0%';
    }
}

let camStream = null;
async function toggleWebcam() {
    const video = document.getElementById('webcamVideo');
    const placeholder = document.getElementById('camPlaceholder');
    const btnText = document.getElementById('camBtnText');
    if (!camStream) {
        try {
            if (!navigator.mediaDevices?.getUserMedia) throw new Error(T('Браузер не поддерживает доступ к камере или сайт открыт не по HTTPS.', 'This browser does not support camera access, or the site is not using HTTPS.'));
            camStream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = camStream;
            placeholder.classList.add('hidden');
            btnText.textContent = T('Отключить камеру', 'Disable camera');
        } catch (err) {
            alert(T('Ошибка доступа к камере: ', 'Camera access error: ') + err.message);
            camStream = null;
        }
    } else {
        camStream.getTracks().forEach(track => track.stop());
        camStream = null;
        video.srcObject = null;
        placeholder.classList.remove('hidden');
        btnText.textContent = T('Включить камеру', 'Enable camera');
    }
}

let screenOverlay = null;
function startScreenTest() {
    const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff', '#ffff00', '#808080'];
    let idx = 0;
    if (screenOverlay) screenOverlay.remove();
    screenOverlay = document.createElement('div');
    screenOverlay.setAttribute('role', 'button');
    screenOverlay.setAttribute('aria-label', T('Нажмите для следующего цвета. Escape — выход.', 'Click for the next color. Press Escape to exit.'));
    screenOverlay.style.cssText = `position:fixed;inset:0;z-index:99999;background:${colors[idx]};cursor:pointer`;
    document.body.appendChild(screenOverlay);
    screenOverlay.onclick = () => {
        idx++;
        if (idx >= colors.length) { screenOverlay.remove(); screenOverlay = null; }
        else screenOverlay.style.background = colors[idx];
    };
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function infoCard(label, value, note = '') {
    return `<div class="diagnostic-card"><div class="diagnostic-label">${escapeHtml(label)}</div><div class="diagnostic-value">${escapeHtml(value)}</div>${note ? `<div class="diagnostic-note">${escapeHtml(note)}</div>` : ''}</div>`;
}

function statusBox(message) {
    return `<div id="genericStatus" class="diagnostic-status sm:col-span-2" aria-live="polite">${escapeHtml(message)}</div>`;
}

function openGenericView(type) {
    document.getElementById('view-generic').classList.remove('hidden');
    const title = document.getElementById('genericTitle');
    const desc = document.getElementById('genericDesc');
    const details = document.getElementById('genericDetails');
    const icon = document.getElementById('genericIcon');

    if (type === 'usb') {
        icon.innerHTML = '<i data-lucide="usb" class="w-6 h-6"></i>';
        title.textContent = T('Диагностика USB-портов', 'USB device check');
        desc.textContent = T('Браузер не может просканировать все порты сам. Выберите USB-устройство в системном окне, чтобы проверить доступ.', 'A browser cannot scan every USB port automatically. Choose a USB device in the system picker to test browser access.');
        const supported = !!navigator.usb;
        details.innerHTML = infoCard(T('Поддержка WebUSB', 'WebUSB support'), supported ? T('Доступно', 'Available') : T('Не поддерживается', 'Not supported'), T('Обычно требуется Chromium и HTTPS.', 'Usually requires a Chromium-based browser and HTTPS.')) +
            infoCard(T('Проверка порта', 'Port check'), T('Только с разрешения', 'Permission required'), T('Список USB-устройств защищён браузером.', 'USB device lists are protected by the browser.')) +
            (supported ? `<div class="sm:col-span-2"><button class="diagnostic-action" onclick="startUsbDeviceCheck()"><i data-lucide="plug" class="w-4 h-4"></i>${T('Выбрать USB-устройство', 'Choose a USB device')}</button></div>` : '') + statusBox(T('Нажмите кнопку, чтобы открыть системный выбор устройства.', 'Select the button to open the device picker.'));
    } else if (type === 'bluetooth') {
        icon.innerHTML = '<i data-lucide="bluetooth" class="w-6 h-6"></i>';
        title.textContent = T('Диагностика Bluetooth', 'Bluetooth diagnostics');
        desc.textContent = T('Проверка доступности Bluetooth API и подключение к совместимому устройству после вашего разрешения.', 'Check Bluetooth API availability and connect to a compatible device after you grant permission.');
        const supported = !!navigator.bluetooth;
        details.innerHTML = infoCard(T('Поддержка Web Bluetooth', 'Web Bluetooth support'), supported ? T('Доступно', 'Available') : T('Не поддерживается', 'Not supported'), T('Поддержка зависит от браузера и платформы.', 'Support depends on your browser and platform.')) +
            infoCard(T('Обнаружение устройств', 'Device discovery'), supported ? T('Ожидает выбора', 'Waiting for selection') : T('Недоступно', 'Unavailable'), T('Браузер показывает только совместимые устройства.', 'The browser lists only compatible devices.')) +
            (supported ? `<div class="sm:col-span-2"><button class="diagnostic-action" onclick="startBluetoothCheck()"><i data-lucide="bluetooth" class="w-4 h-4"></i>${T('Найти Bluetooth-устройство', 'Find a Bluetooth device')}</button></div>` : '') + statusBox(T('Нажмите кнопку для поиска совместимого устройства.', 'Select the button to find a compatible device.'));
    } else if (type === 'wifi') {
        icon.innerHTML = '<i data-lucide="wifi" class="w-6 h-6"></i>';
        title.textContent = T('Диагностика интернета', 'Internet connection test');
        desc.textContent = T('Проверьте состояние подключения и примерное время ответа внешнего узла.', 'Check connection status and approximate response time to an external host.');
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        details.innerHTML = infoCard(T('Подключение браузера', 'Browser connection'), navigator.onLine ? T('Онлайн', 'Online') : T('Офлайн', 'Offline')) +
            infoCard(T('Тип соединения', 'Connection type'), connection?.effectiveType || T('Не раскрывается браузером', 'Not exposed by browser')) +
            infoCard(T('Оценка пропускной способности', 'Estimated bandwidth'), connection?.downlink ? `${connection.downlink} Mbps` : T('Недоступно', 'Unavailable'), T('Оценка браузера, не замер скорости.', 'Browser estimate, not a speed test.')) +
            infoCard(T('Оценка RTT', 'Estimated RTT'), connection?.rtt ? `${connection.rtt} ms` : T('Недоступно', 'Unavailable'), T('Показывается только в браузерах с Network Information API.', 'Only available where Network Information API is supported.')) +
            `<div class="sm:col-span-2"><button class="diagnostic-action" onclick="testNetworkLatency()"><i data-lucide="activity" class="w-4 h-4"></i>${T('Проверить отклик', 'Test response time')}</button></div>` + statusBox(T('Проверка отправит запрос к общедоступному статическому ресурсу.', 'This test sends a request to a public static resource.'));
    } else if (type === 'more') {
        icon.innerHTML = '<i data-lucide="gauge" class="w-6 h-6"></i>';
        title.textContent = T('Дополнительная диагностика', 'Additional diagnostics');
        desc.textContent = T('Сведения о батарее, хранилище, разрешениях и возможностях браузера.', 'Information about battery, storage, permissions and browser capabilities.');
        const memory = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : T('Не раскрывается браузером', 'Not exposed by browser');
        details.innerHTML = infoCard(T('Память устройства', 'Device memory'), memory) +
            infoCard(T('Ядра процессора', 'Logical CPU cores'), navigator.hardwareConcurrency || T('Неизвестно', 'Unknown')) +
            infoCard(T('Безопасный контекст', 'Secure context'), window.isSecureContext ? T('Да', 'Yes') : T('Нет', 'No'), T('Камера, микрофон, WebUSB и Web Bluetooth обычно требуют HTTPS.', 'Camera, microphone, WebUSB and Web Bluetooth generally require HTTPS.')) +
            infoCard(T('Поддержка API', 'API support'), `${navigator.mediaDevices?.getUserMedia ? 'Media ✓' : 'Media —'} · ${navigator.usb ? 'USB ✓' : 'USB —'} · ${navigator.bluetooth ? 'BT ✓' : 'BT —'}`) +
            `<div class="sm:col-span-2"><button class="diagnostic-action" onclick="refreshMoreDiagnostics()"><i data-lucide="refresh-cw" class="w-4 h-4"></i>${T('Обновить сведения', 'Refresh details')}</button></div>` + statusBox(T('Браузер намеренно скрывает часть характеристик оборудования.', 'Browsers intentionally hide some hardware details.'));
        loadMoreDiagnostics();
    } else {
        icon.innerHTML = '<i data-lucide="cpu" class="w-6 h-6"></i>';
        title.textContent = T('Диагностика системы', 'System diagnostics');
        desc.textContent = T('Сведения о браузере, операционной системе и доступных ресурсах.', 'Details about your browser, operating system and available resources.');
        const platform = navigator.userAgentData?.platform || navigator.platform || T('Неизвестно', 'Unknown');
        const browser = detectBrowser();
        const size = `${window.screen.width} × ${window.screen.height}`;
        const viewport = `${window.innerWidth} × ${window.innerHeight}`;
        const language = navigator.language || T('Неизвестно', 'Unknown');
        const connection = navigator.connection?.effectiveType || T('Не раскрывается', 'Not exposed');
        details.innerHTML = infoCard(T('Платформа', 'Platform'), platform) +
            infoCard(T('Браузер', 'Browser'), browser) +
            infoCard(T('Логические ядра CPU', 'Logical CPU cores'), navigator.hardwareConcurrency || T('Неизвестно', 'Unknown')) +
            infoCard(T('Память устройства', 'Device memory'), navigator.deviceMemory ? `${navigator.deviceMemory} GB` : T('Не раскрывается браузером', 'Not exposed by browser')) +
            infoCard(T('Разрешение экрана', 'Screen resolution'), size) +
            infoCard(T('Размер окна', 'Viewport size'), viewport) +
            infoCard(T('Язык браузера', 'Browser language'), language) +
            infoCard(T('Сетевое подключение', 'Network connection'), navigator.onLine ? T('Онлайн', 'Online') : T('Офлайн', 'Offline'), connection);
    }
    if (window.lucide) window.lucide.createIcons();
}

function detectBrowser() {
    const ua = navigator.userAgent;
    if (/Edg\//.test(ua)) return 'Microsoft Edge';
    if (/Firefox\//.test(ua)) return 'Mozilla Firefox';
    if (/Chrome\//.test(ua)) return 'Google Chrome / Chromium';
    if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return 'Apple Safari';
    return T('Не удалось определить', 'Unknown');
}

async function startUsbDeviceCheck() {
    const status = document.getElementById('genericStatus');
    try {
        if (!navigator.usb) throw new Error(T('WebUSB не поддерживается этим браузером.', 'WebUSB is not supported by this browser.'));
        const device = await navigator.usb.requestDevice({ filters: [] });
        if (!device.opened) await device.open();
        await device.close();
        status.textContent = `${T('USB-устройство успешно открыто и закрыто:', 'USB device was opened and closed successfully:')} ${device.productName || T('Без названия', 'Unnamed')} · ${device.manufacturerName || T('Производитель неизвестен', 'Unknown manufacturer')}`;
        status.className = 'diagnostic-status sm:col-span-2';
    } catch (error) {
        status.textContent = error.name === 'NotFoundError' ? T('Устройство не выбрано.', 'No device was selected.') : `${T('Не удалось получить доступ:', 'Could not access the device:')} ${error.message}`;
    }
}

async function startBluetoothCheck() {
    const status = document.getElementById('genericStatus');
    try {
        if (!navigator.bluetooth) throw new Error(T('Web Bluetooth не поддерживается этим браузером.', 'Web Bluetooth is not supported by this browser.'));
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        status.textContent = `${T('Найдено:', 'Found:')} ${device.name || T('Устройство без имени', 'Unnamed device')}. ${T('Проверка доступности GATT…', 'Checking GATT availability…')}`;
        if (device.gatt) {
            try {
                const server = await device.gatt.connect();
                status.textContent = `${T('Подключено по Bluetooth:', 'Connected over Bluetooth:')} ${device.name || T('Устройство', 'Device')}. ${T('Сервер GATT доступен.', 'GATT server is available.')}`;
                server.disconnect();
            } catch (connectionError) {
                status.textContent = `${T('Устройство обнаружено:', 'Device discovered:')} ${device.name || T('Без имени', 'Unnamed')}. ${T('Не удалось открыть GATT-соединение.', 'Could not establish a GATT connection.')}`;
            }
        } else {
            status.textContent = `${T('Устройство обнаружено:', 'Device discovered:')} ${device.name || T('Без имени', 'Unnamed')}. ${T('Оно не предоставляет GATT-соединение для Web Bluetooth.', 'It does not expose a GATT connection to Web Bluetooth.')}`;
        }
    } catch (error) {
        status.textContent = error.name === 'NotFoundError' ? T('Устройство не выбрано.', 'No device was selected.') : `${T('Ошибка Bluetooth:', 'Bluetooth error:')} ${error.message}`;
    }
}

async function testNetworkLatency() {
    const status = document.getElementById('genericStatus');
    const samples = [];
    status.textContent = T('Проверка отклика…', 'Testing response time…');
    for (let i = 0; i < 3; i++) {
        const start = performance.now();
        const image = new Image();
        const result = await new Promise(resolve => {
            const timeout = setTimeout(() => resolve(null), 5000);
            image.onload = () => { clearTimeout(timeout); resolve(performance.now() - start); };
            image.onerror = () => { clearTimeout(timeout); resolve(null); };
            image.src = `https://www.google.com/favicon.ico?devices-check=${Date.now()}-${i}`;
        });
        if (result !== null) samples.push(result);
    }
    if (!navigator.onLine) status.textContent = T('Браузер сообщает, что устройство не в сети.', 'The browser reports that the device is offline.');
    else if (!samples.length) status.textContent = T('Не удалось получить ответ. Возможно, запрос блокируется сетью или расширением.', 'No response received. The request may be blocked by the network or an extension.');
    else {
        const average = Math.round(samples.reduce((sum, value) => sum + value, 0) / samples.length);
        status.textContent = `${T('Среднее время загрузки тестового ресурса:', 'Average test-resource load time:')} ${average} ms (${samples.length}/3). ${T('Это ориентировочная задержка HTTP, а не измерение скорости интернета.', 'This is an approximate HTTP response time, not an internet speed measurement.')}`;
    }
}

async function loadMoreDiagnostics() {
    const status = document.getElementById('genericStatus');
    const battery = navigator.getBattery ? await navigator.getBattery().catch(() => null) : null;
    const storage = navigator.storage?.estimate ? await navigator.storage.estimate().catch(() => null) : null;
    const cards = document.getElementById('genericDetails');
    if (!cards) return;
    const extra = [];
    if (battery) extra.push(infoCard(T('Батарея', 'Battery'), `${Math.round(battery.level * 100)}%`, battery.charging ? T('Зарядка подключена', 'Charging') : T('Не заряжается', 'Not charging')));
    else extra.push(infoCard(T('Батарея', 'Battery'), T('API недоступен', 'API unavailable')));
    if (storage?.quota) extra.push(infoCard(T('Квота хранилища', 'Storage quota'), formatBytes(storage.quota), `${T('Используется', 'Used')}: ${formatBytes(storage.usage || 0)}`));
    else extra.push(infoCard(T('Хранилище браузера', 'Browser storage'), T('Оценка недоступна', 'Estimate unavailable')));
    cards.insertAdjacentHTML('beforeend', extra.join(''));
    if (status) status.textContent = T('Дополнительные сведения загружены. Точные параметры зависят от браузера.', 'Additional details loaded. Available values depend on the browser.');
}

function refreshMoreDiagnostics() {
    openGenericView('more');
}

function formatBytes(bytes) {
    if (!Number.isFinite(bytes)) return '—';
    const units = ['B', 'KB', 'MB', 'GB'];
    let value = bytes;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) { value /= 1024; index++; }
    return `${value.toFixed(index ? 1 : 0)} ${units[index]}`;
}

function openHowItWorksModal() {
    const modal = document.getElementById('howModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}
function closeHowItWorksModal() {
    const modal = document.getElementById('howModal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 200);
}

function initSearch() {
    document.getElementById('testSearchInput')?.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        document.querySelectorAll('#cardsGrid .test-card').forEach(card => {
            card.classList.toggle('hidden', !card.textContent.toLowerCase().includes(val));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initKeyboardGrid();
    initMouseEvents();
    initSearch();
    const savedTheme = readSetting('devices-theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');
    document.getElementById('langSelect')?.addEventListener('change', event => setLanguage(event.target.value));
    translateDocument();
    if (['usb', 'wifi', 'system', 'bluetooth', 'more'].includes(currentPage)) openGenericView(currentPage);
});
