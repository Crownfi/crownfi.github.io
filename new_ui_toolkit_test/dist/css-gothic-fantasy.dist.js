/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/_test_only.ts":
/*!***************************!*\
  !*** ./src/_test_only.ts ***!
  \***************************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_js__WEBPACK_IMPORTED_MODULE_1__]);
_index_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


window.$alert = _index_js__WEBPACK_IMPORTED_MODULE_1__.alert;
window.$confirm = _index_js__WEBPACK_IMPORTED_MODULE_1__.confirm;
window.$prompt = _index_js__WEBPACK_IMPORTED_MODULE_1__.prompt;
window.$msgBox = _index_js__WEBPACK_IMPORTED_MODULE_1__.msgBox;
window.$errorMsgBox = _index_js__WEBPACK_IMPORTED_MODULE_1__.errorMsgBox;
window.$msgBoxIfThrow = _index_js__WEBPACK_IMPORTED_MODULE_1__.msgBoxIfThrow;
window.$addErrorMsgFormatter = _index_js__WEBPACK_IMPORTED_MODULE_1__.addErrorMsgFormatter;
window.$setLoading = _index_js__WEBPACK_IMPORTED_MODULE_1__.setLoading;
window.$FullscreenLoadingTask = _index_js__WEBPACK_IMPORTED_MODULE_1__.FullscreenLoadingTask;
window.$loadBackgrounds = _index_js__WEBPACK_IMPORTED_MODULE_1__.loadBackgrounds;
function testTransitionContainer() {
    const testThing = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#app_tab_container_test");
    const testThingButton1 = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#app_tab_container_test_b1");
    const testThingButton2 = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#app_tab_container_test_b2");
    const testThingButton3 = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#app_tab_container_test_b3");
    if (!(testThing instanceof _index_js__WEBPACK_IMPORTED_MODULE_1__.HTMLDivTransitionfulElement) ||
        !(testThingButton1 instanceof HTMLButtonElement) ||
        !(testThingButton2 instanceof HTMLButtonElement) ||
        !(testThingButton3 instanceof HTMLButtonElement)) {
        return;
    }
    testThing.style.maxWidth = "calc(100vw - 16px);";
    testThingButton1.addEventListener("click", (_) => {
        const newElem = document.createElement("div");
        newElem.classList.add("test-boxes");
        newElem.style.backgroundColor = "#ff0000";
        newElem.style.margin = "18px";
        testThing.transitionSwapLastElement(newElem, "child-width");
    });
    testThingButton2.addEventListener("click", (_) => {
        const newNewElem = document.createElement("div");
        for (let i = 0; i < 2; i += 1) {
            const newElem = document.createElement("div");
            newElem.classList.add("test-boxes");
            newElem.style.backgroundColor = "#ff0000";
            newElem.style.margin = "8px";
            newNewElem.appendChild(newElem);
        }
        testThing.transitionSwapLastElement(newNewElem, "max-width");
    });
    testThingButton3.addEventListener("click", (_) => {
        const newNewElem = document.createElement("div");
        for (let i = 0; i < 25; i += 1) {
            const newElem = document.createElement("h3");
            newElem.innerText = "AAAAAAAAAAAAAA";
            newNewElem.appendChild(newElem);
        }
        testThing.transitionSwapLastElement(newNewElem, "max-width");
    });
}
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", testTransitionContainer);
}
else {
    testTransitionContainer();
}
(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadBackgrounds)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/app_tabs.ts":
/*!*************************!*\
  !*** ./src/app_tabs.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export FantasyTabsElement */
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");

await (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.applyCustomElementsWorkaround)();
const HEIGHT_OFFSET = 36;
const MARKER_SIZE = 16;
const DATA_VALUE_ATTRIBUTE_FILTER = { attributeFilter: ["data-value"] };
Object.freeze(DATA_VALUE_ATTRIBUTE_FILTER.attributeFilter);
Object.freeze(DATA_VALUE_ATTRIBUTE_FILTER);
const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        // This won't work if the FantasyTabsElement is being animated with transforms or scales or something.
        entry.target.refreshMarkerPosition();
    }
});
class FantasyTabsElement extends HTMLMenuElement {
    static get observedAttributes() {
        return [
            "disabled",
            "selected-value"
        ];
    }
    constructor() {
        super();
        this.addEventListener("click", ev => {
            if (this.disabled) {
                return;
            }
            for (const childElem of this.children) {
                if (!(childElem instanceof HTMLLIElement)) {
                    continue;
                }
                if (!childElem.contains(ev.target)) {
                    continue;
                }
                // element.getAttribute("data-foo") is maybe null but element.dataset.foo is maybe undefined.
                // ✨ Just JS things ✨
                this.selectedValue = childElem.dataset.value ?? null;
            }
        });
        this.addEventListener("keydown", ev => {
            if ((ev.key == " " || ev.key == "Enter") &&
                ev.target instanceof HTMLLIElement &&
                ev.target.parentElement == this) {
                ev.target.classList.add("active");
                ev.preventDefault();
            }
        });
        this.addEventListener("keyup", ev => {
            if ((ev.key == " " || ev.key == "Enter") &&
                ev.target instanceof HTMLLIElement &&
                ev.target.parentElement == this) {
                if (ev.target.classList.contains("active")) {
                    ev.target.classList.remove("active");
                    ev.target.dispatchEvent(clickEventIsPointerEvent ?
                        new PointerEvent("click", { isPrimary: true, bubbles: true }) :
                        new MouseEvent("click", { bubbles: true }));
                }
                ev.preventDefault();
            }
        });
        // For some reason, MutationObservers don't have an unobserve method, so I guess we're creating a new one...
        (new MutationObserver(entries => {
            for (const entry of entries) {
                for (const estrangedChild of entry.removedNodes) {
                    if (estrangedChild instanceof HTMLLIElement) {
                        estrangedChild.tabIndex = -1;
                        if (estrangedChild.dataset.value != null &&
                            estrangedChild.dataset.value == this.selectedValue) {
                            this.dispatchEvent(new CustomEvent("fantasyTabSelected", {
                                bubbles: true,
                                detail: {
                                    value: undefined
                                }
                            }));
                        }
                    }
                }
                for (const newChild of entry.addedNodes) {
                    if (newChild instanceof HTMLLIElement) {
                        if (!this.disabled) {
                            newChild.tabIndex = 0;
                        }
                        if (newChild.dataset.value != null &&
                            newChild.dataset.value == this.selectedValue) {
                            this.dispatchEvent(new CustomEvent("fantasyTabSelected", {
                                bubbles: true,
                                detail: {
                                    value: newChild.dataset.value
                                }
                            }));
                            newChild.classList.add("selected");
                        }
                    }
                }
                if (this.isConnected) {
                    this.refreshMarkerPosition();
                }
            }
        })).observe(this, { childList: true });
    }
    refreshMarkerPosition(elem) {
        if (elem == null) {
            elem = [...this.children].find(elem => (elem instanceof HTMLLIElement) && elem.dataset.value == this.selectedValue);
        }
        if (elem == null) {
            this.style.setProperty("--tab-marker-opacity", "0");
            return;
        }
        this.style.setProperty("--tab-marker-opacity", "1");
        const thisBoundingBox = this.getBoundingClientRect();
        const optionBoundingBox = elem.getBoundingClientRect();
        this.style.setProperty("--tab-marker-offset-x", (optionBoundingBox.left -
            thisBoundingBox.left +
            optionBoundingBox.width / 2 -
            MARKER_SIZE / 2) + "px");
        this.style.setProperty("--tab-marker-offset-y", (optionBoundingBox.top -
            thisBoundingBox.top -
            HEIGHT_OFFSET) + "px");
    }
    connectedCallback() {
        resizeObserver.observe(this);
        const isDisabled = this.disabled;
        for (const childElem of this.children) {
            if (!(childElem instanceof HTMLLIElement)) {
                continue;
            }
            childElem.tabIndex = isDisabled ? -1 : 0;
        }
    }
    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }
    get selectedValue() {
        return this.getAttribute("selected-value");
    }
    set selectedValue(value) {
        if (value == null) {
            this.removeAttribute("selected-value");
        }
        else {
            this.setAttribute("selected-value", value);
        }
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(value) {
        if (value) {
            this.setAttribute("disabled", "");
        }
        else {
            this.removeAttribute("disabled");
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "disabled") {
            const isDisabled = this.disabled;
            for (const childElem of this.children) {
                if (!(childElem instanceof HTMLLIElement)) {
                    continue;
                }
                childElem.tabIndex = isDisabled ? -1 : 0;
            }
            return;
        }
        else if (name != "selected-value") {
            return;
        }
        let oldValueIsValid = false;
        let newValueIsValid = false;
        let selectedElement;
        for (const childElem of this.children) {
            if (!(childElem instanceof HTMLLIElement)) {
                continue;
            }
            oldValueIsValid = oldValueIsValid || oldValue != null && oldValue == childElem.dataset.value;
            if (newValue != null && newValue == childElem.dataset.value) {
                selectedElement = childElem;
                newValueIsValid = true;
                childElem.classList.add("selected");
                this.refreshMarkerPosition(childElem);
            }
            else {
                childElem.classList.remove("selected");
            }
        }
        if (oldValueIsValid || newValueIsValid) {
            (selectedElement ?? this).dispatchEvent(new CustomEvent("fantasyTabSelected", {
                bubbles: true,
                detail: {
                    value: newValueIsValid ? newValue : undefined
                }
            }));
        }
    }
}
customElements.define("fantasy-tabs", FantasyTabsElement, { extends: "menu" });
let clickEventIsPointerEvent = false;
document.addEventListener("click", (ev) => {
    if (!ev.isTrusted) {
        return;
    }
    // At the time of writing, false for FF+Safari, true for Chromium.
    // My hacky code to get keyboard inputs to work
    clickEventIsPointerEvent = typeof PointerEvent !== "undefined" &&
        Object.getPrototypeOf(ev).constructor == PointerEvent;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/background.ts":
/*!***************************************!*\
  !*** ./src/background.ts + 1 modules ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  loadBackgrounds: () => (/* binding */ loadBackgrounds)
});

// UNUSED EXPORTS: DEVICE_POINTER_TYPE, setupFancyBackground

// EXTERNAL MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/index.js + 5 modules
var dist = __webpack_require__("./node_modules/@aritz-cracker/browser-utils/dist/index.js");
;// CONCATENATED MODULE: ./node_modules/css-follow-cursor/dist/index.js

const hoverClasses = new Set(["follow-cursor-vars"]);
let curTime = 0;
let mouseX = 0;
let mouseY = 0;
const hoverDataMap = new Map();
const listenedElements = new Set();
function startListeningToElement(elem) {
    elem.addEventListener("mouseenter", mouseEnterCallback, { passive: true });
    elem.addEventListener("mouseleave", mouseLeaveCallback, { passive: true });
    listenedElements.add(elem);
    if (elem == document.documentElement) {
        elem.style.setProperty("--cursor-window-pos-fade-fraction", "0");
        elem.style.setProperty("--cursor-window-pos-fade-percentage", "0%");
    }
    else {
        elem.style.setProperty("--cursor-pos-fade-fraction", "0");
        elem.style.setProperty("--cursor-pos-fade-percentage", "0%");
    }
    upateMousePosVars(elem);
    if (elem.matches(":hover")) {
        startFadeIn(elem);
    }
}
function stopListeningToElement(elem) {
    elem.removeEventListener("mouseenter", mouseEnterCallback);
    elem.removeEventListener("mouseleave", mouseLeaveCallback);
    if (elem.matches(":hover")) {
        startFadeOut(elem);
    }
    listenedElements.delete(elem);
}
function startFadeIn(elem) {
    const elemStyle = getComputedStyle(elem);
    let fadeInTime = (0,dist.parseCSSTime)(elemStyle.getPropertyValue("--cursor-fade-in-time"));
    if (isNaN(fadeInTime) || fadeInTime < 0) {
        fadeInTime = 0;
    }
    const hoverData = hoverDataMap.get(elem);
    if (hoverData) {
        let timeCompleted = (curTime - hoverData.fadeStartTime) / hoverData.fadeTime;
        if (timeCompleted > 1) {
            timeCompleted = 1;
        }
        hoverData.fadeStartTime = curTime - fadeInTime * (1 - timeCompleted);
        hoverData.fadeTime = fadeInTime;
        hoverData.fadingOut = false;
    }
    else {
        hoverDataMap.set(elem, {
            fadeStartTime: curTime,
            fadeTime: fadeInTime,
            timingFunction: (0,dist.parseCSSTimingFunction)(elemStyle.getPropertyValue("--cursor-fade-function")) ?? (0,dist.parseCSSTimingFunction)("linear"),
            fadingOut: false
        });
    }
}
function startFadeOut(elem) {
    const elemStyle = getComputedStyle(elem);
    let fadeOutTime = (0,dist.parseCSSTime)(elemStyle.getPropertyValue("--cursor-fade-out-time"));
    if (isNaN(fadeOutTime) || fadeOutTime < 0) {
        fadeOutTime = 0;
    }
    const hoverData = hoverDataMap.get(elem);
    if (hoverData) {
        let timeCompleted = (curTime - hoverData.fadeStartTime) / hoverData.fadeTime;
        if (timeCompleted > 1) {
            timeCompleted = 1;
        }
        hoverData.fadeStartTime = curTime - fadeOutTime * (1 - timeCompleted);
        hoverData.fadeTime = fadeOutTime;
        hoverData.fadingOut = true;
    }
    else {
        hoverDataMap.set(elem, {
            fadeStartTime: curTime,
            fadeTime: fadeOutTime,
            timingFunction: (0,dist.parseCSSTimingFunction)(elemStyle.getPropertyValue("--cursor-fade-function")) ?? (0,dist.parseCSSTimingFunction)("linear"),
            fadingOut: true
        });
    }
}
function mouseEnterCallback(ev) {
    startFadeIn(ev.target);
}
function mouseLeaveCallback(ev) {
    startFadeOut(ev.target);
}
function fadeFrame(newTime) {
    curTime = newTime;
    requestAnimationFrame(fadeFrame);
    hoverDataMap.forEach((hoverData, elem) => {
        const timeFraction = (curTime - hoverData.fadeStartTime) / (hoverData.fadeTime);
        if (timeFraction >= 1) {
            hoverDataMap.delete(elem);
        }
        const fadeFraction = hoverData.timingFunction(hoverData.fadingOut ? (1 - timeFraction) : timeFraction);
        if (elem == document.documentElement) {
            document.documentElement.style.setProperty("--cursor-window-pos-fade-fraction", fadeFraction + "");
            document.documentElement.style.setProperty("--cursor-window-pos-fade-percentage", (fadeFraction * 100) + "%");
        }
        else {
            elem.style.setProperty("--cursor-pos-fade-fraction", fadeFraction + "");
            elem.style.setProperty("--cursor-pos-fade-percentage", (fadeFraction * 100) + "%");
        }
    });
}
requestAnimationFrame(fadeFrame);
function listenToAllElements() {
    hoverClasses.forEach(className => {
        for (const elem of document.getElementsByClassName(className)) {
            if (!hoverDataMap.has(elem)) {
                startListeningToElement(elem);
            }
        }
    });
}
function addFollowCursorClass(...classes) {
    classes.forEach(className => hoverClasses.add(className));
    listenToAllElements();
}
function upateMousePosVars(elem) {
    if (elem == document.documentElement) {
        const fractionX = mouseX / window.innerWidth;
        const fractionY = mouseY / window.innerHeight;
        elem.style.setProperty("--cursor-window-pos-x-px", mouseX + "px");
        elem.style.setProperty("--cursor-window-pos-y-px", mouseY + "px");
        elem.style.setProperty("--cursor-window-pos-x-fraction", fractionX + "");
        elem.style.setProperty("--cursor-window-pos-y-fraction", fractionY + "");
        elem.style.setProperty("--cursor-window-pos-x-percentage", (fractionX * 100) + "%");
        elem.style.setProperty("--cursor-window-pos-y-percentage", (fractionY * 100) + "%");
    }
    else {
        const elemRect = elem.getBoundingClientRect();
        const elemMouseX = (mouseX - elemRect.left);
        const elemMouseY = (mouseY - elemRect.top);
        const fractionX = elemMouseX / elemRect.width;
        const fractionY = elemMouseY / elemRect.height;
        elem.style.setProperty("--cursor-pos-x-px", elemMouseX + "px");
        elem.style.setProperty("--cursor-pos-y-px", elemMouseY + "px");
        elem.style.setProperty("--cursor-pos-x-fraction", fractionX + "");
        elem.style.setProperty("--cursor-pos-y-fraction", fractionY + "");
        elem.style.setProperty("--cursor-pos-x-percentage", (fractionX * 100) + "%");
        elem.style.setProperty("--cursor-pos-y-percentage", (fractionY * 100) + "%");
    }
}
function listenToDOMChanges() {
    document.documentElement.addEventListener("mousemove", ev => {
        mouseX = ev.clientX;
        mouseY = ev.clientY;
        listenedElements.forEach(elem => {
            if ((!hoverDataMap.has(elem) && !elem.matches(":hover"))) {
                return;
            }
            upateMousePosVars(elem);
        });
    }, { passive: true });
    const observer = new MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; i += 1) {
            const mutation = mutations[i];
            if (!(mutation.target instanceof HTMLElement) && !(mutation.target instanceof SVGElement)) {
                continue;
            }
            switch (mutation.type) {
                case "attributes": {
                    const mutationTarget = mutation.target;
                    const hasClass = ![...hoverClasses].every(className => !mutationTarget.classList.contains(className));
                    if (listenedElements.has(mutationTarget)) {
                        if (!hasClass) {
                            stopListeningToElement(mutationTarget);
                        }
                    }
                    else {
                        if (hasClass) {
                            startListeningToElement(mutationTarget);
                        }
                    }
                    break;
                }
                case "childList": {
                    mutation.addedNodes.forEach(elem => {
                        if (!(elem instanceof HTMLElement) && !(elem instanceof SVGElement)) {
                            return;
                        }
                        if ([...hoverClasses].every(className => !elem.classList.contains(className))) {
                            return;
                        }
                        startListeningToElement(elem);
                    });
                    mutation.removedNodes.forEach(elem => {
                        if (!(elem instanceof HTMLElement) && !(elem instanceof SVGElement)) {
                            return;
                        }
                        if (!listenedElements.has(elem)) {
                            return;
                        }
                        stopListeningToElement(elem);
                    });
                    break;
                }
                default:
            }
        }
    });
    // Doing this in 2 steps because we don't care about changes to the <head>
    observer.observe(document.body, { subtree: true, childList: true, attributeFilter: ["class"] });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    listenToAllElements();
}
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", listenToDOMChanges);
}
else {
    listenToDOMChanges();
}

// EXTERNAL MODULE: ./src/msgbox.ts
var msgbox = __webpack_require__("./src/msgbox.ts");
;// CONCATENATED MODULE: ./src/background.ts


const DEVICE_POINTER_TYPE = new Promise(resolve => {
    window.addEventListener("touchstart", () => {
        resolve("touch");
    }, { once: true, passive: true });
    window.addEventListener("mousemove", () => {
        resolve("mouse");
    }, { once: true, passive: true });
});
const PAGE_FULLY_LOADED = new Promise(resolve => {
    if (document.readyState == "complete") {
        resolve();
    }
    else {
        window.addEventListener("load", (_) => {
            resolve();
        });
    }
});
async function backgroundImagesLoaded(elem) {
    await Promise.all([
        ...getComputedStyle(elem).backgroundImage.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/g),
        ...getComputedStyle(elem, "::before").backgroundImage.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/g),
        ...getComputedStyle(elem, "::after").backgroundImage.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/g)
    ]
        .map(match => match[2])
        .map(url => {
        const img = document.createElement("img");
        img.src = url;
        return img.decode();
    }));
}
function makeTempPixel() {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.width = "1px";
    div.style.height = "1px";
    div.style.overflow = "hidden";
    document.body.append(div);
    return div;
}
function ignoreSafariMobileViewportHeightLies() {
    if (document.documentElement.style.getPropertyValue("--think-different-100vh")) {
        // Hack already running
        return;
    }
    const tmpDiv = document.createElement("div");
    tmpDiv.style.display = "none";
    tmpDiv.style.height = "100vh";
    document.body.append(tmpDiv);
    const actual100vh = getComputedStyle(tmpDiv).height;
    (0,msgbox.alert)("You alright, buddy?", "100vh: " + actual100vh + "\nwindow.innerHeight: " + window.innerHeight + "px");
    tmpDiv.remove();
    if (Math.ceil(Number(actual100vh.substring(0, actual100vh.length - 2))) <= window.innerHeight) {
        // Browser isn't lying to us about 100vh (for now)
        return;
    }
    document.documentElement.style.setProperty("--think-different-100vh", window.innerHeight + "px");
    let resizeDelay = null;
    window.addEventListener("resize", (_) => {
        if (resizeDelay != null) {
            clearTimeout(resizeDelay);
        }
        resizeDelay = setTimeout(() => {
            resizeDelay = null;
            document.documentElement.style.setProperty("--think-different-100vh", window.innerHeight + "px");
        }, 33);
    });
}
async function loadBackgrounds() {
    const bgElem = document.documentElement;
    await PAGE_FULLY_LOADED;
    // Hooray for Safari! Yaay! Woo!
    ignoreSafariMobileViewportHeightLies();
    if (bgElem.classList.contains("main-background-lazy-load")) {
        await backgroundImagesLoaded(bgElem);
        // webpack mangles the names of the images, so getting the computed URL is the most reliable way to do this
        const bgPixel = makeTempPixel();
        bgPixel.classList.value = "main-background-lazy-load-2";
        await backgroundImagesLoaded(bgPixel);
        bgElem.classList.remove("main-background-lazy-load");
        bgElem.classList.add("main-background-lazy-load-2");
        bgPixel.classList.value = "main-background";
        await backgroundImagesLoaded(bgPixel);
        bgElem.classList.remove("main-background-lazy-load-2");
        bgElem.classList.add("main-background");
        bgPixel.remove();
    }
    else if (bgElem.classList.contains("fancy-background-lazy-load")) {
        await backgroundImagesLoaded(bgElem);
        const bgPixel = makeTempPixel();
        bgPixel.classList.value = "fancy-background-lazy-load-2";
        await backgroundImagesLoaded(bgPixel);
        bgElem.classList.remove("fancy-background-lazy-load");
        bgElem.classList.add("fancy-background-lazy-load-2");
        bgPixel.classList.value = "fancy-background-lazy-load-3";
        await backgroundImagesLoaded(bgPixel);
        bgElem.classList.remove("fancy-background-lazy-load-2");
        bgElem.classList.add("fancy-background");
        bgPixel.remove();
        await new Promise(resolve => setTimeout(resolve, 500));
        await setupFancyBackground(true);
    }
}
let firstTimeSetup = false;
async function setupFancyBackground(checkOrientationPermission = false) {
    if (firstTimeSetup) {
        return;
    }
    firstTimeSetup = true;
    console.log("TIME TO SET UP FANCY BACKGROUND!!");
    console.log("Fancy background: DEVICE_POINTER_TYPE: ", await DEVICE_POINTER_TYPE);
    if (await DEVICE_POINTER_TYPE == "mouse") {
        // Only have the fancy background follow the cursor if its assets are 100% fully loaded.
        await PAGE_FULLY_LOADED;
        addFollowCursorClass("fancy-background");
        return;
    }
    // mosemove only gets emitted if the user taps the screen which... isn't that fancy? So let's try the accelerometer
    if (typeof DeviceOrientationEvent == "undefined") {
        console.log("Fancy background: DeviceOrientationEvent not found! Oh well!");
        // Oh well! We tried!
        return;
    }
    let firstOrientationEvent = true;
    window.addEventListener("deviceorientation", (event) => {
        if (firstOrientationEvent) {
            console.log("firstOrientationEvent!!");
            console.log("event.alpha", event.alpha);
            console.log("event.beta", event.beta);
            console.log("event.gamma", event.gamma);
            console.log("screen.orientation.type", screen.orientation.type);
            firstOrientationEvent = false;
        }
        // event.beta returns a number between -180 and 180, where 0 is flat and 180 or -180 flat upside-down
        let yPos = event.beta ?? 90;
        let xPos;
        switch (screen.orientation.type) {
            case "portrait-secondary":
                yPos *= -1; // event.beta * -1
            // Falls through
            case "portrait-primary":
                // yPos = event.beta
                if (Math.abs(yPos) < 5) {
                    yPos -= 5;
                    yPos /= -10;
                    // Device is near-level, y pos should be center if completely level.
                }
                else if (Math.abs(yPos) > 175) {
                    if (yPos < 0) {
                        // Using Math.abs cuz otherwise this could result in -0
                        yPos = Math.abs(175 + yPos);
                    }
                    else {
                        yPos = 185 - yPos;
                    }
                    yPos /= 10;
                }
                else {
                    if (yPos < 0) {
                        yPos = 180 - yPos;
                    }
                    yPos -= 5;
                    yPos /= 170;
                }
                // event.gamma seems to return a value between -90 and 90
                xPos = event.gamma ?? 90;
                xPos += 90;
                xPos /= 180;
                // gamma seems to not be reliable as beta approaches 90deg
                const uprightMultiplier = Math.min(Math.abs(Math.abs(event.beta ?? 90) - 90) / 20, 1);
                xPos *= uprightMultiplier;
                xPos += 0.5 * (1 - uprightMultiplier);
                break;
            case "landscape-primary":
            // landscape-secondary doesn't seemed to be used (at least on FF mobile)
            case "landscape-secondary":
                yPos = event.gamma ?? 90;
                if (yPos < 0) {
                    yPos = 180 + yPos;
                }
                yPos /= 180;
                xPos = event.beta ?? 90;
                xPos %= 90;
                xPos += 90;
                xPos /= 180;
                break;
            default:
                yPos = 0.5;
                xPos = 0.5;
        }
        document.documentElement.style.setProperty("--fancy-background-pos-x-fraction", xPos + "");
        document.documentElement.style.setProperty("--fancy-background-pos-y-fraction", yPos + "");
        document.documentElement.style.setProperty("--fancy-background-pos-x-percentage", (xPos * 100) + "%");
        document.documentElement.style.setProperty("--fancy-background-pos-y-percentage", (yPos * 100) + "%");
        document.documentElement.style.setProperty("--fancy-background-pos-fade-fraction", "1");
    });
    if (typeof DeviceOrientationEvent.requestPermission == "function") {
        DeviceOrientationEvent.requestPermission();
        document.addEventListener("click", (_) => {
            DeviceOrientationEvent.requestPermission();
        }, { once: true });
    }
}


/***/ }),

/***/ "./src/div_transitionful.ts":
/*!**********************************!*\
  !*** ./src/div_transitionful.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLDivTransitionfulElement: () => (/* binding */ HTMLDivTransitionfulElement)
/* harmony export */ });
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function parsePx(px) {
    if (!/^[0-9.]+px$/.test(px)) {
        return NaN;
    }
    return Number(px.substring(0, px.length - 2));
}
class HTMLDivTransitionfulElement extends HTMLElement {
    constructor() {
        super();
        this.#parentResizeObserver = new ResizeObserver(() => {
            this.correctWidth();
            if (this.style.width) {
                const resizeTime = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.parseCSSTime)(getComputedStyle(this).getPropertyValue("--div-transitionful-resize-time"));
                setTimeout(() => {
                    this.correctHeight();
                }, resizeTime);
            }
        });
    }
    connectedCallback() {
        this.style.height = this.getBoundingClientRect().height + "px";
        // This doesn't work if the element is moved. Too bad!
        this.#parentResizeObserver.observe(this.parentElement);
    }
    disconnectedCallback() {
        this.#parentResizeObserver.disconnect();
    }
    correctWidth() {
        if (this.lastElementChild == null) {
            return;
        }
        const thisComputedStyle = getComputedStyle(this);
        const childComputedStyle = getComputedStyle(this.lastElementChild);
        switch (this.#widthMatching) {
            case "none": {
                this.style.width = "";
                break;
            }
            case "child-width": {
                // Make element width accomidate to the client width.
                const paddingAndMargin = (parsePx(childComputedStyle.marginRight) || 0) +
                    (parsePx(thisComputedStyle.paddingRight) || 0) +
                    (parsePx(thisComputedStyle.borderRightWidth) || 0);
                const newWidth = this.lastElementChild.getBoundingClientRect().right -
                    this.getBoundingClientRect().left +
                    paddingAndMargin;
                this.style.width = newWidth + "px";
                break;
            }
            case "max-width": {
                // Make element-width equal to max width
                const maxWidth = parsePx(thisComputedStyle.maxWidth);
                if (isNaN(maxWidth)) {
                    // Nothing to do, auto, none, etc.
                    this.style.width = "";
                    break;
                }
                this.style.width = maxWidth + "px";
                break;
            }
            default:
        }
    }
    correctHeight() {
        if (this.lastElementChild == null) {
            return;
        }
        const thisComputedStyle = getComputedStyle(this);
        const childComputedStyle = getComputedStyle(this.lastElementChild);
        // Make element height accomidate to the client height.
        const paddingAndMargin = (parsePx(childComputedStyle.marginBottom) || 0) +
            (parsePx(thisComputedStyle.paddingBottom) || 0) +
            (parsePx(thisComputedStyle.borderBottomWidth) || 0);
        const newHeight = this.lastElementChild.getBoundingClientRect().bottom -
            this.getBoundingClientRect().top +
            paddingAndMargin;
        this.style.height = newHeight + "px";
    }
    /**
     * Swaps the last child element with the specified element
     * @param newElement Element to insert and transition to
     * @param matchChildWidth true: make this element's with match the child width (accounting for padding and margins), false: make this element match the max-width
     */
    transitionSwapLastElement(newElement, widthMatching = "none") {
        this.#targetElement = newElement;
        this.#widthMatching = widthMatching;
        this.#doTransition();
    }
    #parentResizeObserver;
    #targetElement = document.createElement("div");
    #widthMatching = "none";
    #isTransitioning = false;
    #doTransition() {
        if (this.#isTransitioning) {
            return;
        }
        this.#isTransitioning = true;
        // Woo! Live object!
        const thisComputedStyle = getComputedStyle(this);
        (async () => {
            while (true) {
                if (this.lastElementChild == this.#targetElement) {
                    this.#isTransitioning = false;
                    return;
                }
                if (this.lastElementChild == null) {
                    // This case will never happen in practise, but we can add a hack fix just in case
                    this.appendChild(document.createElement("div"));
                }
                const fadeTime = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.parseCSSTime)(thisComputedStyle.getPropertyValue("--div-transitionful-fade-time"));
                const resizeTime = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.parseCSSTime)(thisComputedStyle.getPropertyValue("--div-transitionful-resize-time"));
                let lastElementChild = this.lastElementChild;
                lastElementChild.style.animation =
                    "var(--div-transitionful-fade-time) ease-in normal forwards 0s div-transitionful-fade-out";
                await sleep(fadeTime);
                lastElementChild.remove();
                lastElementChild.style.animation = "";
                lastElementChild = this.#targetElement;
                lastElementChild.style.opacity = "0";
                this.appendChild(lastElementChild);
                // Changing the width may change the height, so we gotta handle that first.
                this.correctWidth();
                if (this.style.width) {
                    await sleep(resizeTime);
                }
                this.correctHeight();
                lastElementChild.style.opacity = "";
                lastElementChild.style.animation =
                    "var(--div-transitionful-fade-time) ease-out normal 0s div-transitionful-fade-in";
            }
        })();
    }
}
customElements.define("div-transitionful", HTMLDivTransitionfulElement);


/***/ }),

/***/ "./src/hr_auto_pattern.ts":
/*!********************************!*\
  !*** ./src/hr_auto_pattern.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        doAutoPatternStuff(entry.target, entry.contentRect.width);
    }
});
function shouldObserveResizes(elem) {
    return !elem.classList.contains("pattern-stretch") && !elem.classList.contains("pattern-repeat");
}
function doAutoPatternStuff(elem, newWidth = elem.clientWidth) {
    if (!shouldObserveResizes(elem)) {
        elem.classList.remove("pattern-stretch-auto");
        resizeObserver.unobserve(elem);
    }
    const useStretchPattern = newWidth > (elem.clientHeight * 10) && newWidth <= (elem.clientHeight * 32);
    elem.classList.toggle("pattern-stretch-auto", useStretchPattern);
    doSubPixelCorrection(elem); // Might as well...
}
/*
    I can't believe I have to do this, but I have to because background images and border images don't deal with sub-
    pixels consistently, which makes the <hr> look fugly, completely undermining the effect we're going for.

    Note: This doesn't work while things are being animated
*/
const yTranslateMap = new Map();
function doSubPixelCorrection(elem, retries = 0) {
    if ((0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.isElementInViewport)(elem) && (elem.classList.contains("pattern-stretch-auto") ||
        elem.classList.contains("pattern-stretch"))) {
        let curYTranslation = yTranslateMap.get(elem) || 0;
        const oldYTranslation = curYTranslation;
        const elemBBox = elem.getBoundingClientRect();
        if (elemBBox.height < 8 || ((elemBBox.height % 1) != 0)) {
            // It's gonna look bad anyway
            return;
        }
        const oldYPos = elemBBox.top;
        const correctionNeeded = oldYPos % 1;
        curYTranslation -= correctionNeeded;
        if (curYTranslation < -0.5) {
            curYTranslation += 1;
        }
        // Originally this was done by adjusting the margin, which is apparently cheaper than using a transform.
        // Unfortunately that didn't account if the <hr> was underneith something with a larger margin.
        // At least this way we don't also shift everything underneith the <hr>
        if (curYTranslation == 0) {
            elem.style.transform = "";
        }
        else {
            elem.style.transform = "translate(0px, " + curYTranslation + "px)";
        }
        yTranslateMap.set(elem, curYTranslation); // Make sure to save it!
        const newYPos = elem.getBoundingClientRect().top;
        if ((newYPos % 1) != 0) {
            // We actually do sometimes need to retry cuz our fuckery triggers a reflow whichs can move things AGAIN
            // even though what we're doing doesn't affect other elements in any way at all.
            if (retries > 1) {
                console.warn("What the hell? The <hr> sub-pixel correction didn't work even after a retry. " +
                    "oldTopPos: " + oldYPos + "px newTopPos: " + newYPos + "px " +
                    "oldYTranslation: " + oldYTranslation + "px newYTranslation: " + curYTranslation + "px " +
                    "retries: " + retries);
            }
            if (retries < 6) {
                doSubPixelCorrection(elem, retries + 1);
            }
            else {
                console.warn("I... give up");
            }
        }
        else if (retries > 1) {
            console.info("Ended up working... " +
                "oldTopPos: " + oldYPos + "px newTopPos: " + newYPos + "px " +
                "oldYTranslation: " + oldYTranslation + "px newYTranslation: " + curYTranslation + "px " +
                "retries: " + retries);
        }
    }
    else {
        if (retries > 1) {
            console.info("Disregard the previous message... turns out it was outside the viewport.");
        }
        // at least now we're dealing with a singular consistent rounding method now
        elem.style.transform = "";
    }
}
// Yes, even _SCROLLING_ can change the sub-pixel position!
document.addEventListener("scrollend", (ev) => {
    for (const elem of document.querySelectorAll("hr.pattern-stretch-auto, hr.pattern-stretch")) {
        doSubPixelCorrection(elem);
    }
});
function observeAllElements() {
    for (const elem of document.getElementsByTagName("hr")) {
        if (shouldObserveResizes(elem)) {
            resizeObserver.observe(elem);
            doAutoPatternStuff(elem);
        }
    }
}
function listenToDOMChanges() {
    const documentObserver = new MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; i += 1) {
            const mutation = mutations[i];
            switch (mutation.type) {
                case "attributes": {
                    if (!(mutation.target instanceof HTMLHRElement)) {
                        continue;
                    }
                    if (shouldObserveResizes(mutation.target)) {
                        resizeObserver.observe(mutation.target);
                        doAutoPatternStuff(mutation.target);
                    }
                    break;
                }
                case "childList": {
                    mutation.addedNodes.forEach(elem => {
                        if (!(elem instanceof HTMLHRElement) || !shouldObserveResizes(elem)) {
                            return;
                        }
                        resizeObserver.observe(elem);
                        doAutoPatternStuff(elem);
                    });
                    mutation.removedNodes.forEach(elem => {
                        if (!(elem instanceof HTMLHRElement)) {
                            return;
                        }
                        resizeObserver.unobserve(elem);
                        yTranslateMap.delete(elem);
                    });
                    break;
                }
                default:
            }
        }
    });
    documentObserver.observe(document.body, { subtree: true, childList: true, attributeFilter: ["class"] });
    observeAllElements();
}
if (document.readyState != "complete") {
    window.addEventListener("load", listenToDOMChanges);
}
else {
    listenToDOMChanges();
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenLoadingTask: () => (/* reexport safe */ _loading_cover_js__WEBPACK_IMPORTED_MODULE_5__.FullscreenLoadingTask),
/* harmony export */   HTMLDivTransitionfulElement: () => (/* reexport safe */ _div_transitionful_js__WEBPACK_IMPORTED_MODULE_7__.HTMLDivTransitionfulElement),
/* harmony export */   addErrorMsgFormatter: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.addErrorMsgFormatter),
/* harmony export */   alert: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.alert),
/* harmony export */   confirm: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.confirm),
/* harmony export */   errorMsgBox: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.errorMsgBox),
/* harmony export */   loadBackgrounds: () => (/* reexport safe */ _background_js__WEBPACK_IMPORTED_MODULE_8__.loadBackgrounds),
/* harmony export */   msgBox: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.msgBox),
/* harmony export */   msgBoxIfThrow: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.msgBoxIfThrow),
/* harmony export */   prompt: () => (/* reexport safe */ _msgbox_js__WEBPACK_IMPORTED_MODULE_6__.prompt),
/* harmony export */   setLoading: () => (/* reexport safe */ _loading_cover_js__WEBPACK_IMPORTED_MODULE_5__.setLoading)
/* harmony export */ });
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");
/* harmony import */ var dropdown_menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropdown-menu-element */ "./node_modules/dropdown-menu-element/dist/index.js");
/* harmony import */ var _hr_auto_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hr_auto_pattern.js */ "./src/hr_auto_pattern.ts");
/* harmony import */ var _range_input_markers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range_input_markers.js */ "./src/range_input_markers.ts");
/* harmony import */ var _app_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app_tabs.js */ "./src/app_tabs.ts");
/* harmony import */ var _loading_cover_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading_cover.js */ "./src/loading_cover.ts");
/* harmony import */ var _msgbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./msgbox.js */ "./src/msgbox.ts");
/* harmony import */ var _div_transitionful_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./div_transitionful.js */ "./src/div_transitionful.ts");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./background.js */ "./src/background.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_tabs_js__WEBPACK_IMPORTED_MODULE_4__]);
_app_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









(0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.applyRangeInputFillWorkaround)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/loading_cover.ts":
/*!******************************!*\
  !*** ./src/loading_cover.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenLoadingTask: () => (/* binding */ FullscreenLoadingTask),
/* harmony export */   setLoading: () => (/* binding */ setLoading)
/* harmony export */ });
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");
/* harmony import */ var dropdown_menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropdown-menu-element */ "./node_modules/dropdown-menu-element/dist/index.js");


const listenedToDialogs = new Set();
function setLoadingInternal(isLoading, text) {
    const loadingCover = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#main_loading_cover");
    // The loading cover might (and probably is) a dialog as that works best for a11y.
    // It also happens to properly return focus to the original selected element
    if (loadingCover instanceof HTMLDialogElement) {
        if (!listenedToDialogs.has(loadingCover)) {
            loadingCover.addEventListener("cancel", _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.preventDefault);
            loadingCover.addEventListener("submit", _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.preventDefault);
            listenedToDialogs.add(loadingCover);
        }
    }
    const loadingText = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#main_loading_text");
    if (!loadingCover || !loadingText) {
        return;
    }
    if (isLoading) {
        dropdown_menu_element__WEBPACK_IMPORTED_MODULE_1__.ActiveDropdownMenuElement.getActiveRoot()?.close();
        loadingCover.ariaLive = "assertive";
        if (text) {
            loadingCover.ariaLabel = null;
            loadingCover.setAttribute("aria-labelledby", "main_loading_text");
            loadingText.innerText = text;
        }
        else {
            loadingCover.ariaLabel = "Please wait";
            loadingCover.removeAttribute("aria-labelledby");
            loadingText.innerHTML = "";
        }
        if (loadingCover instanceof HTMLDialogElement) {
            try {
                loadingCover.showModal();
            }
            catch (ex) {
                loadingCover.close();
                loadingCover.showModal();
            }
        }
        else {
            loadingCover.role = "alert";
            document.activeElement.blur();
        }
        loadingCover.inert = false;
    }
    else {
        // loadingCover.ariaLive = "off";
        // l
        if (loadingCover instanceof HTMLDialogElement) {
            loadingCover.close();
        }
        else {
            loadingCover.role = null;
        }
        // Safari doesn't implement user-select and pointer-events properly, so we're using inert.
        loadingCover.inert = true;
    }
}
function preventFocusWhileCovered() {
    // const loadingCover = q("#main_loading_cover") as HTMLElement;
    // loadingCover.addEventListener("contextmenu", (ev) => ev.preventDefault());
    document.body.addEventListener("focusin", (_) => {
        const loadingCover = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.q)("#main_loading_cover");
        if (!(loadingCover instanceof HTMLDialogElement) && !loadingCover.inert) {
            document.activeElement.blur();
        }
    });
}
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", preventFocusWhileCovered);
}
else {
    preventFocusWhileCovered();
}
const tasks = [];
if (Symbol.dispose == undefined) {
    Symbol.dispose = Symbol("Symbol.dispose");
}
class FullscreenLoadingTask {
    #text = "";
    set text(text) {
        this.#text = text;
        if (tasks.length && tasks[tasks.length - 1] == this) {
            setLoadingInternal(true, this.#text);
        }
    }
    get text() {
        return this.#text;
    }
    show() {
        const taskIndex = tasks.indexOf(this);
        if (taskIndex == -1) {
            tasks.push(this);
        }
        else {
            tasks.push(...tasks.splice(taskIndex, 1));
        }
        setLoadingInternal(true, this.#text);
    }
    [Symbol.dispose]() {
        this.hide();
    }
    hide() {
        const taskIndex = tasks.indexOf(this);
        if (taskIndex != -1) {
            tasks.splice(taskIndex, 1);
        }
        if (tasks.length) {
            setLoadingInternal(true, tasks[tasks.length - 1].#text);
        }
        else {
            setLoadingInternal(false);
        }
    }
}
const defaultTask = new FullscreenLoadingTask();
function setLoading(isLoading, text = "") {
    if (isLoading) {
        defaultTask.text = text;
        defaultTask.show();
    }
    else {
        defaultTask.hide();
    }
}


/***/ }),

/***/ "./src/msgbox.ts":
/*!***********************!*\
  !*** ./src/msgbox.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addErrorMsgFormatter: () => (/* binding */ addErrorMsgFormatter),
/* harmony export */   alert: () => (/* binding */ alert),
/* harmony export */   confirm: () => (/* binding */ confirm),
/* harmony export */   errorMsgBox: () => (/* binding */ errorMsgBox),
/* harmony export */   msgBox: () => (/* binding */ msgBox),
/* harmony export */   msgBoxIfThrow: () => (/* binding */ msgBoxIfThrow),
/* harmony export */   prompt: () => (/* binding */ prompt)
/* harmony export */ });
/* unused harmony export registerUnhandeledExceptionReporter */
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");
/* harmony import */ var _loading_cover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading_cover.js */ "./src/loading_cover.ts");


function buildButtonRow(buttons, baseElement, buttonName) {
    const container = document.createElement(baseElement);
    container.classList.value = "button-row equal-width";
    if (container instanceof HTMLFormElement) {
        container.method = "dialog";
    }
    for (const buttonDef of buttons) {
        const button = document.createElement("button");
        if (buttonDef.class) {
            button.classList.value = buttonDef.class;
        }
        button.classList.add("small");
        if (buttonDef.returnValue) {
            button.value = buttonDef.returnValue;
        }
        button.innerText = buttonDef.text;
        if (buttonDef.focus) {
            button.autofocus = true;
        }
        if (buttonName) {
            button.name = buttonName;
        }
        container.appendChild(button);
    }
    return container;
}
function appendParagraphsTo(element, text) {
    for (const line of text.split("\n").map(str => str.trim()).filter(Boolean)) {
        const p = document.createElement("p");
        p.innerText = line;
        element.appendChild(p);
    }
}
function buildMsgBox(title, message, buttons, dialogIcon, dialogClass, longDetails) {
    const newDialog = document.createElement("dialog");
    if (dialogClass) {
        newDialog.classList.value = dialogClass;
    }
    if (title) {
        const titleElem = document.createElement("h1");
        titleElem.innerText = title;
        newDialog.appendChild(titleElem);
    }
    if (dialogIcon) {
        const iconElem = document.createElement("span");
        iconElem.classList.add("dialog-cicon");
        iconElem.classList.add("cicon-" + dialogIcon);
        newDialog.appendChild(iconElem);
    }
    if (Array.isArray(message)) {
        newDialog.append(...message);
    }
    else if (typeof message == "object") {
        newDialog.append(message);
    }
    else {
        appendParagraphsTo(newDialog, message + "");
    }
    if (longDetails) {
        const detailElem = document.createElement("textarea");
        detailElem.value = longDetails;
        detailElem.readOnly = true;
        newDialog.appendChild(detailElem);
    }
    newDialog.appendChild(buildButtonRow(buttons, "form"));
    return newDialog;
}
function msgBox(title, message, buttons, dialogIcon, dialogClass, longDetails) {
    const newDialog = buildMsgBox(title, message, buttons, dialogIcon, dialogClass, longDetails);
    document.body.append(newDialog);
    newDialog.showModal();
    return new Promise(resolve => {
        newDialog.addEventListener("close", _ => {
            // May be an empty string if the escape key was pressed
            resolve(newDialog.returnValue);
            newDialog.remove();
        });
    });
}
async function alert(titleOrMessage, message, dialogIcon, dialogClass, longDetails) {
    if (message == undefined) {
        message = titleOrMessage;
        titleOrMessage = "";
    }
    await msgBox(titleOrMessage, message, [{ text: "OK", focus: true }], dialogIcon, dialogClass, longDetails);
}
async function confirm(titleOrMessage, message, dialogIcon, dialogClass, cancelText = "Cancel", confirmText = "OK", longDetails) {
    if (message == undefined) {
        message = titleOrMessage;
        titleOrMessage = "";
    }
    return Boolean(await msgBox(titleOrMessage, message, [{ text: cancelText }, { text: confirmText, focus: true, returnValue: "1", class: "primary" }], dialogIcon, dialogClass, longDetails));
}
async function prompt(titleOrMessage, valueOrMessage = "", value, dialogIcon, dialogClass, cancelText = "Cancel", confirmText = "OK") {
    const title = (() => {
        if (value == undefined) {
            return "";
        }
        return titleOrMessage;
    })();
    const message = (() => {
        if (value == undefined) {
            return titleOrMessage;
        }
        return valueOrMessage;
    })();
    const newDialog = document.createElement("dialog");
    if (dialogClass) {
        newDialog.classList.value = dialogClass;
    }
    if (title) {
        const titleElem = document.createElement("h1");
        titleElem.innerText = title;
        newDialog.appendChild(titleElem);
    }
    if (dialogIcon) {
        const iconElem = document.createElement("span");
        iconElem.classList.add("dialog-cicon");
        iconElem.classList.add("cicon-" + dialogIcon);
        newDialog.appendChild(iconElem);
    }
    if (Array.isArray(message)) {
        newDialog.append(...message);
    }
    else if (typeof message == "object") {
        newDialog.append(message);
    }
    else {
        appendParagraphsTo(newDialog, message + "");
    }
    const newForm = document.createElement("form");
    newForm.method = "dialog";
    const textInput = document.createElement("input");
    textInput.name = "prompt";
    textInput.type = "text";
    textInput.style.width = "100%";
    textInput.style.marginBottom = "8px";
    textInput.value = value == undefined ? (typeof valueOrMessage == "string" ? valueOrMessage : "") : value;
    newForm.appendChild(textInput);
    // This dummy submitter is needed to act as the default submitter so the default isn't "cancel"
    const dummySubmitter = document.createElement("input");
    dummySubmitter.type = "submit";
    dummySubmitter.hidden = true;
    newForm.appendChild(dummySubmitter); //
    newForm.appendChild(buildButtonRow([
        { text: cancelText, returnValue: "0" },
        { text: confirmText, returnValue: "1", class: "primary" }
    ], "div", "confirm"));
    newDialog.appendChild(newForm);
    return new Promise(resolve => {
        newDialog.addEventListener("submit", (ev) => {
            const formValues = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.normalizeFormValues)(ev);
            if (formValues.confirm != "0") {
                resolve(formValues.prompt + "");
            }
            else {
                resolve(null);
            }
        });
        newDialog.addEventListener("close", (_) => {
            newDialog.remove();
            resolve(null);
        });
        document.body.append(newDialog);
        newDialog.showModal();
        textInput.focus();
        textInput.setSelectionRange(0, Infinity);
    });
}
const errorFormatters = [];
/**
 * Expands the funtionality of the `errorMsgBox` and `msgBoxIfThrow` functions.
 * @param handler a function that takes the whatever that was thrown and generates a meaningful message for the user.
 * If the object passed isn't applicable to you, simply return `null` or `undefined`.
 */
function addErrorMsgFormatter(handler) {
    errorFormatters.push(handler);
}
function errorDetails(error) {
    let errorDetails = "**** Error details ****\n";
    if (typeof error === "object" || typeof error === "function") {
        if (typeof error.name == "string" && typeof error.message == "string") {
            errorDetails += ("Name: " + error.name + "\n" +
                "Message: " + error.message.replace(/\t/g, "    ") + "\n" +
                "Stack: " + (error.stack + "").replace(/\t/g, "    ") + "\n");
        }
        else {
            errorDetails += "Non-error " + (typeof error) + " was thrown!\n";
        }
        errorDetails += "*** Object properties ***\n" + JSON.stringify(error, undefined, "    ");
    }
    else {
        errorDetails += (typeof error) + " was thrown with (stringified) value: " + error + "\n";
    }
    return errorDetails;
}
/**
 * Generates a msgBox from the `error` given.
 * @param error The error to show
 */
async function errorMsgBox(error) {
    // We want the latest defined thing to take priority
    for (let i = errorFormatters.length - 1; i >= 0; i -= 1) {
        const params = errorFormatters[i](error);
        if (params != null) {
            try {
                return await alert(params.title, params.message, params.dialogIcon, params.dialogClass, params.hideDetails ? undefined : errorDetails(error));
            }
            catch (ex) {
                console.error("errorMsgBox: there was an errorFormatter named \"" +
                    errorFormatters[i].name +
                    "\" which turned out to be fallible.", "It threw the following:", ex);
            }
        }
    }
    if ((typeof error == "object" || typeof error == "function") &&
        typeof error.name == "string" &&
        typeof error.message == "string") {
        await alert(error.name, error.message || "[No error message]", "tired", "danger", errorDetails(error));
    }
    else {
        await alert("Non-error object error", "An unknown error has occurred.", "tired", "danger", errorDetails(error));
    }
}
function msgBoxIfThrow(f) {
    try {
        const result = f();
        if (result != null && typeof result === "object" && typeof result.catch === "function") {
            result.catch(errorMsgBox);
        }
    }
    catch (ex) {
        errorMsgBox(ex);
    }
}
let rejectionTimeoutThreshold = 10000;
let reportingUnhandeledExceptions = false;
function registerUnhandeledExceptionReporter(promiseRejectionTimeoutMs = 10000) {
    rejectionTimeoutThreshold = promiseRejectionTimeoutMs;
    if (reportingUnhandeledExceptions) {
        return;
    }
    reportingUnhandeledExceptions = true;
    window.addEventListener("error", (event) => {
        let longDetails = "**** window emitted the \"error\" event! ****\n" +
            "event.message: " + event.message + "\n" +
            "event.filename: " + event.filename + ":" + event.lineno + ":" + event.colno + "\n" +
            "typeof event.error: " + (typeof event.error) + "\n";
        if ((typeof event.error == "object" || typeof event.error == "function") && event.error != null) {
            longDetails += "event.error.name: " + event.error.name + "\n" +
                "event.error.message: " + (event.error.message + "").replace(/\t/g, "    ") + "\n" +
                "event.error.stack: " + (event.error.stack + "").replace(/\t/g, "    ") + "\n" +
                "JSON.stringify(event.error): " + JSON.stringify(event.error, undefined, "    ");
        }
        else {
            longDetails += "event.error (stringified): " + event.error;
        }
        msgBox("Unhandled exception", "An error was thrown which wasn't properly caught, " +
            "this probably means the error was unexpected and things might start glithcing out as a result.\n" +
            "If you wish to report the error, please include the details below.", [
            { text: "Restart app", returnValue: "reload" },
            { text: "This is fine", focus: true }
        ], "tired", "danger", longDetails).then(option => {
            if (option == "reload") {
                window.location.reload();
                (0,_loading_cover_js__WEBPACK_IMPORTED_MODULE_1__.setLoading)(true, "Restarting...");
            }
        });
    });
    // const REJECTION_TIMEOUT_THRESHOLD = promiseRejectionTimeoutMs;
    const maybeRejects = new Map();
    let rejectCheckInterval = null;
    //
    window.addEventListener("unhandledrejection", (ev) => {
        maybeRejects.set(ev.promise, { rejectTime: Date.now() + rejectionTimeoutThreshold, reason: ev.reason });
        if (rejectCheckInterval != null) {
            return;
        }
        rejectCheckInterval = setInterval(() => {
            const now = Date.now();
            maybeRejects.forEach(({ rejectTime, reason }, promise) => {
                if (rejectTime > now) {
                    return;
                }
                let longDetails = "**** window emitted the \"unhandledrejection\" event! ****\n" +
                    "typeof event.reason: " + (typeof reason) + "\n";
                if ((typeof reason == "object" || typeof reason == "function") && reason != null) {
                    longDetails += "event.reason.name: " + reason.name + "\n" +
                        "event.reason.message: " + (reason.message + "").replace(/\t/g, "    ") + "\n" +
                        "event.reason.stack: " + (reason.stack + "").replace(/\t/g, "    ") + "\n" +
                        "JSON.stringify(event.reason): " + JSON.stringify(reason, undefined, "    ");
                }
                else {
                    longDetails += "event.reason (stringified): " + reason;
                }
                msgBox("Unhandled promise rejection", "An async error was thrown which wasn't properly caught within " +
                    Math.floor((rejectionTimeoutThreshold / 1000)) + " seconds, " +
                    "this probably means the error was unexpected and things might start glithcing out as a result.\n" +
                    "If you wish to report the error, please include the details below.", [
                    { text: "Restart app", returnValue: "reload" },
                    { text: "This is fine", focus: true }
                ], "tired", "danger", longDetails).then(option => {
                    if (option == "reload") {
                        window.location.reload();
                        (0,_loading_cover_js__WEBPACK_IMPORTED_MODULE_1__.setLoading)(true, "Restarting...");
                    }
                });
                maybeRejects.delete(promise);
            });
            if (maybeRejects.size == 0 && rejectCheckInterval != null) {
                clearInterval(rejectCheckInterval);
                rejectCheckInterval = null;
                console.log("All unhandled promise rejections where either reported or asynchronously handled.");
            }
        }, 1000);
    });
    window.addEventListener("rejectionhandled", (ev) => {
        maybeRejects.delete(ev.promise);
    });
}


/***/ }),

/***/ "./src/range_input_markers.ts":
/*!************************************!*\
  !*** ./src/range_input_markers.ts ***!
  \************************************/
/***/ (() => {

const HEIGHT_OFFSET = 4; // How far to move down relative to the bottom-edge of the thumb
const THUMB_SIZE = 16; // Set to the width of the thumb (is there a way to automate this?)
const MARKER_SIZE = 8;
const markerContainer = document.createElement("div");
markerContainer.classList.add("cicon");
markerContainer.classList.add("range-input-marker");
markerContainer.style.position = "absolute";
markerContainer.style.zIndex = (2 ** 30) + "";
markerContainer.style.fontSize = MARKER_SIZE + "px";
markerContainer.style.pointerEvents = "none";
// markerContainer.style.backgroundColor = "red";
markerContainer.inert = true;
function createMarker() {
    const newElem = document.createElement("div");
    newElem.style.position = "absolute";
    newElem.classList.add("cicon-fantasy-marker-up");
    newElem.style.top = "0px";
    return newElem;
}
function addMarkers(targetElem) {
    if (targetElem.type != "range" || targetElem.list == null) {
        return;
    }
    // Fallback values match with built-in behaviour
    const rangeMin = (targetElem.min == "" || isNaN(targetElem.min)) ? 0 : Number(targetElem.min);
    const rangeMax = (targetElem.max == "" || isNaN(targetElem.max)) ? 100 : Number(targetElem.max);
    const rangeBoundingBox = targetElem.getBoundingClientRect();
    const markersPosY = Math.ceil(rangeBoundingBox.bottom + window.scrollY + HEIGHT_OFFSET);
    const markersPosX = Math.round(rangeBoundingBox.left + window.scrollX + THUMB_SIZE / 2 - MARKER_SIZE / 2);
    const markersHeight = MARKER_SIZE;
    const markersWidth = Math.round(rangeBoundingBox.width - THUMB_SIZE + MARKER_SIZE);
    markerContainer.style.top = markersPosY + "px";
    markerContainer.style.left = markersPosX + "px";
    markerContainer.style.height = markersHeight + "px";
    markerContainer.style.width = markersWidth + "px";
    markerContainer.innerHTML = "";
    const markerMaxOffset = markersWidth - MARKER_SIZE;
    const rangeMinMaxDelta = rangeMax - rangeMin;
    for (const markerOption of targetElem.list.options) {
        const markerValue = Number(markerOption.value);
        if (isNaN(markerValue) || markerValue < rangeMin || markerValue > rangeMax) {
            continue;
        }
        const markerOffset = (markerValue - rangeMin) / rangeMinMaxDelta * markerMaxOffset;
        const newMarker = createMarker();
        newMarker.style.left = markerOffset + "px";
        markerContainer.appendChild(newMarker);
    }
    document.body.appendChild(markerContainer);
}
function removeMarkers() {
    if (markerContainer.isConnected) {
        markerContainer.innerHTML = "";
        markerContainer.remove();
    }
}
document.addEventListener("focusin", (ev) => {
    if (ev.target instanceof HTMLInputElement) {
        addMarkers(ev.target);
    }
});
document.addEventListener("mousedown", (ev) => {
    if (document.activeElement instanceof HTMLInputElement) {
        addMarkers(document.activeElement);
    }
});
document.addEventListener("mouseup", removeMarkers);
document.addEventListener("focusout", removeMarkers);

// NOTE: We currently don't observe for size and position changes to the element while it is focused.


/***/ }),

/***/ "./node_modules/@aritz-cracker/browser-utils/dist/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aritz-cracker/browser-utils/dist/index.js + 5 modules ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  applyCustomElementsWorkaround: () => (/* reexport */ applyCustomElementsWorkaround),
  applyRangeInputFillWorkaround: () => (/* reexport */ applyRangeInputFillWorkaround),
  isElementInViewport: () => (/* reexport */ isElementInViewport),
  normalizeFormValues: () => (/* reexport */ normalizeFormValues),
  parseCSSTime: () => (/* reexport */ parseCSSTime),
  parseCSSTimingFunction: () => (/* reexport */ parseCSSTimingFunction),
  preventDefault: () => (/* reexport */ preventDefault),
  q: () => (/* reexport */ q)
});

// UNUSED EXPORTS: applyAllWorkarounds, disableFormInputs, enableFormInputs, needsCustomElementsWorkaround, needsRangeInputFillWorkaround, newCubicBezierFunction, newPiecewiseLinearFunction, newStepsFunction, off, on, qa

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/forms.js
/**
 * Sets all form inputs to `disabled` for the specified form
 * @param form The form element which to disable all contained input elements
 * @param exemptions Things which you don't want this function to touch
 */
function disableFormInputs(form, exemptions = []) {
    const exemptSet = new Set(exemptions);
    for (let i = 0; i < form.elements.length; i++) {
        const input = form.elements[i];
        if (exemptSet.has(input) || !("disabled" in input)) {
            continue;
        }
        input.disabled = true;
    }
}
/**
 * Sets all form inputs to `disabled` for the specified form
 * @param form The form element which to enable all contained input elements
 * @param exemptions Things which you don't want this function to touch
 */
function enableFormInputs(form, exemptions = []) {
    const exemptSet = new Set(exemptions);
    for (let i = 0; i < form.elements.length; i++) {
        const input = form.elements[i];
        if (exemptSet.has(input) || !("disabled" in input)) {
            continue;
        }
        input.disabled = false;
    }
}
/**
 * Takes in a form element or submit event and returns a mapping between the input's name and their values
 *
 * If using a `SubmitEvent`, the `name` and `value` of the `HTMLButtonElement` used to submit the form will be
 * included.
 *
 * @param source `HTMLFormElement` or `SubmitEvent` to get the values from
 * @returns a mapping between the input's name and their values. The type of value is determined as so:
 * * `<input type="checkbox">`: `boolean` or `null` if indeterminate
 * * `<input type="datetime-local">`: `Date` or `null` if none is entered
 * * `<input type="file">`: `FileList`
 * * `<input type="number">`: `number`
 * * `<input type="range">`: `number`
 * * `<input type="radio">`: `string` - The value of the selected radio button. If none are selected, this will be an
 * empty string. This reflects the behaviour of `RadioNodeList`.
 * * All other inputs: `string`
 */
function normalizeFormValues(source) {
    const result = {};
    const [formElement, submitter] = (() => {
        if (source instanceof HTMLFormElement) {
            return [source, null];
        }
        return [source.target, source.submitter];
    })();
    const uncheckedRadioNames = new Set();
    for (let i = 0; i < formElement.elements.length; i += 1) {
        const formControl = formElement.elements[i];
        if (formControl instanceof HTMLButtonElement) {
            if (formControl == submitter) {
                if (formControl.name) {
                    result[formControl.name] = formControl.value;
                }
            }
        }
        else if (formControl instanceof HTMLInputElement) {
            switch (formControl.type) {
                case "checkbox": {
                    if (formControl.indeterminate) {
                        result[formControl.name] = null;
                    }
                    else {
                        result[formControl.name] = formControl.checked;
                    }
                    break;
                }
                case "datetime-local": {
                    result[formControl.name] = formControl.valueAsDate;
                    break;
                }
                case "file": {
                    result[formControl.name] = formControl.files;
                    break;
                }
                case "number":
                case "range": {
                    result[formControl.name] = formControl.valueAsNumber;
                    break;
                }
                case "radio": {
                    if (formControl.checked) {
                        result[formControl.name] = formControl.value;
                    }
                    else {
                        uncheckedRadioNames.add(formControl.name);
                    }
                    break;
                }
                default:
                    result[formControl.name] = formControl.value;
            }
        }
        else if (formControl instanceof HTMLOutputElement ||
            formControl instanceof HTMLSelectElement ||
            formControl instanceof HTMLTextAreaElement) {
            result[formControl.name] = formControl.value;
        }
    }
    uncheckedRadioNames.forEach(name => {
        // `RadioNodeList` returns a "" if no radio buttons are selected. Might as well reflect that behaviour!
        if (!result[name]) {
            result[name] = "";
        }
    });
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/css.js
/**
 * Parses the given string as a CSS time value and returns the result in milliseconds.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/time
 * @param time A CSS Time value. If `""`, `null`, or `undefined` is given, `0` is returned.
 * @returns The result in milliseconds, or `NaN` if the input was invalid
 */
function parseCSSTime(time = "0s") {
    if (!time) {
        return 0;
    }
    let [_, sign, number, unit] = (() => {
        const result = time.match(/^\s*([+-]?)([0-9.-]+)(s|ms)\s*$/i);
        if (result == null) {
            return ["", "", "NaN", "ms"];
        }
        return result;
    })();
    let result = Number(number);
    if (unit.toLowerCase() === "s") {
        result *= 1000;
    }
    result = Math.ceil(result);
    if (sign === "-") {
        result *= -1;
    }
    return result;
}
// The cubic bezier function implementation has been taken from "framer-motion" by Matt Perry.
// https://github.com/framer/motion/blob/ea49a4dc0fbf1662b89abb277e2020d459026b54/packages/framer-motion/src/easing/cubic-bezier.ts
// https://github.com/framer/motion/blob/ea49a4dc0fbf1662b89abb277e2020d459026b54/LICENSE.md
// "framer-motion" uses code adapted code from "bezier-easing" by Gaëtan Renaudeau.
// https://github.com/gre/bezier-easing/
// https://github.com/gre/bezier-easing/blob/7785b0b63acd6fefb240607f169f037b8add26ad/LICENSE
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(t, a1, a2) {
    return (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
}
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function clampedIdentity(t) {
    if (t <= 0) {
        return 0;
    }
    if (t >= 1) {
        return 1;
    }
    return t;
}
function newCubicBezierFunction(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) {
        return clampedIdentity;
    }
    ;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t) => {
        // No need to do expensive math or return values that don't make sense
        if (t <= 0) {
            return 0;
        }
        if (t >= 1) {
            return 1;
        }
        return calcBezier(getTForX(t), mY1, mY2);
    };
}
// export type CSSJumpTerm = "jump-start" | "jump-end" | "jump-none" | "jump-both" | "start" | "end";
function newStepsFunction(steps, direction) {
    if (isNaN(steps) || steps <= 0) {
        return undefined;
    }
    switch (direction) {
        case "start":
        case "jump-start":
            return (t) => {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                return Math.ceil(t * steps) / steps;
            };
        case "end":
        case "jump-end":
            return (t) => {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                return Math.floor(t * steps) / steps;
            };
        case "jump-none":
            return (t) => {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                // I really just threw stuff at the wall until something stuck
                return Math.floor(t * steps) / (steps - 1);
            };
        case "jump-both":
            return (t) => {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                // Ditto, after spending too much time on the MDN playground
                return Math.min((Math.floor(t * (steps)) / (steps + 1)) + 1 / (steps + 1), 1);
            };
        default:
            return undefined;
    }
}
function fillInImplicitStops(args) {
    if (!args.length) {
        return;
    }
    if (args[0][1] == undefined) {
        args[0][1] = 0;
    }
    if (args[args.length - 1][1] == undefined) {
        args[args.length - 1][1] = 1;
    }
    for (let i = 0; i < args.length; i += 1) {
        if (args[i][1] == undefined) {
            const startVal = args[i - 1][1];
            // I, once again, miss rust expressions. ;_;
            const [endVal, endIndex] = (() => {
                for (let ii = i; ii < args.length; ii += 1) {
                    if (args[ii][1] != undefined) {
                        return [args[ii][1], ii];
                    }
                }
                // This should be unreachable as the last item is guaranteed to be [number, number]
                throw new Error("2+2=5");
            })();
            const stepCount = endIndex - i;
            for (let ii = i; ii < endIndex; ii += 1) {
                const fractional = (ii - i + 1) / (stepCount + 1);
                args[ii][1] = startVal * (1 - fractional) + endVal * fractional;
            }
            i += stepCount;
        }
    }
}
function newPiecewiseLinearFunction(args) {
    if (!args.length) {
        return clampedIdentity;
    }
    fillInImplicitStops(args);
    return (t) => {
        if (t < 0) {
            t = 0;
        }
        else if (t > 1) {
            t = 1;
        }
        // Linear search is fine... though it may be worth benchmarking against binary search at some point
        for (let i = 0; i < args.length; i += 1) {
            if (t < args[i][1]) {
                const startVal = args[i - 1][0] ?? 0;
                const endVal = args[i][0];
                const fractional = (t - (args[i - 1][1] ?? 0)) / (args[i][1] - (args[i - 1][1] ?? 0));
                return startVal * (1 - fractional) + endVal * fractional;
            }
        }
        return args[args.length - 1][1];
    };
}
const COMMON_CSS_TIMING_FUNCS = {
    "ease": newCubicBezierFunction(0.25, 0.1, 0.25, 1.0),
    "linear": clampedIdentity,
    "ease-in": newCubicBezierFunction(0.42, 0, 1.0, 1.0),
    "ease-out": newCubicBezierFunction(0, 0, 0.58, 1.0),
    "ease-in-out": newCubicBezierFunction(0.42, 0, 0.58, 1.0),
    "step-start": (t) => t > 0 ? 1 : 0,
    "step-end": (t) => t < 1 ? 0 : 1
};
/**
 * Parses a [CSS easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) and returns a
 * function whichs takes a value between 0 and 1, and returns a value between 0 and 1. If the input to the returned
 * function exceeds those bounds, it will be clamped.
 *
 * If the inputted string is not a valid easing function, (as defined during April 2024) then `undefined` is returned.
 * @param func [CSS easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
 * @returns the resulting easing function, or `undefined` if the string provided is invalid.
 */
function parseCSSTimingFunction(func) {
    if (func in COMMON_CSS_TIMING_FUNCS) {
        return COMMON_CSS_TIMING_FUNCS[func];
    }
    const [_, p1, p2, p3, p4] = (() => {
        const result = func.match(/^\s*cubic-bezier\(\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*\)\s*;?\s*$/i);
        if (result == null) {
            return [NaN, NaN, NaN, NaN, NaN];
        }
        return result.map(Number);
    })();
    if (!isNaN(p1) && !isNaN(p2) && !isNaN(p3) && !isNaN(p4)) {
        return newCubicBezierFunction(p1, p2, p3, p4);
    }
    let parseResult = func.match(/^\s*steps\(\s*([0-9.-]+)\s*,\s*(.+)\s*\)\s*;?\s*$/);
    if (parseResult != null) {
        return newStepsFunction(Number(parseResult[1]), parseResult[2]);
    }
    parseResult = func.match(/^\s*linear\(\s*([0-9.,% -]+\s*)+\s*\)\s*;?\s*$/);
    if (parseResult == null) {
        return;
    }
    const piecewiseArgs = [];
    const argStrs = parseResult[1].split(",");
    for (let i = 0; i < argStrs.length; i += 1) {
        const argStr = argStrs[i];
        const parseArgResult = argStr.match(/^\s*([0-9.-]+)\s*(?:\s+([0-9.-]+)%\s*)?(?:\s+([0-9.-]+)%\s*)?$/);
        if (parseArgResult == null) {
            return;
        }
        const argPart1 = Number(parseArgResult[1]);
        if (isNaN(argPart1)) {
            return;
        }
        const argPart2 = parseArgResult[2] ? Number(parseArgResult[2]) / 100 : undefined;
        if (argPart2 != undefined && isNaN(argPart1)) {
            return;
        }
        piecewiseArgs.push([argPart1, argPart2]);
        if (parseArgResult[3]) {
            const argPart3 = Number(parseArgResult[3]) / 100;
            if (isNaN(argPart3)) {
                return;
            }
            piecewiseArgs.push([argPart1, argPart3]);
        }
    }
    return newPiecewiseLinearFunction(piecewiseArgs);
}

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/elements.js
/**
 * Checks to see whether or not the specified element's bounding box is in the viewport
 * @param elem The element to check
 * @param completely if true, this function will only return true if the element is completely within the viewport.
 * Otherwise, it will also return true if the element is partially in the viewport
 * @returns Whether or not the element is in the viewport
 */
function isElementInViewport(elem, completely = false) {
    const rect = elem.getBoundingClientRect();
    // This is honestly the strangest code I've ever written
    return completely ? (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= document.documentElement.clientHeight &&
        rect.right <= document.documentElement.clientWidth) : (((rect.top >= 0 &&
        rect.top <= document.documentElement.clientHeight) || (rect.bottom >= 0 &&
        rect.bottom <= document.documentElement.clientHeight)) && ((rect.left >= 0 &&
        rect.left <= document.documentElement.clientWidth) || (rect.right >= 0 &&
        rect.right <= document.documentElement.clientWidth)));
}

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/workarounds/index.js
function needsRangeInputFillWorkaround() {
    // At the time of writing, only Firefox provides a way to style the filled-in area of a range input.
    // Right now the workaround is to have all rage inputs have a --range-workaround-fill-amount CSS variable which is
    // then set to a value between 0 and 1 depending on where the slider is. 
    return !CSS.supports("selector(input::-moz-range-progress)");
}
let importRangeInputFillWorkaroundPromise;
async function applyRangeInputFillWorkaround() {
    if (needsRangeInputFillWorkaround()) {
        if (!importRangeInputFillWorkaroundPromise) {
            importRangeInputFillWorkaroundPromise = __webpack_require__.e(/*! import() */ "node_modules_aritz-cracker_browser-utils_dist_workarounds_range-input-fill_js").then(__webpack_require__.bind(__webpack_require__, /*! ./range-input-fill.js */ "./node_modules/@aritz-cracker/browser-utils/dist/workarounds/range-input-fill.js"));
        }
        await importRangeInputFillWorkaroundPromise;
    }
}
function needsCustomElementsWorkaround() {
    try {
        const newElemName = "test-button-" + Date.now().toString(36);
        class HTMLTestButton extends HTMLButtonElement {
        }
        ;
        customElements.define(newElemName, HTMLTestButton, { extends: "button" });
        const newBtn = document.createElement("button", { is: newElemName });
        return !(newBtn instanceof HTMLButtonElement && newBtn instanceof HTMLTestButton);
    }
    catch (ex) {
        return true;
    }
}
let importCustomElementsWorkaroundPromise;
async function applyCustomElementsWorkaround() {
    if (needsCustomElementsWorkaround()) {
        // The use of Function.prototype helps pevent tree-shaking
        Function.prototype(await __webpack_require__.e(/*! import() */ "vendors-node_modules_ungap_custom-elements_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js", 19)));
        if (!importCustomElementsWorkaroundPromise) {
            importCustomElementsWorkaroundPromise = __webpack_require__.e(/*! import() */ "vendors-node_modules_ungap_custom-elements_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js", 19));
        }
        await importCustomElementsWorkaroundPromise;
    }
}
async function applyAllWorkarounds() {
    await Promise.all([
        applyCustomElementsWorkaround(),
        applyRangeInputFillWorkaround()
    ]);
}

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/shorthands.js
/**
 * Shorthand for `document.querySelector`
 */
const q = /*#__PURE__*/ document.querySelector.bind(/*#__PURE__*/ document);
/**
 * Shorthand for `document.querySelectorAll`
 */
const qa = /*#__PURE__*/ document.querySelectorAll.bind(/*#__PURE__*/ document);
/**
 * Shorthand for `document.addEventListener`
 */
const on = /*#__PURE__*/ document.addEventListener.bind(/*#__PURE__*/ document);
/**
 * Shorthand for `document.removeEventListener`
 */
const off = /*#__PURE__*/ document.removeEventListener.bind(/*#__PURE__*/ document);
/**
 * Just call's preventDefault on the event.
 * Useful for `thing.addEventListener("something", preventDefault);`
 */
function preventDefault(ev) {
    ev.preventDefault();
}

;// CONCATENATED MODULE: ./node_modules/@aritz-cracker/browser-utils/dist/index.js







/***/ }),

/***/ "./node_modules/dropdown-menu-element/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/dropdown-menu-element/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveDropdownMenuElement: () => (/* binding */ ActiveDropdownMenuElement)
/* harmony export */ });
/* unused harmony exports DropdownMenuElement, DropdownMenuItemElement, DropdownMenuInnerElement, ActiveDropdownMenuItemElement, ActiveDropdownMenuFormContextElement */
/* harmony import */ var _aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aritz-cracker/browser-utils */ "./node_modules/@aritz-cracker/browser-utils/dist/index.js");

function hide(elem) {
    elem.hidden = true;
    elem.style.display = "none";
}
function unhide(elem) {
    elem.hidden = false;
    elem.style.display = "";
}
let allowEvilAttributes = Boolean(document.documentElement.dataset.allowEvilAttributes);
/**
 * A root-level dropdown menu list. Represented as `<dropdown-menu>` in the document.
 *
 * If you wish to create this element programatically, use `new DropdownMenuElement()`.
 *
 * This element emits custom DOM events on both itself and the linked element which triggered it. This happens when a
 * menu is opened and when the user selects an option. For more information, see the linked documentation listed below.
 *
 * * {@link DropdownOpenEvent | `"dropdownOpen"`}
 * * {@link DropdownSelectEvent | `"dropdownSelect"`}
 *
 * This element has additional HTML attributes which can be used to define its behaviour. For more information, see the
 * linked documentation listed below.
 *
 * * `click-trigger`: See the {@link DropdownMenuElement.clickTrigger | `clickTrigger` property}
 * * `linked-elements`: See the {@link DropdownMenuElement.linkedElements | `linkedElements` property}
 * * `ondropdownselect`: See the {@link DropdownMenuElement.ondropdownselect | `ondropdownselect` property}
 * * `ondropdownopen`: See the {@link DropdownMenuElement.ondropdownopen | `ondropdownopen` property}
 * * `open-position`: See the {@link DropdownMenuElement.openPosition | `openPosition` property}
 *
 * The direct children of this element should _only_ be {@link DropdownMenuItemElement | `<dropdown-menu-item>`} or
 * `<hr>` elements.
 *
 * If your menus contain inputs, such as check boxes or radio buttons, any programatic changes to their `value` and
 * `checked` properties will not be reflected while the menu is open. `"input"` and `"change"` events will still be
 * fired as normal when the user changes the input values.
 *
 * If you want your menu to have sub-menus, see the
 * {@link DropdownMenuInnerElement | `<dropdown-menu-inner>` element}
 *
 * Note that this element is always hidden, and a different element gets shown to the users when they invoke the menu.
 * Therefore, this element should not get targetted for styling. See the
 * {@link ActiveDropdownMenuElement | `<active-dropdown-menu>` element} for details.
 */
class DropdownMenuElement extends HTMLElement {
    static get observedAttributes() {
        return [
            "click-trigger",
            "linked-elements",
            "ondropdownselect",
            "ondropdownopen",
            "open-position"
        ];
    }
    /**
     * Whether or not `"ondropdownselect"` and `"ondropdownopen"` will evaluate string values as functions.
     * The default value is `false`, Unless the root element (the top-most `<html>` or `<svg>`) has the
     * `data-allow-evil-attributes` attribute set to anything other than an empty string when this library was loaded.
     *
     * This is because it assumed that HTML sanitizers don't consider the creation of _new_ inline event handlers.
     *
     * @param dragons set to `true` to be more vulnerable to XSS.
     */
    static allowEvilAttributes(dragons) {
        allowEvilAttributes = dragons;
    }
    constructor() {
        super();
        this.addEventListener("dropdownSelect", (ev) => {
            if (this.#optionSelectCallback != null) {
                if (this.#optionSelectCallback(ev.detail) === false) {
                    ev.preventDefault();
                }
            }
        });
        this.addEventListener("dropdownOpen", (ev) => {
            if (this.#openCallback != null) {
                if (this.#openCallback(ev.detail) === false) {
                    ev.preventDefault();
                }
            }
        });
        // Cannot be called here, the constructor must not edit the child nodes (including attributes) in any way.
        // hide(this);
    }
    /**
     * Opens the menu. The `MouseEvent` is used to determine the menu position along with the element which triggered
     * the opening of the menu.
     *
     * @param ev the event which should trigger the opening of this menu.
     */
    open(ev) {
        this.handleEvent(ev);
    }
    /**
     * If the current active menu exists and was created from this element, then the active menu will be
     * {@link ActiveDropdownMenuElement.close | closed}
     */
    close() {
        if (activeRootDropdownMenu && activeRootDropdownMenu.originalRootMenu == this) {
            activeRootDropdownMenu.close();
        }
    }
    /**
     * Used to handle "click" and "contextmenu" events of the linked elements. Currently an alias of
     * {@link DropdownMenuElement.open | open}, though this may change in a manner which doesn't adhere to semver.
     * @internal
     */
    handleEvent(ev) {
        if (!(ev.currentTarget instanceof Element)) {
            return;
        }
        if (activeRootDropdownMenu && activeRootDropdownMenu.originalRootMenu == this) {
            ev.preventDefault();
            activeRootDropdownMenu.close();
            return;
        }
        if (this.dispatchEvent(new CustomEvent("dropdownOpen", {
            cancelable: true,
            detail: {
                dropdownMenu: this,
                triggeringElement: ev.currentTarget
            }
        })) &&
            ev.currentTarget.dispatchEvent(new CustomEvent("dropdownOpen", {
                bubbles: true,
                cancelable: true,
                detail: {
                    dropdownMenu: this,
                    triggeringElement: ev.currentTarget
                }
            }))) {
            ev.preventDefault();
            const newActiveMenu = new ActiveDropdownMenuElement({
                menuTemplate: this,
                originalRootMenu: this,
                originalTriggeringElement: ev.currentTarget,
            });
            newActiveMenu.style.setProperty('--triggering-element-client-width', ev.currentTarget.clientWidth + "px");
            newActiveMenu.style.setProperty('--triggering-element-client-height', ev.currentTarget.clientHeight + "px");
            if (ev.currentTarget instanceof HTMLElement) {
                newActiveMenu.style.setProperty('--triggering-element-offset-width', ev.currentTarget.offsetWidth + "px");
                newActiveMenu.style.setProperty('--triggering-element-offset-height', ev.currentTarget.clientHeight + "px");
            }
            newActiveMenu.open(ev, this.openPosition);
        }
    }
    #optionSelectCallback = null;
    /**
     * Callback function to call when a menu item has been selected. Explicitly returning `false` will pervent the menu
     * from closing.
     *
     * If {@link DropdownMenuElement.allowEvilAttributes | `allowEvilAttributes`} has been set to `true`, this can also
     * be set to a `string` which will be evaluated, therefore enabling the use of the `ondropdownselect` attribute as
     * an inline event handler. The inline event handler will be passed a {@link DropdownSelectEventDetails | `details`}
     * parameter.
     */
    get ondropdownselect() {
        return this.#optionSelectCallback;
    }
    set ondropdownselect(v) {
        if (v == null) {
            this.removeAttribute("ondropdownselect");
        }
        else if (typeof v !== "string") {
            this.setAttribute("ondropdownselect", "function () { [hidden code] }");
            this.#optionSelectCallback = v;
        }
        else {
            this.setAttribute("ondropdownselect", v);
        }
    }
    #openCallback = null;
    /**
     * Callback function to call when a menu item has been selected. Explicitly returning `false` will pervent the menu
     * from opening, and the default "click" or "contextmenu" behaviour will not be prevented.
     *
     * If {@link DropdownMenuElement.allowEvilAttributes | `allowEvilAttributes`} has been set to `true`, this can also
     * be set to a `string` which will be evaluated, therefore enabling the use of the `ondropdownopen` attribute as an
     * inline event handler. The inline event handler will be passed a {@link DropdownSelectEventDetails | `details`}
     * parameter.
     */
    get ondropdownopen() {
        return this.#openCallback;
    }
    set ondropdownopen(v) {
        if (v == null) {
            this.removeAttribute("ondropdownopen");
        }
        else if (typeof v !== "string") {
            this.setAttribute("ondropdownopen", "function () { [hidden code] }");
            this.#optionSelectCallback = v;
        }
        else {
            this.setAttribute("ondropdownopen", v);
        }
    }
    #linkedElements = null;
    #linkedElementsSelector = null;
    /**
     * Reflects the value of the `linked-elements` attribute, which is a query selector defining all the elements to
     * listen for  `"click"` or `"contextmenu"` events.
     *
     * This selector is ran from the root element's scope. In most cases, that will effectively be the same as
     * `document`.
     *
     * The selector can contain the string `#this`, which works exactly as it sounds, enabling simple selectors like
     * `#this + *` meaning the direct sibling after this element, or `*:has(+ #this)` meaning the direct sibling before
     * this element. Though this will only function if the document does not already contain an element with an ID of
     * `this`.
     *
     * For more information as to how the selector is used and when it is queried, see the
     * {@link DropdownMenuElement.refreshLinkedElements | `refreshLinkedElements()` method}.
     *
     */
    get linkedElements() {
        return this.#linkedElementsSelector;
    }
    set linkedElements(value) {
        if (value == null) {
            this.removeAttribute("linked-elements");
        }
        else {
            this.setAttribute("linked-elements", value);
        }
    }
    /**
     * Removes this element as an event listener from all previously linked elements, if any, then Listens to the
     * `"click"` or `"contextmenu"` events, depending on what the
     * {@link DropdownMenuElement.clickTrigger | `click-trigger`} attribute is set to, on all the elements specified by
     * the {@link DropdownMenuElement.linkedElements | `linked-elements`} attribute.
     *
     * When the relevant event is emitted on the relevant elements, the menu is opened.
     *
     * This method is automatically called under the following circumstances
     *
     * * When this element is added to the DOM (though not if it is simply moved)
     * * When this element is removed from the DOM
     * * When the {@link DropdownMenuElement.linkedElements | `linked-elements`} attribute changes
     * * When the {@link DropdownMenuElement.clickTrigger | `click-trigger`} attribute changes
     */
    refreshLinkedElements() {
        if (this.#linkedElements) {
            this.#linkedElements.forEach(elem => {
                if (elem.ariaHasPopup == "menu" || elem.ariaHasPopup == "true") {
                    elem.ariaHasPopup = null;
                }
                elem.removeEventListener("click", this);
                elem.removeEventListener("contextmenu", this);
            });
            this.#linkedElements = null;
        }
        if (!this.#linkedElementsSelector || !this.isConnected) {
            return;
        }
        try {
            if (!this.id) {
                this.id = "this";
            }
            this.#linkedElements = 
            // Shouldn't getRootNode always return a ParentNode? (Even if ParentNode is a ts invention?)
            this.getRootNode().querySelectorAll(this.#linkedElementsSelector);
            this.#linkedElements.forEach(elem => {
                switch (this.#clickTrigger) {
                    case "primary":
                        elem.addEventListener("click", this);
                        if (elem instanceof HTMLButtonElement ||
                            elem.getAttribute("role") == "button") {
                            elem.ariaHasPopup = "menu";
                        }
                        break;
                    case "secondary":
                        elem.addEventListener("contextmenu", this);
                        break;
                    default:
                    // No default
                }
            });
        }
        finally {
            if (this.id == "this") {
                this.id = "";
            }
        }
    }
    #clickTrigger = "secondary";
    /**
     * Reflects the value of the `click-trigger` attribute. If not set, or set to an invalid value, this defaults to
     * `"secondary"`.
     *
     * A value of `"primary"` means this menu will be opened on `"click"` events. A value of `"secondary"`, means this
     * menu will be opened on `"contextmenu"` events.
     */
    get clickTrigger() {
        return this.#clickTrigger;
    }
    set clickTrigger(v) {
        if (v == null) {
            this.removeAttribute("click-trigger");
        }
        else {
            this.setAttribute("click-trigger", DropdownMenuElement.normalizeClickTriggerAttribute(v));
        }
    }
    static normalizeClickTriggerAttribute(v) {
        if (v == "primary") {
            return "primary";
        }
        return "secondary";
    }
    #openPosition = null;
    /**
     * Reflects the value of the `open-position` attribute. If not set, or set to an invalid value, this defaults to
     * `"element-bottom-rightward"` if {@link DropdownMenuElement.clickTrigger | `click-trigger`} is `"primary"`, or
     * `"pointer"` if {@link DropdownMenuElement.clickTrigger | `click-trigger`} is `"secondary"`.
     *
     * See the {@link DropdownOpenPosition} documentation for details
     */
    get openPosition() {
        if (this.#openPosition) {
            return this.#openPosition;
        }
        if (this.#clickTrigger == "primary") {
            return "element-bottom-rightward";
        }
        return "pointer";
    }
    set openPosition(v) {
        const actualNewValue = DropdownMenuElement.normalizeOpenPositionAttribute(v);
        if (actualNewValue == null) {
            this.removeAttribute("click-trigger");
        }
        else {
            this.setAttribute("click-trigger", actualNewValue);
        }
    }
    static normalizeOpenPositionAttribute(v) {
        switch (v) {
            case "element-bottom-centered":
            case "element-bottom-leftward":
            case "element-bottom-rightward":
            case "element-left-centered":
            case "element-left-downward":
            case "element-left-upward":
            case "element-right-centered":
            case "element-right-downward":
            case "element-right-upward":
            case "element-top-centered":
            case "element-top-leftward":
            case "element-top-rightward":
            case "pointer":
                return v;
            default:
                return null;
        }
    }
    /**
     * @internal
     */
    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case "ondropdownselect": {
                if (newValue == null) {
                    this.#optionSelectCallback = null;
                }
                else if (newValue != "function () { [hidden code] }" && allowEvilAttributes) {
                    this.#optionSelectCallback = new Function("details", newValue);
                }
                break;
            }
            case "ondropdownopen": {
                if (newValue == null) {
                    this.#openCallback = null;
                }
                else if (newValue != "function () { [hidden code] }" && allowEvilAttributes) {
                    this.#openCallback = new Function("details", newValue);
                }
                break;
            }
            case "linked-elements": {
                this.#linkedElementsSelector = newValue;
                this.refreshLinkedElements();
                break;
            }
            case "click-trigger": {
                this.#clickTrigger = DropdownMenuElement.normalizeClickTriggerAttribute(newValue);
                this.refreshLinkedElements();
                break;
            }
            case "open-position": {
                this.#openPosition = DropdownMenuElement.normalizeOpenPositionAttribute(newValue);
            }
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        hide(this);
        this.refreshLinkedElements();
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        this.refreshLinkedElements();
    }
    /**
     * @internal
     */
    adoptedCallback() {
        this.refreshLinkedElements();
    }
}
customElements.define("dropdown-menu", DropdownMenuElement);
/**
 * A dropdown menu item. Represented as `<dropdown-menu-item>` in the document.
 *
 * This element has additional HTML attributes which can be used to define its behaviour. For more information, see the
 * linked documentation listed below.
 *
 * * `disabled`: See the {@link DropdownMenuItemElement.value | `disabled` property}
 * * `value`: See the {@link DropdownMenuItemElement.value | `value` property}
 *
 */
class DropdownMenuItemElement extends HTMLElement {
    static get observedAttributes() {
        return [
            "value",
            "disabled"
        ];
    }
    constructor() {
        super();
    }
    #disabled = false;
    /**
     * Is `true` if the `disabled` attribute exists, including if it's set to an empty string. `false` otherwise.
     *
     * Note that setting this value will not set the corresponding value on the
     * {@link ActiveDropdownMenuItemElement | `<active-dropdown-menu-item>`} after it is opened.
     */
    get disabled() {
        return this.#disabled;
    }
    set disabled(value) {
        if (value) {
            this.setAttribute("disabled", "");
        }
        else {
            this.removeAttribute("disabled");
        }
    }
    #value;
    /**
     * Reflects the value of the `value` attribute. If not set, defaults to `undefined`. This value will be passed to
     * {@link DropdownSelectEventDetails.selectedValue | `details.selectedValue` } property of the
     * {@link DropdownSelectEvent | `"dropdownSelect"`} event if the corresponding
     * {@link ActiveDropdownMenuItemElement | `<active-dropdown-menu-item>`} is selected.
     *
     * Note that setting this value will not set the corresponding value on the
     * {@link ActiveDropdownMenuItemElement | `<active-dropdown-menu-item>`}  after it is opened.
     */
    get value() {
        return this.#value;
    }
    set value(value) {
        if (typeof value == "string") {
            this.setAttribute("value", value);
        }
        else {
            this.removeAttribute("value");
        }
    }
    /**
     * @internal
     */
    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case "disabled":
                this.#disabled = newValue != null;
                break;
            case "value":
                this.#value = newValue ?? undefined;
                break;
            default:
        }
    }
}
customElements.define("dropdown-menu-item", DropdownMenuItemElement);
/**
 * A dropdown sub-menu. Represented as `<dropdown-menu-inner>` in the document.
 *
 * The direct children of this element should _only_ be {@link DropdownMenuItemElement | `<dropdown-menu-item>` } or
 * `<hr>` elements.
 *
 * This element must be a part of one of 4 specific tree structures, as shown below:
 * ```html
 * …
 * <dropdown-menu>
 *     …
 *     <dropdown-menu-item>
 *         …
 *         <dropdown-menu-inner><!--Your sub-menu here--></dropdown-menu-inner>
 *         …
 *     </dropdown-menu-item>
 *     …
 * </dropdown-menu>
 * …
 * ```
 * or
 * ```html
 * …
 * <dropdown-menu-inner>
 *     …
 *     <dropdown-menu-item>
 *         …
 *         <dropdown-menu-inner><!--Your sub-menu here--></dropdown-menu-inner>
 *         …
 *     </dropdown-menu-item>
 *     …
 * </dropdown-menu-inner>
 * …
 * ```
 * or
 * ```html
 * …
 * <dropdown-menu>
 *     …
 *     <dropdown-menu-item>
 *         …
 *         <form>
 *             …
 *             <dropdown-menu-inner><!--Your sub-menu here--></dropdown-menu-inner>
 *             …
 *         </form>
 *         …
 *     </dropdown-menu-item>
 *     …
 * </dropdown-menu>
 * …
 * ```
 * or
 * ```html
 * …
 * <dropdown-menu-inner>
 *     …
 *     <dropdown-menu-item>
 *         …
 *         <form>
 *             …
 *             <dropdown-menu-inner><!--Your sub-menu here--></dropdown-menu-inner>
 *             …
 *         </form>
 *         …
 *     </dropdown-menu-item>
 *     …
 * </dropdown-menu-inner>
 * …
 * ```
 */
class DropdownMenuInnerElement extends HTMLElement {
    constructor() {
        super();
    }
    /**
     * Returns true if this element is where it should be. False otherwise
     */
    validChild() {
        return ((this.parentElement?.tagName == "DROPDOWN-MENU-ITEM" &&
            (this.parentElement.parentElement?.tagName == "DROPDOWN-MENU" ||
                this.parentElement.parentElement?.tagName == "DROPDOWN-MENU-INNER")) || (this.parentElement?.tagName == "FORM" &&
            this.parentElement.parentElement?.tagName == "DROPDOWN-MENU-ITEM" &&
            (this.parentElement.parentElement.parentElement?.tagName == "DROPDOWN-MENU" ||
                this.parentElement.parentElement.parentElement?.tagName == "DROPDOWN-MENU-INNER")));
    }
    /**
     * @internal
     */
    connectedCallback() {
        if (!this.validChild()) {
            console.error("<dropdown-menu-inner> has been used in a place which is inappropriate. " +
                "Only the following tree states are valid: " +
                "*:is(dropdown-menu-inner, dropdown-menu) > dropdown-menu-item > dropdown-menu-inner, " +
                "*:is(dropdown-menu-inner, dropdown-menu) > dropdown-menu-item > form > dropdown-menu-inner");
        }
    }
    /**
     * @internal
     */
    adoptedCallback() {
        this.connectedCallback();
    }
}
customElements.define("dropdown-menu-inner", DropdownMenuInnerElement);
let activeRootDropdownMenu = null;
document.addEventListener("contextmenu", (ev) => {
    if (activeRootDropdownMenu) {
        const clickedElem = ev.target;
        if (activeRootDropdownMenu.contains(clickedElem) ||
            (activeRootDropdownMenu.originalRootMenu.clickTrigger == "secondary" &&
                activeRootDropdownMenu.triggeringElement.contains(clickedElem))) {
            return;
        }
        activeRootDropdownMenu.close();
        ev.preventDefault();
    }
});
let clickEventIsPointerEvent = false;
document.addEventListener("click", (ev) => {
    // At the time of writing, false for FF+Safari, true for Chromium.
    // My hacky code to get keyboard inputs to work without this.
    clickEventIsPointerEvent = typeof PointerEvent !== "undefined" &&
        Object.getPrototypeOf(ev).constructor == PointerEvent;
    if (activeRootDropdownMenu) {
        const clickedElem = ev.target;
        if (activeRootDropdownMenu.contains(clickedElem) ||
            (activeRootDropdownMenu.originalRootMenu.clickTrigger == "primary" &&
                activeRootDropdownMenu.triggeringElement.contains(clickedElem))) {
            return;
        }
        activeRootDropdownMenu.close();
    }
});
/**
 * This is the menu which actually gets shown to the user. Represented by `<active-dropdown-menu>` in the document.
 *
 * It is automatically created and appended to the end of the `<body>` whenever a
 * {@link DropdownOpenEvent | `"dropdownOpen"`} event is emitted without being cancelled. It is not intended to be
 * created by anything other than this library.
 *
 * Creating a new element and appending it at the end of the body ensures that the full menu will still be shown even
 * when defined within elements with the `overflow: hidden` CSS rule.
 *
 * When created, this uses the root `<dropdown-menu>`, along with any `<dropdown-menu-inner>` elements as templates.
 *
 * It follows the same structure as a `<dropdown-menu>`, except all `<dropdown-menu-inner>` elements
 * are replaced with `<active-dropdown-menu>` elements, and all `<dropdown-menu-item>` elements are replaced with
 * {@link ActiveDropdownMenuItemElement | `<active-dropdown-menu-item>`} elements.
 *
 * For the purposes of CSS styling, here are some tips:
 * * Use `active-dropdown-menu-item:has(active-dropdown-menu)::after` to add a menu charm to hint at the existance of a
 *   sub-menu.
 * * Highlighted menu options can targeted using `active-dropdown-menu-item:focus`. Using `:hover` is unnecessary.
 * * Use `active-dropdown-menu-item:has(active-dropdown-menu:not([inert]))` to target a
 *   `<active-dropdown-menu-item>` which has its sub-menu currently open.
 * * Use `active-dropdown-menu-item[disabled]` to target a menu item that's disabled. the `:disabled` pseudo class
 *   won't work.
 * * In order to help with CSS animations, this element uses the following classes.
 *   * `dropdown-upward`: the menu should expand upward
 *   * `dropdown-downward`: the menu should expand downward
 *   * `dropdown-leftward`: the menu should expand to the left
 *   * `dropdown-rightward`: the menu should expand to the right
 *   * `dropdown-closing`: the menu is about to be closed or removed. If any of the `animation-*` CSS properties change
 *     when this class is applied, then this element will not be removed until the animation finishes playing, unless
 *     the animation is set to play infinitely, in which case it is ignored. While the closing animation plays, this
 *     element will be set to "inert", allowing users to interact with the page as if the menu didn't exist.
 * * If a `<active-dropdown-menu-item>` is activated, that is, if it was clicked on or if the enter key was pressed
 *   while it is focuses, then a `dropdown-selected` class will be added to the `<active-dropdown-menu-item>` at the
 *   same time when the `dropdown-closing` class is added to the `<active-dropdown-menu>`. Note that this class will
 *   have no affect as to when the element is removed.
 */
class ActiveDropdownMenuElement extends HTMLElement {
    /**
     * @returns the root active menu if it exists
     */
    static getActiveRoot() {
        return activeRootDropdownMenu;
    }
    /**
     * closes the active menu if it exists
     */
    static closeActiveRoot() {
        if (activeRootDropdownMenu) {
            activeRootDropdownMenu.close();
        }
    }
    #linkedFormMap;
    /**
     * @internal
     */
    _getFormContext(form) {
        const rootMenu = this.#rootMenu;
        const linkedFormMap = rootMenu.#linkedFormMap;
        let result = linkedFormMap.get(form);
        if (!result) {
            result = new ActiveDropdownMenuFormContextElement({
                originalElement: form
            });
            linkedFormMap.set(form, result);
            rootMenu.appendChild(result);
        }
        return result;
    }
    /**
     * @internal
     */
    _addFormContext(form, context) {
        const rootMenu = this.#rootMenu;
        const linkedFormMap = rootMenu.#linkedFormMap;
        linkedFormMap.set(form, context);
    }
    #rootMenu;
    get rootMenu() {
        return this.#rootMenu;
    }
    #triggeringElement;
    get triggeringElement() {
        return this.#triggeringElement;
    }
    #originalRootMenu;
    get originalRootMenu() {
        return this.#originalRootMenu;
    }
    #originalTriggeringElement;
    get originalTriggeringElement() {
        return this.#originalTriggeringElement;
    }
    /**
     * @internal
     */
    constructor(options) {
        if (!options) {
            throw new Error("<active-dropdown-menu> isn't designed to be used on its own");
        }
        super();
        const { menuTemplate, rootMenu, triggeringElement = options.originalTriggeringElement, originalRootMenu, originalTriggeringElement, } = options;
        if (!rootMenu) {
            this.#linkedFormMap = new Map();
        }
        this.addEventListener("contextmenu", ev => { ev.preventDefault(); });
        this.#menuTemplate = menuTemplate;
        this.#rootMenu = rootMenu ?? this;
        this.#triggeringElement = triggeringElement;
        this.#originalRootMenu = originalRootMenu;
        this.#originalTriggeringElement = originalTriggeringElement;
    }
    #menuTemplate;
    #pendingOpen;
    connectedCallback() {
        this.setAttribute("role", "menu");
        this.style.position = "absolute";
        this.style.zIndex = (2 ** 30) + "";
        this.inert = true;
        hide(this);
        if (this.childElementCount == 0) {
            this.classList.value = this.#menuTemplate.classList.value;
            for (let i = 0; i < this.#menuTemplate.childElementCount; i += 1) {
                const childElement = this.#menuTemplate.children[i];
                if (childElement instanceof HTMLHRElement) {
                    this.appendChild(childElement.cloneNode(true));
                }
                else if (childElement instanceof DropdownMenuItemElement) {
                    this.appendChild(new ActiveDropdownMenuItemElement({
                        parentMenu: this,
                        originalElement: childElement
                    }));
                }
            }
        }
        if (this.#pendingOpen) {
            this.open(...this.#pendingOpen);
            this.#pendingOpen = undefined;
        }
    }
    /**
     * Gets the first non-disabled `<active-dropdown-menu-item>` on the list if there is any.
     */
    get firstMenuItem() {
        let firstItem = this.firstElementChild;
        while (firstItem != null &&
            (!(firstItem instanceof ActiveDropdownMenuItemElement) ||
                firstItem.disabled)) {
            firstItem = firstItem.nextElementSibling;
        }
        return firstItem;
    }
    /**
     * Gets the last non-disabled `<active-dropdown-menu-item>` on the list if there is any.
     */
    get lastMenuItem() {
        let lastItem = this.lastElementChild;
        while (lastItem != null &&
            (!(lastItem instanceof ActiveDropdownMenuItemElement) ||
                lastItem.disabled)) {
            lastItem = lastItem.previousElementSibling;
        }
        return lastItem;
    }
    #pageXPos = 0;
    get pageXPos() {
        return this.#pageXPos;
    }
    #pageYPos = 0;
    get pageYPos() {
        return this.#pageYPos;
    }
    #closeAnimationTimeout;
    /**
     * @internal
     */
    open(event, position) {
        if (!this.isConnected) {
            // If this isn't already in the document when an open was requested, then this is probably a root menu.
            if (activeRootDropdownMenu) {
                activeRootDropdownMenu.close();
            }
            activeRootDropdownMenu = this;
            // The connectedCallback automatically hides this element (as it cannot be done in the constructor), so we
            // must attempt to open this menu again after we're in the document.
            this.#pendingOpen = [event, position];
            document.body.append(this);
            return;
        }
        if (!this.inert) {
            // probably already opened
            return;
        }
        if (this.#closeAnimationTimeout != undefined) {
            clearTimeout(this.#closeAnimationTimeout);
        }
        const maxY = Math.floor(Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight));
        const maxX = Math.floor(Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth));
        this.classList.remove("dropdown-closing", "dropdown-upward", "dropdown-downward", "dropdown-leftward", "dropdown-rightward");
        unhide(this); // this.clientWidth and this.clientHeight won't work while this is hidden.
        let pageXPos = 0;
        let pageYPos = 0;
        const trigElemBoundingBox = 
        // Don't bother getting the bbox if we're not using it, but keep the TS lie alive.
        position == "pointer" ? new DOMRect() :
            // FIXME: MDN Notes that Safari on iOS returns incorrect values while zoomed-in. This should be tested
            this.triggeringElement.getBoundingClientRect();
        const trigElemPagePosLeft = trigElemBoundingBox.left + window.scrollX;
        const trigElemPagePosRight = trigElemBoundingBox.right + window.scrollX;
        const trigElemPagePosTop = trigElemBoundingBox.top + window.scrollY;
        const trigElemPagePosBottom = trigElemBoundingBox.bottom + window.scrollY;
        // Make some reasonable corrections, 
        switch (position) {
            case "element-bottom-centered":
            case "element-bottom-leftward":
            case "element-bottom-rightward":
                if ((trigElemPagePosBottom + this.clientHeight) > maxY &&
                    (trigElemPagePosTop - this.clientHeight) > 0) {
                    position = ("element-top-" + position.substring(15) // "element-bottom-".length;	
                    );
                }
                break;
            case "element-left-centered":
            case "element-left-downward":
            case "element-left-upward":
                if ((trigElemPagePosLeft - this.clientWidth) < 0 &&
                    (trigElemPagePosRight + this.clientWidth) < maxX) {
                    position = ("element-right-" + position.substring(13) // "element-left-".length;	
                    );
                }
                break;
            case "element-right-centered":
            case "element-right-downward":
            case "element-right-upward":
                if ((trigElemPagePosRight + this.clientWidth) > maxX &&
                    (trigElemPagePosLeft - this.clientWidth) > 0) {
                    position = ("element-left-" + position.substring(14) // "element-right-".length;	
                    );
                }
                break;
            case "element-top-centered":
            case "element-top-leftward":
            case "element-top-rightward":
                if ((trigElemPagePosTop - this.clientHeight) < 0 &&
                    (trigElemPagePosBottom + this.clientHeight) < maxY) {
                    position = ("element-bottom-" + position.substring(12) // "element-top-".length;	
                    );
                }
                break;
        }
        // Sometimes this special sauce is needed during multiple classList changes to refresh the animation
        void this.offsetWidth;
        switch (position) {
            case "element-bottom-centered":
                pageXPos = Math.round((trigElemPagePosLeft + trigElemPagePosRight) / 2 - (this.offsetWidth / 2));
                pageYPos = Math.ceil(trigElemPagePosBottom);
                this.classList.add("dropdown-downward");
                break;
            case "element-bottom-leftward":
                // bottom-right, towards left
                pageXPos = Math.round(trigElemPagePosRight - this.offsetWidth);
                pageYPos = Math.ceil(trigElemPagePosBottom);
                this.classList.add("dropdown-downward");
                break;
            case "element-bottom-rightward":
                // bottom-left, towards right
                pageXPos = Math.round(trigElemPagePosLeft);
                pageYPos = Math.ceil(trigElemPagePosBottom);
                this.classList.add("dropdown-downward");
                break;
            case "element-left-centered":
                pageXPos = Math.floor(trigElemPagePosLeft - this.offsetWidth);
                pageYPos = Math.round((trigElemPagePosTop + trigElemPagePosBottom) / 2 - (this.clientHeight / 2));
                this.classList.add("dropdown-leftward");
                break;
            case "element-left-downward":
                pageXPos = Math.floor(trigElemPagePosLeft - this.offsetWidth);
                pageYPos = Math.round(trigElemPagePosTop);
                this.classList.add("dropdown-leftward");
                break;
            case "element-left-upward":
                pageXPos = Math.floor(trigElemPagePosLeft - this.offsetWidth);
                pageYPos = Math.round(trigElemPagePosBottom - this.clientHeight);
                this.classList.add("dropdown-leftward");
                break;
            case "element-right-centered":
                pageXPos = Math.ceil(trigElemPagePosRight);
                pageYPos = Math.round((trigElemPagePosTop + trigElemPagePosBottom) / 2 - (this.clientHeight / 2));
                this.classList.add("dropdown-rightward");
                break;
            case "element-right-downward":
                pageXPos = Math.ceil(trigElemPagePosRight);
                pageYPos = Math.round(trigElemPagePosTop);
                this.classList.add("dropdown-rightward");
                break;
            case "element-right-upward":
                pageXPos = Math.ceil(trigElemPagePosRight);
                pageYPos = Math.round(trigElemPagePosBottom - this.clientHeight);
                this.classList.add("dropdown-rightward");
                break;
            case "element-top-centered":
                pageXPos = Math.round((trigElemPagePosLeft + trigElemPagePosRight) / 2 - (this.offsetWidth / 2));
                pageYPos = Math.floor(trigElemPagePosTop - this.clientHeight);
                this.classList.add("dropdown-upward");
                break;
            case "element-top-leftward":
                // top-right, towards left
                pageXPos = Math.round(trigElemPagePosRight - this.offsetWidth);
                pageYPos = Math.floor(trigElemPagePosTop - this.clientHeight);
                this.classList.add("dropdown-upward");
                break;
            case "element-top-rightward":
                // top-left, towards right
                pageXPos = Math.round(trigElemPagePosLeft);
                pageYPos = Math.floor(trigElemPagePosTop - this.clientHeight);
                this.classList.add("dropdown-upward");
                break;
            case "pointer":
                pageXPos = Math.ceil(event.pageX);
                pageYPos = Math.ceil(event.pageY);
                if ((event.pageY + this.clientHeight) > maxY) {
                    if ((event.pageX + this.clientWidth) > maxX) {
                        pageXPos -= this.offsetWidth;
                        this.classList.add("dropdown-leftward");
                    }
                    else {
                        this.classList.add("dropdown-rightward");
                    }
                }
                else {
                    this.classList.add("dropdown-downward");
                }
        }
        // Clamp the menu position so hopefully the entire thing fits within view
        pageXPos -= Math.max(0, pageXPos + this.offsetWidth - maxX);
        pageXPos = Math.max(0, pageXPos);
        pageYPos -= Math.max(0, pageYPos + this.offsetHeight - maxY);
        pageYPos = Math.max(0, pageYPos);
        this.#pageXPos = pageXPos;
        this.#pageYPos = pageYPos;
        if (this.triggeringElement.parentElement instanceof ActiveDropdownMenuElement) {
            // ActiveDropdownMenuElement also has "position: absolute", which means that the "top" and "left" rules
            // will be relative to that instead of the body.
            pageXPos -= this.triggeringElement.parentElement.pageXPos;
            pageYPos -= this.triggeringElement.parentElement.pageYPos;
            // We must also account for the parent menu's border and padding.
            pageXPos -= ((this.triggeringElement.parentElement.offsetWidth -
                this.triggeringElement.parentElement.clientWidth) / 2);
            pageYPos -= ((this.triggeringElement.parentElement.offsetHeight -
                this.triggeringElement.parentElement.clientHeight) / 2);
            // Let's account for ours too on the Y axis since having the menus (mostly) align looks prettier
            pageYPos -= (this.offsetHeight - this.clientHeight);
        }
        this.style.left = pageXPos + "px";
        this.style.top = pageYPos + "px";
        this.inert = false;
        if (document.querySelector(":focus-visible") != null) {
            // Probably using keyboard navigation
            this.firstMenuItem?.focus();
        }
    }
    /**
     * Closes the sub-menu if it is opened
     */
    closeSubMenu(except) {
        // Yes, I am assuming there's only 1 opened sub-menu
        const subMenu = this.querySelector("active-dropdown-menu:not([inert])");
        if (subMenu == null || subMenu == except) {
            return;
        }
        subMenu.close();
    }
    /**
     * Calls `.focus()` On the first item on the inner-most opened sub-menu if it exists, else calls `.focus()` on the
     * first non-disabled item on this list if it exists.
     */
    focusDefaultItem() {
        const subMenu = this.querySelector("active-dropdown-menu:not([inert])");
        if (subMenu == null) {
            this.firstMenuItem?.focus();
        }
        else {
            subMenu.focusDefaultItem();
        }
    }
    /**
     * Closes this menu, and calls .focus() on the element which triggered the creation of this.
     * If this is a sub-menu, that would be the parent list-item. Otherwise it would be the linked element
     * associted with the root menu.
     *
     * This function also add the `dropdown-closing` class to this element. If the `animation` CSS property changes
     * after applying that class, then this element will become "inert" (not reacting to user input and allowing users
     * to click "through" this element) and will be finally removed after the animation finishes playing.
     */
    close() {
        if (this.inert) {
            // probably already closing
            return;
        }
        this.inert = true;
        const { animation: oldFullAnimation } = getComputedStyle(this);
        this.classList.add("dropdown-closing");
        const { animationDelay, animationDuration, animationIterationCount, animationFillMode, animation: newFullAnimation } = getComputedStyle(this);
        const animationTime = (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.parseCSSTime)(animationDelay) +
            (0,_aritz_cracker_browser_utils__WEBPACK_IMPORTED_MODULE_0__.parseCSSTime)(animationDuration) *
                Number(animationIterationCount);
        // isNaN also implicitly covers the case which animationIterationCount is "infinite"
        if (oldFullAnimation == newFullAnimation || isNaN(animationTime) || animationTime <= 0) {
            if (this.#rootMenu == this) {
                this.remove();
            }
            else {
                hide(this);
                this.querySelectorAll("active-dropdown-menu:not([inert])").forEach(elem => {
                    // "inert" is used as an "is closed" check, so we better be consistent
                    elem.inert = true;
                    hide(elem);
                });
            }
        }
        else {
            if (animationFillMode == "none") {
                console.warn("<active-dropdown-menu class=\"" + this.classList.value + "\"> has a closing animation with " +
                    "\"animation-fill-mode\" set/defaulting to \"none\". This may result in perceived graphical " +
                    "glitches. If this effect is unintentional, try setting the \"animation-fill-mode\" CSS " +
                    "property to \"forwards\".");
            }
            // Reset the animation
            this.style.animation = "none";
            void this.offsetHeight; // Trigger reflow (applies animation: none)
            this.style.animation = "";
            this.#closeAnimationTimeout = setTimeout(() => {
                if (this.#rootMenu == this) {
                    this.remove();
                }
                else {
                    hide(this);
                    this.querySelectorAll("active-dropdown-menu:not([inert]").forEach(elem => {
                        // "inert" is used as an "is closed" check, so we better be consistent
                        elem.inert = true;
                        hide(elem);
                    });
                }
            }, animationTime + 35);
        }
        if (activeRootDropdownMenu == this) {
            activeRootDropdownMenu = null;
        }
        if (this.triggeringElement instanceof HTMLElement &&
            this.triggeringElement.tabIndex >= 0) {
            this.triggeringElement.focus();
        }
    }
}
customElements.define("active-dropdown-menu", ActiveDropdownMenuElement);
/**
 * This is the element which actually gets shown to the user. Represented by `<active-dropdown-menu-item>` in the
 * DOM. This is usually created by using the `<dropdown-menu-item>` elements as templates. Currently, only the `class`,
 * `disabled`, and `value` attributes, along with child elements and text are copied.
 *
 * It is not intended to be created by anything other than this library.
 *
 * This element has a default tab index of `0`, allowing it to be focusable. It is automatically focused when the mouse
 * hovers over it.
 *
 * This element has additional HTML attributes which can be used to define its behaviour. For more information, see the
 * linked documentation listed below.
 *
 * * `disabled`: See the {@link DropdownMenuItemElement.value | `disabled` property}
 * * `value`: See the {@link DropdownMenuItemElement.value | `value` property}
 */
class ActiveDropdownMenuItemElement extends HTMLElement {
    #parentMenu;
    #originalElement;
    /**
     * @internal
     */
    constructor(options) {
        if (!options) {
            throw new Error("<active-dropdown-menu-item> isn't designed to be used on its own");
        }
        super();
        this.#parentMenu = options.parentMenu;
        this.#originalElement = options.originalElement;
    }
    /**
     * @internal
     */
    connectedCallback() {
        // Step 0: Random boilerplate
        const parentMenu = this.#parentMenu;
        const originalElement = this.#originalElement;
        this.style.whiteSpace = "nowrap";
        this.style.userSelect = "none";
        this.classList.value = originalElement.classList.value;
        this.value = originalElement.value;
        this.disabled = originalElement.disabled;
        // Step 1: Clone children
        let subMenu;
        for (let i = 0; i < originalElement.childNodes.length; i += 1) {
            const originalChildNode = originalElement.childNodes[i];
            if (originalChildNode instanceof HTMLFormElement) {
                const formCtx = new ActiveDropdownMenuFormContextElement({
                    originalElement: originalChildNode
                });
                parentMenu._addFormContext(originalChildNode, formCtx);
                for (let i = 0; i < originalChildNode.childNodes.length; i += 1) {
                    const originalGrandchildNode = originalChildNode.childNodes[i];
                    if (originalGrandchildNode instanceof DropdownMenuInnerElement) {
                        if (subMenu) {
                            console.warn("Multiple <dropdown-menu-inner> elements within the same <dropdown-menu-item> element will not be handled.");
                            continue;
                        }
                        subMenu = new ActiveDropdownMenuElement({
                            menuTemplate: originalGrandchildNode,
                            rootMenu: parentMenu.rootMenu,
                            triggeringElement: this,
                            originalRootMenu: parentMenu.originalRootMenu,
                            originalTriggeringElement: parentMenu.originalTriggeringElement
                        });
                        formCtx.appendChild(subMenu);
                    }
                    else if (originalGrandchildNode instanceof Element ||
                        originalGrandchildNode instanceof Text) {
                        formCtx.appendChild(originalGrandchildNode.cloneNode(true));
                    }
                }
                this.appendChild(formCtx);
            }
            else if (originalChildNode instanceof DropdownMenuInnerElement) {
                if (subMenu) {
                    console.warn("Multiple <dropdown-menu-inner> elements within the same <dropdown-menu-item> element will not be handled.");
                    continue;
                }
                subMenu = new ActiveDropdownMenuElement({
                    menuTemplate: originalChildNode,
                    rootMenu: parentMenu.rootMenu,
                    triggeringElement: this,
                    originalRootMenu: parentMenu.originalRootMenu,
                    originalTriggeringElement: parentMenu.originalTriggeringElement
                });
                this.appendChild(subMenu);
            }
            else if (originalChildNode instanceof Element ||
                originalChildNode instanceof Text) {
                this.appendChild(originalChildNode.cloneNode(true));
            }
        }
        // Step 2: Handle checkboxes and radio buttons (maybe other spicy stuff?)
        const originalInputs = originalElement.querySelectorAll("input:not(:scope dropdown-menu-inner *)");
        const pointerInputs = this.querySelectorAll("input:not(:scope active-dropdown-menu *)");
        // In practice this shouldn't be more than 1, but people sometimes do wild things.
        if (originalInputs.length != pointerInputs.length) {
            console.warn("<active-dropdown-menu-item> somehow didn't properly clone the <input> elements");
        }
        for (let i = 0; i < Math.min(originalInputs.length, pointerInputs.length); i += 1) {
            const originalInput = originalInputs[i];
            const pointerInput = pointerInputs[i];
            if (originalInput.form) {
                const formCtx = parentMenu._getFormContext(originalInput.form);
                pointerInput.setAttribute("form", formCtx.id);
            }
            const passThroughCallback = (ev) => {
                if (originalInput.type == "checkbox" || originalInput.type == "radio") {
                    originalInput.checked = pointerInput.checked;
                    this.focus(); // Return focus back to the menu item itself.
                }
                else {
                    originalInput.value = pointerInput.value;
                }
                if (pointerInputs.length == 1) {
                    this.ariaChecked = pointerInput.checked + "";
                }
                // We can't re-dispatch an existing event, so we gotta clone it
                const clonedEventInit = {};
                // Apparently important properties like `bubbles` may not be on ev itself, but on the prototype.
                // That said, we also can't iterate on the prototype itself. Fun.
                for (const key of Object.keys(Object.getPrototypeOf(ev)).concat(...Object.keys(ev))) {
                    clonedEventInit[key] = ev[key];
                }
                const clonedEvent = new (Object.getPrototypeOf(ev).constructor)(ev.type, clonedEventInit);
                if (!originalInput.dispatchEvent(clonedEvent)) {
                    ev.preventDefault();
                }
            };
            pointerInput.addEventListener("input", passThroughCallback);
            pointerInput.addEventListener("change", passThroughCallback);
        }
        // Step 3: Handle interaction events (or don't if disabled)
        if (pointerInputs.length == 1) {
            // As far as I understand, I shouldn't need to use the "aria-checked" attribute if I already use the
            // relevant input.
            // Update: No they don't. Set ariaChecked property.
            if (pointerInputs[0].type == "radio") {
                this.setAttribute("role", "menuitemradio");
                pointerInputs[0].tabIndex = -1;
                this.ariaChecked = pointerInputs[0].checked + "";
            }
            else if (pointerInputs[0].type == "checkbox") {
                this.setAttribute("role", "menuitemcheckbox");
                pointerInputs[0].tabIndex = -1;
                this.ariaChecked = pointerInputs[0].checked + "";
            }
            else {
                this.setAttribute("role", "menuitem");
            }
        }
        else {
            this.setAttribute("role", "menuitem");
        }
        this.tabIndex = 0; // make this focusable. This also allows this element to listen to key presses
        const removeOtherSubMenus = (ev) => {
            if (subMenu?.contains(ev.target)) {
                return;
            }
            parentMenu.closeSubMenu(subMenu);
        };
        this.addEventListener("click", removeOtherSubMenus);
        this.addEventListener("mouseenter", removeOtherSubMenus);
        this.addEventListener("focusin", removeOtherSubMenus);
        this.addEventListener("mouseenter", ev => {
            if (subMenu?.contains(ev.target)) {
                return;
            }
            if (this.disabled) {
                return;
            }
            // Hack to make keyboard navigation work seamlessly
            this.focus();
        });
        this.addEventListener("mouseleave", ev => {
            if (subMenu?.contains(ev.target)) {
                return;
            }
            // No one else seems to leave their menu option highlighted after moving the mouse away, so...
            this.blur();
        });
        if (subMenu) {
            this.ariaHasPopup = "menu";
            let menuOpenTimer;
            this.addEventListener("click", (ev) => {
                if (subMenu.contains(ev.target)) {
                    return;
                }
                if (this.disabled) {
                    return;
                }
                if (menuOpenTimer != undefined) {
                    clearTimeout(menuOpenTimer);
                    menuOpenTimer = undefined;
                }
                subMenu.open(ev, "element-right-downward");
            });
            this.addEventListener("mouseenter", (ev) => {
                if (subMenu.contains(ev.target)) {
                    return;
                }
                if (this.disabled) {
                    return;
                }
                // Having dropdown menus immediately open proved distracting if they had open and close animations.
                // It is kind of expected that that sub-menu's won't open if you're "quickly" moving your mouse over
                // The entire menu.
                menuOpenTimer = setTimeout(() => {
                    // Menus and their sub-menus explicitly become inert when they're closed or closing
                    if (parentMenu.inert) {
                        return;
                    }
                    subMenu.open(ev, "element-right-downward");
                }, 
                // Through my completely unscientific testing with a sample size of 1, "quickly" means approx 240px
                // per second. These are CSS pixels anyway, which are a lie on high-DPI displays. (Yay)
                Math.min(Math.min(this.offsetHeight, this.offsetWidth) * 4, 500 // https://youtu.be/R_b2B5tKBUM?t=88
                ));
            });
            this.addEventListener("mouseleave", (ev) => {
                if (subMenu.contains(ev.target)) {
                    return;
                }
                if (menuOpenTimer != undefined) {
                    clearTimeout(menuOpenTimer);
                    menuOpenTimer = undefined;
                }
            });
        }
        else {
            this.addEventListener("click", (ev) => {
                if (this.disabled) {
                    return;
                }
                const clickedElement = ev.target;
                if (clickedElement != this) {
                    for (let i = 0; i < pointerInputs.length; i += 1) {
                        if (clickedElement.contains(pointerInputs[i])) {
                            // Tantacrul on YouTube once said that having context menus disappear when you click on
                            // checkboxes is annoying. So let's see how this goes.
                            return;
                        }
                    }
                }
                for (let i = 0; i < Math.min(originalInputs.length, pointerInputs.length); i += 1) {
                    const originalInput = originalInputs[i];
                    const pointerInput = pointerInputs[i];
                    let fireEvent = false;
                    if (originalInput.type == "radio") {
                        fireEvent = !originalInput.checked;
                        pointerInput.checked = true; // Might show in the close animation
                        originalInput.checked = true;
                    }
                    else if (originalInput.type == "checkbox") {
                        // This might be confusing considering the behaviour above
                        originalInput.checked = !originalInput.checked;
                        pointerInput.checked = originalInput.checked; // Might show in the close animation
                        fireEvent = true;
                    }
                    if (fireEvent) {
                        originalInput.dispatchEvent(new InputEvent("input", {
                            // Vaules determined by examining a "natural" input event in Firefox
                            bubbles: true,
                            cancelable: false,
                            composed: true
                        }));
                        originalInput.dispatchEvent(new Event("change", {
                            // Values determined by examining a "natural" change event in Firefox
                            bubbles: true,
                            cancelable: false,
                            composed: false
                        }));
                    }
                }
                if (parentMenu.originalRootMenu.dispatchEvent(new CustomEvent("dropdownSelect", {
                    cancelable: true,
                    detail: {
                        selectedElement: this,
                        selectedElementOriginal: originalElement,
                        selectedValue: this.value,
                        dropdownMenu: parentMenu.originalRootMenu,
                        triggeringElement: parentMenu.originalTriggeringElement
                    }
                })) &&
                    parentMenu.originalTriggeringElement.dispatchEvent(new CustomEvent("dropdownSelect", {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            selectedElement: this,
                            selectedElementOriginal: originalElement,
                            selectedValue: this.value,
                            dropdownMenu: parentMenu.originalRootMenu,
                            triggeringElement: parentMenu.originalTriggeringElement
                        }
                    }))) {
                    this.classList.add("dropdown-selected");
                    parentMenu.rootMenu.close();
                }
            });
        }
        this.addEventListener("keypress", ev => {
            if (subMenu?.contains(ev.target)) {
                return;
            }
            switch (ev.key) {
                case " ":
                    if (pointerInputs.length == 1 &&
                        (pointerInputs[0].type == "radio" ||
                            pointerInputs[0].type == "checkbox")) {
                        // The ARIA docs say that pressing space while focusing on an menuitemradio or menuitemcheckbox
                        // must be like clicking the input without closing the menu.
                        // The case where the checkbox being explicitly clicked not closing the menu is already
                        // handeled above, so let's just tap into that.
                        pointerInputs[0].dispatchEvent(clickEventIsPointerEvent ?
                            new PointerEvent("click", { isPrimary: true }) :
                            new MouseEvent("click"));
                        ev.preventDefault();
                        break;
                    }
                // else, fall through.
                case "Enter":
                    this.dispatchEvent(clickEventIsPointerEvent ?
                        new PointerEvent("click", { isPrimary: true }) :
                        new MouseEvent("click"));
                    ev.preventDefault();
                    break;
                default:
            }
        });
        this.addEventListener("keydown", ev => {
            if (subMenu?.contains(ev.target)) {
                return;
            }
            switch (ev.key) {
                case "Home": {
                    parentMenu.firstMenuItem?.focus();
                    ev.preventDefault();
                    break;
                }
                case "End": {
                    parentMenu.lastMenuItem?.focus();
                    ev.preventDefault();
                    break;
                }
                case "ArrowUp": {
                    this.previousMenuItem?.focus();
                    ev.preventDefault();
                    break;
                }
                case "ArrowDown": {
                    this.nextMenuItem?.focus();
                    ev.preventDefault();
                    break;
                }
                case "Escape":
                case "ArrowLeft":
                    parentMenu.close();
                    ev.preventDefault();
                    break;
                case "ArrowRight":
                    if (subMenu) {
                        subMenu.open(clickEventIsPointerEvent ?
                            new PointerEvent("click", { isPrimary: true }) :
                            new MouseEvent("click"), "element-right-downward");
                        subMenu.firstMenuItem?.focus();
                    }
                    ev.preventDefault();
                    break;
                case "Tab": {
                    if (ev.shiftKey) {
                        if (this == parentMenu.firstMenuItem) {
                            ev.preventDefault();
                            parentMenu.close();
                        }
                    }
                    else {
                        if (this == parentMenu.lastMenuItem) {
                            ev.preventDefault();
                            parentMenu.close();
                        }
                    }
                    break;
                }
                default:
            }
        });
    }
    static get observedAttributes() {
        return [
            "value",
            "disabled"
        ];
    }
    #disabled = false;
    /**
     * Is `true` if the `disabled` attribute exists, including if it's set to an empty string. `false` otherwise.
     *
     * Note that setting this value will not set the corresponding value on the
     * {@link DropdownMenuItemElement | `<dropdown-menu-item>`}.
     */
    get disabled() {
        return this.#disabled;
    }
    set disabled(value) {
        if (value) {
            this.setAttribute("disabled", "");
        }
        else {
            this.removeAttribute("disabled");
        }
    }
    #value;
    /**
     * Reflects the value of the `value` attribute. If not set, defaults to `undefined`. This value will be passed to
     * {@link DropdownSelectEventDetails.selectedValue | `details.selectedValue` } property of the
     * {@link DropdownSelectEvent | `"dropdownSelect"`} event if selected.
     *
     * Note that setting this value will not set the corresponding value on the
     * {@link DropdownMenuItemElement | `<dropdown-menu-item>`}.
     */
    get value() {
        return this.#value;
    }
    set value(value) {
        if (typeof value == "string") {
            this.setAttribute("value", value);
        }
        else {
            this.removeAttribute("value");
        }
    }
    /**
     * @internal
     */
    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case "disabled":
                this.#disabled = newValue != null;
                this.ariaDisabled = this.#disabled + "";
                this.inert = this.#disabled;
                break;
            case "value":
                this.#value = newValue ?? undefined;
                break;
            default:
        }
    }
    /**
     * Gets the next non-disabled `<active-dropdown-menu-item>` after this one if it exists
     */
    get nextMenuItem() {
        let nextItem = this.nextElementSibling;
        while (nextItem != null &&
            (!(nextItem instanceof ActiveDropdownMenuItemElement) ||
                nextItem.disabled)) {
            nextItem = nextItem.nextElementSibling;
        }
        return nextItem;
    }
    /**
     * Gets the previous non-disabled `<active-dropdown-menu-item>` previous this one if it exists
     */
    get previousMenuItem() {
        let previousItem = this.previousElementSibling;
        while (previousItem != null &&
            (!(previousItem instanceof ActiveDropdownMenuItemElement) ||
                previousItem.disabled)) {
            previousItem = previousItem.previousElementSibling;
        }
        return previousItem;
    }
}
customElements.define("active-dropdown-menu-item", ActiveDropdownMenuItemElement);
document.addEventListener("keydown", ev => {
    if (activeRootDropdownMenu &&
        !activeRootDropdownMenu.contains(document.activeElement)) {
        switch (ev.key) {
            case "Home":
            case "End":
            case "ArrowUp":
            case "ArrowDown":
            case "ArrowLeft":
            case "ArrowRight":
            case "Tab":
                ev.preventDefault();
                activeRootDropdownMenu.focusDefaultItem();
                break;
            case "Escape":
                ev.preventDefault();
                activeRootDropdownMenu.close();
                break;
            default:
        }
    }
});
let linkedFormMap = new Map();
/**
 * @internal
 */
class ActiveDropdownMenuFormContextElement extends HTMLFormElement {
    constructor(options) {
        super();
        this.setAttribute("is", "active-dropdown-form-context"); // Sometimes this isn't done automatically
        const { originalElement } = options;
        this.addEventListener("submit", (ev) => {
            ev.preventDefault();
            this.#originalElement.requestSubmit();
        });
        this.id = "dropdown_ctx_" + Date.now().toString(36) + Math.random().toString(36).substring(2);
        this.#originalElement = originalElement;
    }
    #originalElement;
    disconnectedCallback() {
        // The disconnectedCallback is the only practical reason why this is an extended built-in element. Though the
        // fact that the Safari team cannot comprehend why you might want a "cleaner" way to attached custom behaviour
        // to pre-existing built-in element is ridiculous. Especially when it's a part of the HTML living standard.
        linkedFormMap.delete(this.#originalElement);
    }
}
customElements.define("active-dropdown-form-context", ActiveDropdownMenuFormContextElement, { extends: "form" });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@crownfi/css-gothic-fantasy:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"css-gothic-fantasy.dist": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_crownfi_css_gothic_fantasy"] = self["webpackChunk_crownfi_css_gothic_fantasy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./src/_test_only.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./styles/index.css");
/******/ 	
/******/ })()
;