/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root = root;
        this.initialize.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation =
            foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRipple = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window); },
            computeBoundingRect: function () { return instance.root.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root
                    .removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterResizeHandler: function (handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function () {
                return ({ x: window.pageXOffset, y: window.pageYOffset });
            },
            isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root
                    .addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerResizeHandler: function (handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function (className) { return instance.root.classList.remove(className); },
            updateCssVariable: function (varName, value) {
                return instance.root.style.setProperty(varName, value);
            },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/component.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/component.js ***!
  \*****************************************************/
/*! exports provided: MDCTabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return MDCTabBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/tab-scroller/component */ "./node_modules/@material/tab-scroller/component.js");
/* harmony import */ var _material_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/tab/component */ "./node_modules/@material/tab/component.js");
/* harmony import */ var _material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab/foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var strings = _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabBarFoundation"].strings;
var tabIdCounter = 0;
var MDCTabBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabBar, _super);
    function MDCTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabBar.attachTo = function (root) {
        return new MDCTabBar(root);
    };
    Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.tabList_.forEach(function (tab) { return tab.focusOnActivate = focusOnActivate; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
        set: function (useAutomaticActivation) {
            this.foundation.setUseAutomaticActivation(useAutomaticActivation);
        },
        enumerable: true,
        configurable: true
    });
    MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
        if (tabFactory === void 0) { tabFactory = function (el) { return new _material_tab_component__WEBPACK_IMPORTED_MODULE_3__["MDCTab"](el); }; }
        if (tabScrollerFactory === void 0) { tabScrollerFactory = function (el) { return new _material_tab_scroller_component__WEBPACK_IMPORTED_MODULE_2__["MDCTabScroller"](el); }; }
        this.tabList_ = this.instantiateTabs_(tabFactory);
        this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
    };
    MDCTabBar.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleTabInteraction_ = function (evt) {
            return _this.foundation.handleTabInteraction(evt);
        };
        this.handleKeyDown_ = function (evt) { return _this.foundation.handleKeyDown(evt); };
        this.listen(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
        this.listen('keydown', this.handleKeyDown_);
        for (var i = 0; i < this.tabList_.length; i++) {
            if (this.tabList_[i].active) {
                this.scrollIntoView(i);
                break;
            }
        }
    };
    MDCTabBar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unlisten(_material_tab_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
        this.unlisten('keydown', this.handleKeyDown_);
        this.tabList_.forEach(function (tab) { return tab.destroy(); });
        if (this.tabScroller_) {
            this.tabScroller_.destroy();
        }
    };
    MDCTabBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            scrollTo: function (scrollX) { return _this.tabScroller_.scrollTo(scrollX); },
            incrementScroll: function (scrollXIncrement) {
                return _this.tabScroller_.incrementScroll(scrollXIncrement);
            },
            getScrollPosition: function () { return _this.tabScroller_.getScrollPosition(); },
            getScrollContentWidth: function () { return _this.tabScroller_.getScrollContentWidth(); },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            setActiveTab: function (index) { return _this.foundation.activateTab(index); },
            activateTabAtIndex: function (index, clientRect) {
                return _this.tabList_[index].activate(clientRect);
            },
            deactivateTabAtIndex: function (index) { return _this.tabList_[index].deactivate(); },
            focusTabAtIndex: function (index) { return _this.tabList_[index].focus(); },
            getTabIndicatorClientRectAtIndex: function (index) {
                return _this.tabList_[index].computeIndicatorClientRect();
            },
            getTabDimensionsAtIndex: function (index) {
                return _this.tabList_[index].computeDimensions();
            },
            getPreviousActiveTabIndex: function () {
                for (var i = 0; i < _this.tabList_.length; i++) {
                    if (_this.tabList_[i].active) {
                        return i;
                    }
                }
                return -1;
            },
            getFocusedTabIndex: function () {
                var tabElements = _this.getTabElements_();
                var activeElement = document.activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: function (id) {
                for (var i = 0; i < _this.tabList_.length; i++) {
                    if (_this.tabList_[i].id === id) {
                        return i;
                    }
                }
                return -1;
            },
            getTabListLength: function () { return _this.tabList_.length; },
            notifyTabActivated: function (index) { return _this.emit(strings.TAB_ACTIVATED_EVENT, { index: index }, true); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabBarFoundation"](adapter);
    };
    /**
     * Activates the tab at the given index
     * @param index The index of the tab
     */
    MDCTabBar.prototype.activateTab = function (index) {
        this.foundation.activateTab(index);
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index THe index of the tab
     */
    MDCTabBar.prototype.scrollIntoView = function (index) {
        this.foundation.scrollIntoView(index);
    };
    /**
     * Returns all the tab elements in a nice clean array
     */
    MDCTabBar.prototype.getTabElements_ = function () {
        return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR));
    };
    /**
     * Instantiates tab components on all child tab elements
     */
    MDCTabBar.prototype.instantiateTabs_ = function (tabFactory) {
        return this.getTabElements_().map(function (el) {
            el.id = el.id || "mdc-tab-" + ++tabIdCounter;
            return tabFactory(el);
        });
    };
    /**
     * Instantiates tab scroller component on the child tab scroller element
     */
    MDCTabBar.prototype.instantiateTabScroller_ = function (tabScrollerFactory) {
        var tabScrollerElement = this.root.querySelector(strings.TAB_SCROLLER_SELECTOR);
        if (tabScrollerElement) {
            return tabScrollerFactory(tabScrollerElement);
        }
        return null;
    };
    return MDCTabBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/constants.js ***!
  \*****************************************************/
/*! exports provided: numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
};
var numbers = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/foundation.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/tab-bar/foundation.js ***!
  \******************************************************/
/*! exports provided: MDCTabBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return MDCTabBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].HOME_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY);
ACCEPTABLE_KEYS.add(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY);
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ARROW_LEFT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ARROW_RIGHT_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].END_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].HOME_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].HOME_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ENTER_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY);
KEYCODE_MAP.set(_constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].SPACE_KEYCODE, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY);
var MDCTabBarFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabBarFoundation, _super);
    function MDCTabBarFoundation(adapter) {
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MDCTabBarFoundation.defaultAdapter), adapter)) || this;
        _this.useAutomaticActivation_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabBarFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                scrollTo: function () { return undefined; },
                incrementScroll: function () { return undefined; },
                getScrollPosition: function () { return 0; },
                getScrollContentWidth: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                isRTL: function () { return false; },
                setActiveTab: function () { return undefined; },
                activateTabAtIndex: function () { return undefined; },
                deactivateTabAtIndex: function () { return undefined; },
                focusTabAtIndex: function () { return undefined; },
                getTabIndicatorClientRectAtIndex: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                getTabDimensionsAtIndex: function () { return ({ rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 }); },
                getPreviousActiveTabIndex: function () { return -1; },
                getFocusedTabIndex: function () { return -1; },
                getIndexOfTabById: function () { return -1; },
                getTabListLength: function () { return 0; },
                notifyTabActivated: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */
    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
        this.useAutomaticActivation_ = useAutomaticActivation;
    };
    MDCTabBarFoundation.prototype.activateTab = function (index) {
        var previousActiveIndex = this.adapter.getPreviousActiveTabIndex();
        if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
            return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
            this.adapter.deactivateTabAtIndex(previousActiveIndex);
            previousClientRect =
                this.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter.notifyTabActivated(index);
    };
    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent_(evt);
        // Early exit if the event key isn't one of the keyboard navigation keys
        if (key === undefined) {
            return;
        }
        // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
        if (!this.isActivationKey_(key)) {
            evt.preventDefault();
        }
        if (this.useAutomaticActivation_) {
            if (this.isActivationKey_(key)) {
                return;
            }
            var index = this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(), key);
            this.adapter.setActiveTab(index);
            this.scrollIntoView(index);
        }
        else {
            var focusedTabIndex = this.adapter.getFocusedTabIndex();
            if (this.isActivationKey_(key)) {
                this.adapter.setActiveTab(focusedTabIndex);
            }
            else {
                var index = this.determineTargetFromKey_(focusedTabIndex, key);
                this.adapter.focusTabAtIndex(index);
                this.scrollIntoView(index);
            }
        }
    };
    /**
     * Handles the MDCTab:interacted event
     */
    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
        this.adapter.setActiveTab(this.adapter.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange_(index)) {
            return;
        }
        // Always scroll to 0 if scrolling to the 0th index
        if (index === 0) {
            return this.adapter.scrollTo(0);
        }
        // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value
        if (index === this.adapter.getTabListLength() - 1) {
            return this.adapter.scrollTo(this.adapter.getScrollContentWidth());
        }
        if (this.isRTL_()) {
            return this.scrollIntoViewRTL_(index);
        }
        this.scrollIntoView_(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */
    MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
        var isRTL = this.isRTL_();
        var maxIndex = this.adapter.getTabListLength() - 1;
        var shouldGoToEnd = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].END_KEY;
        var shouldDecrement = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_RIGHT_KEY && !isRTL || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
            index = maxIndex;
        }
        else if (shouldDecrement) {
            index -= 1;
        }
        else if (shouldIncrement) {
            index += 1;
        }
        else {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }
        else if (index > maxIndex) {
            index = 0;
        }
        return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
            return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
            return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
            return index - 1;
        }
        if (rightEdgeIsCloser) {
            return index + 1;
        }
        return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
            return index + 1;
        }
        if (rightEdgeIsCloser) {
            return index - 1;
        }
        return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */
    MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
            return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
    };
    MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
        return key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SPACE_KEY || key === _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */
    MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
        return index >= 0 && index < this.adapter.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */
    MDCTabBarFoundation.prototype.isRTL_ = function () {
        return this.adapter.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */
    MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    return MDCTabBarFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-bar/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab-bar/index.js ***!
  \*************************************************/
/*! exports provided: MDCTabBar, numbers, strings, MDCTabBarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/tab-bar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTabBar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTabBarFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/component.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/component.js ***!
  \***********************************************************/
/*! exports provided: MDCTabIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicator", function() { return MDCTabIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _fading_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fading-foundation */ "./node_modules/@material/tab-indicator/fading-foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/* harmony import */ var _sliding_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliding-foundation */ "./node_modules/@material/tab-indicator/sliding-foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCTabIndicator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabIndicator, _super);
    function MDCTabIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabIndicator.attachTo = function (root) {
        return new MDCTabIndicator(root);
    };
    MDCTabIndicator.prototype.initialize = function () {
        this.content_ = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCTabIndicatorFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTabIndicator.prototype.computeContentClientRect = function () {
        return this.foundation.computeContentClientRect();
    };
    MDCTabIndicator.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            computeContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            setContentStyleProperty: function (prop, value) {
                return _this.content_.style.setProperty(prop, value);
            },
        };
        // tslint:enable:object-literal-sort-keys
        if (this.root.classList.contains(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCTabIndicatorFoundation"].cssClasses.FADE)) {
            return new _fading_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFadingTabIndicatorFoundation"](adapter);
        }
        // Default to the sliding indicator
        return new _sliding_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCSlidingTabIndicatorFoundation"](adapter);
    };
    MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
        this.foundation.activate(previousIndicatorClientRect);
    };
    MDCTabIndicator.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    return MDCTabIndicator;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/constants.js ***!
  \***********************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var strings = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/fading-foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/fading-foundation.js ***!
  \*******************************************************************/
/*! exports provided: MDCFadingTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFadingTabIndicatorFoundation", function() { return MDCFadingTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFadingTabIndicatorFoundation);
//# sourceMappingURL=fading-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/foundation.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/foundation.js ***!
  \************************************************************/
/*! exports provided: MDCTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabIndicatorFoundation", function() { return MDCTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-indicator/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MDCTabIndicatorFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabIndicatorFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-indicator/sliding-foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/sliding-foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCSlidingTabIndicatorFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSlidingTabIndicatorFoundation", function() { return MDCSlidingTabIndicatorFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.NO_TRANSITION);
        this.adapter.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.NO_TRANSITION);
        this.adapter.addClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
        this.adapter.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"].cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTabIndicatorFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSlidingTabIndicatorFoundation);
//# sourceMappingURL=sliding-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/component.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/component.js ***!
  \**********************************************************/
/*! exports provided: MDCTabScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScroller", function() { return MDCTabScroller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-scroller/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/tab-scroller/util.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTabScroller = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabScroller, _super);
    function MDCTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScroller.attachTo = function (root) {
        return new MDCTabScroller(root);
    };
    MDCTabScroller.prototype.initialize = function () {
        this.area_ = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"].strings.AREA_SELECTOR);
        this.content_ = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function () { return _this.foundation.handleInteraction(); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation.handleTransitionEnd(evt); };
        this.area_.addEventListener('wheel', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('touchstart', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('pointerdown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('mousedown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.addEventListener('keydown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area_.removeEventListener('wheel', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('touchstart', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('pointerdown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('mousedown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.area_.removeEventListener('keydown', this.handleInteraction_, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
        this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) {
                return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(evtTarget, selector);
            },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            addScrollAreaClass: function (className) { return _this.area_.classList.add(className); },
            setScrollAreaStyleProperty: function (prop, value) {
                return _this.area_.style.setProperty(prop, value);
            },
            setScrollContentStyleProperty: function (prop, value) {
                return _this.content_.style.setProperty(prop, value);
            },
            getScrollContentStyleValue: function (propName) {
                return window.getComputedStyle(_this.content_).getPropertyValue(propName);
            },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area_.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area_.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area_.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area_.getBoundingClientRect(); },
            computeScrollContentClientRect: function () {
                return _this.content_.getBoundingClientRect();
            },
            computeHorizontalScrollbarHeight: function () {
                return _util__WEBPACK_IMPORTED_MODULE_5__["computeHorizontalScrollbarHeight"](document);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerFoundation"](adapter);
    };
    /**
     * Returns the current visual scroll position
     */
    MDCTabScroller.prototype.getScrollPosition = function () {
        return this.foundation.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MDCTabScroller.prototype.getScrollContentWidth = function () {
        return this.content_.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        this.foundation.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MDCTabScroller.prototype.scrollTo = function (scrollX) {
        this.foundation.scrollTo(scrollX);
    };
    return MDCTabScroller;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/constants.js ***!
  \**********************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test',
};
var strings = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCTabScrollerFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerFoundation", function() { return MDCTabScrollerFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/* harmony import */ var _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rtl-default-scroller */ "./node_modules/@material/tab-scroller/rtl-default-scroller.js");
/* harmony import */ var _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rtl-negative-scroller */ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js");
/* harmony import */ var _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rtl-reverse-scroller */ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTabScrollerFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabScrollerFoundation, _super);
    function MDCTabScrollerFoundation(adapter) {
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MDCTabScrollerFoundation.defaultAdapter), adapter)) || this;
        /**
         * Controls whether we should handle the transitionend and interaction events during the animation.
         */
        _this.isAnimating_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                eventTargetMatchesSelector: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addScrollAreaClass: function () { return undefined; },
                setScrollAreaStyleProperty: function () { return undefined; },
                setScrollContentStyleProperty: function () { return undefined; },
                getScrollContentStyleValue: function () { return ''; },
                setScrollAreaScrollLeft: function () { return undefined; },
                getScrollAreaScrollLeft: function () { return 0; },
                getScrollContentOffsetWidth: function () { return 0; },
                getScrollAreaOffsetWidth: function () { return 0; },
                computeScrollAreaClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeScrollContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeHorizontalScrollbarHeight: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabScrollerFoundation.prototype.init = function () {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */
    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
        if (this.isRTL_()) {
            return this.computeCurrentScrollPositionRTL_();
        }
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */
    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
        // Early exit if we aren't animating
        if (!this.isAnimating_) {
            return;
        }
        // Prevent other event listeners from handling this event
        this.stopScrollAnimation_();
    };
    /**
     * Handles the transitionend event
     */
    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        var evtTarget = evt.target;
        if (!this.isAnimating_ ||
            !this.adapter.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
            return;
        }
        this.isAnimating_ = false;
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement using animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        this.animate_(this.getIncrementScrollOperation_(scrollXIncrement));
    };
    /**
     * Increment the scroll value by the scrollXIncrement without animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        var operation = this.getIncrementScrollOperation_(scrollXIncrement);
        if (operation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        this.adapter.setScrollAreaScrollLeft(operation.finalScrollPosition);
    };
    /**
     * Scrolls to the given scrollX value
     */
    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
        if (this.isRTL_()) {
            return this.scrollToRTL_(scrollX);
        }
        this.scrollTo_(scrollX);
    };
    /**
     * @return Browser-specific {@link MDCTabScrollerRTL} instance.
     */
    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
        if (!this.rtlScrollerInstance_) {
            this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
        }
        return this.rtlScrollerInstance_;
    };
    /**
     * @return translateX value from a CSS matrix transform function string.
     */
    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
        var transformValue = this.adapter.getScrollContentStyleValue('transform');
        // Early exit if no transform is present
        if (transformValue === 'none') {
            return 0;
        }
        // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
            return 0;
        }
        var matrixParams = match[1];
        // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
        // @ts-ignore These unused variables should retain their semantic names for clarity.
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(matrixParams.split(','), 6), a = _a[0], b = _a[1], c = _a[2], d = _a[3], tx = _a[4], ty = _a[5];
        return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */
    MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
        var translateX = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
    };
    MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue_(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_({
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate_(animation);
    };
    /**
     * Internal method to compute the increment scroll operation values.
     * @param scrollX The desired scroll position increment
     * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
     */
    MDCTabScrollerFoundation.prototype.getIncrementScrollOperation_ = function (scrollX) {
        if (this.isRTL_()) {
            return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue_(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        };
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */
    MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
        var _this = this;
        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/
        this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)");
        // Force repaint
        this.adapter.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
            _this.adapter.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
            _this.adapter.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating_ = true;
    };
    /**
     * Stops scroll animation
     */
    MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
        this.isAnimating_ = false;
        var currentScrollPosition = this.getAnimatingScrollPosition_();
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */
    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        if (this.isRTL_()) {
            return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */
    MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollLeft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter.getScrollAreaScrollLeft();
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.
        if (newScrollLeft < 0) {
            // Undo the scrollLeft test check
            this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
            return new _rtl_negative_scroller__WEBPACK_IMPORTED_MODULE_4__["MDCTabScrollerRTLNegative"](this.adapter);
        }
        var rootClientRect = this.adapter.computeScrollAreaClientRect();
        var contentClientRect = this.adapter.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        // Undo the scrollLeft test check
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
        // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.
        if (rightEdgeDelta === newScrollLeft) {
            return new _rtl_reverse_scroller__WEBPACK_IMPORTED_MODULE_5__["MDCTabScrollerRTLReverse"](this.adapter);
        }
        return new _rtl_default_scroller__WEBPACK_IMPORTED_MODULE_3__["MDCTabScrollerRTLDefault"](this.adapter);
    };
    MDCTabScrollerFoundation.prototype.isRTL_ = function () {
        return this.adapter.getScrollContentStyleValue('direction') === 'rtl';
    };
    return MDCTabScrollerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-default-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-default-scroller.js ***!
  \*********************************************************************/
/*! exports provided: MDCTabScrollerRTLDefault, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLDefault", function() { return MDCTabScrollerRTLDefault; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLDefault = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabScrollerRTLDefault, _super);
    function MDCTabScrollerRTLDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges_().right;
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(right - currentScrollLeft);
    };
    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
        return scrollX;
    };
    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    return MDCTabScrollerRTLDefault;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLDefault);
//# sourceMappingURL=rtl-default-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-negative-scroller.js ***!
  \**********************************************************************/
/*! exports provided: MDCTabScrollerRTLNegative, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLNegative", function() { return MDCTabScrollerRTLNegative; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLNegative = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabScrollerRTLNegative, _super);
    function MDCTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLNegative;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLNegative);
//# sourceMappingURL=rtl-negative-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-reverse-scroller.js ***!
  \*********************************************************************/
/*! exports provided: MDCTabScrollerRTLReverse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTLReverse", function() { return MDCTabScrollerRTLReverse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rtl_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCTabScrollerRTLReverse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabScrollerRTLReverse, _super);
    function MDCTabScrollerRTLReverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(currentScrollLeft - translateX);
    };
    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX + translateX;
    };
    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: contentWidth - rootWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLReverse;
}(_rtl_scroller__WEBPACK_IMPORTED_MODULE_1__["MDCTabScrollerRTL"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTLReverse);
//# sourceMappingURL=rtl-reverse-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/rtl-scroller.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-scroller.js ***!
  \*************************************************************/
/*! exports provided: MDCTabScrollerRTL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabScrollerRTL", function() { return MDCTabScrollerRTL; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTL = /** @class */ (function () {
    function MDCTabScrollerRTL(adapter) {
        this.adapter = adapter;
    }
    return MDCTabScrollerRTL;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabScrollerRTL);
//# sourceMappingURL=rtl-scroller.js.map

/***/ }),

/***/ "./node_modules/@material/tab-scroller/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-scroller/util.js ***!
  \*****************************************************/
/*! exports provided: computeHorizontalScrollbarHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHorizontalScrollbarHeight", function() { return computeHorizontalScrollbarHeight; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) { shouldCacheResult = true; }
    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
        return horizontalScrollbarHeight_;
    }
    var el = documentObj.createElement('div');
    el.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__["cssClasses"].SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);
    if (shouldCacheResult) {
        horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }
    return horizontalScrollbarHeight;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/tab/component.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/component.js ***!
  \*************************************************/
/*! exports provided: MDCTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTab", function() { return MDCTab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab-indicator/component */ "./node_modules/@material/tab-indicator/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCTab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTab, _super);
    function MDCTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTab.attachTo = function (root) {
        return new MDCTab(root);
    };
    MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"](el, foundation); }; }
        if (tabIndicatorFactory === void 0) { tabIndicatorFactory = function (el) { return new _material_tab_indicator_component__WEBPACK_IMPORTED_MODULE_4__["MDCTabIndicator"](el); }; }
        this.id = this.root.id;
        var rippleSurface = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.RIPPLE_SELECTOR);
        var rippleAdapter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].createAdapter(this)), { addClass: function (className) { return rippleSurface.classList.add(className); }, removeClass: function (className) { return rippleSurface.classList.remove(className); }, updateCssVariable: function (varName, value) { return rippleSurface.style.setProperty(varName, value); } });
        var rippleFoundation = new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](rippleAdapter);
        this.ripple_ = rippleFactory(this.root, rippleFoundation);
        var tabIndicatorElement = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
        this.content_ = this.root.querySelector(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.CONTENT_SELECTOR);
    };
    MDCTab.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCTab.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) {
                return _this.tabIndicator_.activate(previousIndicatorClientRect);
            },
            deactivateIndicator: function () { return _this.tabIndicator_.deactivate(); },
            notifyInteracted: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"].strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root.offsetLeft; },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content_.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            focus: function () { return _this.root.focus(); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTabFoundation"](adapter);
    };
    Object.defineProperty(MDCTab.prototype, "active", {
        /**
         * Getter for the active state of the tab
         */
        get: function () {
            return this.foundation.isActive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.foundation.setFocusOnActivate(focusOnActivate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MDCTab.prototype.activate = function (computeIndicatorClientRect) {
        this.foundation.activate(computeIndicatorClientRect);
    };
    /**
     * Deactivates the tab
     */
    MDCTab.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Returns the indicator's client rect
     */
    MDCTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator_.computeContentClientRect();
    };
    MDCTab.prototype.computeDimensions = function () {
        return this.foundation.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MDCTab.prototype.focus = function () {
        this.root.focus();
    };
    return MDCTab;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/tab/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/constants.js ***!
  \*************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-tab--active',
};
var strings = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/tab/foundation.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/tab/foundation.js ***!
  \**************************************************/
/*! exports provided: MDCTabFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabFoundation", function() { return MDCTabFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTabFoundation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, MDCTabFoundation.defaultAdapter), adapter)) || this;
        _this.focusOnActivate_ = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'true');
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TABINDEX, '0');
        this.adapter.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate_) {
            this.adapter.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ACTIVE);
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'false');
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TABINDEX, '-1');
        this.adapter.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter.getOffsetWidth();
        var rootLeft = this.adapter.getOffsetLeft();
        var contentWidth = this.adapter.getContentOffsetWidth();
        var contentLeft = this.adapter.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTabFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/reset.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/style/reset.scss ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* STANDARD CSS RESET BELOW */\nhtml, body, header, nav, h1, a,\nul, li, strong, main, button, i,\nsection, img, div, h2, h3, h4, h5, p, form,\nfieldset, label, input, textarea,\nspan, article, footer, time, small, aside {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-family: inherit;\n  color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  vertical-align: inherit;\n  box-sizing: inherit;\n  background: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\ninput[type=password],\ninput[type=email],\ninput[type=text],\ninput[type=submit],\ntextarea,\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nbutton,\ninput[type=submit] {\n  cursor: pointer;\n}\n\n*:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://src/style/reset.scss"],"names":[],"mappings":"AAAA,6BAAA;AACA;;;;;EAKE,SAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,oBAAA;EACA,cAAA;EACA,mBAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;;;;;;EAMC,wBAAA;EACA,qBAAA;EACA,gBAAA;AACD;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACI,aAAA;AACJ","sourcesContent":["/* STANDARD CSS RESET BELOW */\nhtml, body, header, nav, h1, a,\nul, li, strong, main, button, i,\nsection, img, div, h2, h3, h4, h5, p, form,\nfieldset, label, input, textarea,\nspan, article, footer, time, small, aside {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-family: inherit;\n  color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  vertical-align: inherit;\n  box-sizing: inherit;\n  background: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\ninput[type=\"password\"],\ninput[type=\"email\"],\ninput[type=\"text\"],\ninput[type=\"submit\"],\ntextarea,\nbutton {\n -webkit-appearance: none;\n -moz-appearance: none;\n appearance: none;\n}\n\nbutton,\ninput[type=\"submit\"] {\n  cursor: pointer;\n}\n\n*:focus {\n    outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/style/style.scss ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* cyrillic-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDujMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuHMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDunMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDubMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDurMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuvMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-bar {\n  width: 100%;\n}\n\n.mdc-tab {\n  height: 48px;\n}\n\n.mdc-tab--stacked {\n  height: 72px;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-scroller {\n  overflow-y: hidden;\n}\n\n.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-scroller__test {\n  position: absolute;\n  top: -9999px;\n  width: 100px;\n  height: 100px;\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.mdc-tab-scroller__scroll-area::-webkit-scrollbar,\n.mdc-tab-scroller__test::-webkit-scrollbar {\n  display: none;\n}\n\n.mdc-tab-scroller__scroll-area--scroll {\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-content {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  transform: none;\n  will-change: transform;\n}\n\n.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n  justify-content: flex-start;\n}\n\n.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n  justify-content: flex-end;\n}\n\n.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n  justify-content: center;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  color: #018786;\n  /* @alternate */\n  color: var(--mdc-theme-secondary, #018786);\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-top-width: 2px;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  height: 34px;\n  font-size: 34px;\n}\n\n.mdc-tab-indicator__content {\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator__content--icon {\n  align-self: center;\n  margin: 0 auto;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition: 150ms opacity linear;\n}\n\n.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition-delay: 100ms;\n}\n\n.mdc-tab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);\n          text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n  padding-right: 24px;\n  padding-left: 24px;\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  outline: none;\n  background: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-appearance: none;\n  z-index: 1;\n}\n\n.mdc-tab .mdc-tab__text-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mdc-tab .mdc-tab__icon {\n  color: rgba(0, 0, 0, 0.54);\n  fill: currentColor;\n}\n\n.mdc-tab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-tab--min-width {\n  flex: 0 1 auto;\n}\n\n.mdc-tab__content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab__icon {\n  transition: 150ms color linear;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  z-index: 2;\n}\n\n.mdc-tab--stacked .mdc-tab__content {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mdc-tab--stacked .mdc-tab__text-label {\n  padding-top: 6px;\n  padding-bottom: 4px;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab--active .mdc-tab__icon {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n  fill: currentColor;\n}\n\n.mdc-tab--active .mdc-tab__text-label,\n.mdc-tab--active .mdc-tab__icon {\n  transition-delay: 100ms;\n}\n\n.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n  /* @noflip */\n  padding-left: 8px;\n  /* @noflip */\n  padding-right: 0;\n}\n\n[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label, .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label[dir=rtl] {\n  /* @noflip */\n  padding-left: 0;\n  /* @noflip */\n  padding-right: 8px;\n}\n\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-tab__ripple {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-tab__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n          animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n          animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n  font-family: \"Open Sans Condensed\";\n  font-weight: bold;\n  scroll-behavior: smooth;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mdc-tab-bar {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background: white;\n}\n\narticle {\n  display: flex;\n}\narticle h2 {\n  font-size: 40px;\n  padding-left: 5%;\n  padding-bottom: 3%;\n}\narticle pre {\n  font-family: \"Open Sans Condensed\";\n}\n\n#content {\n  margin-top: 48px;\n  max-width: 1400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__text-label {\n  color: #a41109;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #a41109;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #a41109;\n}\n\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__text-label {\n  color: #8f0066;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #8f0066;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #8f0066;\n}\n\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__text-label {\n  color: #00aeef;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #00aeef;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.08;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #00aeef;\n}\n\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__text-label {\n  color: #dac200;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #dac200;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.08;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #dac200;\n}\n\n.logo-div {\n  background-size: cover;\n  background-position: center;\n  width: 50px;\n  height: 50px;\n  align-self: center;\n  margin: 1%;\n}\n\n.hero-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100%;\n  height: 85vh;\n  margin-bottom: 4%;\n}\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background: none;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n@media only screen and (max-width: 560px) {\n  .hero-text h1 {\n    font-size: 24px;\n  }\n}\nfooter {\n  display: flex;\n  width: 100%;\n  background-color: #666666;\n  padding: 0.5% 0%;\n}\nfooter p {\n  padding-left: 1%;\n}\n\n.hours-article {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.hours-article .article-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hours-article .article-card h3 {\n  font-size: 30px;\n}\n\n@media only screen and (max-width: 560px) {\n  .hours-article {\n    flex-direction: column;\n  }\n}\narticle {\n  flex-direction: column;\n  font-size: 20px;\n}\narticle p {\n  padding-left: 5%;\n  padding-right: 5%;\n}\narticle ul {\n  padding: 1% 5% 2% 6%;\n}\narticle ul li::before {\n  content: \"-\";\n  /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n  color: #00aeef;\n  /* Change the color */\n  font-weight: bold;\n  /* If you want it to be bold */\n  display: inline-block;\n  /* Needed to add space between the bullet and the text */\n  width: 1em;\n  /* Also needed for space (tweak if needed) */\n}", "",{"version":3,"sources":["webpack://src/style/vars/font.scss","webpack://src/style/style.scss","webpack://node_modules/@material/tab-bar/mdc-tab-bar.scss","webpack://node_modules/@material/tab-bar/_mixins.scss","webpack://node_modules/@material/tab/_mixins.scss","webpack://node_modules/@material/tab-scroller/mdc-tab-scroller.scss","webpack://node_modules/@material/tab-scroller/_mixins.scss","webpack://node_modules/@material/tab-indicator/mdc-tab-indicator.scss","webpack://node_modules/@material/tab-indicator/_mixins.scss","webpack://node_modules/@material/theme/_mixins.scss","webpack://node_modules/@material/typography/_mixins.scss","webpack://node_modules/@material/theme/_custom-properties.scss","webpack://node_modules/@material/theme/_gss.scss","webpack://node_modules/@material/tab/_variables.scss","webpack://node_modules/@material/rtl/_mixins.scss","webpack://node_modules/@material/ripple/_keyframes.scss","webpack://node_modules/@material/animation/_variables.scss","webpack://node_modules/@material/ripple/_mixins.scss","webpack://node_modules/@material/ripple/_variables.scss","webpack://src/style/base.scss","webpack://src/style/vars/vars.scss","webpack://src/style/components/logo.scss","webpack://src/style/components/hero.scss","webpack://src/style/components/footer.scss","webpack://src/style/vars/colors.scss","webpack://src/style/pages/hours.scss","webpack://src/style/pages/manifesto.scss"],"names":[],"mappings":"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","sourcesContent":["/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDujMR6WR.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuHMR6WR.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDunMR6WR.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDubMR6WR.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDurMR6WR.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuvMR6WR.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n","/* cyrillic-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDujMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuHMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDunMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDubMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDurMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuvMR6WR.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Open Sans Condensed\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: local(\"Open Sans Condensed Light\"), local(\"OpenSansCondensed-Light\"), url(https://fonts.gstatic.com/s/opensanscondensed/v15/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-bar {\n  width: 100%;\n}\n\n.mdc-tab {\n  height: 48px;\n}\n\n.mdc-tab--stacked {\n  height: 72px;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-scroller {\n  overflow-y: hidden;\n}\n\n.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-scroller__test {\n  position: absolute;\n  top: -9999px;\n  width: 100px;\n  height: 100px;\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.mdc-tab-scroller__scroll-area::-webkit-scrollbar,\n.mdc-tab-scroller__test::-webkit-scrollbar {\n  display: none;\n}\n\n.mdc-tab-scroller__scroll-area--scroll {\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-content {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  transform: none;\n  will-change: transform;\n}\n\n.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n  justify-content: flex-start;\n}\n\n.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n  justify-content: flex-end;\n}\n\n.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n  justify-content: center;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: auto;\n}\n\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #6200ee;\n  /* @alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  color: #018786;\n  /* @alternate */\n  color: var(--mdc-theme-secondary, #018786);\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-top-width: 2px;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  height: 34px;\n  font-size: 34px;\n}\n\n.mdc-tab-indicator__content {\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator__content--icon {\n  align-self: center;\n  margin: 0 auto;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition: 150ms opacity linear;\n}\n\n.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  transition-delay: 100ms;\n}\n\n.mdc-tab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 0.875rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-button-font-size, 0.875rem);\n  line-height: 2.25rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-button-line-height, 2.25rem);\n  font-weight: 500;\n  /* @alternate */\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: 0.0892857143em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n  text-decoration: none;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-button-text-decoration, none);\n  text-transform: uppercase;\n  /* @alternate */\n  text-transform: var(--mdc-typography-button-text-transform, uppercase);\n  padding-right: 24px;\n  padding-left: 24px;\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  outline: none;\n  background: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-appearance: none;\n  z-index: 1;\n}\n\n.mdc-tab .mdc-tab__text-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mdc-tab .mdc-tab__icon {\n  color: rgba(0, 0, 0, 0.54);\n  fill: currentColor;\n}\n\n.mdc-tab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-tab--min-width {\n  flex: 0 1 auto;\n}\n\n.mdc-tab__content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab__icon {\n  transition: 150ms color linear;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  z-index: 2;\n}\n\n.mdc-tab--stacked .mdc-tab__content {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mdc-tab--stacked .mdc-tab__text-label {\n  padding-top: 6px;\n  padding-bottom: 4px;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab--active .mdc-tab__icon {\n  color: #6200ee;\n  /* @alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n  fill: currentColor;\n}\n\n.mdc-tab--active .mdc-tab__text-label,\n.mdc-tab--active .mdc-tab__icon {\n  transition-delay: 100ms;\n}\n\n.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n  /* @noflip */\n  padding-left: 8px;\n  /* @noflip */\n  padding-right: 0;\n}\n\n[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label, .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label[dir=rtl] {\n  /* @noflip */\n  padding-left: 0;\n  /* @noflip */\n  padding-right: 8px;\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-tab__ripple {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-tab__ripple::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-tab__ripple::before, .mdc-tab__ripple::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n  font-family: \"Open Sans Condensed\";\n  font-weight: bold;\n  scroll-behavior: smooth;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mdc-tab-bar {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background: white;\n}\n\narticle {\n  display: flex;\n}\narticle h2 {\n  font-size: 40px;\n  padding-left: 5%;\n  padding-bottom: 3%;\n}\narticle pre {\n  font-family: \"Open Sans Condensed\";\n}\n\n#content {\n  margin-top: 48px;\n  max-width: 1400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__text-label {\n  color: #a41109;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #a41109;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-1] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #a41109;\n}\n\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__text-label {\n  color: #8f0066;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #8f0066;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.04;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-tab[id=mdc-tab-2] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #8f0066;\n}\n\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__text-label {\n  color: #00aeef;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #00aeef;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.08;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-3] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #00aeef;\n}\n\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__text-label {\n  color: #dac200;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple::before, .mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple::after {\n  background-color: #dac200;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:hover::before {\n  opacity: 0.08;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before, .mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4].mdc-tab--active .mdc-tab__ripple.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24;\n}\n.mdc-tab[id=mdc-tab-4] .mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #dac200;\n}\n\n.logo-div {\n  background-size: cover;\n  background-position: center;\n  width: 50px;\n  height: 50px;\n  align-self: center;\n  margin: 1%;\n}\n\n.hero-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100%;\n  height: 85vh;\n  margin-bottom: 4%;\n}\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background: none;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n@media only screen and (max-width: 560px) {\n  .hero-text h1 {\n    font-size: 24px;\n  }\n}\nfooter {\n  display: flex;\n  width: 100%;\n  background-color: #666666;\n  padding: 0.5% 0%;\n}\nfooter p {\n  padding-left: 1%;\n}\n\n.hours-article {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.hours-article .article-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hours-article .article-card h3 {\n  font-size: 30px;\n}\n\n@media only screen and (max-width: 560px) {\n  .hours-article {\n    flex-direction: column;\n  }\n}\narticle {\n  flex-direction: column;\n  font-size: 20px;\n}\narticle p {\n  padding-left: 5%;\n  padding-right: 5%;\n}\narticle ul {\n  padding: 1% 5% 2% 6%;\n}\narticle ul li::before {\n  content: \"-\";\n  /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n  color: #00aeef;\n  /* Change the color */\n  font-weight: bold;\n  /* If you want it to be bold */\n  display: inline-block;\n  /* Needed to add space between the bullet and the text */\n  width: 1em;\n  /* Also needed for space (tweak if needed) */\n}","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use \"./mixins\";\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"@material/animation/variables\" as animation-variables;\n@use \"@material/density/functions\" as density-functions;\n@use \"@material/feature-targeting/functions\" as feature-targeting-functions;\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n@use \"@material/tab-scroller/mixins\" as tab-scroller-mixins;\n@use \"@material/tab/mixins\" as tab-mixins;\n@use \"./variables\";\n\n@mixin core-styles($query: feature-targeting-functions.all()) {\n  // postcss-bem-linter: define tab-bar\n  .mdc-tab-bar {\n    @include width(100%, $query);\n  }\n\n  @include density(variables.$density-scale, $query: $query);\n  @include stacked-density(variables.$stacked-density-scale, $query: $query);\n  // postcss-bem-linter: end\n}\n\n@mixin width($width, $query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    width: $width;\n  }\n}\n\n///\n/// Sets density scale to default tab bar variant. Use `mdc-tab-bar-stacked-density()` mixin for stacked tab bar\n/// variant.\n///\n/// @param {Number} $density-scale Density scale value. Supported density scales `-4`, `-3`, `-2`, `-1` and `0`.\n///\n@mixin density($density-scale, $query: feature-targeting-functions.all()) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-tab {\n    @include tab-mixins.height($height, $query: $query);\n  }\n}\n\n///\n/// Sets density scale to stacked tab bar variant.\n///\n/// @param {Number} $density-scale Density scale value. Supported density scales `-4`, `-3`, `-2`, `-1` and `0`.\n///\n@mixin stacked-density(\n  $density-scale,\n  $query: feature-targeting-functions.all()\n) {\n  $height: density-functions.prop-value(\n    $density-config: variables.$stacked-density-config,\n    $density-scale: $density-scale,\n    $property-name: height,\n  );\n\n  .mdc-tab--stacked {\n    @include tab-mixins.height($height, $query: $query);\n  }\n}\n\n///\n/// Sets the CSS transition for the tab scrolling animation. This mixin is a proxy to `mdc-tab-scroller-transition`\n/// mixin.\n///\n/// @param {Number | String} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin tab-scroller-transition(\n  $duration-ms,\n  $timing-function: animation-variables.$standard-curve-timing-function,\n  $query: feature-targeting-functions.all()\n) {\n  .mdc-tab-scroller {\n    @include tab-scroller-mixins.transition(\n      $duration-ms,\n      $timing-function: $timing-function,\n      $query: $query\n    );\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"@material/feature-targeting/functions\";\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n@use \"@material/ripple/mixins\" as ripple-mixins;\n@use \"@material/theme/mixins\" as theme-mixins;\n@use \"@material/typography/mixins\" as typography-mixins;\n@use \"@material/rtl/mixins\" as rtl-mixins;\n@use \"@material/tab-indicator/mixins\" as tab-indicator-mixins;\n@use \"./variables\";\n\n// Public mixins\n\n@mixin core-styles($query: functions.all()) {\n  @include without-ripple($query);\n  @include ripple($query);\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles\n// from the other tah styles. It is recommended that most users use `mdc-tab-core-styles` instead.\n@mixin without-ripple($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n  $feat-animation: functions.create-target($query, animation);\n\n  // postcss-bem-linter: define tab\n\n  .mdc-tab {\n    @include base_($query);\n  }\n\n  .mdc-tab--min-width {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      flex: 0 1 auto;\n    }\n  }\n\n  .mdc-tab__content {\n    @include content_($query);\n  }\n\n  .mdc-tab__text-label {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: 150ms color linear;\n    }\n\n    @include feature-targeting-mixins.targets($feat-structure) {\n      display: inline-block;\n      // Setting line-height here overrides the line-height from the typography\n      // mixin above. The line-height needs to be overridden so that the spacing\n      // between the text label and the icon as well as the text label and the\n      // bottom of the tab remain the same.\n      line-height: 1;\n      z-index: 2;\n    }\n  }\n\n  .mdc-tab__icon {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: 150ms color linear;\n    }\n\n    @include feature-targeting-mixins.targets($feat-structure) {\n      width: variables.$icon-size;\n      height: variables.$icon-size;\n      font-size: variables.$icon-size;\n      z-index: 2;\n    }\n  }\n\n  .mdc-tab--stacked {\n    @include stacked_($query);\n  }\n\n  .mdc-tab--active {\n    @include active_($query);\n  }\n\n  .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      @include rtl-mixins.reflexive-box(padding, left, 8px);\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n// This API is intended for use by frameworks that may want to separate the ripple-related styles\n// from the other tah styles. It is recommended that most users use `mdc-tab-core-styles` instead.\n@mixin ripple($query: functions.all()) {\n  @include ripple-mixins.common($query); // COPYBARA_COMMENT_THIS_LINE\n\n  .mdc-tab__ripple {\n    @include ripple_($query);\n  }\n}\n\n@mixin horizontal-padding($padding, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    padding-right: $padding;\n    padding-left: $padding;\n  }\n}\n\n@mixin text-label-color($color, $query: functions.all()) {\n  $feat-color: functions.create-target($query, color);\n\n  .mdc-tab__text-label {\n    @include feature-targeting-mixins.targets($feat-color) {\n      @include theme-mixins.prop(color, $color);\n    }\n  }\n}\n\n@mixin icon-color($color, $query: functions.all()) {\n  $feat-color: functions.create-target($query, color);\n\n  .mdc-tab__icon {\n    @include feature-targeting-mixins.targets($feat-color) {\n      @include theme-mixins.prop(color, $color);\n\n      fill: currentColor;\n    }\n  }\n}\n\n@mixin states-color($color, $query: functions.all()) {\n  .mdc-tab__ripple {\n    @include ripple-mixins.states($color, $query: $query);\n  }\n}\n\n@mixin ink-color($color, $query: functions.all()) {\n  @include icon-color($color, $query);\n  @include states-color($color, $query);\n  @include text-label-color($color, $query);\n}\n\n@mixin active-text-label-color($color, $query: functions.all()) {\n  &.mdc-tab--active {\n    @include text-label-color($color, $query);\n  }\n}\n\n@mixin active-icon-color($color, $query: functions.all()) {\n  &.mdc-tab--active {\n    @include icon-color($color, $query);\n  }\n}\n\n@mixin active-states-color($color, $query: functions.all()) {\n  &.mdc-tab--active {\n    @include states-color($color, $query);\n  }\n}\n\n@mixin parent-positioning($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    position: relative;\n  }\n}\n\n@mixin fixed-width($width, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    flex: 0 1 $width;\n  }\n}\n\n///\n/// Sets tab height\n///\n/// @param {Number} $height Height value in `px`.\n///\n@mixin height($height, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    height: $height;\n  }\n}\n\n///\n/// Sets tab text transform\n///\n/// @param {String} $transform The text-transform property to apply.\n///\n@mixin text-transform($transform, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    text-transform: $transform;\n  }\n}\n\n//\n// Private\n//\n\n@mixin base_($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include typography-mixins.typography(button, $query);\n  @include text-label-color(variables.$text-label-color-default, $query);\n  @include icon-color(variables.$icon-color-default, $query);\n  @include horizontal-padding(variables.$horizontal-padding, $query);\n  @include tab-indicator-mixins.surface($query);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    display: flex;\n    flex: 1 0 auto;\n    justify-content: center;\n    box-sizing: border-box;\n    // Explicitly setting margin to 0 is to override safari default margin for button elements.\n    margin: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: none;\n    outline: none;\n    background: none;\n    text-align: center;\n    white-space: nowrap;\n    cursor: pointer;\n    -webkit-appearance: none;\n    z-index: 1;\n\n    // Firefox still draws a dotted border around focused buttons unless specifically overridden.\n    &::-moz-focus-inner {\n      padding: 0;\n      border: 0;\n    }\n  }\n}\n\n@mixin ripple_($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include ripple-mixins.surface($query);\n  @include ripple-mixins.radius-bounded($query: $query);\n  @include ripple-mixins.states($color: primary, $query: $query);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n}\n\n@mixin content_($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include tab-indicator-mixins.surface($query);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: inherit;\n    pointer-events: none;\n  }\n}\n\n@mixin stacked_($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    .mdc-tab__content {\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .mdc-tab__text-label {\n      padding-top: 6px;\n      padding-bottom: 4px;\n    }\n  }\n}\n\n@mixin active_($query: functions.all()) {\n  $feat-animation: functions.create-target($query, animation);\n\n  @include text-label-color(variables.$text-label-color-active, $query);\n  @include icon-color(variables.$icon-color-active, $query);\n\n  .mdc-tab__text-label,\n  .mdc-tab__icon {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition-delay: 100ms;\n    }\n  }\n}\n","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use \"./mixins\";\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"@material/animation/variables\" as animation-variables;\n@use \"@material/tab/mixins\" as tab-mixins;\n@use \"@material/feature-targeting/functions\";\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n@use \"./variables\";\n\n///\n/// Sets the CSS transition for the tab scrolling animation.\n///\n/// @param {Number | String} $duration-ms - Duration (in ms) of the animation.\n/// @param {String} $timing-function - Optionally overrides the default animation timing function.\n///\n@mixin transition(\n  $duration-ms,\n  $timing-function: animation-variables.$standard-curve-timing-function,\n  $query: functions.all()\n) {\n  $feat-animation: functions.create-target($query, animation);\n\n  &.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: $duration-ms transform $timing-function;\n    }\n  }\n}\n\n@mixin core-styles($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n  $feat-animation: functions.create-target($query, animation);\n\n  // postcss-bem-linter: define tab-scroller\n  .mdc-tab-scroller {\n    @include transition(\n      $duration-ms: variables.$transition-duration,\n      $query: $query\n    );\n\n    @include feature-targeting-mixins.targets($feat-structure) {\n      overflow-y: hidden;\n    }\n  }\n\n  // Selector for test element used to feature-detect horizontal scrollbar height\n  .mdc-tab-scroller__test {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      position: absolute;\n      top: -9999px;\n      width: 100px;\n      height: 100px;\n      overflow-x: scroll;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-area {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      -webkit-overflow-scrolling: touch;\n      display: flex;\n      overflow-x: hidden;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-area,\n  .mdc-tab-scroller__test {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n  }\n\n  // This modifier class will be added in JS after computing the OS scrollbar size in order to hide the scrollbar.\n  .mdc-tab-scroller__scroll-area--scroll {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      overflow-x: scroll;\n    }\n  }\n\n  .mdc-tab-scroller__scroll-content {\n    @include scroll-content_($query);\n  }\n\n  .mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      justify-content: flex-start;\n    }\n  }\n\n  .mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      justify-content: flex-end;\n    }\n  }\n\n  .mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      justify-content: center;\n    }\n  }\n\n  .mdc-tab-scroller--animating {\n    .mdc-tab-scroller__scroll-area {\n      @include feature-targeting-mixins.targets($feat-animation) {\n        -webkit-overflow-scrolling: auto;\n      }\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n//\n// Private\n//\n\n@mixin scroll-content_($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n  $feat-animation: functions.create-target($query, animation);\n\n  @include tab-mixins.parent-positioning($query);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    display: flex;\n    flex: 1 0 auto;\n    transform: none;\n  }\n\n  @include feature-targeting-mixins.targets($feat-animation) {\n    will-change: transform;\n  }\n}\n","/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n@use \"./mixins\";\n@include mixins.core-styles;\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"@material/animation/variables\";\n@use \"@material/theme/mixins\" as theme-mixins;\n@use \"@material/feature-targeting/functions\";\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n\n@mixin core-styles($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n  $feat-animation: functions.create-target($query, animation);\n\n  // postcss-bem-linter: define tab-indicator\n\n  .mdc-tab-indicator {\n    @include base_($query);\n  }\n\n  .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      transform-origin: left;\n      opacity: 0;\n    }\n  }\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      align-self: flex-end;\n      box-sizing: border-box;\n      width: 100%;\n      border-top-style: solid;\n    }\n  }\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      align-self: center;\n      margin: 0 auto;\n    }\n  }\n\n  .mdc-tab-indicator--active .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      opacity: 1;\n    }\n  }\n\n  // Slide by default\n  .mdc-tab-indicator .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: 250ms transform variables.$standard-curve-timing-function;\n    }\n  }\n\n  // --no-transition is applied in cases where styles need to be applied immediately to set up a transition\n  .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: none;\n    }\n  }\n\n  .mdc-tab-indicator--fade .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition: 150ms opacity linear;\n    }\n  }\n\n  // postcss-bem-linter: ignore\n  .mdc-tab-indicator--active.mdc-tab-indicator--fade\n    .mdc-tab-indicator__content {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      transition-delay: 100ms;\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n@mixin surface($query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    position: relative;\n  }\n}\n\n@mixin underline-color($color, $query: functions.all()) {\n  $feat-color: functions.create-target($query, color);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting-mixins.targets($feat-color) {\n      @include theme-mixins.prop(border-color, $color);\n    }\n  }\n}\n\n@mixin underline-height($height, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      border-top-width: $height;\n    }\n  }\n}\n\n@mixin underline-top-corner-radius($radius, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  .mdc-tab-indicator__content--underline {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      border-top-left-radius: $radius;\n      border-top-right-radius: $radius;\n    }\n  }\n}\n\n@mixin icon-color($color, $query: functions.all()) {\n  $feat-color: functions.create-target($query, color);\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting-mixins.targets($feat-color) {\n      @include theme-mixins.prop(color, $color);\n    }\n  }\n}\n\n@mixin icon-height($height, $query: functions.all()) {\n  $feat-structure: functions.create-target($query, structure);\n\n  .mdc-tab-indicator__content--icon {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      height: $height;\n      font-size: $height;\n    }\n  }\n}\n\n//\n// Private\n//\n\n@mixin base_($query) {\n  $feat-structure: functions.create-target($query, structure);\n\n  @include underline-color(primary, $query);\n  @include icon-color(secondary, $query);\n  @include underline-height(2px, $query);\n  @include icon-height(34px, $query);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 1;\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"sass:map\";\n@use \"@material/feature-targeting/functions\" as feature-targeting-functions;\n@use \"@material/feature-targeting/mixins\";\n@use \"./custom-properties\";\n@use \"./gss\";\n@use \"./variables\";\n\n@mixin core-styles($query: feature-targeting-functions.all()) {\n  $feat-color: feature-targeting-functions.create-target($query, color);\n\n  :root {\n    @include mixins.targets($feat-color) {\n      @each $style in map.keys(variables.$property-values) {\n        --mdc-theme-#{$style}: #{map.get(variables.$property-values, $style)};\n      }\n    }\n  }\n\n  @each $style in map.keys(variables.$property-values) {\n    @if $style != 'background' and $style != 'surface' {\n      .mdc-theme--#{$style} {\n        @include mixins.targets($feat-color) {\n          @include prop(color, $style, true);\n        }\n      }\n    } @else {\n      .mdc-theme--#{$style} {\n        @include mixins.targets($feat-color) {\n          @include prop(background-color, $style);\n        }\n      }\n    }\n  }\n\n  // CSS rules for using primary and secondary (plus light/dark variants) as background colors.\n  @each $style in ('primary', 'secondary') {\n    .mdc-theme--#{$style}-bg {\n      @include mixins.targets($feat-color) {\n        @include prop(background-color, $style, true);\n      }\n    }\n  }\n}\n\n/// Applies a dynamic value to the specified property. This mixin should be used\n/// in theme style mixins when setting properties.\n///\n/// The value may be any of the following:\n/// - a standard CSS value\n/// - a custom property Map, e.g. (varname: --mdc-foo, fallback: blue)\n/// - a Material theme key String, e.g. \"primary\", \"on-primary\"\n///\n/// @param {String} $property - the name of the CSS property.\n/// @param {String | Number | Color | List | Map} $value - the property's value.\n/// @param {Map} $gss - optional Map of GSS annotations to set.\n/// @param {Bool} $important - set to true to add an `!important` rule. Defaults\n///     to false.\n@mixin property($property, $value, $gss: (), $important: false) {\n  $important-rule: if($important, '!important', '');\n\n  @if custom-properties.is-custom-prop($value) {\n    // $value is a custom property Map\n    @include custom-properties.apply(\n      $property,\n      $value,\n      $gss: $gss,\n      $important: $important\n    );\n  } @else if map.has-key(variables.$property-values, $value) {\n    // $value is a theme property String\n    $fallback: map.get(variables.$property-values, $value);\n    $custom-prop: custom-properties.create(--mdc-theme-#{$style}, $fallback);\n    @include custom-properties.apply(\n      $property,\n      $custom-prop,\n      $gss: $gss,\n      $important: $important\n    );\n  } @else {\n    // $value is a standard CSS value\n    @include gss.annotate($gss);\n    #{$property}: $value #{$important-rule};\n  }\n}\n\n// Applies the correct theme color style to the specified property.\n// $property is typically color or background-color, but can be any CSS property that accepts color values.\n// $style should be one of the map keys in $mdc-theme-property-values (_variables.scss), or a color value.\n// @deprecated use the `property()` mixin instead\n@mixin prop($property, $style, $important: false) {\n  $important-rule: if($important, '!important', '');\n\n  @if custom-properties.is-custom-prop($style) {\n    @include custom-properties.apply($property, $style, $important: $important);\n  } @else if variables.is-valid-theme-prop-value_($style) {\n    #{$property}: $style #{$important-rule};\n  } @else {\n    @if not map.has-key(variables.$property-values, $style) {\n      @error \"Invalid style: '#{$style}'. Choose one of: #{map.keys(variables.$property-values)}\";\n    }\n    $value: map.get(variables.$property-values, $style);\n\n    #{$property}: $value #{$important-rule};\n    /* @alternate */\n    #{$property}: var(--mdc-theme-#{$style}, $value) #{$important-rule};\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"sass:list\";\n@use \"sass:map\";\n@use \"sass:string\";\n@use \"@material/feature-targeting/functions\" as feature-targeting-functions;\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n@use \"@material/theme/mixins\" as theme-mixins;\n@use \"./variables\";\n\n@mixin core-styles($query: feature-targeting-functions.all()) {\n  .mdc-typography {\n    @include base($query: $query);\n  }\n\n  @each $style in map.keys(variables.$styles) {\n    .mdc-typography--#{$style} {\n      @include typography($style, $query: $query);\n    }\n  }\n}\n\n@mixin base($query: feature-targeting-functions.all()) {\n  $feat-typography: feature-targeting-functions.create-target(\n    $query,\n    typography\n  );\n\n  @include smooth-font($query: $query);\n  @include feature-targeting-mixins.targets($feat-typography) {\n    @include theme-mixins.prop(\n      font-family,\n      (\n        varname: --mdc-typography-font-family,\n        fallback: map.get(variables.$base, 'font-family'),\n      )\n    );\n  }\n}\n\n@mixin typography(\n  $style,\n  $query: feature-targeting-functions.all(),\n  $exclude-props: ()\n) {\n  $feat-typography: feature-targeting-functions.create-target(\n    $query,\n    typography\n  );\n  $style-props: map.get(variables.$styles, $style);\n\n  @if not map.has-key(variables.$styles, $style) {\n    @error \"Invalid style specified! #{$style} doesn't exist. Choose one of #{map.keys(variables.$styles)}\";\n  }\n\n  @include smooth-font($query: $query);\n  @include feature-targeting-mixins.targets($feat-typography) {\n    @each $key, $value in $style-props {\n      @if list.index($exclude-props, $key) == null {\n        $fallback: $value;\n        @if $key == 'font-family' {\n          // Each style has its own font-family custom property, but should\n          // fallback to a generic font-family property. This allows\n          // customizing the font-family for all styles or only specific ones.\n          $fallback: (\n            varname: --mdc-typography-font-family,\n            fallback: $fallback,\n          );\n        }\n\n        @include theme-mixins.prop(\n          $key,\n          (\n            varname: --mdc-typography-#{$style}-#{$key},\n            fallback: $fallback,\n          )\n        );\n      }\n    }\n  }\n}\n\n/// Applies antialiasing via font-smoothing to text.\n@mixin smooth-font($query: feature-targeting-functions.all()) {\n  $feat-typography: feature-targeting-functions.create-target(\n    $query,\n    typography\n  );\n\n  @include feature-targeting-mixins.targets($feat-typography) {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\n// Element must be `display: block` or `display: inline-block` for this to work.\n@mixin overflow-ellipsis($query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n}\n\n/// Sets a container's baseline that text content will align to.\n///\n/// If the `$display` is set to a flexbox display, only `$top` baseline may be\n/// set. A separate element must be added as a child of the container with a\n/// `$bottom` baseline.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {String} $display - the display type of the container. May be `flex`,\n///     `inline-flex`, `block`, or `inline-block`.\n@mixin baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $query: feature-targeting-functions.all()\n) {\n  $validDisplayTypes: (flex, inline-flex, block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $isFlexbox: $display == 'flex' or $display == 'inline-flex';\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    display: $display;\n\n    @if $isFlexbox {\n      align-items: baseline;\n    }\n  }\n\n  @if $top > 0 {\n    @include baseline-top($top, $query: $query);\n  }\n\n  @if $bottom > 0 {\n    @if $isFlexbox {\n      @error \"mdc-typography: invalid baseline with display type. #{$display} cannot specifiy $bottom. Add a separate child element with its own $bottom.\";\n    }\n\n    @include baseline-bottom($bottom, $query: $query);\n  }\n}\n\n/// Sets the baseline of flow text content.\n///\n/// Separate `$top` and `$bottom` baselines may be specified. You should ensure\n/// that the `$top` baseline matches the previous text content's $bottom\n/// baseline to ensure text is positioned appropriately.\n///\n/// See go/css-baseline for reference on how this mixin works.\n///\n/// This is intended for text flow content only (e.g. `<h1>`, `<p>`, `<span>`,\n/// or `<div>` with only text content). Use `baseline()` to set the baseline of\n/// containers that are flexbox or have non-flow content children.\n///\n/// @param {Number} $top - the distance from the top of the container to the\n///     text's baseline.\n/// @param {Number} $bottom - the distance from the text's baseline to the\n///     bottom of the container.\n/// @param {Boolean} $lineHeight - the line-height to use for the text. This\n///     is the distance between baselines of multiple lines of text.\n/// @param {String} $display - the display type of the container. May be `block`\n///     or `inline-block`.\n@mixin text-baseline(\n  $top: 0,\n  $bottom: 0,\n  $display: block,\n  $lineHeight: normal,\n  $query: feature-targeting-functions.all()\n) {\n  $validDisplayTypes: (block, inline-block);\n\n  @if list.index($validDisplayTypes, $display) == null {\n    @error \"mdc-typography: invalid display specified! #{$display} must be one of #{$validDisplayTypes}\";\n  }\n\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include baseline(\n    $display: $display,\n    $top: $top,\n    $bottom: $bottom,\n    $query: $query\n  );\n  @include feature-targeting-mixins.targets($feat-structure) {\n    @if $top > 0 {\n      margin-top: 0;\n      /* @alternate */\n      line-height: #{$lineHeight};\n    }\n\n    @if $bottom > 0 {\n      margin-bottom: -1 * $bottom;\n    }\n  }\n}\n\n/// Creates a baseline strut from the top of a container. This mixin is for\n/// advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the top of the container to\n///     the text's baseline.\n@mixin baseline-top($distance, $query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: 0;\n    }\n  }\n}\n\n/// Creates a baseline strut from the baseline to the bottom of a container.\n/// This mixin is for advanced users, prefer `baseline()`.\n///\n/// @param {Number} $distance - The distance from the text's baseline to the\n///     bottom of the container.\n@mixin baseline-bottom($distance, $query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  &::after {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      @include baseline-strut_($distance);\n\n      vertical-align: -1 * $distance;\n    }\n  }\n}\n\n/// Adds an invisible, zero-width prefix to a container's text.\n/// This ensures that the baseline is always where the text would be, instead\n/// of defaulting to the container bottom when text is empty. Do not use this\n/// mixin if the `baseline` mixin is already applied.\n@mixin zero-width-prefix($query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  &::before {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      content: '\\200b';\n    }\n  }\n}\n\n@mixin baseline-strut_($distance) {\n  display: inline-block;\n  width: 0;\n  height: $distance;\n  content: '';\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n@use \"sass:map\";\n@use \"sass:meta\";\n@use \"./gss\";\n\n/// When true, add an additional property/value declaration before a custom\n/// property's `var()` to support IE. Configure\n/// `@material/theme/custom-properties` with this variable set to false to\n/// disable IE fallback values for custom properties.\n$ie-fallback: true !default;\n\n/// Returns true if the parameter is a custom property Map.\n///\n/// @param {*} $value - the value to test.\n/// @return true if the value is a custom property Map, or false if not.\n@function is-custom-prop($value) {\n  @return meta.type-of($value) == 'map' and map.has-key($value, 'varname');\n}\n\n/// Returns true if $prop1's varname and fallback values are deeply equal to\n/// $prop2's varname and fallback values.\n///\n/// @param {Map} $prop1 - the first value to test.\n/// @param {Map} $prop2 - the second value to test.\n/// @return true if both properties are deeply equal\n@function are-equal($prop1, $prop2) {\n  @return create-var($prop1) == create-var($prop2);\n}\n\n/// Creates a custom property Map.\n///\n/// @param {String} $varname - the custom property name.\n/// @param {String | Number | Map} - the fallback value (may be another custom\n///     property Map). May be null.\n/// @return a custom property Map.\n@function create($varname, $fallback: null) {\n  @return (varname: $varname, fallback: $fallback);\n}\n\n/// Returns the custom property variable name of a custom property Map.\n///\n/// @param {Map} $custom-prop - a custom property Map.\n/// @return the custom property variable name defined by the Map.\n@function get-varname($custom-prop) {\n  @return map.get($custom-prop, 'varname');\n}\n\n/// Returns the fallback value of a custom property Map. May be null if the\n/// custom property does not have a fallback.\n///\n/// @param {Map} $custom-prop - a custom property Map.\n/// @param {Bool} $shallow - if true, return the first fallback value, which\n///     may be another custom property Map. Defaults to false, which will return\n///     the deep final fallback value.\n/// @return the fallback value of a custom property Map. May be null.\n@function get-fallback($custom-prop, $shallow: false) {\n  $fallback: map.get($custom-prop, 'fallback');\n  @if is-custom-prop($fallback) and not $shallow {\n    @return get-fallback($fallback);\n  }\n\n  @return $fallback;\n}\n\n/// Creates a new custom property Map and returns it with the specified new\n/// fallback value.\n///\n/// @param {Map} $custom-prop - the custom property Map to copy.\n/// @param {String | Number | Map} $new-fallback - the new fallback value of the\n///     custom property Map. May be null.\n/// @param {Bool} $shallow - if true, set the first fallback value. Defaults to\n///     false, which will set the deep final fallback value.\n/// @return a new custom property Map with the new fallback value.\n@function set-fallback($custom-prop, $new-fallback, $shallow: false) {\n  $varname: get-varname($custom-prop);\n  $first-fallback: get-fallback($custom-prop, $shallow: true);\n\n  @if is-custom-prop($first-fallback) and not $shallow {\n    // The first fallback is a custom property and $shallow is false. Deeply\n    // set the fallback value of the custom property and get the new custom\n    // property Map returned.\n    $new-fallback: set-fallback($first-fallback, $new-fallback);\n  }\n\n  @return create($varname, $new-fallback);\n}\n\n/// Creates and returns a `var()` function declaration represented by the\n/// provided custom property Map.\n///\n/// @param {Map} $custom-prop - a custom property Map.\n/// @return a `var()` function declaration using the custom property Map's\n///     varname and fallback value.\n@function create-var($custom-prop) {\n  $varname: get-varname($custom-prop);\n  $fallback: get-fallback($custom-prop, $shallow: true);\n\n  @if is-custom-prop($fallback) {\n    @return var($varname, create-var($fallback));\n  } @else if $fallback != null {\n    @return var($varname, $fallback);\n  } @else {\n    @return var($varname);\n  }\n}\n\n/// Applies a custom property value to the specified property.\n///\n/// @param {String} $property - the name of the CSS property.\n/// @param {Map} $custom-prop - a custom property Map for the property's value.\n/// @param {Map} $gss - optional Map of GSS annotations to set.\n/// @param {Bool} $important - set to true to add an `!important` rule. Defaults\n///     to false.\n@mixin apply($property, $custom-prop, $gss: (), $important: false) {\n  @if not is-custom-prop($custom-prop) {\n    @error \"mdc-theme: Invalid custom property: #{$custom-prop}. Must be a Map with 'varname' and 'fallback'.\";\n  }\n\n  $important-rule: if($important, '!important', '');\n\n  $fallback: get-fallback($custom-prop);\n  @if $ie-fallback and $fallback != null {\n    @include gss.annotate($gss);\n    #{$property}: #{$fallback} #{$important-rule};\n\n    // add @alternate to annotations\n    $gss: map.merge(\n      $gss,\n      (\n        alternate: true,\n      )\n    );\n  }\n\n  @include gss.annotate($gss);\n  #{$property}: create-var($custom-prop) #{$important-rule};\n}\n","//\n// Copyright 2020 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n@use \"sass:map\";\n\n/// Adds optional GSS annotation comments. Useful for theme mixins where one or\n/// more properties are set indirectly.\n///\n/// @example\n///   `annotate((noflip: true)) => /* @noflip */`\n///\n/// @param {Map} $annotations - Map of annotations. Values must be set to `true`\n///     for an annotation to be added.\n@mixin annotate($annotations) {\n  @if (map.get($annotations, alternate) == true) {\n    /* @alternate */\n  }\n\n  // noflip must be the last tag right before the property\n  @if (map.get($annotations, noflip) == true) {\n    /* @noflip */\n  }\n}\n","//\n// Copyright 2018 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"@material/theme/variables\"; // for mdc-theme-prop-value()\n\n$icon-size: 24px !default;\n$height: 48px !default;\n$stacked-height: 72px !default;\n$horizontal-padding: 24px !default;\n$text-label-opacity: 0.6 !default;\n$icon-opacity: 0.54 !default;\n$text-label-color-default: rgba(\n  variables.prop-value(on-surface),\n  $text-label-opacity\n) !default;\n$icon-color-default: rgba(\n  variables.prop-value(on-surface),\n  $icon-opacity\n) !default;\n$text-label-color-active: primary !default;\n$icon-color-active: primary !default;\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"sass:list\";\n@use \"@material/theme/mixins\" as theme;\n@use \"./variables\";\n\n// Creates a rule that will be applied when an MDC Web component is within the context of an RTL layout.\n//\n// Usage Example:\n//\n// ```scss\n// .mdc-foo {\n//   position: absolute;\n//   left: 0;\n//\n//   @include rtl {\n//     left: auto;\n//     right: 0;\n//   }\n//\n//   &__bar {\n//     margin-left: 4px;\n//     @include rtl(\".mdc-foo\") {\n//       margin-left: auto;\n//       margin-right: 4px;\n//     }\n//   }\n// }\n//\n// .mdc-foo--mod {\n//   padding-left: 4px;\n//\n//   @include rtl {\n//     padding-left: auto;\n//     padding-right: 4px;\n//   }\n// }\n// ```\n//\n// Note that this mixin works by checking for an ancestor element with `[dir=\"rtl\"]`.\n// As a result, nested `dir` values are not supported:\n//\n// ```html\n// <html dir=\"rtl\">\n//   <!-- ... -->\n//   <div dir=\"ltr\">\n//     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n//   </div>\n// </html>\n// ```\n//\n// In the future, selectors such as the `:dir` pseudo-class (http://mdn.io/css/:dir) will help us mitigate this.\n@mixin rtl($root-selector: null) {\n  @if (variables.$include) {\n    @if ($root-selector) {\n      @at-root {\n        #{$root-selector}[dir='rtl'] &,\n        [dir='rtl'] #{$root-selector} & {\n          @content;\n        }\n      }\n    } @else {\n      [dir='rtl'] &,\n      &[dir='rtl'] {\n        @content;\n      }\n    }\n  }\n}\n\n// Takes a base box-model property name (`margin`, `border`, `padding`, etc.) along with a\n// default direction (`left` or `right`) and value, and emits rules which apply the given value to the\n// specified direction by default and the opposite direction in RTL.\n//\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, left, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 8px;\n//   margin-right: 0;\n//\n//   @include rtl {\n//     margin-left: 0;\n//     margin-right: 8px;\n//   }\n// }\n// ```\n//\n// whereas:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-box(margin, right, 8px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: 0;\n//   margin-right: 8px;\n//\n//   @include rtl {\n//     margin-left: 8px;\n//     margin-right: 0;\n//   }\n// }\n// ```\n//\n// You can also pass an optional 4th `$root-selector` argument which will be forwarded to `mdc-rtl`,\n// e.g. `@include rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n//\n// Note that this function will always zero out the original value in an RTL context.\n// If you're trying to flip the values, use `mdc-rtl-reflexive-property()` instead.\n@mixin reflexive-box(\n  $base-property,\n  $default-direction,\n  $value,\n  $root-selector: null\n) {\n  @if (list.index((right, left), $default-direction) == null) {\n    @error \"Invalid default direction: '#{$default-direction}'. Please specifiy either 'right' or 'left'.\";\n  }\n\n  $left-value: $value;\n  $right-value: 0;\n\n  @if ($default-direction == right) {\n    $left-value: 0;\n    $right-value: $value;\n  }\n\n  @include reflexive-property(\n    $base-property,\n    $left-value,\n    $right-value,\n    $root-selector\n  );\n}\n\n// Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n// <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-property(margin, auto, 12px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   margin-left: auto;\n//   margin-right: 12px;\n//\n//   @include rtl {\n//     margin-left: 12px;\n//     margin-right: auto;\n//   }\n// }\n// ```\n//\n// An optional 4th `$root-selector` argument can be given, which will be passed to `mdc-rtl`.\n@mixin reflexive-property(\n  $base-property,\n  $left-value,\n  $right-value,\n  $root-selector: null\n) {\n  $prop-left: #{$base-property}-left;\n  $prop-right: #{$base-property}-right;\n\n  @include reflexive(\n    $prop-left,\n    $left-value,\n    $prop-right,\n    $right-value,\n    $root-selector\n  );\n}\n\n// Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n// as a value, and applies that value to the specified position in a LTR context, and flips it in a\n// RTL context. For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive-position(left, 0);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 0;\n//   right: initial;\n//\n//   @include rtl {\n//     left: initial;\n//     right: 0;\n//   }\n// }\n// ```\n//\n// An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive-position($position-property, $value, $root-selector: null) {\n  @if (list.index((right, left), $position-property) == null) {\n    @error \"Invalid position #{position-property}. Please specifiy either right or left\";\n  }\n\n  // TODO: \"initial\" is not supported in IE 11. https://caniuse.com/#feat=css-initial-value\n  $left-value: $value;\n  $right-value: initial;\n\n  @if ($position-property == right) {\n    $right-value: $value;\n    $left-value: initial;\n  }\n\n  @include reflexive(left, $left-value, right, $right-value, $root-selector);\n}\n\n// Takes pair of properties with values as arguments and flips it in RTL context.\n// For example:\n//\n// ```scss\n// .mdc-foo {\n//   @include rtl-reflexive(left, 2px, right, 5px);\n// }\n// ```\n//\n// is equivalent to:\n//\n// ```scss\n// .mdc-foo {\n//   left: 2px;\n//   right: 5px;\n//\n//   @include rtl {\n//     right: 2px;\n//     left: 5px;\n//   }\n// }\n// ```\n//\n// An optional fifth `$root-selector` argument may also be given, which is passed to `mdc-rtl`.\n@mixin reflexive(\n  $left-property,\n  $left-value,\n  $right-property,\n  $right-value,\n  $root-selector: null\n) {\n  @include property_($left-property, $left-value);\n  @include property_($right-property, $right-value);\n\n  @include rtl($root-selector) {\n    @include property_($left-property, $right-value);\n    @include property_($right-property, $left-value);\n  }\n}\n\n///\n/// Adds `@noflip` annotation when `$mdc-rtl-include` is true.\n///\n/// @param {String} $property\n/// @param {String} $value\n/// @access private\n///\n@mixin property_($property, $value) {\n  @include theme.property(\n    $property,\n    $value,\n    $gss: (noflip: variables.$include)\n  );\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n// MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them.\n\n@use \"@material/animation/variables\";\n@use \"./variables\" as variables2;\n\n@mixin keyframes_ {\n  @keyframes mdc-ripple-fg-radius-in {\n    from {\n      animation-timing-function: variables.$standard-curve-timing-function;\n      // NOTE: For these keyframes, we do not need custom property fallbacks because they are only\n      // used in conjunction with `.mdc-ripple-upgraded`. Since MDCRippleFoundation checks to ensure\n      // that custom properties are supported within the browser before adding this class, we can\n      // safely use them without a fallback.\n      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    }\n\n    to {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n        scale(var(--mdc-ripple-fg-scale, 1));\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-in {\n    from {\n      animation-timing-function: linear;\n      opacity: 0;\n    }\n\n    to {\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n  }\n\n  @keyframes mdc-ripple-fg-opacity-out {\n    from {\n      animation-timing-function: linear;\n      opacity: var(--mdc-ripple-fg-opacity, 0);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n}\n","//\n// Copyright 2017 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$deceleration-curve-timing-function: cubic-bezier(0, 0, 0.2, 1) !default;\n$standard-curve-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;\n$acceleration-curve-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;\n$sharp-curve-timing-function: cubic-bezier(0.4, 0, 0.6, 1) !default;\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n@use \"sass:color\";\n@use \"sass:map\";\n@use \"@material/animation/functions\" as functions2;\n@use \"@material/animation/variables\" as variables2;\n@use \"@material/base/mixins\" as base-mixins;\n@use \"@material/feature-targeting/functions\" as feature-targeting-functions;\n@use \"@material/feature-targeting/mixins\" as feature-targeting-mixins;\n@use \"@material/theme/mixins\" as theme-mixins;\n@use \"./functions\";\n@use \"./keyframes\";\n@use \"./variables\";\n@use \"@material/theme/variables\" as theme-variables;\n\n@mixin core-styles($query: feature-targeting-functions.all()) {\n  // postcss-bem-linter: define ripple-surface\n\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  .mdc-ripple-surface {\n    @include surface($query: $query);\n    @include states($query: $query);\n    @include radius-bounded($query: $query);\n\n    @include feature-targeting-mixins.targets($feat-structure) {\n      position: relative;\n      outline: none;\n      overflow: hidden;\n    }\n\n    &[data-mdc-ripple-is-unbounded] {\n      @include radius-unbounded($query: $query);\n\n      @include feature-targeting-mixins.targets($feat-structure) {\n        overflow: visible;\n      }\n    }\n\n    &--primary {\n      @include states(primary, $query: $query);\n    }\n\n    &--accent {\n      @include states(secondary, $query: $query);\n    }\n  }\n\n  // postcss-bem-linter: end\n}\n\n@mixin common($query: feature-targeting-functions.all()) {\n  $feat-animation: feature-targeting-functions.create-target($query, animation);\n\n  // Ensure that styles needed by any component using MDC Ripple are emitted, but only once.\n  // (Every component using MDC Ripple imports these mixins, but doesn't necessarily import\n  // mdc-ripple.scss.)\n  @include feature-targeting-mixins.targets($feat-animation) {\n    @include base-mixins.emit-once('mdc-ripple/common/animation') {\n      @include keyframes.keyframes_;\n    }\n  }\n}\n\n@mixin surface($query: feature-targeting-functions.all(), $ripple-target: '&') {\n  $feat-animation: feature-targeting-functions.create-target($query, animation);\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    // !!DO NOT REMOVE!! mdc-ripple-will-change-replacer\n  }\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting-mixins.targets($feat-structure) {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: '';\n    }\n  }\n\n  #{$ripple-target}::before {\n    @include feature-targeting-mixins.targets($feat-animation) {\n      // Also transition background-color to avoid unnatural color flashes when toggling activated/selected state\n      transition: opacity variables.$states-wash-duration linear,\n        background-color variables.$states-wash-duration linear;\n    }\n\n    @include feature-targeting-mixins.targets($feat-structure) {\n      z-index: 1; // Ensure that the ripple wash for hover/focus states is displayed on top of positioned child elements\n    }\n  }\n\n  // Common styles for upgraded surfaces (some of these depend on custom properties set via JS or other mixins)\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before {\n      @include feature-targeting-mixins.targets($feat-structure) {\n        transform: scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-structure) {\n        top: 0;\n        /* @noflip */\n        left: 0;\n        transform: scale(0);\n        transform-origin: center center;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--unbounded {\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-structure) {\n        top: var(--mdc-ripple-top, 0);\n        /* @noflip */\n        left: var(--mdc-ripple-left, 0);\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-activation {\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-animation) {\n        animation: mdc-ripple-fg-radius-in variables.$translate-duration\n            forwards,\n          mdc-ripple-fg-opacity-in variables.$fade-in-duration forwards;\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded--foreground-deactivation {\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-animation) {\n        animation: mdc-ripple-fg-opacity-out variables.$fade-out-duration;\n      }\n\n      @include feature-targeting-mixins.targets($feat-structure) {\n        // Retain transform from mdc-ripple-fg-radius-in activation\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0))\n          scale(var(--mdc-ripple-fg-scale, 1));\n      }\n    }\n  }\n}\n\n@mixin states-base-color(\n  $color,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting-functions.create-target($query, color);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting-mixins.targets($feat-color) {\n      @if color.alpha(theme-variables.prop-value($color)) > 0 {\n        @include theme-mixins.prop(background-color, $color);\n      } @else {\n        // If a color with 0 alpha is specified, don't render the ripple pseudo-elements at all.\n        // This avoids unnecessary transitions and overflow.\n        content: none;\n      }\n    }\n  }\n}\n\n///\n/// Customizes ripple opacities in `hover`, `focus`, or `press` states\n/// @param {map} $opacity-map - map specifying custom opacity of zero or more states\n/// @param {bool} $has-nested-focusable-element - whether the component contains a focusable element in the root\n/// @param {string} $ripple-target - the optional selector for the ripple element\n///\n@mixin states-opacities(\n  $opacity-map: (),\n  $has-nested-focusable-element: false,\n  $ripple-target: '&',\n  $query: feature-targeting-functions.all()\n) {\n  // Ensure sufficient specificity to override base state opacities\n  @if map.has-key($opacity-map, hover) {\n    @include states-hover-opacity(\n      map.get($opacity-map, hover),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n\n  @if map.has-key($opacity-map, focus) {\n    @include states-focus-opacity(\n      map.get($opacity-map, focus),\n      $ripple-target: $ripple-target,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $query: $query\n    );\n  }\n\n  @if map.has-key($opacity-map, press) {\n    @include states-press-opacity(\n      map.get($opacity-map, press),\n      $ripple-target: $ripple-target,\n      $query: $query\n    );\n  }\n}\n\n@mixin states-hover-opacity(\n  $opacity,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting-functions.create-target($query, color);\n\n  // Background wash styles, for both CSS-only and upgraded stateful surfaces\n  &:hover {\n    #{$ripple-target}::before {\n      // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n      @include feature-targeting-mixins.targets($feat-color) {\n        opacity: $opacity;\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity(\n  $opacity,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  // Focus overrides hover by reusing the ::before pseudo-element.\n  // :focus-within generally works on non-MS browsers and matches when a *child* of the element has focus.\n  // It is useful for cases where a component has a focusable element within the root node, e.g. text field,\n  // but undesirable in general in case of nested stateful components.\n  // We use a modifier class for JS-enabled surfaces to support all use cases in all browsers.\n  @if $has-nested-focusable-element {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    &.mdc-ripple-upgraded:focus-within,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus,\n    &:not(.mdc-ripple-upgraded):focus-within {\n      #{$ripple-target}::before {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  } @else {\n    // JS-enabled selectors.\n    &.mdc-ripple-upgraded--background-focused,\n    // CSS-only selectors.\n    &:not(.mdc-ripple-upgraded):focus {\n      #{$ripple-target}::before {\n        @include states-focus-opacity-properties_(\n          $opacity: $opacity,\n          $query: $query\n        );\n      }\n    }\n  }\n}\n\n@mixin states-focus-opacity-properties_($opacity, $query) {\n  $feat-animation: feature-targeting-functions.create-target($query, animation);\n  // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n  $feat-color: feature-targeting-functions.create-target($query, color);\n\n  // Note that this duration is only effective on focus, not blur\n  @include feature-targeting-mixins.targets($feat-animation) {\n    transition-duration: 75ms;\n  }\n\n  @include feature-targeting-mixins.targets($feat-color) {\n    opacity: $opacity;\n  }\n}\n\n@mixin states-press-opacity(\n  $opacity,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-animation: feature-targeting-functions.create-target($query, animation);\n  $feat-color: feature-targeting-functions.create-target($query, color);\n\n  // Styles for non-upgraded (CSS-only) stateful surfaces\n\n  &:not(.mdc-ripple-upgraded) {\n    // Apply press additively by using the ::after pseudo-element\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-animation) {\n        transition: opacity variables.$fade-out-duration linear;\n      }\n    }\n\n    &:active {\n      #{$ripple-target}::after {\n        @include feature-targeting-mixins.targets($feat-animation) {\n          transition-duration: variables.$fade-in-duration;\n        }\n\n        // Opacity falls under color because the chosen opacity is color-dependent in typical usage\n        @include feature-targeting-mixins.targets($feat-color) {\n          opacity: $opacity;\n        }\n      }\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    @include feature-targeting-mixins.targets($feat-color) {\n      --mdc-ripple-fg-opacity: #{$opacity};\n    }\n  }\n}\n\n// Simple mixin for base states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states(\n  $color: theme-variables.prop-value(on-surface),\n  $has-nested-focusable-element: false,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  @include states-interactions_(\n    $color: $color,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $query: $query,\n    $ripple-target: $ripple-target\n  );\n}\n\n// Simple mixin for activated states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-activated(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting-functions.create-target($query, color);\n  $activated-opacity: functions.states-opacity($color, activated);\n\n  &--activated {\n    // Stylelint seems to think that '&' qualifies as a type selector here?\n    // stylelint-disable-next-line selector-max-type\n    #{$ripple-target}::before {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting-mixins.targets($feat-color) {\n        opacity: $activated-opacity;\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $activated-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n// Simple mixin for selected states which automatically selects opacity values based on whether the ink color is\n// light or dark.\n@mixin states-selected(\n  $color,\n  $has-nested-focusable-element: false,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-color: feature-targeting-functions.create-target($query, color);\n  $selected-opacity: functions.states-opacity($color, selected);\n\n  &--selected {\n    // stylelint-disable-next-line selector-max-type\n    #{$ripple-target}::before {\n      // Opacity falls under color because the chosen opacity is color-dependent.\n      @include feature-targeting-mixins.targets($feat-color) {\n        opacity: $selected-opacity;\n      }\n    }\n\n    @include states-interactions_(\n      $color: $color,\n      $has-nested-focusable-element: $has-nested-focusable-element,\n      $opacity-modifier: $selected-opacity,\n      $query: $query,\n      $ripple-target: $ripple-target\n    );\n  }\n}\n\n@mixin radius-bounded(\n  $radius: 100%,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting-functions.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting-mixins.targets($feat-struture) {\n      top: calc(50% - #{$radius});\n      /* @noflip */\n      left: calc(50% - #{$radius});\n      width: $radius * 2;\n      height: $radius * 2;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin radius-unbounded(\n  $radius: 100%,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  $feat-struture: feature-targeting-functions.create-target($query, structure);\n\n  #{$ripple-target}::before,\n  #{$ripple-target}::after {\n    @include feature-targeting-mixins.targets($feat-struture) {\n      top: calc(50% - #{$radius / 2});\n      /* @noflip */\n      left: calc(50% - #{$radius / 2});\n      width: $radius;\n      height: $radius;\n    }\n  }\n\n  &.mdc-ripple-upgraded {\n    #{$ripple-target}::before,\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-struture) {\n        top: var(--mdc-ripple-top, calc(50% - #{$radius / 2}));\n        /* @noflip */\n        left: var(--mdc-ripple-left, calc(50% - #{$radius / 2}));\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n\n    #{$ripple-target}::after {\n      @include feature-targeting-mixins.targets($feat-struture) {\n        width: var(--mdc-ripple-fg-size, $radius);\n        height: var(--mdc-ripple-fg-size, $radius);\n      }\n    }\n  }\n}\n\n@mixin states-interactions_(\n  $color,\n  $has-nested-focusable-element,\n  $opacity-modifier: 0,\n  $query: feature-targeting-functions.all(),\n  $ripple-target: '&'\n) {\n  @include target-selector($ripple-target) {\n    @include states-base-color($color, $query);\n  }\n\n  $opacity-map: (\n    hover: functions.states-opacity($color, hover) + $opacity-modifier,\n    focus: functions.states-opacity($color, focus) + $opacity-modifier,\n    press: functions.states-opacity($color, press) + $opacity-modifier,\n  );\n\n  @include states-opacities(\n    $opacity-map,\n    $has-nested-focusable-element: $has-nested-focusable-element,\n    $ripple-target: $ripple-target,\n    $query: $query\n  );\n}\n\n// Wraps content in the `ripple-target` selector if it exists.\n@mixin target-selector($ripple-target: '&') {\n  @if $ripple-target == '&' {\n    @content;\n  } @else {\n    #{$ripple-target} {\n      @content;\n    }\n  }\n}\n\n// Common styles for a ripple target element.\n// Used for components which have an inner ripple target element.\n@mixin target-common($query: feature-targeting-functions.all()) {\n  $feat-structure: feature-targeting-functions.create-target($query, structure);\n\n  @include feature-targeting-mixins.targets($feat-structure) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    // Necessary for clicks on other inner elements (e.g. close icon in chip)\n    // to go through.\n    pointer-events: none;\n  }\n}\n","//\n// Copyright 2016 Google Inc.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n//\n\n$fade-in-duration: 75ms !default;\n$fade-out-duration: 150ms !default;\n$translate-duration: 225ms !default;\n$states-wash-duration: 15ms !default;\n\n// Notes on states:\n// * focus takes precedence over hover (i.e. if an element is both focused and hovered, only focus value applies)\n// * press state applies to a separate pseudo-element, so it has an additive effect on top of other states\n// * selected/activated are applied additively to hover/focus via calculations at preprocessing time\n\n$dark-ink-opacities: (\n  hover: 0.04,\n  focus: 0.12,\n  press: 0.12,\n  selected: 0.08,\n  activated: 0.12,\n) !default;\n\n$light-ink-opacities: (\n  hover: 0.08,\n  focus: 0.24,\n  press: 0.24,\n  selected: 0.16,\n  activated: 0.24,\n) !default;\n\n// Legacy\n\n$pressed-dark-ink-opacity: 0.16 !default;\n$pressed-light-ink-opacity: 0.32 !default;\n","html {\n  height: 100%;\n  width: 100%;\n  font-family: $main-font;\n  font-weight: bold;\n  scroll-behavior: smooth;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mdc-tab-bar {\n  position: fixed;\n  top: 0;\n  z-index:1;\n  background: white;\n}\n\narticle {\n  display: flex;\n  h2 {\n    font-size: 40px;\n    padding-left: 5%;\n    padding-bottom: 3%;\n  }\n  pre {\n    font-family: $main-font;\n  }\n\n}\n\n#content {\n  margin-top: 48px;\n  max-width: 1400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n","@import './font';\n\n$main-font: 'Open Sans Condensed';\n$tablet-width: 768px;\n$desktop-width: 1500px;\n",".logo-div {\n  background-size: cover;\n  background-position: center;\n  width: 50px;\n  height: 50px;\n  align-self: center;\n  margin: 1%;\n}\n",".hero-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100%;\n  height: 85vh;\n  margin-bottom: 4%;\n}\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background: none;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n\n@media only screen and (max-width: 560px) {\n  .hero-text {\n    h1 {\n      font-size: 24px;\n    }\n  }\n}\n","footer {\n  display: flex;\n  width: 100%;\n  background-color: $grey;\n  padding: 0.5% 0%;\n  p {\n    padding-left: 1%;\n  }\n}\n","$red: rgb(164,17,9);\n$green: rgb(218,194,0);\n$blue: rgb(0,174,239);\n$purple: rgb(143,0,102);\n$grey: rgb(102,102,102);\n",".hours-article {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-around;\n  .article-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h3 {\n      font-size: 30px;\n    }\n  }\n}\n\n\n@media only screen and (max-width: 560px) {\n.hours-article {\n    flex-direction: column;\n  }\n}\n","article {\n  flex-direction: column;\n  font-size: 20px;\n\n  p {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n\n  ul {\n    padding: 1% 5% 2% 6%;\n  }\n\n  ul li::before {\n    content: \"-\";\n    /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n    color: $blue;\n    /* Change the color */\n    font-weight: bold;\n    /* If you want it to be bold */\n    display: inline-block;\n    /* Needed to add space between the bullet and the text */\n    width: 1em;\n    /* Also needed for space (tweak if needed) */\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/components/article.js":
/*!***********************************!*\
  !*** ./src/components/article.js ***!
  \***********************************/
/*! exports provided: renderArticle, buildArticleCard, renderArticleTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderArticle", function() { return renderArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildArticleCard", function() { return buildArticleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderArticleTitle", function() { return renderArticleTitle; });
// Render an article holder
const renderArticle = (content) => {
  let article = document.createElement('article');
  article.setAttribute('class', 'article');
  content.appendChild(article);
}

// Create a standard title + body card in page color, return built card
const buildArticleCard = (title, text, color) => {
  const holder = document.createElement('div');
  holder.setAttribute('class', 'article-card');
  const head = document.createElement('h3');
  const body = document.createElement('pre');
  head.innerHTML = title;
  body.innerHTML = text;
  head.style.color = color;
  holder.appendChild(head);
  holder.appendChild(body);

  return holder;
}

// Append title to artice object.
const renderArticleTitle = (text, color) => {
  let article = document.querySelector('article');
  let title = document.createElement('h2');

  title.innerHTML = " - " + text + " - ";
  title.style.color = color;

  article.appendChild(title);
}




/***/ }),

/***/ "./src/components/buildTab.js":
/*!************************************!*\
  !*** ./src/components/buildTab.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Build a nav tab w given name and index
const buildTab = (name, index) => {
  // Build basic button /w attributes, set index to given index
  let tab = document.createElement('button');
  tab.setAttribute('class', 'mdc-tab');
  tab.setAttribute('role', 'tab');
  tab.setAttribute('tabindex', index);

  // content container
  let tabContent = document.createElement('span');
  tabContent.setAttribute('class', 'mdc-tab__content');

  // Tab text, set tab name
  let tabText = document.createElement('span');
  tabText.setAttribute('class', 'mdc-tab__text-label');
  tabText.innerHTML = name;

  // Add text to content
  tabContent.appendChild(tabText);

  // Additonal tab design elements, building and adding required attributes
  let tabIndicator = document.createElement('span');
  tabIndicator.setAttribute('class', 'mdc-tab-indicator');

  let tabIndicatorCnt = document.createElement('span');
  tabIndicatorCnt.setAttribute('class', 'mdc-tab-indicator__content mdc-tab-indicator__content--underline');
  tabIndicator.appendChild(tabIndicatorCnt);

  let tabRipple = document.createElement('span');
  tabRipple.setAttribute('class', 'mdc-tab__ripple');

  // Put all the elements together on a tab
  tab.appendChild(tabContent);
  tab.appendChild(tabIndicator);
  tab.appendChild(tabRipple);

  // return the completed tab 
  return tab;
}

/* harmony default export */ __webpack_exports__["default"] = (buildTab);


/***/ }),

/***/ "./src/components/colors.js":
/*!**********************************!*\
  !*** ./src/components/colors.js ***!
  \**********************************/
/*! exports provided: colorList, colorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorList", function() { return colorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPicker", function() { return colorPicker; });
// A color list allowing us to cooridnate tab/page style colors
// Color will be according to tab number, give tab number, receive color
// Tabs go from 1-4.
const red = "rgb(164,17,9)";
const green = "rgb(218,194,0)";
const blue = "rgb(0,174,239)";
const purple = "rgb(143,0,102)";
const grey = "rgb(102,102,102)";

const tabColors = [red, purple, blue, green];
// tabColors.concat([red, purple, blue, green]);

const colors = tabColors + [grey];

// Return full list of colors
const colorList = () => {
  return colors;
}

// Will be for quick color picking based on tab, 1-4.
const colorPicker = (number) => {
    // adjust number to 0 index
    number -= 1;
    // If valid tab number->color, return tabs color.
    if (number >= 0 && number <= 3) {
      return tabColors[number];
    }
}





/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: renderFooter, changeFooterColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFooter", function() { return renderFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFooterColor", function() { return changeFooterColor; });
const renderFooter = (body) => {
  let container = document.createElement('footer');
  container.setAttribute('class', 'footer');
  let text = document.createElement('p');
  text.innerHTML = "© Tribe 2018. All rights reserved";
  container.appendChild(text);
  body.appendChild(container);

}

const changeFooterColor = (color) => {
  let container = document.querySelector('footer');
  container.style.color = color;
}




/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/*! exports provided: renderHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHero", function() { return renderHero; });
// Construct a hero image element and add to page
const renderHero = (text, image, content, color) => {

  // Build image background
  const imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'hero-image');
  imageDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
  imageDiv.style.borderBottom = `3px solid ${color}`;
  // Build text
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'hero-text');
  const title = document.createElement('h1');

  title.innerHTML = text;
  textDiv.appendChild(title)
  // Put together and append to content
  imageDiv.appendChild(textDiv);

  content.appendChild(imageDiv);

}




/***/ }),

/***/ "./src/components/renderLogo.js":
/*!**************************************!*\
  !*** ./src/components/renderLogo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");

const renderLogo = (content) => {
  let img = document.createElement('div');
  img.setAttribute('class', 'logo-div');
  img.style.backgroundImage = `url(${_img_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]})`;
  content.appendChild(img);
}


/* harmony default export */ __webpack_exports__["default"] = (renderLogo);


/***/ }),

/***/ "./src/components/renderNav.js":
/*!*************************************!*\
  !*** ./src/components/renderNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildTab */ "./src/components/buildTab.js");


const renderNav = (content) => {
  // Construct a matrial-ui tab nav style navbar and add to content element
  // passed in

  // Make tabBar
  let tabBar = document.createElement('div');
  tabBar.setAttribute('class', 'mdc-tab-bar');
  tabBar.setAttribute('role', 'tablist');

  // Make tabScroller
  let tabScroller = document.createElement('div');
  tabScroller.setAttribute('class', 'mdc-tab-scroller');

  // Make tabScrollerSa
  let tabScrollerSa = document.createElement('div');
  tabScrollerSa.setAttribute('class', 'mdc-tab-scroller__scroll-area');

  // Make tabScrollerSc
  let tabScrollerSc = document.createElement('div');
  tabScrollerSc.setAttribute('class', 'mdc-tab-scroller__scroll-content');


  // Build tabs for menu, passing in the tab name we want and index
  let aboutTab = Object(_buildTab__WEBPACK_IMPORTED_MODULE_0__["default"])('hours', 0);
  let menusTab = Object(_buildTab__WEBPACK_IMPORTED_MODULE_0__["default"])('menus', 1);
  let manifestoTab = Object(_buildTab__WEBPACK_IMPORTED_MODULE_0__["default"])('manifesto', 2);
  let contactTab = Object(_buildTab__WEBPACK_IMPORTED_MODULE_0__["default"])('contact', 3);


  // Add new buttons to our
  tabScrollerSc.appendChild(aboutTab);
  tabScrollerSc.appendChild(menusTab);
  tabScrollerSc.appendChild(manifestoTab);
  tabScrollerSc.appendChild(contactTab);
  // Add the Sc to the Sa
  tabScrollerSa.appendChild(tabScrollerSc);
  // Add the Sa to the Scroller
  tabScroller.appendChild(tabScrollerSa);
  // Add scroller to tab/nav Bar
  tabBar.appendChild(tabScroller);

  // Add our completed nav/tab Bar to the content div passed in.
  content.appendChild(tabBar);

}

/* harmony default export */ __webpack_exports__["default"] = (renderNav);


/***/ }),

/***/ "./src/controllers/clearContent.js":
/*!*****************************************!*\
  !*** ./src/controllers/clearContent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Reset #content for new page, returns our new content section to render in
const clearContent = (body) => {
  // Grab old content and delete if present
  const oldContent = document.querySelector('#content');
  if (oldContent) {
    body.removeChild(oldContent);
  }
  // Build and add new contact, returning it so we can render in it
  const newContent = document.createElement('main');
  newContent.setAttribute('id', 'content');
  let footer = document.querySelector('footer');
  body.insertBefore(newContent, footer);

  return newContent;
}

/* harmony default export */ __webpack_exports__["default"] = (clearContent);


/***/ }),

/***/ "./src/controllers/displayController.js":
/*!**********************************************!*\
  !*** ./src/controllers/displayController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_renderHours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/renderHours */ "./src/pages/renderHours.js");
/* harmony import */ var _pages_renderMenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/renderMenus */ "./src/pages/renderMenus.js");
/* harmony import */ var _pages_renderManifesto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/renderManifesto */ "./src/pages/renderManifesto.js");
/* harmony import */ var _pages_renderContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/renderContact */ "./src/pages/renderContact.js");
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearContent */ "./src/controllers/clearContent.js");
// Imports







// Given the index of the page, call approproate render function, passing
// in the main body content it will render to.
const displayController = (index) => {

  // Reset #content for new page, returns our new content section
  const body = document.querySelector('body');
  let newContent = Object(_clearContent__WEBPACK_IMPORTED_MODULE_4__["default"])(body);

  // Scroll to top of page
  window.scrollTo(0, 0);
  // Render page based on index
  switch (index) {
    case (0):
      Object(_pages_renderHours__WEBPACK_IMPORTED_MODULE_0__["default"])(newContent);
      break;
    case (1):
      Object(_pages_renderMenus__WEBPACK_IMPORTED_MODULE_1__["default"])(newContent);
      break;
    case (2):
      Object(_pages_renderManifesto__WEBPACK_IMPORTED_MODULE_2__["default"])(newContent);
      break;
    case (3):
      Object(_pages_renderContact__WEBPACK_IMPORTED_MODULE_3__["default"])(newContent);
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (displayController);


/***/ }),

/***/ "./src/controllers/pageLoad.js":
/*!*************************************!*\
  !*** ./src/controllers/pageLoad.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_renderNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderNav */ "./src/components/renderNav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/controllers/displayController.js");
/* harmony import */ var _material_tab_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/tab-bar */ "./node_modules/@material/tab-bar/index.js");
// Imports






// Basic page element setup, load nav and activate our landing page
const pageLoad = () => {
  // Whole page holder
  const body = document.querySelector('body');

  // renderNav will setup listener and navbar, we will activate once page setup below.
  Object(_components_renderNav__WEBPACK_IMPORTED_MODULE_0__["default"])(body);

  // Main content body --TODO: Turn this *make main* action into constructor
  const content = document.createElement('main');
  content.setAttribute('id', 'content');
  body.appendChild(content);

  // renderFooter will build and append footer to body element
  Object(_components_footer__WEBPACK_IMPORTED_MODULE_1__["renderFooter"])(body);

  // Add listener to body that will call our display controller when it hears
  // a tab activated event and pass along info from event
  body.addEventListener('MDCTabBar:activated', (e) => {
    // Pass along index of event to controller ot render associated body
    Object(_displayController__WEBPACK_IMPORTED_MODULE_2__["default"])(e.detail.index);
  })

  // Grab tabBar and activate our desired landing page (Hours in our case)
  const tabBar = new _material_tab_bar__WEBPACK_IMPORTED_MODULE_3__["MDCTabBar"](document.querySelector('.mdc-tab-bar'));
  tabBar.activateTab(0); //trigger default activate on load.

}



// Exports
/* harmony default export */ __webpack_exports__["default"] = (pageLoad);


/***/ }),

/***/ "./src/img/contactBackground.jpg":
/*!***************************************!*\
  !*** ./src/img/contactBackground.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6e94fab33ac9981beffbdca4000d01d.jpg");

/***/ }),

/***/ "./src/img/hoursBackgroundClip.jpg":
/*!*****************************************!*\
  !*** ./src/img/hoursBackgroundClip.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e869dc3ddbf923b2254c19dd55312128.jpg");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2cf301551e389d5230e4891c6e393cf9.png");

/***/ }),

/***/ "./src/img/manifestoBackgroundClip.jpg":
/*!*********************************************!*\
  !*** ./src/img/manifestoBackgroundClip.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "73ea915dd5eb07427a618c1a20e224bd.jpg");

/***/ }),

/***/ "./src/img/menuBackgroundClip.jpg":
/*!****************************************!*\
  !*** ./src/img/menuBackgroundClip.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d88a0453e2f66b355eeff877bbfa2c4.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/pageLoad */ "./src/controllers/pageLoad.js");
/* harmony import */ var _style_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/reset.scss */ "./src/style/reset.scss");
/* harmony import */ var _style_reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_reset_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_2__);
// Import methods/functionality


// Import styles




// On initial page load, do our default setup, which will choose our landing page
// and add listeners for further nav
document.onload = Object(_controllers_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/pages/renderContact.js":
/*!************************************!*\
  !*** ./src/pages/renderContact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/contactBackground.jpg */ "./src/img/contactBackground.jpg");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/article */ "./src/components/article.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_renderLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/renderLogo */ "./src/components/renderLogo.js");
/* harmony import */ var _components_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/colors */ "./src/components/colors.js");










const renderContact = (content) => {
  // Set our text for our hours page
  const heroText = "CONTACT";
  const heroURL = _img_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];

  // Builds a hero element with the text, background image, and appends to our content
  Object(_components_hero__WEBPACK_IMPORTED_MODULE_1__["renderHero"])(heroText, heroURL, content, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(4));

  // Render article
  Object(_components_article__WEBPACK_IMPORTED_MODULE_2__["renderArticle"])(content);

  let article = document.querySelector('article');


  // Add logo to bottom of page
  Object(_components_renderLogo__WEBPACK_IMPORTED_MODULE_4__["default"])(article);

  Object(_components_footer__WEBPACK_IMPORTED_MODULE_3__["changeFooterColor"])(Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(4));


}

/* harmony default export */ __webpack_exports__["default"] = (renderContact);


/***/ }),

/***/ "./src/pages/renderHours.js":
/*!**********************************!*\
  !*** ./src/pages/renderHours.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_hoursBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/hoursBackgroundClip.jpg */ "./src/img/hoursBackgroundClip.jpg");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/article */ "./src/components/article.js");
/* harmony import */ var _components_renderLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/renderLogo */ "./src/components/renderLogo.js");
/* harmony import */ var _components_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/colors */ "./src/components/colors.js");








const renderHours = (content) => {

  // Set our text for our hours page
  const heroText = "We are a contemporary restaurant with a mind to source" +
    " local, seasonal, ingredients to create food inspired from around the world. " +
    "Terry, Paul and Brandon are travellers and foodies. We love rich intense flavours, " +
    "fresh products, and spice, yet… we understand that we live in Red Deer and people here also enjoy comfort food.";
  const heroURL = _img_hoursBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];

  // Builds a hero element with the text, background image, and appends to our content
  Object(_components_hero__WEBPACK_IMPORTED_MODULE_1__["renderHero"])(heroText, heroURL, content, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(1));

  // let hero = document.querySelector('.hero-image');
  // hero.style.borderBottom = `3px solid ${colorPicker(1)}`;

  // Render article element
  Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["renderArticle"])(content);

  let article = document.querySelector('article');

  article.setAttribute('class', 'hours-article');

  // Create two cards, add them to artice.

  // Build address card
  let addressText = document.createElement('pre');
  addressText =
  "       4930 Ross St.\n" +
  "Red Deer, AB T4N 1X7\n" +
  "\n" +
  "            Phone:\n" +
  "      403-392-3046\n" +
  "            Email:\n" +
  "eat@tribeflatout.com\n"


  let addressCard = Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["buildArticleCard"])('Address', addressText, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(1));
  article.appendChild(addressCard);

  // Build hours card
  let hoursText = document.createElement('pre');
  // hoursText =
  // "   Tuesday 11:30 a.m. – 2:30 p.m.\n" +
  // "    Wednesday 11:30 a.m. – LATE\n" +
  // "     Thursday 11:30 a.m. – LATE\n" +
  // "       Friday 11:30 a.m. – LATE\n" +
  // "     Saturday 11:30 a.m. – LATE\n" +
  // "\n" +
  // "Happy Hour: 2:30 p.m. – 4:30 p.m.";

  hoursText =
  "                       Tuesday:\n" +
  "           11:30 a.m. – 2:30 p.m.\n" +
  "\n" +
  "             Wed, Thurs, Fri, Sat:\n" +
  "               11:30 a.m. – LATE\n" +
  "\n" +
  "Happy Hour: 2:30 p.m. – 4:30 p.m.";


  let hoursCard = Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["buildArticleCard"])('Hours', hoursText, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(1));
  article.appendChild(hoursCard);

  // Add logo to bottom of page
  Object(_components_renderLogo__WEBPACK_IMPORTED_MODULE_4__["default"])(content);
  // Change our footer color to our page color
  Object(_components_footer__WEBPACK_IMPORTED_MODULE_2__["changeFooterColor"])(Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(1));

}

/* harmony default export */ __webpack_exports__["default"] = (renderHours);


/***/ }),

/***/ "./src/pages/renderManifesto.js":
/*!**************************************!*\
  !*** ./src/pages/renderManifesto.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_manifestoBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/manifestoBackgroundClip.jpg */ "./src/img/manifestoBackgroundClip.jpg");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_renderLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/renderLogo */ "./src/components/renderLogo.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/article */ "./src/components/article.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/colors */ "./src/components/colors.js");







const renderManifesto = (content) => {
  // Set our text for our hours page
  const heroText = "MANISFESTO";
  const heroURL = _img_manifestoBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];

  // Builds a hero element with the text, background image, and appends to our content
  Object(_components_hero__WEBPACK_IMPORTED_MODULE_1__["renderHero"])(heroText, heroURL, content, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(3));

  // Render article
  Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["renderArticle"])(content);

  // Build about us section
  Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["renderArticleTitle"])('About Us', Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(3));

  let article = document.querySelector('article');
  let text = document.createElement('p');
  text.innerHTML = `A committed social group comprising relations and adopted ` +
    `strangers. People connected by a shared interest such as beer, shoes, knitting, ` +
    `fancy chickens, star trek, yoga, quidditch, cannabis, heirloom vegetables, bugs, ` +
    `bread-making, cats, world-wandering, glass-blowing, curling, canines … You… are ` +
    `part of our tribe. One thing that’s common among humanity is our love of food, ` +
    `drink, and storytelling. Here at Tribe we imagine all people regardless of ` +
    `culture, background, or life philosophy coming together to enjoy craft beer and ` +
    `our internationally inspired menu using locally-sourced ingredients whenever we ` +
    `can, thoughtfully created by chefs that care about your culinary experience. ` +
    `Inspired by our ancestors from around the world we invite you to enjoy our ` +
    `offerings, celebrate one another and our equally diverse and beautiful journeys. ` +
    `We look forward to sharing our worlds with your worlds… in a sexy sophisticated ` +
    `way. Romance isn’t just for lovers ‐ it’s to be shared with all of humanity. Eat ` +
    `a little. Drink a little. Flirt a little. Tell your most awesome stories.`

  article.appendChild(text);

  // Build agreement section
  Object(_components_article__WEBPACK_IMPORTED_MODULE_3__["renderArticleTitle"])('Agreement', Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(3));

  let text2 = document.createElement('p');
  text2.innerHTML = "Don't think of these as house rules, so much as strong suggestions " +
    "about how you might make your time here together a thing of beauty.";

  let ul = document.createElement('ul');
  const agreements = ["Pretend it’s 1970 and cell phones don’t exist and we take our hats off inside.",
    "Say one thing that turns you on about life.",
    "Notice how sexy your server is and flirt a little.",
    "Dream about a foreign country you’d like to visit.",
    "Conjugate ‘tribe’ into an adverb and adjective and use it in a clever sentence.",
    "take a moment to appreciate and embrace your tribe with a toast.",
    "Be uninhibited for a few moments… in a kind way.",
    "Use expressive language. If you must swear, the tribe charge is $20 a word, if any one overhears."
  ];

  // Add agreements to ul in article
  for (var i = 0; i < agreements.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = agreements[i];
    ul.appendChild(li);
  }

  // Add items to article.
  article.appendChild(text2);
  article.appendChild(ul);

  // Add logo to bottom of page
  Object(_components_renderLogo__WEBPACK_IMPORTED_MODULE_2__["default"])(article);
  // Update footer color
  Object(_components_footer__WEBPACK_IMPORTED_MODULE_4__["changeFooterColor"])(Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(3));
}

/* harmony default export */ __webpack_exports__["default"] = (renderManifesto);


/***/ }),

/***/ "./src/pages/renderMenus.js":
/*!**********************************!*\
  !*** ./src/pages/renderMenus.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_menuBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menuBackgroundClip.jpg */ "./src/img/menuBackgroundClip.jpg");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/article */ "./src/components/article.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_renderLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/renderLogo */ "./src/components/renderLogo.js");
/* harmony import */ var _components_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/colors */ "./src/components/colors.js");










const renderMenus = (content) => {
  // Set our text for our hours page
  const heroText = "MENUS";
  const heroURL = _img_menuBackgroundClip_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];

  // Builds a hero element with the text, background image, and appends to our content
  Object(_components_hero__WEBPACK_IMPORTED_MODULE_1__["renderHero"])(heroText, heroURL, content, Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(2));


  // render article
  Object(_components_article__WEBPACK_IMPORTED_MODULE_2__["renderArticle"])(content);

  let article = document.querySelector('article');


  // Add logo to bottom of page
  Object(_components_renderLogo__WEBPACK_IMPORTED_MODULE_4__["default"])(article);


  Object(_components_footer__WEBPACK_IMPORTED_MODULE_3__["changeFooterColor"])(Object(_components_colors__WEBPACK_IMPORTED_MODULE_5__["colorPicker"])(2));

}

/* harmony default export */ __webpack_exports__["default"] = (renderMenus);


/***/ }),

/***/ "./src/style/reset.scss":
/*!******************************!*\
  !*** ./src/style/reset.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/reset.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZhZGluZy1mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9zbGlkaW5nLWZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1kZWZhdWx0LXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1uZWdhdGl2ZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1aWxkVGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZW5kZXJMb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlbmRlck5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvY2xlYXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jb250YWN0QmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ob3Vyc0JhY2tncm91bmRDbGlwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWFuaWZlc3RvQmFja2dyb3VuZENsaXAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWVudUJhY2tncm91bmRDbGlwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3JlbmRlckNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3JlbmRlckhvdXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZW5kZXJNYW5pZmVzdG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3JlbmRlck1lbnVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9yZXNldC5zY3NzPzE0YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/ZTZjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMEVBQTBFLEVBQUU7QUFDdkg7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZFQUE2RSxFQUFFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0RBQWtELEVBQUU7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtEQUFPO0FBQzNDLHNDQUFzQyxrREFBTyxxQ0FBcUMsa0RBQU87QUFDekYsc0NBQXNDLGtEQUFPLHNDQUFzQyxrREFBTztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGtEQUFPO0FBQzFELG1EQUFtRCxrREFBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGtEQUFPO0FBQzFELG1EQUFtRCxrREFBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxRQUFRLE1BQU0sWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksY0FBYyxlQUFlLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxZQUFZLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxZQUFZLFlBQVksUUFBUSxPQUFPLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxTQUFTLFFBQVEsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFNBQVMsUUFBUSxVQUFVLFVBQVUsVUFBVSxXQUFXLFNBQVMsUUFBUSxVQUFVLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxRQUFRLFFBQVEsWUFBWSxTQUFTLFFBQVEsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxTQUFTLE1BQU0sVUFBVSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxZQUFZLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sT0FBTyxZQUFZLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksWUFBWSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFNBQVMsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFNBQVMsUUFBUSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxTQUFTLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsU0FBUyxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFNBQVMsUUFBUSxLQUFLLFdBQVcsUUFBUSxLQUFLLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsNERBQTRELHVDQUF1Qyx1QkFBdUIscUJBQXFCLHVCQUF1Qix5TUFBeU0sMkZBQTJGLEdBQUcsOEJBQThCLHVDQUF1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QUFBQTtBQUF1RDtBQUczQjtBQUdHO0FBR0Q7QUFDb0I7QUFHcEI7Ozs7O0FBSzlCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtRUFBVTs7QUFFNUI7QUFDQSxFQUFFLG1FQUFVLDZCQUE2QixzRUFBVzs7O0FBR3BEO0FBQ0EsRUFBRSx5RUFBYTs7QUFFZjs7O0FBR0E7QUFDQSxFQUFFLHNFQUFVOzs7QUFHWixFQUFFLDRFQUFpQixDQUFDLHNFQUFXOztBQUUvQjs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7QUN6QzNCLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNlRBQXVLOztBQUV6TTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw2VEFBdUs7O0FBRXpNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWQgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb24gPVxuICAgICAgICAgICAgZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgICB9XG4gICAgTURDQ29tcG9uZW50LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgICAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAgICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgICAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbih7fSkpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG1ldGhvZCBwYXJhbSBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzOyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXQgdGVzdGVkICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIF9hcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAgICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAgICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAgICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAgICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSkge1xuICAgICAgICBpZiAoc2hvdWxkQnViYmxlID09PSB2b2lkIDApIHsgc2hvdWxkQnViYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290LmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290XG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGluc3RhbmNlLnJvb3QsICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290XG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdDtcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpOyB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgP1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmlzU3VyZmFjZUFjdGl2ZSgpIDpcbiAgICAgICAgICAgIHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlci5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB2YXIgaW5pdGlhbFNpemUgPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgc2l6ZSBzaG91bGQgYWx3YXlzIGJlIGV2ZW4gbnVtYmVyIHRvIGVxdWFsbHkgY2VudGVyIGFsaWduLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkgJiYgaW5pdGlhbFNpemUgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IGluaXRpYWxTaXplIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gaW5pdGlhbFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBzdXBwb3J0c0Nzc1ZhcnMgPVxuICAgICAgICBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cztcbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyIH0gZnJvbSAnQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGFiIH0gZnJvbSAnQG1hdGVyaWFsL3RhYi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGFiRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUYWJCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBzdHJpbmdzID0gTURDVGFiQmFyRm91bmRhdGlvbi5zdHJpbmdzO1xudmFyIHRhYklkQ291bnRlciA9IDA7XG52YXIgTURDVGFiQmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENUYWJCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RhYkJhci5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGFiQmFyKHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkJhci5wcm90b3R5cGUsIFwiZm9jdXNPbkFjdGl2YXRlXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm9jdXNPbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RfLmZvckVhY2goZnVuY3Rpb24gKHRhYikgeyByZXR1cm4gdGFiLmZvY3VzT25BY3RpdmF0ZSA9IGZvY3VzT25BY3RpdmF0ZTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJCYXIucHJvdG90eXBlLCBcInVzZUF1dG9tYXRpY0FjdGl2YXRpb25cIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VXNlQXV0b21hdGljQWN0aXZhdGlvbih1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGFiQmFyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHRhYkZhY3RvcnksIHRhYlNjcm9sbGVyRmFjdG9yeSkge1xuICAgICAgICBpZiAodGFiRmFjdG9yeSA9PT0gdm9pZCAwKSB7IHRhYkZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENUYWIoZWwpOyB9OyB9XG4gICAgICAgIGlmICh0YWJTY3JvbGxlckZhY3RvcnkgPT09IHZvaWQgMCkgeyB0YWJTY3JvbGxlckZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlcihlbCk7IH07IH1cbiAgICAgICAgdGhpcy50YWJMaXN0XyA9IHRoaXMuaW5zdGFudGlhdGVUYWJzXyh0YWJGYWN0b3J5KTtcbiAgICAgICAgdGhpcy50YWJTY3JvbGxlcl8gPSB0aGlzLmluc3RhbnRpYXRlVGFiU2Nyb2xsZXJfKHRhYlNjcm9sbGVyRmFjdG9yeSk7XG4gICAgfTtcbiAgICBNRENUYWJCYXIucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW5kbGVUYWJJbnRlcmFjdGlvbl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZm91bmRhdGlvbi5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlEb3duKGV2dCk7IH07XG4gICAgICAgIHRoaXMubGlzdGVuKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVEVEX0VWRU5ULCB0aGlzLmhhbmRsZVRhYkludGVyYWN0aW9uXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duXyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJMaXN0Xy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFiTGlzdF9baV0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVGFiQmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCwgdGhpcy5oYW5kbGVUYWJJbnRlcmFjdGlvbl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duXyk7XG4gICAgICAgIHRoaXMudGFiTGlzdF8uZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7IHJldHVybiB0YWIuZGVzdHJveSgpOyB9KTtcbiAgICAgICAgaWYgKHRoaXMudGFiU2Nyb2xsZXJfKSB7XG4gICAgICAgICAgICB0aGlzLnRhYlNjcm9sbGVyXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1RhYkJhci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBzY3JvbGxUbzogZnVuY3Rpb24gKHNjcm9sbFgpIHsgcmV0dXJuIF90aGlzLnRhYlNjcm9sbGVyXy5zY3JvbGxUbyhzY3JvbGxYKTsgfSxcbiAgICAgICAgICAgIGluY3JlbWVudFNjcm9sbDogZnVuY3Rpb24gKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudGFiU2Nyb2xsZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudGFiU2Nyb2xsZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7IH0sXG4gICAgICAgICAgICBnZXRTY3JvbGxDb250ZW50V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRhYlNjcm9sbGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTsgfSxcbiAgICAgICAgICAgIGdldE9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Lm9mZnNldFdpZHRoOyB9LFxuICAgICAgICAgICAgaXNSVEw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF90aGlzLnJvb3QpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJzsgfSxcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYjogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlVGFiKGluZGV4KTsgfSxcbiAgICAgICAgICAgIGFjdGl2YXRlVGFiQXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRhYkxpc3RfW2luZGV4XS5hY3RpdmF0ZShjbGllbnRSZWN0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBfdGhpcy50YWJMaXN0X1tpbmRleF0uZGVhY3RpdmF0ZSgpOyB9LFxuICAgICAgICAgICAgZm9jdXNUYWJBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIF90aGlzLnRhYkxpc3RfW2luZGV4XS5mb2N1cygpOyB9LFxuICAgICAgICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy50YWJMaXN0X1tpbmRleF0uY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRhYkxpc3RfW2luZGV4XS5jb21wdXRlRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLnRhYkxpc3RfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50YWJMaXN0X1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGb2N1c2VkVGFiSW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFiRWxlbWVudHMgPSBfdGhpcy5nZXRUYWJFbGVtZW50c18oKTtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYkVsZW1lbnRzLmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SW5kZXhPZlRhYkJ5SWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMudGFiTGlzdF8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRhYkxpc3RfW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRhYkxpc3RMZW5ndGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRhYkxpc3RfLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBfdGhpcy5lbWl0KHN0cmluZ3MuVEFCX0FDVElWQVRFRF9FVkVOVCwgeyBpbmRleDogaW5kZXggfSwgdHJ1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGFiQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkJhci5wcm90b3R5cGUuYWN0aXZhdGVUYWIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlVGFiKGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4IFRIZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICovXG4gICAgTURDVGFiQmFyLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHRhYiBlbGVtZW50cyBpbiBhIG5pY2UgY2xlYW4gYXJyYXlcbiAgICAgKi9cbiAgICBNRENUYWJCYXIucHJvdG90eXBlLmdldFRhYkVsZW1lbnRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5UQUJfU0VMRUNUT1IpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlcyB0YWIgY29tcG9uZW50cyBvbiBhbGwgY2hpbGQgdGFiIGVsZW1lbnRzXG4gICAgICovXG4gICAgTURDVGFiQmFyLnByb3RvdHlwZS5pbnN0YW50aWF0ZVRhYnNfID0gZnVuY3Rpb24gKHRhYkZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFiRWxlbWVudHNfKCkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuaWQgPSBlbC5pZCB8fCBcIm1kYy10YWItXCIgKyArK3RhYklkQ291bnRlcjtcbiAgICAgICAgICAgIHJldHVybiB0YWJGYWN0b3J5KGVsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgdGFiIHNjcm9sbGVyIGNvbXBvbmVudCBvbiB0aGUgY2hpbGQgdGFiIHNjcm9sbGVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICBNRENUYWJCYXIucHJvdG90eXBlLmluc3RhbnRpYXRlVGFiU2Nyb2xsZXJfID0gZnVuY3Rpb24gKHRhYlNjcm9sbGVyRmFjdG9yeSkge1xuICAgICAgICB2YXIgdGFiU2Nyb2xsZXJFbGVtZW50ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5UQUJfU0NST0xMRVJfU0VMRUNUT1IpO1xuICAgICAgICBpZiAodGFiU2Nyb2xsZXJFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFiU2Nyb2xsZXJGYWN0b3J5KHRhYlNjcm9sbGVyRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiQmFyO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RhYkJhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJST1dfTEVGVF9LRVk6ICdBcnJvd0xlZnQnLFxuICAgIEFSUk9XX1JJR0hUX0tFWTogJ0Fycm93UmlnaHQnLFxuICAgIEVORF9LRVk6ICdFbmQnLFxuICAgIEVOVEVSX0tFWTogJ0VudGVyJyxcbiAgICBIT01FX0tFWTogJ0hvbWUnLFxuICAgIFNQQUNFX0tFWTogJ1NwYWNlJyxcbiAgICBUQUJfQUNUSVZBVEVEX0VWRU5UOiAnTURDVGFiQmFyOmFjdGl2YXRlZCcsXG4gICAgVEFCX1NDUk9MTEVSX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXInLFxuICAgIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBBUlJPV19MRUZUX0tFWUNPREU6IDM3LFxuICAgIEFSUk9XX1JJR0hUX0tFWUNPREU6IDM5LFxuICAgIEVORF9LRVlDT0RFOiAzNSxcbiAgICBFTlRFUl9LRVlDT0RFOiAxMyxcbiAgICBFWFRSQV9TQ1JPTExfQU1PVU5UOiAyMCxcbiAgICBIT01FX0tFWUNPREU6IDM2LFxuICAgIFNQQUNFX0tFWUNPREU6IDMyLFxufTtcbmV4cG9ydCB7IG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgQUNDRVBUQUJMRV9LRVlTID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5IT01FX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5URVJfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5TUEFDRV9LRVkpO1xudmFyIEtFWUNPREVfTUFQID0gbmV3IE1hcCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IE1hcCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX0xFRlRfS0VZQ09ERSwgc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5BUlJPV19SSUdIVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5FTkRfS0VZQ09ERSwgc3RyaW5ncy5FTkRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkhPTUVfS0VZQ09ERSwgc3RyaW5ncy5IT01FX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5FTlRFUl9LRVlDT0RFLCBzdHJpbmdzLkVOVEVSX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5TUEFDRV9LRVlDT0RFLCBzdHJpbmdzLlNQQUNFX0tFWSk7XG52YXIgTURDVGFiQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUYWJCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1RhYkJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiQmFyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkJhckZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJCYXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGluY3JlbWVudFNjcm9sbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBpc1JUTDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZVRhYkF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c1RhYkF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyByb290TGVmdDogMCwgcm9vdFJpZ2h0OiAwLCBjb250ZW50TGVmdDogMCwgY29udGVudFJpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIGdldEZvY3VzZWRUYWJJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5kZXhPZlRhYkJ5SWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIGdldFRhYkxpc3RMZW5ndGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5VGFiQWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgYmV0d2VlbiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBhY3RpdmF0aW9uIG1vZGVzLlxuICAgICAqIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyN0YWJwYW5lbCBmb3IgZXhhbXBsZXMuXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VXNlQXV0b21hdGljQWN0aXZhdGlvbiA9IGZ1bmN0aW9uICh1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSB1c2VBdXRvbWF0aWNBY3RpdmF0aW9uO1xuICAgIH07XG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVUYWIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB8fCBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c0NsaWVudFJlY3Q7XG4gICAgICAgIGlmIChwcmV2aW91c0FjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlYWN0aXZhdGVUYWJBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgcHJldmlvdXNDbGllbnRSZWN0ID1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmFjdGl2YXRlVGFiQXRJbmRleChpbmRleCwgcHJldmlvdXNDbGllbnRSZWN0KTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpO1xuICAgIH07XG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBrZXkgZnJvbSB0aGUgZXZlbnRcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBldmVudCBrZXkgaXNuJ3Qgb25lIG9mIHRoZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGtleXNcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIGZvciBtb3ZlbWVudCBrZXlzLCBidXQgbm90IGZvciBhY3RpdmF0aW9uIGtleXMsIHNpbmNlIDphY3RpdmUgaXMgdXNlZCB0byBhcHBseSByaXBwbGVcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8odGhpcy5hZGFwdGVyLmdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKSwga2V5KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZFRhYkluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEZvY3VzZWRUYWJJbmRleCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEFjdGl2ZVRhYihmb2N1c2VkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5kZXRlcm1pbmVUYXJnZXRGcm9tS2V5Xyhmb2N1c2VkVGFiSW5kZXgsIGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzVGFiQXRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFiSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBY3RpdmVUYWIodGhpcy5hZGFwdGVyLmdldEluZGV4T2ZUYWJCeUlkKGV2dC5kZXRhaWwudGFiSWQpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4IFRoZSB0YWIgaW5kZXggdG8gbWFrZSB2aXNpYmxlXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlXG4gICAgICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8oaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHNjcm9sbCB0byAwIGlmIHNjcm9sbGluZyB0byB0aGUgMHRoIGluZGV4XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zY3JvbGxUbygwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIHRoZSBtYXggdmFsdWUgaWYgc2Nyb2xsaW5nIHRvIHRoZSBOdGggaW5kZXhcbiAgICAgICAgLy8gTURDVGFiU2Nyb2xsZXIuc2Nyb2xsVG8oKSB3aWxsIG5ldmVyIHNjcm9sbCBwYXN0IHRoZSBtYXggcG9zc2libGUgdmFsdWVcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXIuZ2V0VGFiTGlzdExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zY3JvbGxUbyh0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB0aGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHRhYiBiYXNlZCBvbiB3aGF0IGtleSB3YXMgcHJlc3NlZFxuICAgICAqIEBwYXJhbSBvcmlnaW4gVGhlIG9yaWdpbmFsIGluZGV4IGZyb20gd2hpY2ggdG8gZGV0ZXJtaW5lIHRoZSBkZXN0aW5hdGlvblxuICAgICAqIEBwYXJhbSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVybWluZVRhcmdldEZyb21LZXlfID0gZnVuY3Rpb24gKG9yaWdpbiwga2V5KSB7XG4gICAgICAgIHZhciBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRUYWJMaXN0TGVuZ3RoKCkgLSAxO1xuICAgICAgICB2YXIgc2hvdWxkR29Ub0VuZCA9IGtleSA9PT0gc3RyaW5ncy5FTkRfS0VZO1xuICAgICAgICB2YXIgc2hvdWxkRGVjcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmIGlzUlRMO1xuICAgICAgICB2YXIgc2hvdWxkSW5jcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmIGlzUlRMO1xuICAgICAgICB2YXIgaW5kZXggPSBvcmlnaW47XG4gICAgICAgIGlmIChzaG91bGRHb1RvRW5kKSB7XG4gICAgICAgICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNob3VsZERlY3JlbWVudCkge1xuICAgICAgICAgICAgaW5kZXggLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaG91bGRJbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA+IG1heEluZGV4KSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfID0gZnVuY3Rpb24gKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgICAgICB2YXIgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudExlZnQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgICAgIHZhciByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICB2YXIgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICBpZiAobmV4dEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5tYXgocmlnaHRJbmNyZW1lbnQsIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlIGluIFJUTFxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAgICogQHBhcmFtIHNjcm9sbENvbnRlbnRXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50UlRMXyA9IGZ1bmN0aW9uIChpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgICAgICB2YXIgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudExlZnQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgICAgICB2YXIgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICB2YXIgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICBpZiAobmV4dEluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5taW4ocmlnaHRJbmNyZW1lbnQsIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHRhYkRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyA9IGZ1bmN0aW9uIChpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWJzIGFyZSBsYWlkIG91dCBpbiB0aGUgVGFiIFNjcm9sbGVyIGxpa2UgdGhpczpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICAgICAqICAgICstLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgQmFyIFdpZHRoXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgIHwgICBWICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIFYgICB8ICAgICAgICAgICAgIFRhYiBTY3JvbGxlciAgICAgICAgICB8XG4gICAgICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGRldGVybWluZSB0aGUgbmV4dCBhZGphY2VudCBpbmRleCwgd2UgbG9vayBhdCB0aGUgVGFiIHJvb3QgbGVmdCBhbmRcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICAgICAqIGxlZnQgaXMgbGVzcyB0aGFuIDAsIHRoZW4gd2Uga25vdyBpdCdzIG91dCBvZiB2aWV3IHRvIHRoZSBsZWZ0LiBJZiB0aGVcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQgbWludXMgdGhlIGJhciB3aWR0aCBpcyBncmVhdGVyIHRoYW4gMCwgd2Uga25vdyB0aGUgVGFiIGlzXG4gICAgICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgICAgICogdGhlIGluZGV4LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdExlZnQgPSB0YWJEaW1lbnNpb25zLnJvb3RMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgICAgIHZhciByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdERlbHRhID0gcmVsYXRpdmVSb290TGVmdCArIHJlbGF0aXZlUm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJlbGF0aXZlUm9vdExlZnQgPCAwIHx8IHJlbGF0aXZlUm9vdERlbHRhIDwgMDtcbiAgICAgICAgdmFyIHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcbiAgICAgICAgaWYgKGxlZnRFZGdlSXNDbG9zZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGluZGV4IG9mIHRoZSBhZGphY2VudCB0YWIgY2xvc2VzdCB0byBlaXRoZXIgZWRnZSBvZiB0aGUgVGFiIEJhciBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICAgKiBAcGFyYW0gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHRhYiBiYXJcbiAgICAgKiBAcGFyYW0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8gPSBmdW5jdGlvbiAoaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgICAgIHZhciByb290TGVmdCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBiYXJXaWR0aCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgdmFyIHJvb3REZWx0YSA9IHJvb3RMZWZ0ICsgcm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJvb3RMZWZ0ID4gMCB8fCByb290RGVsdGEgPiAwO1xuICAgICAgICB2YXIgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG4gICAgICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIGEga2V5ZG93biBldmVudFxuICAgICAqIEBwYXJhbSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRLZXlGcm9tRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gICAgfTtcbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0FjdGl2YXRpb25LZXlfID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09PSBzdHJpbmdzLlNQQUNFX0tFWSB8fCBrZXkgPT09IHN0cmluZ3MuRU5URVJfS0VZO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdGVzdFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmluZGV4SXNJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYWRhcHRlci5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aWV3J3MgUlRMIHByb3BlcnR5XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNSVExfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlzUlRMKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBmb3IgbGVmdC10by1yaWdodCB1c2VyIGFnZW50cy5cbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGJhcldpZHRoID0gdGhpcy5hZGFwdGVyLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciB0YWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KGluZGV4KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhuZXh0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1JUTF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBiYXJXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlci5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChpbmRleCk7XG4gICAgICAgIHZhciBzY3JvbGxXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJCYXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUYWJCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH0gZnJvbSAnLi9mYWRpbmctZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH0gZnJvbSAnLi9zbGlkaW5nLWZvdW5kYXRpb24nO1xudmFyIE1EQ1RhYkluZGljYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiSW5kaWNhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYkluZGljYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJJbmRpY2F0b3IuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYkluZGljYXRvcihyb290KTtcbiAgICB9O1xuICAgIE1EQ1RhYkluZGljYXRvci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uc3RyaW5ncy5DT05URU5UX1NFTEVDVE9SKTtcbiAgICB9O1xuICAgIE1EQ1RhYkluZGljYXRvci5wcm90b3R5cGUuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIH07XG4gICAgTURDVGFiSW5kaWNhdG9yLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29udGVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRlbnRfLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIGlmICh0aGlzLnJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURFKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIHNsaWRpbmcgaW5kaWNhdG9yXG4gICAgICAgIHJldHVybiBuZXcgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICBNRENUYWJJbmRpY2F0b3IucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICB9O1xuICAgIE1EQ1RhYkluZGljYXRvci5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJJbmRpY2F0b3I7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGFiSW5kaWNhdG9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBQ1RJVkU6ICdtZGMtdGFiLWluZGljYXRvci0tYWN0aXZlJyxcbiAgICBGQURFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUnLFxuICAgIE5PX1RSQU5TSVRJT046ICdtZGMtdGFiLWluZGljYXRvci0tbm8tdHJhbnNpdGlvbicsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCcsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc3ViY2xhc3MgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xudmFyIE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIH07XG4gICAgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG59KE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkaW5nLWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnByb3RvdHlwZS5jb21wdXRlQ29udGVudENsaWVudFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzdWJjbGFzcyBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG52YXIgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiBubyBpbmRpY2F0b3IgaXMgcHJlc2VudCB0byBoYW5kbGUgY2FzZXMgd2hlcmUgYW4gaW5kaWNhdG9yXG4gICAgICAgIC8vIG1heSBiZSBhY3RpdmF0ZWQgd2l0aG91dCBhIHByaW9yIGluZGljYXRvciBzdGF0ZVxuICAgICAgICBpZiAoIXByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0IHRoZSBsaW5rIGJlbG93OlxuICAgICAgICAvLyBodHRwczovL2Flcm90d2lzdC5jb20vYmxvZy9mbGlwLXlvdXItYW5pbWF0aW9ucy9cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aW91cyBpbmRpY2F0b3JcbiAgICAgICAgdmFyIGN1cnJlbnRDbGllbnRSZWN0ID0gdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHdpZHRoRGVsdGEgPSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3Qud2lkdGggLyBjdXJyZW50Q2xpZW50UmVjdC53aWR0aDtcbiAgICAgICAgdmFyIHhQb3NpdGlvbiA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC5sZWZ0IC0gY3VycmVudENsaWVudFJlY3QubGVmdDtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyB4UG9zaXRpb24gKyBcInB4KSBzY2FsZVgoXCIgKyB3aWR0aERlbHRhICsgXCIpXCIpO1xuICAgICAgICAvLyBGb3JjZSByZXBhaW50IGJlZm9yZSB1cGRhdGluZyBjbGFzc2VzIGFuZCB0cmFuc2Zvcm0gdG8gZW5zdXJlIHRoZSB0cmFuc2Zvcm0gcHJvcGVybHkgdGFrZXMgZWZmZWN0XG4gICAgICAgIHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTk9fVFJBTlNJVElPTik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgfTtcbiAgICBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xufShNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGluZy1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENUYWJTY3JvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiU2Nyb2xsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGFiU2Nyb2xsZXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyKHJvb3QpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXJlYV8gPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uc3RyaW5ncy5BUkVBX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXIucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUludGVyYWN0aW9uKCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTsgfTtcbiAgICAgICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXywgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICB0aGlzLmFyZWFfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFyZWFfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgdGhpcy5hcmVhXy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgdGhpcy5hcmVhXy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgdGhpcy5hcmVhXy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgdGhpcy5jb250ZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcjogZnVuY3Rpb24gKGV2dFRhcmdldCwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcyhldnRUYXJnZXQsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBhZGRTY3JvbGxBcmVhQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLmFyZWFfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYXJlYV8uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udGVudF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiBmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoX3RoaXMuY29udGVudF8pLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiBmdW5jdGlvbiAoc2Nyb2xsWCkgeyByZXR1cm4gX3RoaXMuYXJlYV8uc2Nyb2xsTGVmdCA9IHNjcm9sbFg7IH0sXG4gICAgICAgICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYXJlYV8uc2Nyb2xsTGVmdDsgfSxcbiAgICAgICAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29udGVudF8ub2Zmc2V0V2lkdGg7IH0sXG4gICAgICAgICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFyZWFfLm9mZnNldFdpZHRoOyB9LFxuICAgICAgICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hcmVhXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb250ZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXIucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnRcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlci5wcm90b3R5cGUuZ2V0U2Nyb2xsQ29udGVudFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Xy5vZmZzZXRXaWR0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluY3JlbWVudHMgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAgICogQHBhcmFtIHNjcm9sbFhJbmNyZW1lbnQgVGhlIHBpeGVsIHZhbHVlIGJ5IHdoaWNoIHRvIGluY3JlbWVudCB0aGUgc2Nyb2xsIHZhbHVlXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXIucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbCA9IGZ1bmN0aW9uIChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwaXhlbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBwaXhlbCB2YWx1ZSB0byBzY3JvbGwgdG9cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2Nyb2xsVG8oc2Nyb2xsWCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXI7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gICAgU0NST0xMX0FSRUFfU0NST0xMOiAnbWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEtLXNjcm9sbCcsXG4gICAgU0NST0xMX1RFU1Q6ICdtZGMtdGFiLXNjcm9sbGVyX190ZXN0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50Jyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcywgX19yZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IH0gZnJvbSAnLi9ydGwtZGVmYXVsdC1zY3JvbGxlcic7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIH0gZnJvbSAnLi9ydGwtbmVnYXRpdmUtc2Nyb2xsZXInO1xuaW1wb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIH0gZnJvbSAnLi9ydGwtcmV2ZXJzZS1zY3JvbGxlcic7XG52YXIgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udHJvbHMgd2hldGhlciB3ZSBzaG91bGQgaGFuZGxlIHRoZSB0cmFuc2l0aW9uZW5kIGFuZCBpbnRlcmFjdGlvbiBldmVudHMgZHVyaW5nIHRoZSBhbmltYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZFNjcm9sbEFyZWFDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29tcHV0ZSBob3Jpem9udGFsIHNjcm9sbGJhciBoZWlnaHQgb24gc2Nyb2xsZXIgd2l0aCBvdmVyZmxvdyBpbml0aWFsbHkgaGlkZGVuLCB0aGVuIHVwZGF0ZSBvdmVyZmxvdyB0byBzY3JvbGxcbiAgICAgICAgLy8gYW5kIGltbWVkaWF0ZWx5IGFkanVzdCBib3R0b20gbWFyZ2luIHRvIGF2b2lkIHRoZSBzY3JvbGxiYXIgaW5pdGlhbGx5IGFwcGVhcmluZyBiZWZvcmUgSlMgcnVucy5cbiAgICAgICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSB0aGlzLmFkYXB0ZXIuY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJywgLWhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZFNjcm9sbEFyZWFDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5TQ1JPTExfQVJFQV9TQ1JPTEwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGN1cnJlbnQgdmlzdWFsIHNjcm9sbCBwb3NpdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2Nyb2xsUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50VHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGludGVyYWN0aW9uIGV2ZW50cyB0aGF0IG9jY3VyIGR1cmluZyB0cmFuc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGluZ18pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IG90aGVyIGV2ZW50IGxpc3RlbmVycyBmcm9tIGhhbmRsaW5nIHRoaXMgZXZlbnRcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgICAgIHZhciBldnRUYXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmdfIHx8XG4gICAgICAgICAgICAhdGhpcy5hZGFwdGVyLmV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yKGV2dFRhcmdldCwgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgc2Nyb2xsIHZhbHVlIGJ5IHRoZSBzY3JvbGxYSW5jcmVtZW50IHVzaW5nIGFuaW1hdGlvbi5cbiAgICAgKiBAcGFyYW0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbCA9IGZ1bmN0aW9uIChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgZm9yIG5vbi1vcGVyYXRpb25hbCBpbmNyZW1lbnQgdmFsdWVzXG4gICAgICAgIGlmIChzY3JvbGxYSW5jcmVtZW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlXyh0aGlzLmdldEluY3JlbWVudFNjcm9sbE9wZXJhdGlvbl8oc2Nyb2xsWEluY3JlbWVudCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSBzY3JvbGwgdmFsdWUgYnkgdGhlIHNjcm9sbFhJbmNyZW1lbnQgd2l0aG91dCBhbmltYXRpb24uXG4gICAgICogQHBhcmFtIHNjcm9sbFhJbmNyZW1lbnQgVGhlIHZhbHVlIGJ5IHdoaWNoIHRvIGluY3JlbWVudCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbmNyZW1lbnRTY3JvbGxJbW1lZGlhdGUgPSBmdW5jdGlvbiAoc2Nyb2xsWEluY3JlbWVudCkge1xuICAgICAgICAvLyBFYXJseSBleGl0IGZvciBub24tb3BlcmF0aW9uYWwgaW5jcmVtZW50IHZhbHVlc1xuICAgICAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVyYXRpb24gPSB0aGlzLmdldEluY3JlbWVudFNjcm9sbE9wZXJhdGlvbl8oc2Nyb2xsWEluY3JlbWVudCk7XG4gICAgICAgIGlmIChvcGVyYXRpb24uc2Nyb2xsRGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxBbmltYXRpb25fKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChvcGVyYXRpb24uZmluYWxTY3JvbGxQb3NpdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzY3JvbGxYIHZhbHVlXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1JUTF8oc2Nyb2xsWCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUb18oc2Nyb2xsWCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIEJyb3dzZXItc3BlY2lmaWMge0BsaW5rIE1EQ1RhYlNjcm9sbGVyUlRMfSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFJUTFNjcm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgICAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gdHJhbnNsYXRlWCB2YWx1ZSBmcm9tIGEgQ1NTIG1hdHJpeCB0cmFuc2Zvcm0gZnVuY3Rpb24gc3RyaW5nLlxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtVmFsdWUgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ3RyYW5zZm9ybScpO1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIG5vIHRyYW5zZm9ybSBpcyBwcmVzZW50XG4gICAgICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdHJhbnNmb3JtIHZhbHVlIGNvbWVzIGJhY2sgYXMgYSBtYXRyaXggdHJhbnNmb3JtYXRpb24gaW4gdGhlIGZvcm1cbiAgICAgICAgLy8gb2YgYG1hdHJpeChhLCBiLCBjLCBkLCB0eCwgdHkpYC4gV2Ugb25seSBjYXJlIGFib3V0IHR4ICh0cmFuc2xhdGVYKSBzb1xuICAgICAgICAvLyB3ZSdyZSBnb2luZyB0byBncmFiIGFsbCB0aGUgcGFyZW50aGVzaXplZCB2YWx1ZXMsIHN0cmlwIG91dCB0eCwgYW5kXG4gICAgICAgIC8vIHBhcnNlIGl0LlxuICAgICAgICB2YXIgbWF0Y2ggPSAvXFwoKC4rPylcXCkvLmV4ZWModHJhbnNmb3JtVmFsdWUpO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF0cml4UGFyYW1zID0gbWF0Y2hbMV07XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHMtaWdub3JlIFwiVW51c2VkIHZhcnNcIiBzaG91bGQgYmUgYSBsaW50ZXIgd2FybmluZywgbm90IGEgY29tcGlsZXIgZXJyb3IuXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgVGhlc2UgdW51c2VkIHZhcmlhYmxlcyBzaG91bGQgcmV0YWluIHRoZWlyIHNlbWFudGljIG5hbWVzIGZvciBjbGFyaXR5LlxuICAgICAgICB2YXIgX2EgPSBfX3JlYWQobWF0cml4UGFyYW1zLnNwbGl0KCcsJyksIDYpLCBhID0gX2FbMF0sIGIgPSBfYVsxXSwgYyA9IF9hWzJdLCBkID0gX2FbM10sIHR4ID0gX2FbNF0sIHR5ID0gX2FbNV07XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHR4KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpiYW5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBkaXN0YW5jZSB0byBzY3JvbGxcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNsYW1wU2Nyb2xsVmFsdWVfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNvbXB1dGVDdXJyZW50U2Nyb2xsUG9zaXRpb25SVExfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJUTFNjcm9sbGVyKCkuZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgdmFyIHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgc2Nyb2xsIG1ldGhvZFxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxUb18gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBzYWZlU2Nyb2xsWCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCk7XG4gICAgICAgIHZhciBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgICAgIHRoaXMuYW5pbWF0ZV8oe1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgUlRMIHNjcm9sbCBtZXRob2RcbiAgICAgKiBAcGFyYW0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsVG9SVExfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5zY3JvbGxUb1JUTChzY3JvbGxYKTtcbiAgICAgICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIGNvbXB1dGUgdGhlIGluY3JlbWVudCBzY3JvbGwgb3BlcmF0aW9uIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0gc2Nyb2xsWCBUaGUgZGVzaXJlZCBzY3JvbGwgcG9zaXRpb24gaW5jcmVtZW50XG4gICAgICogQHJldHVybiBNRENUYWJTY3JvbGxlckFuaW1hdGlvbiB3aXRoIHRoZSBzYW5pdGl6ZWQgdmFsdWVzIGZvciBwZXJmb3JtaW5nIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0SW5jcmVtZW50U2Nyb2xsT3BlcmF0aW9uXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciB0YXJnZXRTY3JvbGxYID0gc2Nyb2xsWCArIGN1cnJlbnRTY3JvbGxYO1xuICAgICAgICB2YXIgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHRhcmdldFNjcm9sbFgpO1xuICAgICAgICB2YXIgc2Nyb2xsRGVsdGEgPSBzYWZlU2Nyb2xsWCAtIGN1cnJlbnRTY3JvbGxYO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbmltYXRlcyB0aGUgdGFiIHNjcm9sbGluZ1xuICAgICAqIEBwYXJhbSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZV8gPSBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgdHJhbnNsYXRlWCBpcyAwLCB3aGljaCBtZWFucyB0aGVyZSdzIG5vIGFuaW1hdGlvbiB0byBwZXJmb3JtXG4gICAgICAgIGlmIChhbmltYXRpb24uc2Nyb2xsRGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxBbmltYXRpb25fKCk7XG4gICAgICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgICAgIC8vIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2Flcm90d2lzdC5jb20vYmxvZy9mbGlwLXlvdXItYW5pbWF0aW9ucy9cbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGFuaW1hdGlvbi5maW5hbFNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBhbmltYXRpb24uc2Nyb2xsRGVsdGEgKyBcInB4KVwiKTtcbiAgICAgICAgLy8gRm9yY2UgcmVwYWludFxuICAgICAgICB0aGlzLmFkYXB0ZXIuY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZ18gPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcHMgc2Nyb2xsIGFuaW1hdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc3RvcFNjcm9sbEFuaW1hdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGFuaW1hdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxMZWZ0LCBjdXJyZW50VHJhbnNsYXRlWCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbExlZnQgLSBjdXJyZW50VHJhbnNsYXRlWDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLnJ0bFNjcm9sbGVyRmFjdG9yeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEJyb3dzZXJzIGhhdmUgdGhyZWUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBvZiBzY3JvbGxMZWZ0IGluIFJUTCBtb2RlLFxuICAgICAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAgICAgLy8gc2Nyb2xsTGVmdCB2YWx1ZSBhbmQgMC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgICAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogMFxuICAgICAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgICAgICAvL1xuICAgICAgICAvLyAqIE5lZ2F0aXZlIHNjcm9sbGluZyBpbiBSVEwgKlxuICAgICAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogTmVnYXRlZCBtYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAgICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgICAgIC8vXG4gICAgICAgIC8vICogUmV2ZXJzZSBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAgICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgICAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IDBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgICAgIC8vIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgICAgIHZhciBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQgLSAxKTtcbiAgICAgICAgdmFyIG5ld1Njcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgLy8gSWYgdGhlIG5ld1Njcm9sbExlZnQgdmFsdWUgaXMgbmVnYXRpdmUsdGhlbiB3ZSBrbm93IHRoYXQgdGhlIGJyb3dzZXIgaGFzXG4gICAgICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgICAgICAvLyBvbmx5IHBvc2l0aXZlIHZhbHVlcy5cbiAgICAgICAgaWYgKG5ld1Njcm9sbExlZnQgPCAwKSB7XG4gICAgICAgICAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUodGhpcy5hZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm9vdENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXIuY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjb250ZW50Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlci5jb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHJpZ2h0RWRnZURlbHRhID0gTWF0aC5yb3VuZChjb250ZW50Q2xpZW50UmVjdC5yaWdodCAtIHJvb3RDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCk7XG4gICAgICAgIC8vIEJ5IGNhbGN1bGF0aW5nIHRoZSBjbGllbnRSZWN0IG9mIHRoZSByb290IGVsZW1lbnQgYW5kIHRoZSBjbGllbnRSZWN0IG9mXG4gICAgICAgIC8vIHRoZSBjb250ZW50IGVsZW1lbnQsIHdlIGNhbiBkZXRlcm1pbmUgaG93IG11Y2ggdGhlIHNjcm9sbCB2YWx1ZSBjaGFuZ2VkXG4gICAgICAgIC8vIHdoZW4gd2UgcGVyZm9ybWVkIHRoZSBzY3JvbGxMZWZ0IHN1YnRyYWN0aW9uIGFib3ZlLlxuICAgICAgICBpZiAocmlnaHRFZGdlRGVsdGEgPT09IG5ld1Njcm9sbExlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlKHRoaXMuYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQodGhpcy5hZGFwdGVyKTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNSVExfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LnByb3RvdHlwZS5nZXRTY3JvbGxQb3NpdGlvblJUTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkucmlnaHQ7XG4gICAgICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyaWdodCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuc2Nyb2xsVG9SVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhlZGdlcy5yaWdodCAtIHNjcm9sbFgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsUlRMID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbFg7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgdmFyIHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LnByb3RvdHlwZS5jbGFtcFNjcm9sbFZhbHVlXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdDtcbn0oTURDVGFiU2Nyb2xsZXJSVEwpKTtcbmV4cG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0bC1kZWZhdWx0LXNjcm9sbGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZS5wcm90b3R5cGUuZ2V0U2Nyb2xsUG9zaXRpb25SVEwgPSBmdW5jdGlvbiAodHJhbnNsYXRlWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodHJhbnNsYXRlWCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLnNjcm9sbFRvUlRMID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oLXNjcm9sbFgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbFJUTCA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZS5wcm90b3R5cGUuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24gPSBmdW5jdGlvbiAoc2Nyb2xsWCwgdHJhbnNsYXRlWCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsWCAtIHRyYW5zbGF0ZVg7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxFZGdlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiByb290V2lkdGggLSBjb250ZW50V2lkdGgsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLmNsYW1wU2Nyb2xsVmFsdWVfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGVkZ2VzLnJpZ2h0LCBzY3JvbGxYKSwgZWRnZXMubGVmdCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZTtcbn0oTURDVGFiU2Nyb2xsZXJSVEwpKTtcbmV4cG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5nZXRTY3JvbGxQb3NpdGlvblJUTCA9IGZ1bmN0aW9uICh0cmFuc2xhdGVYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICAvLyBTY3JvbGwgdmFsdWVzIG9uIG1vc3QgYnJvd3NlcnMgYXJlIGludHMgaW5zdGVhZCBvZiBmbG9hdHMgc28gd2Ugcm91bmRcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoY3VycmVudFNjcm9sbExlZnQgLSB0cmFuc2xhdGVYKTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZS5wcm90b3R5cGUuc2Nyb2xsVG9SVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbFJUTCA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0ICsgc2Nyb2xsWCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxYICsgdHJhbnNsYXRlWDtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZS5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmNsYW1wU2Nyb2xsVmFsdWVfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLnJpZ2h0LCBzY3JvbGxYKSwgZWRnZXMubGVmdCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlO1xufShNRENUYWJTY3JvbGxlclJUTCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRsLXJldmVyc2Utc2Nyb2xsZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDVGFiU2Nyb2xsZXJSVEwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDVGFiU2Nyb2xsZXJSVEwoYWRhcHRlcikge1xuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJSVEw7XG59KCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJSVEwgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0bC1zY3JvbGxlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZy5cbiAqL1xudmFyIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfO1xuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudE9iaiwgc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQgPT09IHZvaWQgMCkgeyBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWU7IH1cbiAgICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQgJiYgdHlwZW9mIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gICAgfVxuICAgIHZhciBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5TQ1JPTExfVEVTVCk7XG4gICAgZG9jdW1lbnRPYmouYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnRPYmouYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgaWYgKHNob3VsZENhY2hlUmVzdWx0KSB7XG4gICAgICAgIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfID0gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDVGFiSW5kaWNhdG9yIH0gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RhYkZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RhYiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYihyb290KTtcbiAgICB9O1xuICAgIE1EQ1RhYi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5LCB0YWJJbmRpY2F0b3JGYWN0b3J5KSB7XG4gICAgICAgIGlmIChyaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgcmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCwgZm91bmRhdGlvbikgeyByZXR1cm4gbmV3IE1EQ1JpcHBsZShlbCwgZm91bmRhdGlvbik7IH07IH1cbiAgICAgICAgaWYgKHRhYkluZGljYXRvckZhY3RvcnkgPT09IHZvaWQgMCkgeyB0YWJJbmRpY2F0b3JGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDVGFiSW5kaWNhdG9yKGVsKTsgfTsgfVxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb290LmlkO1xuICAgICAgICB2YXIgcmlwcGxlU3VyZmFjZSA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5SSVBQTEVfU0VMRUNUT1IpO1xuICAgICAgICB2YXIgcmlwcGxlQWRhcHRlciA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSksIHsgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIHJpcHBsZVN1cmZhY2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LCByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gcmlwcGxlU3VyZmFjZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIHJpcHBsZVN1cmZhY2Uuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9IH0pO1xuICAgICAgICB2YXIgcmlwcGxlRm91bmRhdGlvbiA9IG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKHJpcHBsZUFkYXB0ZXIpO1xuICAgICAgICB0aGlzLnJpcHBsZV8gPSByaXBwbGVGYWN0b3J5KHRoaXMucm9vdCwgcmlwcGxlRm91bmRhdGlvbik7XG4gICAgICAgIHZhciB0YWJJbmRpY2F0b3JFbGVtZW50ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLlRBQl9JTkRJQ0FUT1JfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLnRhYkluZGljYXRvcl8gPSB0YWJJbmRpY2F0b3JGYWN0b3J5KHRhYkluZGljYXRvckVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNvbnRlbnRfID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICAgIH07XG4gICAgTURDVGFiLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbi5oYW5kbGVDbGljaygpOyB9O1xuICAgICAgICB0aGlzLmxpc3RlbignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgfTtcbiAgICBNRENUYWIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgICAgICB0aGlzLnJpcHBsZV8uZGVzdHJveSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE1EQ1RhYi5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3Quc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6IGZ1bmN0aW9uIChwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudGFiSW5kaWNhdG9yXy5hY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnRhYkluZGljYXRvcl8uZGVhY3RpdmF0ZSgpOyB9LFxuICAgICAgICAgICAgbm90aWZ5SW50ZXJhY3RlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCwgeyB0YWJJZDogX3RoaXMuaWQgfSwgdHJ1ZSAvKiBidWJibGUgKi8pOyB9LFxuICAgICAgICAgICAgZ2V0T2Zmc2V0TGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdC5vZmZzZXRMZWZ0OyB9LFxuICAgICAgICAgICAgZ2V0T2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3Qub2Zmc2V0V2lkdGg7IH0sXG4gICAgICAgICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29udGVudF8ub2Zmc2V0TGVmdDsgfSxcbiAgICAgICAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29udGVudF8ub2Zmc2V0V2lkdGg7IH0sXG4gICAgICAgICAgICBmb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdC5mb2N1cygpOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYkZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiLnByb3RvdHlwZSwgXCJhY3RpdmVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0dGVyIGZvciB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSB0YWJcbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc0FjdGl2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiLnByb3RvdHlwZSwgXCJmb2N1c09uQWN0aXZhdGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmb2N1c09uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRGb2N1c09uQWN0aXZhdGUoZm9jdXNPbkFjdGl2YXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSB0YWJcbiAgICAgKi9cbiAgICBNRENUYWIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgdGFiXG4gICAgICovXG4gICAgTURDVGFiLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kaWNhdG9yJ3MgY2xpZW50IHJlY3RcbiAgICAgKi9cbiAgICBNRENUYWIucHJvdG90eXBlLmNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJJbmRpY2F0b3JfLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIH07XG4gICAgTURDVGFiLnByb3RvdHlwZS5jb21wdXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5jb21wdXRlRGltZW5zaW9ucygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgdGFiXG4gICAgICovXG4gICAgTURDVGFiLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb290LmZvY3VzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RhYiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiX19jb250ZW50JyxcbiAgICBJTlRFUkFDVEVEX0VWRU5UOiAnTURDVGFiOmludGVyYWN0ZWQnLFxuICAgIFJJUFBMRV9TRUxFQ1RPUjogJy5tZGMtdGFiX19yaXBwbGUnLFxuICAgIFRBQklOREVYOiAndGFiSW5kZXgnLFxuICAgIFRBQl9JTkRJQ0FUT1JfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3InLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RhYkZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYkZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENUYWJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUludGVyYWN0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRPZmZzZXRMZWZ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldE9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJdCdzIHVwIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGtlZXAgdHJhY2sgb2YgdGhlIGFjdGl2ZSBUYWIgYW5kXG4gICAgICAgIC8vIGVuc3VyZSB3ZSBkb24ndCBhY3RpdmF0ZSBhIFRhYiB0aGF0J3MgYWxyZWFkeSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlJbnRlcmFjdGVkKCk7XG4gICAgfTtcbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIHRhYiBzaG91bGQgZm9jdXMgaXRzZWxmIHdoZW4gYWN0aXZhdGVkXG4gICAgICovXG4gICAgTURDVGFiRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Rm9jdXNPbkFjdGl2YXRlID0gZnVuY3Rpb24gKGZvY3VzT25BY3RpdmF0ZSkge1xuICAgICAgICB0aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSBmb2N1c09uQWN0aXZhdGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLkFSSUFfU0VMRUNURUQsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICcwJyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hY3RpdmF0ZUluZGljYXRvcihwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c09uQWN0aXZhdGVfKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgdGhlIFRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXRcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLkFSSUFfU0VMRUNURUQsICdmYWxzZScpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnLTEnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlYWN0aXZhdGVJbmRpY2F0b3IoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmNvbXB1dGVEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290TGVmdCA9IHRoaXMuYWRhcHRlci5nZXRPZmZzZXRMZWZ0KCk7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciBjb250ZW50TGVmdCA9IHRoaXMuYWRhcHRlci5nZXRDb250ZW50T2Zmc2V0TGVmdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudExlZnQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQsXG4gICAgICAgICAgICBjb250ZW50UmlnaHQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQgKyBjb250ZW50V2lkdGgsXG4gICAgICAgICAgICByb290TGVmdDogcm9vdExlZnQsXG4gICAgICAgICAgICByb290UmlnaHQ6IHJvb3RMZWZ0ICsgcm9vdFdpZHRoLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYkZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RhYkZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTVEFOREFSRCBDU1MgUkVTRVQgQkVMT1cgKi9cXG5odG1sLCBib2R5LCBoZWFkZXIsIG5hdiwgaDEsIGEsXFxudWwsIGxpLCBzdHJvbmcsIG1haW4sIGJ1dHRvbiwgaSxcXG5zZWN0aW9uLCBpbWcsIGRpdiwgaDIsIGgzLCBoNCwgaDUsIHAsIGZvcm0sXFxuZmllbGRzZXQsIGxhYmVsLCBpbnB1dCwgdGV4dGFyZWEsXFxuc3BhbiwgYXJ0aWNsZSwgZm9vdGVyLCB0aW1lLCBzbWFsbCwgYXNpZGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcXG5pbnB1dFt0eXBlPWVtYWlsXSxcXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9c3VibWl0XSxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZS9yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUFBO0FBQ0E7Ozs7O0VBS0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7Ozs7O0VBTUMsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBRUE7O0VBRUUsZUFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNUQU5EQVJEIENTUyBSRVNFVCBCRUxPVyAqL1xcbmh0bWwsIGJvZHksIGhlYWRlciwgbmF2LCBoMSwgYSxcXG51bCwgbGksIHN0cm9uZywgbWFpbiwgYnV0dG9uLCBpLFxcbnNlY3Rpb24sIGltZywgZGl2LCBoMiwgaDMsIGg0LCBoNSwgcCwgZm9ybSxcXG5maWVsZHNldCwgbGFiZWwsIGlucHV0LCB0ZXh0YXJlYSxcXG5zcGFuLCBhcnRpY2xlLCBmb290ZXIsIHRpbWUsIHNtYWxsLCBhc2lkZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxudGV4dGFyZWEsXFxuYnV0dG9uIHtcXG4gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbio6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY3lyaWxsaWMtZXh0ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1ak1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcXG59XFxuLyogY3lyaWxsaWMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zIENvbmRlbnNlZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodFxcXCIpLCBsb2NhbChcXFwiT3BlblNhbnNDb25kZW5zZWQtTGlnaHRcXFwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHVITVI2V1Iud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcXG59XFxuLyogZ3JlZWstZXh0ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1bk1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcXG59XFxuLyogZ3JlZWsgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zIENvbmRlbnNlZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodFxcXCIpLCBsb2NhbChcXFwiT3BlblNhbnNDb25kZW5zZWQtTGlnaHRcXFwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHViTVI2V1Iud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcbn1cXG4vKiB2aWV0bmFtZXNlICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1ck1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xcbn1cXG4vKiBsYXRpbi1leHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zIENvbmRlbnNlZFxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbChcXFwiT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodFxcXCIpLCBsb2NhbChcXFwiT3BlblNhbnNDb25kZW5zZWQtTGlnaHRcXFwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHV2TVI2V1Iud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XFxufVxcbi8qIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1WE1Sdy53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXG59XFxuLyoqXFxuICogQGxpY2Vuc2VcXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxcbiAqXFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFxcXCJTb2Z0d2FyZVxcXCIpLCB0byBkZWFsXFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxcbiAqXFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG4gKlxcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcXFwiQVMgSVNcXFwiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXFxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXFxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxcbiAqIFRIRSBTT0ZUV0FSRS5cXG4gKi9cXG4ubWRjLXRhYi1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZGMtdGFiIHtcXG4gIGhlaWdodDogNDhweDtcXG59XFxuXFxuLm1kYy10YWItLXN0YWNrZWQge1xcbiAgaGVpZ2h0OiA3MnB4O1xcbn1cXG5cXG4vKipcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuICpcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICpcXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbiAqXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuICogVEhFIFNPRlRXQVJFLlxcbiAqL1xcbi5tZGMtdGFiLXNjcm9sbGVyIHtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXIubWRjLXRhYi1zY3JvbGxlci0tYW5pbWF0aW5nIC5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXJfX3Rlc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhIHtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLm1kYy10YWItc2Nyb2xsZXJfX3Rlc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYS0tc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyLS1hbGlnbi1zdGFydCAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWRjLXRhYi1zY3JvbGxlci0tYWxpZ24tZW5kIC5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWRjLXRhYi1zY3JvbGxlci0tYWxpZ24tY2VudGVyIC5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZyAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEge1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEBsaWNlbnNlXFxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cXG4gKlxcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4gKlxcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuICpcXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4gKiBUSEUgU09GVFdBUkUuXFxuICovXFxuLm1kYy10YWItaW5kaWNhdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzYyMDBlZTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS1pY29uIHtcXG4gIGNvbG9yOiAjMDE4Nzg2O1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS1pY29uIHtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLWljb24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tZGMtdGFiLWluZGljYXRvci0tYWN0aXZlIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IHtcXG4gIHRyYW5zaXRpb246IDI1MG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3ItLW5vLXRyYW5zaXRpb24gLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5tZGMtdGFiLWluZGljYXRvci0tZmFkZSAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQge1xcbiAgdHJhbnNpdGlvbjogMTUwbXMgb3BhY2l0eSBsaW5lYXI7XFxufVxcblxcbi5tZGMtdGFiLWluZGljYXRvci0tYWN0aXZlLm1kYy10YWItaW5kaWNhdG9yLS1mYWRlIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcXG59XFxuXFxuLm1kYy10YWIge1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1mYW1pbHksIHZhcigtLW1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5LCBSb2JvdG8sIHNhbnMtc2VyaWYpKTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBmb250LXNpemU6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXNpemUsIDAuODc1cmVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1saW5lLWhlaWdodCwgMi4yNXJlbSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXdlaWdodCwgNTAwKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4OTI4NTcxNDNlbTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGV0dGVyLXNwYWNpbmcsIDAuMDg5Mjg1NzE0M2VtKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC1kZWNvcmF0aW9uLCBub25lKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLXRleHQtdHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIHBhZGRpbmctbGVmdDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWRjLXRhYiAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubWRjLXRhYiAubWRjLXRhYl9faWNvbiB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLm1kYy10YWI6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1kYy10YWItLW1pbi13aWR0aCB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG59XFxuXFxuLm1kYy10YWJfX2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICB0cmFuc2l0aW9uOiAxNTBtcyBjb2xvciBsaW5lYXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5tZGMtdGFiX19pY29uIHtcXG4gIHRyYW5zaXRpb246IDE1MG1zIGNvbG9yIGxpbmVhcjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1kYy10YWItLXN0YWNrZWQgLm1kYy10YWJfX2NvbnRlbnQge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWItLXN0YWNrZWQgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgY29sb3I6ICM2MjAwZWU7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpO1xcbn1cXG5cXG4ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19pY29uIHtcXG4gIGNvbG9yOiAjNjIwMGVlO1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCxcXG4ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19pY29uIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xcbn1cXG5cXG4ubWRjLXRhYjpub3QoLm1kYy10YWItLXN0YWNrZWQpIC5tZGMtdGFiX19pY29uICsgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAvKiBAbm9mbGlwICovXFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG5bZGlyPXJ0bF0gLm1kYy10YWI6bm90KC5tZGMtdGFiLS1zdGFja2VkKSAubWRjLXRhYl9faWNvbiArIC5tZGMtdGFiX190ZXh0LWxhYmVsLCAubWRjLXRhYjpub3QoLm1kYy10YWItLXN0YWNrZWQpIC5tZGMtdGFiX19pY29uICsgLm1kYy10YWJfX3RleHQtbGFiZWxbZGlyPXJ0bF0ge1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgb3BhY2l0eTogdmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IHZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5tZGMtdGFiX19yaXBwbGUge1xcbiAgLS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7XFxuICAtLW1kYy1yaXBwbGUtbGVmdDogMDtcXG4gIC0tbWRjLXJpcHBsZS10b3A6IDA7XFxuICAtLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7XFxuICAtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDtcXG4gIC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVyIHtcXG4gIHRvcDogMDtcXG4gIC8qIEBub2ZsaXAgKi9cXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVyIHtcXG4gIHRvcDogdmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgbGVmdDogdmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKTtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcywgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIHRvcDogY2FsYyg1MCUgLSAxMDAlKTtcXG4gIC8qIEBub2ZsaXAgKi9cXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwJSk7XFxuICB3aWR0aDogMjAwJTtcXG4gIGhlaWdodDogMjAwJTtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlciB7XFxuICB3aWR0aDogdmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtcXG4gIGhlaWdodDogdmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZTo6YmVmb3JlLCAubWRjLXRhYl9fcmlwcGxlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMGVlO1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOmhvdmVyOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC4wNDtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMTI7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXI7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjEyO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQge1xcbiAgLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTI7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWItYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5hcnRpY2xlIGgyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxufVxcbmFydGljbGUgcHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zIENvbmRlbnNlZFxcXCI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDQ4cHg7XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcXG4gIGNvbG9yOiAjYTQxMTA5O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTFdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDExMDk7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6aG92ZXI6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjA0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTFdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLCAubWRjLXRhYltpZD1tZGMtdGFiLTFdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4xMjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhcjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMTI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAtLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXSAubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTQxMTA5O1xcbn1cXG5cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICBjb2xvcjogIzhmMDA2NjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0yXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTo6YmVmb3JlLCAubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYwMDY2O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOmhvdmVyOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC4wNDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0yXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwgLm1kYy10YWJbaWQ9bWRjLXRhYi0yXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMTI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjEyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQge1xcbiAgLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0gLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzhmMDA2NjtcXG59XFxuXFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgY29sb3I6ICMwMGFlZWY7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItM10ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSwgLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVlZjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpob3Zlcjo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuMDg7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItM10ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItM10ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjI0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4yNDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkIHtcXG4gIC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjI0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdIC5tZGMtdGFiLWluZGljYXRvciAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7XFxuICBib3JkZXItY29sb3I6ICMwMGFlZWY7XFxufVxcblxcbi5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcXG4gIGNvbG9yOiAjZGFjMjAwO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTRdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWMyMDA7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6aG92ZXI6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjA4O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTRdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLCAubWRjLXRhYltpZD1tZGMtdGFiLTRdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4yNDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhcjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMjQ7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAtLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4yNDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XSAubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZGFjMjAwO1xcbn1cXG5cXG4ubG9nby1kaXYge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLmhlcm8taW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODV2aDtcXG4gIG1hcmdpbi1ib3R0b206IDQlO1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLmhlcm8tdGV4dCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG59XFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XFxuICBwYWRkaW5nOiAwLjUlIDAlO1xcbn1cXG5mb290ZXIgcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4uaG91cnMtYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5ob3Vycy1hcnRpY2xlIC5hcnRpY2xlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG91cnMtYXJ0aWNsZSAuYXJ0aWNsZS1jYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLmhvdXJzLWFydGljbGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5hcnRpY2xlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbmFydGljbGUgcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgcGFkZGluZy1yaWdodDogNSU7XFxufVxcbmFydGljbGUgdWwge1xcbiAgcGFkZGluZzogMSUgNSUgMiUgNiU7XFxufVxcbmFydGljbGUgdWwgbGk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLVxcXCI7XFxuICAvKiBBZGQgY29udGVudDogXFxcXDIwMjIgaXMgdGhlIENTUyBDb2RlL3VuaWNvZGUgZm9yIGEgYnVsbGV0ICovXFxuICBjb2xvcjogIzAwYWVlZjtcXG4gIC8qIENoYW5nZSB0aGUgY29sb3IgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLyogSWYgeW91IHdhbnQgaXQgdG8gYmUgYm9sZCAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogTmVlZGVkIHRvIGFkZCBzcGFjZSBiZXR3ZWVuIHRoZSBidWxsZXQgYW5kIHRoZSB0ZXh0ICovXFxuICB3aWR0aDogMWVtO1xcbiAgLyogQWxzbyBuZWVkZWQgZm9yIHNwYWNlICh0d2VhayBpZiBuZWVkZWQpICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUvdmFycy9mb250LnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9tZGMtdGFiLWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL21kYy10YWItc2Nyb2xsZXIuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9tZGMtdGFiLWluZGljYXRvci5zY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGhlbWUvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90eXBvZ3JhcGh5L19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGhlbWUvX2N1c3RvbS1wcm9wZXJ0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RoZW1lL19nc3Muc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcnRsL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL19rZXlmcmFtZXMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZS9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvdmFycy92YXJzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvY29tcG9uZW50cy9sb2dvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvY29tcG9uZW50cy9oZXJvLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvY29tcG9uZW50cy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZS92YXJzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlL3BhZ2VzL2hvdXJzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGUvcGFnZXMvbWFuaWZlc3RvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwi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cENGO0FoQnNXTjtBZ0I5Uk07RUFpQkYseUJBQUE7RUFJQSxhQXJGRTtBaEJrV047QWdCN1BJO0VBRUksZ0NBQUE7QWhCOFBSO0FnQnpQTTtFQUVJLHlCQ3RUUztFRDJUVCxhQTFHSjtBaEJnV047QWdCaFBFO0VBRUksNkJBQUE7QWhCaVBOO0FPOWRFO0VDU0UscUJBQUE7QVJ3ZEo7O0FHN2NFO0VLWEUsY0FBQTtBUjRkSjtBZ0J4WkU7RVJwRUUseUJBQUE7QVIrZEo7QWdCN1ZJO0VBR0ksYUFwQ0Y7QWhCaVlOO0FnQnpUTTtFQWlCRix5QkFBQTtFQUlBLGFBckZFO0FoQjZYTjtBZ0J4Ukk7RUFFSSxnQ0FBQTtBaEJ5UlI7QWdCcFJNO0VBRUkseUJDdFRTO0VEMlRULGFBMUdKO0FoQjJYTjtBZ0IzUUU7RUFFSSw2QkFBQTtBaEI0UU47QU96ZkU7RUNTRSxxQkFBQTtBUm1mSjs7QUd4ZUU7RUtYRSxjQUFBO0FSdWZKO0FnQm5iRTtFUnBFRSx5QkFBQTtBUjBmSjtBZ0J4WEk7RUFHSSxhQXBDRjtBaEI0Wk47QWdCcFZNO0VBaUJGLHlCQUFBO0VBSUEsYUFyRkU7QWhCd1pOO0FnQm5USTtFQUVJLGdDQUFBO0FoQm9UUjtBZ0IvU007RUFFSSx5QkN0VFM7RUQyVFQsYUExR0o7QWhCc1pOO0FnQnRTRTtFQUVJLDZCQUFBO0FoQnVTTjtBT3BoQkU7RUNTRSxxQkFBQTtBUjhnQko7O0FHbmdCRTtFS1hFLGNBQUE7QVJraEJKO0FnQjljRTtFUnBFRSx5QkFBQTtBUnFoQko7QWdCblpJO0VBR0ksYUFwQ0Y7QWhCdWJOO0FnQi9XTTtFQWlCRix5QkFBQTtFQUlBLGFBckZFO0FoQm1iTjtBZ0I5VUk7RUFFSSxnQ0FBQTtBaEIrVVI7QWdCMVVNO0VBRUkseUJDdFRTO0VEMlRULGFBMUdKO0FoQmliTjtBZ0JqVUU7RUFFSSw2QkFBQTtBaEJrVU47QU8vaUJFO0VDU0UscUJBQUE7QVJ5aUJKOztBb0I5cEJBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FwQmlxQkY7O0FxQnZxQkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QXJCMHFCRjs7QXFCdnFCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FyQjBxQkY7O0FxQnZxQkE7RUFFSTtJQUNFLGVBQUE7RXJCeXFCSjtBQUNGO0FzQm5zQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ0NLO0VEQUwsZ0JBQUE7QXRCcXNCRjtBc0Jwc0JFO0VBQ0UsZ0JBQUE7QXRCc3NCSjs7QXdCNXNCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBeEIrc0JGO0F3QjlzQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBeEJndEJKO0F3Qi9zQkk7RUFDRSxlQUFBO0F4Qml0Qk47O0F3QjNzQkE7RUFDQTtJQUNJLHNCQUFBO0V4QjhzQkY7QUFDRjtBeUJqdUJBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0F6Qm11QkY7QXlCanVCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QXpCbXVCSjtBeUJodUJFO0VBQ0Usb0JBQUE7QXpCa3VCSjtBeUIvdEJFO0VBQ0UsWUFBQTtFQUNBLDREQUFBO0VBQ0EsY0ZkRztFRWVILHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0RBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QXpCaXVCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjeXJpbGxpYy1leHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnNDb25kZW5zZWQtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHVqTVI2V1Iud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xcbn1cXG4vKiBjeXJpbGxpYyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdUhNUjZXUi53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xcbn1cXG4vKiBncmVlay1leHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnNDb25kZW5zZWQtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHVuTVI2V1Iud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xcbn1cXG4vKiBncmVlayAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdWJNUjZXUi53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XFxufVxcbi8qIHZpZXRuYW1lc2UgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnNDb25kZW5zZWQtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHVyTVI2V1Iud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XFxufVxcbi8qIGxhdGluLWV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdXZNUjZXUi53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcXG59XFxuLyogbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIENvbmRlbnNlZCBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnNDb25kZW5zZWQtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fuc2NvbmRlbnNlZC92MTUvejdORmRRRG5iVGthYlpBSU9sOWlsX082S0pqNzNlN0ZmMUdoRHVYTVJ3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xcbn1cXG5cIixcIi8qIGN5cmlsbGljLWV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0XFxcIiksIGxvY2FsKFxcXCJPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodFxcXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdWpNUjZXUi53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XFxufVxcbi8qIGN5cmlsbGljICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1SE1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XFxufVxcbi8qIGdyZWVrLWV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0XFxcIiksIGxvY2FsKFxcXCJPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodFxcXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdW5NUjZXUi53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XFxufVxcbi8qIGdyZWVrICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1Yk1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcXG59XFxuLyogdmlldG5hbWVzZSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0XFxcIiksIGxvY2FsKFxcXCJPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodFxcXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdXJNUjZXUi53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcXG59XFxuLyogbGF0aW4tZXh0ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2FucyBDb25kZW5zZWRcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogbG9jYWwoXFxcIk9wZW4gU2FucyBDb25kZW5zZWQgTGlnaHRcXFwiKSwgbG9jYWwoXFxcIk9wZW5TYW5zQ29uZGVuc2VkLUxpZ2h0XFxcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnNjb25kZW5zZWQvdjE1L3o3TkZkUURuYlRrYWJaQUlPbDlpbF9PNktKajczZTdGZjFHaER1dk1SNldSLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xcbn1cXG4vKiBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IGxvY2FsKFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkIExpZ2h0XFxcIiksIGxvY2FsKFxcXCJPcGVuU2Fuc0NvbmRlbnNlZC1MaWdodFxcXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zY29uZGVuc2VkL3YxNS96N05GZFFEbmJUa2FiWkFJT2w5aWxfTzZLSmo3M2U3RmYxR2hEdVhNUncud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XFxufVxcbi8qKlxcbiAqIEBsaWNlbnNlXFxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cXG4gKlxcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4gKlxcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuICpcXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4gKiBUSEUgU09GVFdBUkUuXFxuICovXFxuLm1kYy10YWItYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWRjLXRhYiB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxufVxcblxcbi5tZGMtdGFiLS1zdGFja2VkIHtcXG4gIGhlaWdodDogNzJweDtcXG59XFxuXFxuLyoqXFxuICogQGxpY2Vuc2VcXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxcbiAqXFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFxcXCJTb2Z0d2FyZVxcXCIpLCB0byBkZWFsXFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxcbiAqXFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG4gKlxcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcXFwiQVMgSVNcXFwiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXFxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXFxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxcbiAqIFRIRSBTT0ZUV0FSRS5cXG4gKi9cXG4ubWRjLXRhYi1zY3JvbGxlciB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyLm1kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZyAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQge1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyX190ZXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTk5OTlweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYSB7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi5tZGMtdGFiLXNjcm9sbGVyX190ZXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEtLXNjcm9sbCB7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIGF1dG87XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG5cXG4ubWRjLXRhYi1zY3JvbGxlci0tYWxpZ24tc3RhcnQgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXItLWFsaWduLWVuZCAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLm1kYy10YWItc2Nyb2xsZXItLWFsaWduLWNlbnRlciAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhIHtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuICpcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICpcXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbiAqXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuICogVEhFIFNPRlRXQVJFLlxcbiAqL1xcbi5tZGMtdGFiLWluZGljYXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZGMtdGFiLWluZGljYXRvciAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7XFxuICBib3JkZXItY29sb3I6ICM2MjAwZWU7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBib3JkZXItY29sb3I6IHZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKTtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0taWNvbiB7XFxuICBjb2xvcjogIzAxODc4NjtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0taWNvbiB7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBmb250LXNpemU6IDM0cHg7XFxufVxcblxcbi5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS1pY29uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZSAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICB0cmFuc2l0aW9uOiAyNTBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuXFxuLm1kYy10YWItaW5kaWNhdG9yLS1uby10cmFuc2l0aW9uIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IHtcXG4gIHRyYW5zaXRpb246IDE1MG1zIG9wYWNpdHkgbGluZWFyO1xcbn1cXG5cXG4ubWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZS5tZGMtdGFiLWluZGljYXRvci0tZmFkZSAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XFxufVxcblxcbi5tZGMtdGFiIHtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBmb250LWZhbWlseTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtZmFtaWx5LCB2YXIoLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSwgUm9ib3RvLCBzYW5zLXNlcmlmKSk7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgLyogQGFsdGVybmF0ZSAqL1xcbiAgZm9udC1zaXplOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC1zaXplLCAwLjg3NXJlbSk7XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGluZS1oZWlnaHQsIDIuMjVyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tZm9udC13ZWlnaHQsIDUwMCk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wODkyODU3MTQzZW07XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxldHRlci1zcGFjaW5nLCAwLjA4OTI4NTcxNDNlbSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi10ZXh0LWRlY29yYXRpb24sIG5vbmUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tdGV4dC10cmFuc2Zvcm0sIHVwcGVyY2FzZSk7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZGMtdGFiIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5tZGMtdGFiIC5tZGMtdGFiX19pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubWRjLXRhYjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWRjLXRhYi0tbWluLXdpZHRoIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbn1cXG5cXG4ubWRjLXRhYl9fY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tZGMtdGFiX190ZXh0LWxhYmVsIHtcXG4gIHRyYW5zaXRpb246IDE1MG1zIGNvbG9yIGxpbmVhcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1kYy10YWJfX2ljb24ge1xcbiAgdHJhbnNpdGlvbjogMTUwbXMgY29sb3IgbGluZWFyO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubWRjLXRhYi0tc3RhY2tlZCAubWRjLXRhYl9fY29udGVudCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWRjLXRhYi0tc3RhY2tlZCAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICBjb2xvcjogIzYyMDBlZTtcXG4gIC8qIEBhbHRlcm5hdGUgKi9cXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSk7XFxufVxcblxcbi5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX2ljb24ge1xcbiAgY29sb3I6ICM2MjAwZWU7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsLFxcbi5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX2ljb24ge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XFxufVxcblxcbi5tZGMtdGFiOm5vdCgubWRjLXRhYi0tc3RhY2tlZCkgLm1kYy10YWJfX2ljb24gKyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICAvKiBAbm9mbGlwICovXFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIC8qIEBub2ZsaXAgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcblxcbltkaXI9cnRsXSAubWRjLXRhYjpub3QoLm1kYy10YWItLXN0YWNrZWQpIC5tZGMtdGFiX19pY29uICsgLm1kYy10YWJfX3RleHQtbGFiZWwsIC5tZGMtdGFiOm5vdCgubWRjLXRhYi0tc3RhY2tlZCkgLm1kYy10YWJfX2ljb24gKyAubWRjLXRhYl9fdGV4dC1sYWJlbFtkaXI9cnRsXSB7XFxuICAvKiBAbm9mbGlwICovXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAvKiBAbm9mbGlwICovXFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4ge1xcbiAgZnJvbSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4ge1xcbiAgZnJvbSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IHtcXG4gIGZyb20ge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IHZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5tZGMtdGFiX19yaXBwbGUge1xcbiAgLS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7XFxuICAtLW1kYy1yaXBwbGUtbGVmdDogMDtcXG4gIC0tbWRjLXJpcHBsZS10b3A6IDA7XFxuICAtLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7XFxuICAtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDtcXG4gIC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVyIHtcXG4gIHRvcDogMDtcXG4gIC8qIEBub2ZsaXAgKi9cXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVyIHtcXG4gIHRvcDogdmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgbGVmdDogdmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKTtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlciB7XFxuICBhbmltYXRpb246IG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSk7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSwgLm1kYy10YWJfX3JpcHBsZTo6YWZ0ZXIge1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMCUpO1xcbiAgLyogQG5vZmxpcCAqL1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDAlKTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiAyMDAlO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVyIHtcXG4gIHdpZHRoOiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjAwZWU7XFxuICAvKiBAYWx0ZXJuYXRlICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSk7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGU6aG92ZXI6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjA0O1xcbn1cXG5cXG4ubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLCAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4xMjtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhcjtcXG59XFxuXFxuLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMTI7XFxufVxcblxcbi5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAtLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zIENvbmRlbnNlZFxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWRjLXRhYi1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmFydGljbGUgaDIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXG59XFxuYXJ0aWNsZSBwcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnMgQ29uZGVuc2VkXFxcIjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNDhweDtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgY29sb3I6ICNhNDExMDk7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSwgLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0MTEwOTtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpob3Zlcjo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuMDQ7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItMV0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjEyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTFdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTFdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4xMjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0xXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkIHtcXG4gIC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTFdIC5tZGMtdGFiLWluZGljYXRvciAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7XFxuICBib3JkZXItY29sb3I6ICNhNDExMDk7XFxufVxcblxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcXG4gIGNvbG9yOiAjOGYwMDY2O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjAwNjY7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6aG92ZXI6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjA0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLCAubWRjLXRhYltpZD1tZGMtdGFiLTJdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4xMjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0yXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGxpbmVhcjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0yXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMTI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItMl0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAtLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0yXSAubWRjLXRhYi1pbmRpY2F0b3IgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGYwMDY2O1xcbn1cXG5cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XFxuICBjb2xvcjogIzAwYWVlZjtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTo6YmVmb3JlLCAubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWVmO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOmhvdmVyOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC4wODtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwgLm1kYy10YWJbaWQ9bWRjLXRhYi0zXS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcXG4gIG9wYWNpdHk6IDAuMjQ7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItM10ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBsaW5lYXI7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItM10ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjI0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTNdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlLm1kYy1yaXBwbGUtdXBncmFkZWQge1xcbiAgLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMjQ7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItM10gLm1kYy10YWItaW5kaWNhdG9yIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYWVlZjtcXG59XFxuXFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgY29sb3I6ICNkYWMyMDA7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSwgLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhYzIwMDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZTpob3Zlcjo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuMDg7XFxufVxcbi5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGUubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsIC5tZGMtdGFiW2lkPW1kYy10YWItNF0ubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX19yaXBwbGU6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICBvcGFjaXR5OiAwLjI0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTRdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgbGluZWFyO1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTRdLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fcmlwcGxlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xcbiAgb3BhY2l0eTogMC4yNDtcXG59XFxuLm1kYy10YWJbaWQ9bWRjLXRhYi00XS5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3JpcHBsZS5tZGMtcmlwcGxlLXVwZ3JhZGVkIHtcXG4gIC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjI0O1xcbn1cXG4ubWRjLXRhYltpZD1tZGMtdGFiLTRdIC5tZGMtdGFiLWluZGljYXRvciAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7XFxuICBib3JkZXItY29sb3I6ICNkYWMyMDA7XFxufVxcblxcbi5sb2dvLWRpdiB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDElO1xcbn1cXG5cXG4uaGVyby1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDElO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAuaGVyby10ZXh0IGgxIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcXG4gIHBhZGRpbmc6IDAuNSUgMCU7XFxufVxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5ob3Vycy1hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmhvdXJzLWFydGljbGUgLmFydGljbGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3Vycy1hcnRpY2xlIC5hcnRpY2xlLWNhcmQgaDMge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAuaG91cnMtYXJ0aWNsZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbmFydGljbGUge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuYXJ0aWNsZSBwIHtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG59XFxuYXJ0aWNsZSB1bCB7XFxuICBwYWRkaW5nOiAxJSA1JSAyJSA2JTtcXG59XFxuYXJ0aWNsZSB1bCBsaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCItXFxcIjtcXG4gIC8qIEFkZCBjb250ZW50OiBcXFxcMjAyMiBpcyB0aGUgQ1NTIENvZGUvdW5pY29kZSBmb3IgYSBidWxsZXQgKi9cXG4gIGNvbG9yOiAjMDBhZWVmO1xcbiAgLyogQ2hhbmdlIHRoZSBjb2xvciAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAvKiBJZiB5b3Ugd2FudCBpdCB0byBiZSBib2xkICovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKiBOZWVkZWQgdG8gYWRkIHNwYWNlIGJldHdlZW4gdGhlIGJ1bGxldCBhbmQgdGhlIHRleHQgKi9cXG4gIHdpZHRoOiAxZW07XFxuICAvKiBBbHNvIG5lZWRlZCBmb3Igc3BhY2UgKHR3ZWFrIGlmIG5lZWRlZCkgKi9cXG59XCIsXCIvKipcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuICpcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICpcXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbiAqXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuICogVEhFIFNPRlRXQVJFLlxcbiAqL1xcblxcbkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5AaW5jbHVkZSBtaXhpbnMuY29yZS1zdHlsZXM7XFxuXCIsXCIvL1xcbi8vIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuLy9cXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuLy9cXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbi8vXFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuLy8gVEhFIFNPRlRXQVJFLlxcbi8vXFxuXFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi92YXJpYWJsZXNcXFwiIGFzIGFuaW1hdGlvbi12YXJpYWJsZXM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2RlbnNpdHkvZnVuY3Rpb25zXFxcIiBhcyBkZW5zaXR5LWZ1bmN0aW9ucztcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvZnVuY3Rpb25zXFxcIiBhcyBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2ZlYXR1cmUtdGFyZ2V0aW5nL21peGluc1xcXCIgYXMgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90YWItc2Nyb2xsZXIvbWl4aW5zXFxcIiBhcyB0YWItc2Nyb2xsZXItbWl4aW5zO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90YWIvbWl4aW5zXFxcIiBhcyB0YWItbWl4aW5zO1xcbkB1c2UgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG5cXG5AbWl4aW4gY29yZS1zdHlsZXMoJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCkpIHtcXG4gIC8vIHBvc3Rjc3MtYmVtLWxpbnRlcjogZGVmaW5lIHRhYi1iYXJcXG4gIC5tZGMtdGFiLWJhciB7XFxuICAgIEBpbmNsdWRlIHdpZHRoKDEwMCUsICRxdWVyeSk7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZW5zaXR5KHZhcmlhYmxlcy4kZGVuc2l0eS1zY2FsZSwgJHF1ZXJ5OiAkcXVlcnkpO1xcbiAgQGluY2x1ZGUgc3RhY2tlZC1kZW5zaXR5KHZhcmlhYmxlcy4kc3RhY2tlZC1kZW5zaXR5LXNjYWxlLCAkcXVlcnk6ICRxdWVyeSk7XFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGVuZFxcbn1cXG5cXG5AbWl4aW4gd2lkdGgoJHdpZHRoLCAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgd2lkdGg6ICR3aWR0aDtcXG4gIH1cXG59XFxuXFxuLy8vXFxuLy8vIFNldHMgZGVuc2l0eSBzY2FsZSB0byBkZWZhdWx0IHRhYiBiYXIgdmFyaWFudC4gVXNlIGBtZGMtdGFiLWJhci1zdGFja2VkLWRlbnNpdHkoKWAgbWl4aW4gZm9yIHN0YWNrZWQgdGFiIGJhclxcbi8vLyB2YXJpYW50Llxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJGRlbnNpdHktc2NhbGUgRGVuc2l0eSBzY2FsZSB2YWx1ZS4gU3VwcG9ydGVkIGRlbnNpdHkgc2NhbGVzIGAtNGAsIGAtM2AsIGAtMmAsIGAtMWAgYW5kIGAwYC5cXG4vLy9cXG5AbWl4aW4gZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSwgJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRoZWlnaHQ6IGRlbnNpdHktZnVuY3Rpb25zLnByb3AtdmFsdWUoXFxuICAgICRkZW5zaXR5LWNvbmZpZzogdmFyaWFibGVzLiRkZW5zaXR5LWNvbmZpZyxcXG4gICAgJGRlbnNpdHktc2NhbGU6ICRkZW5zaXR5LXNjYWxlLFxcbiAgICAkcHJvcGVydHktbmFtZTogaGVpZ2h0LFxcbiAgKTtcXG5cXG4gIC5tZGMtdGFiIHtcXG4gICAgQGluY2x1ZGUgdGFiLW1peGlucy5oZWlnaHQoJGhlaWdodCwgJHF1ZXJ5OiAkcXVlcnkpO1xcbiAgfVxcbn1cXG5cXG4vLy9cXG4vLy8gU2V0cyBkZW5zaXR5IHNjYWxlIHRvIHN0YWNrZWQgdGFiIGJhciB2YXJpYW50Llxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJGRlbnNpdHktc2NhbGUgRGVuc2l0eSBzY2FsZSB2YWx1ZS4gU3VwcG9ydGVkIGRlbnNpdHkgc2NhbGVzIGAtNGAsIGAtM2AsIGAtMmAsIGAtMWAgYW5kIGAwYC5cXG4vLy9cXG5AbWl4aW4gc3RhY2tlZC1kZW5zaXR5KFxcbiAgJGRlbnNpdHktc2NhbGUsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKVxcbikge1xcbiAgJGhlaWdodDogZGVuc2l0eS1mdW5jdGlvbnMucHJvcC12YWx1ZShcXG4gICAgJGRlbnNpdHktY29uZmlnOiB2YXJpYWJsZXMuJHN0YWNrZWQtZGVuc2l0eS1jb25maWcsXFxuICAgICRkZW5zaXR5LXNjYWxlOiAkZGVuc2l0eS1zY2FsZSxcXG4gICAgJHByb3BlcnR5LW5hbWU6IGhlaWdodCxcXG4gICk7XFxuXFxuICAubWRjLXRhYi0tc3RhY2tlZCB7XFxuICAgIEBpbmNsdWRlIHRhYi1taXhpbnMuaGVpZ2h0KCRoZWlnaHQsICRxdWVyeTogJHF1ZXJ5KTtcXG4gIH1cXG59XFxuXFxuLy8vXFxuLy8vIFNldHMgdGhlIENTUyB0cmFuc2l0aW9uIGZvciB0aGUgdGFiIHNjcm9sbGluZyBhbmltYXRpb24uIFRoaXMgbWl4aW4gaXMgYSBwcm94eSB0byBgbWRjLXRhYi1zY3JvbGxlci10cmFuc2l0aW9uYFxcbi8vLyBtaXhpbi5cXG4vLy9cXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBTdHJpbmd9ICRkdXJhdGlvbi1tcyAtIER1cmF0aW9uIChpbiBtcykgb2YgdGhlIGFuaW1hdGlvbi5cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0aW1pbmctZnVuY3Rpb24gLSBPcHRpb25hbGx5IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uLlxcbi8vL1xcbkBtaXhpbiB0YWItc2Nyb2xsZXItdHJhbnNpdGlvbihcXG4gICRkdXJhdGlvbi1tcyxcXG4gICR0aW1pbmctZnVuY3Rpb246IGFuaW1hdGlvbi12YXJpYWJsZXMuJHN0YW5kYXJkLWN1cnZlLXRpbWluZy1mdW5jdGlvbixcXG4gICRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpXFxuKSB7XFxuICAubWRjLXRhYi1zY3JvbGxlciB7XFxuICAgIEBpbmNsdWRlIHRhYi1zY3JvbGxlci1taXhpbnMudHJhbnNpdGlvbihcXG4gICAgICAkZHVyYXRpb24tbXMsXFxuICAgICAgJHRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbixcXG4gICAgICAkcXVlcnk6ICRxdWVyeVxcbiAgICApO1xcbiAgfVxcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvZnVuY3Rpb25zXFxcIjtcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvbWl4aW5zXFxcIiBhcyBmZWF0dXJlLXRhcmdldGluZy1taXhpbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL3JpcHBsZS9taXhpbnNcXFwiIGFzIHJpcHBsZS1taXhpbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL3RoZW1lL21peGluc1xcXCIgYXMgdGhlbWUtbWl4aW5zO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90eXBvZ3JhcGh5L21peGluc1xcXCIgYXMgdHlwb2dyYXBoeS1taXhpbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL3J0bC9taXhpbnNcXFwiIGFzIHJ0bC1taXhpbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvbWl4aW5zXFxcIiBhcyB0YWItaW5kaWNhdG9yLW1peGlucztcXG5AdXNlIFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuXFxuLy8gUHVibGljIG1peGluc1xcblxcbkBtaXhpbiBjb3JlLXN0eWxlcygkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgQGluY2x1ZGUgd2l0aG91dC1yaXBwbGUoJHF1ZXJ5KTtcXG4gIEBpbmNsdWRlIHJpcHBsZSgkcXVlcnkpO1xcbn1cXG5cXG4vLyBUaGlzIEFQSSBpcyBpbnRlbmRlZCBmb3IgdXNlIGJ5IGZyYW1ld29ya3MgdGhhdCBtYXkgd2FudCB0byBzZXBhcmF0ZSB0aGUgcmlwcGxlLXJlbGF0ZWQgc3R5bGVzXFxuLy8gZnJvbSB0aGUgb3RoZXIgdGFoIHN0eWxlcy4gSXQgaXMgcmVjb21tZW5kZWQgdGhhdCBtb3N0IHVzZXJzIHVzZSBgbWRjLXRhYi1jb3JlLXN0eWxlc2AgaW5zdGVhZC5cXG5AbWl4aW4gd2l0aG91dC1yaXBwbGUoJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcbiAgJGZlYXQtYW5pbWF0aW9uOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGFuaW1hdGlvbik7XFxuXFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGRlZmluZSB0YWJcXG5cXG4gIC5tZGMtdGFiIHtcXG4gICAgQGluY2x1ZGUgYmFzZV8oJHF1ZXJ5KTtcXG4gIH1cXG5cXG4gIC5tZGMtdGFiLS1taW4td2lkdGgge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1kYy10YWJfX2NvbnRlbnQge1xcbiAgICBAaW5jbHVkZSBjb250ZW50XygkcXVlcnkpO1xcbiAgfVxcblxcbiAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgICB0cmFuc2l0aW9uOiAxNTBtcyBjb2xvciBsaW5lYXI7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIC8vIFNldHRpbmcgbGluZS1oZWlnaHQgaGVyZSBvdmVycmlkZXMgdGhlIGxpbmUtaGVpZ2h0IGZyb20gdGhlIHR5cG9ncmFwaHlcXG4gICAgICAvLyBtaXhpbiBhYm92ZS4gVGhlIGxpbmUtaGVpZ2h0IG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4gc28gdGhhdCB0aGUgc3BhY2luZ1xcbiAgICAgIC8vIGJldHdlZW4gdGhlIHRleHQgbGFiZWwgYW5kIHRoZSBpY29uIGFzIHdlbGwgYXMgdGhlIHRleHQgbGFiZWwgYW5kIHRoZVxcbiAgICAgIC8vIGJvdHRvbSBvZiB0aGUgdGFiIHJlbWFpbiB0aGUgc2FtZS5cXG4gICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuICB9XFxuXFxuICAubWRjLXRhYl9faWNvbiB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgIHRyYW5zaXRpb246IDE1MG1zIGNvbG9yIGxpbmVhcjtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICB3aWR0aDogdmFyaWFibGVzLiRpY29uLXNpemU7XFxuICAgICAgaGVpZ2h0OiB2YXJpYWJsZXMuJGljb24tc2l6ZTtcXG4gICAgICBmb250LXNpemU6IHZhcmlhYmxlcy4kaWNvbi1zaXplO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZGMtdGFiLS1zdGFja2VkIHtcXG4gICAgQGluY2x1ZGUgc3RhY2tlZF8oJHF1ZXJ5KTtcXG4gIH1cXG5cXG4gIC5tZGMtdGFiLS1hY3RpdmUge1xcbiAgICBAaW5jbHVkZSBhY3RpdmVfKCRxdWVyeSk7XFxuICB9XFxuXFxuICAubWRjLXRhYjpub3QoLm1kYy10YWItLXN0YWNrZWQpIC5tZGMtdGFiX19pY29uICsgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBAaW5jbHVkZSBydGwtbWl4aW5zLnJlZmxleGl2ZS1ib3gocGFkZGluZywgbGVmdCwgOHB4KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gcG9zdGNzcy1iZW0tbGludGVyOiBlbmRcXG59XFxuXFxuLy8gVGhpcyBBUEkgaXMgaW50ZW5kZWQgZm9yIHVzZSBieSBmcmFtZXdvcmtzIHRoYXQgbWF5IHdhbnQgdG8gc2VwYXJhdGUgdGhlIHJpcHBsZS1yZWxhdGVkIHN0eWxlc1xcbi8vIGZyb20gdGhlIG90aGVyIHRhaCBzdHlsZXMuIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgbW9zdCB1c2VycyB1c2UgYG1kYy10YWItY29yZS1zdHlsZXNgIGluc3RlYWQuXFxuQG1peGluIHJpcHBsZSgkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgQGluY2x1ZGUgcmlwcGxlLW1peGlucy5jb21tb24oJHF1ZXJ5KTsgLy8gQ09QWUJBUkFfQ09NTUVOVF9USElTX0xJTkVcXG5cXG4gIC5tZGMtdGFiX19yaXBwbGUge1xcbiAgICBAaW5jbHVkZSByaXBwbGVfKCRxdWVyeSk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBob3Jpem9udGFsLXBhZGRpbmcoJHBhZGRpbmcsICRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG5cXG4gIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZztcXG4gICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZztcXG4gIH1cXG59XFxuXFxuQG1peGluIHRleHQtbGFiZWwtY29sb3IoJGNvbG9yLCAkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtY29sb3I6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgY29sb3IpO1xcblxcbiAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgIEBpbmNsdWRlIHRoZW1lLW1peGlucy5wcm9wKGNvbG9yLCAkY29sb3IpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCRjb2xvciwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LWNvbG9yOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gIC5tZGMtdGFiX19pY29uIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtY29sb3IpIHtcXG4gICAgICBAaW5jbHVkZSB0aGVtZS1taXhpbnMucHJvcChjb2xvciwgJGNvbG9yKTtcXG5cXG4gICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIHN0YXRlcy1jb2xvcigkY29sb3IsICRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAubWRjLXRhYl9fcmlwcGxlIHtcXG4gICAgQGluY2x1ZGUgcmlwcGxlLW1peGlucy5zdGF0ZXMoJGNvbG9yLCAkcXVlcnk6ICRxdWVyeSk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBpbmstY29sb3IoJGNvbG9yLCAkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgQGluY2x1ZGUgaWNvbi1jb2xvcigkY29sb3IsICRxdWVyeSk7XFxuICBAaW5jbHVkZSBzdGF0ZXMtY29sb3IoJGNvbG9yLCAkcXVlcnkpO1xcbiAgQGluY2x1ZGUgdGV4dC1sYWJlbC1jb2xvcigkY29sb3IsICRxdWVyeSk7XFxufVxcblxcbkBtaXhpbiBhY3RpdmUtdGV4dC1sYWJlbC1jb2xvcigkY29sb3IsICRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAmLm1kYy10YWItLWFjdGl2ZSB7XFxuICAgIEBpbmNsdWRlIHRleHQtbGFiZWwtY29sb3IoJGNvbG9yLCAkcXVlcnkpO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYWN0aXZlLWljb24tY29sb3IoJGNvbG9yLCAkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJi5tZGMtdGFiLS1hY3RpdmUge1xcbiAgICBAaW5jbHVkZSBpY29uLWNvbG9yKCRjb2xvciwgJHF1ZXJ5KTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGFjdGl2ZS1zdGF0ZXMtY29sb3IoJGNvbG9yLCAkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJi5tZGMtdGFiLS1hY3RpdmUge1xcbiAgICBAaW5jbHVkZSBzdGF0ZXMtY29sb3IoJGNvbG9yLCAkcXVlcnkpO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gcGFyZW50LXBvc2l0aW9uaW5nKCRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG5cXG4gIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmaXhlZC13aWR0aCgkd2lkdGgsICRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG5cXG4gIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICBmbGV4OiAwIDEgJHdpZHRoO1xcbiAgfVxcbn1cXG5cXG4vLy9cXG4vLy8gU2V0cyB0YWIgaGVpZ2h0XFxuLy8vXFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkaGVpZ2h0IEhlaWdodCB2YWx1ZSBpbiBgcHhgLlxcbi8vL1xcbkBtaXhpbiBoZWlnaHQoJGhlaWdodCwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gIH1cXG59XFxuXFxuLy8vXFxuLy8vIFNldHMgdGFiIHRleHQgdHJhbnNmb3JtXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdHJhbnNmb3JtIFRoZSB0ZXh0LXRyYW5zZm9ybSBwcm9wZXJ0eSB0byBhcHBseS5cXG4vLy9cXG5AbWl4aW4gdGV4dC10cmFuc2Zvcm0oJHRyYW5zZm9ybSwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xcbiAgfVxcbn1cXG5cXG4vL1xcbi8vIFByaXZhdGVcXG4vL1xcblxcbkBtaXhpbiBiYXNlXygkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSB0eXBvZ3JhcGh5LW1peGlucy50eXBvZ3JhcGh5KGJ1dHRvbiwgJHF1ZXJ5KTtcXG4gIEBpbmNsdWRlIHRleHQtbGFiZWwtY29sb3IodmFyaWFibGVzLiR0ZXh0LWxhYmVsLWNvbG9yLWRlZmF1bHQsICRxdWVyeSk7XFxuICBAaW5jbHVkZSBpY29uLWNvbG9yKHZhcmlhYmxlcy4kaWNvbi1jb2xvci1kZWZhdWx0LCAkcXVlcnkpO1xcbiAgQGluY2x1ZGUgaG9yaXpvbnRhbC1wYWRkaW5nKHZhcmlhYmxlcy4kaG9yaXpvbnRhbC1wYWRkaW5nLCAkcXVlcnkpO1xcbiAgQGluY2x1ZGUgdGFiLWluZGljYXRvci1taXhpbnMuc3VyZmFjZSgkcXVlcnkpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLy8gRXhwbGljaXRseSBzZXR0aW5nIG1hcmdpbiB0byAwIGlzIHRvIG92ZXJyaWRlIHNhZmFyaSBkZWZhdWx0IG1hcmdpbiBmb3IgYnV0dG9uIGVsZW1lbnRzLlxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICAvLyBGaXJlZm94IHN0aWxsIGRyYXdzIGEgZG90dGVkIGJvcmRlciBhcm91bmQgZm9jdXNlZCBidXR0b25zIHVubGVzcyBzcGVjaWZpY2FsbHkgb3ZlcnJpZGRlbi5cXG4gICAgJjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIHJpcHBsZV8oJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgcmlwcGxlLW1peGlucy5zdXJmYWNlKCRxdWVyeSk7XFxuICBAaW5jbHVkZSByaXBwbGUtbWl4aW5zLnJhZGl1cy1ib3VuZGVkKCRxdWVyeTogJHF1ZXJ5KTtcXG4gIEBpbmNsdWRlIHJpcHBsZS1taXhpbnMuc3RhdGVzKCRjb2xvcjogcHJpbWFyeSwgJHF1ZXJ5OiAkcXVlcnkpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gY29udGVudF8oJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgdGFiLWluZGljYXRvci1taXhpbnMuc3VyZmFjZSgkcXVlcnkpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc3RhY2tlZF8oJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIC5tZGMtdGFiX19jb250ZW50IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xcbiAgICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYWN0aXZlXygkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtYW5pbWF0aW9uOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGFuaW1hdGlvbik7XFxuXFxuICBAaW5jbHVkZSB0ZXh0LWxhYmVsLWNvbG9yKHZhcmlhYmxlcy4kdGV4dC1sYWJlbC1jb2xvci1hY3RpdmUsICRxdWVyeSk7XFxuICBAaW5jbHVkZSBpY29uLWNvbG9yKHZhcmlhYmxlcy4kaWNvbi1jb2xvci1hY3RpdmUsICRxdWVyeSk7XFxuXFxuICAubWRjLXRhYl9fdGV4dC1sYWJlbCxcXG4gIC5tZGMtdGFiX19pY29uIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtYW5pbWF0aW9uKSB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvKipcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuICpcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICpcXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbiAqXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuICogVEhFIFNPRlRXQVJFLlxcbiAqL1xcblxcbkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5AaW5jbHVkZSBtaXhpbnMuY29yZS1zdHlsZXM7XFxuXCIsXCIvL1xcbi8vIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuLy9cXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuLy9cXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbi8vXFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuLy8gVEhFIFNPRlRXQVJFLlxcbi8vXFxuXFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi92YXJpYWJsZXNcXFwiIGFzIGFuaW1hdGlvbi12YXJpYWJsZXM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL3RhYi9taXhpbnNcXFwiIGFzIHRhYi1taXhpbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2ZlYXR1cmUtdGFyZ2V0aW5nL2Z1bmN0aW9uc1xcXCI7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2ZlYXR1cmUtdGFyZ2V0aW5nL21peGluc1xcXCIgYXMgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zO1xcbkB1c2UgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG5cXG4vLy9cXG4vLy8gU2V0cyB0aGUgQ1NTIHRyYW5zaXRpb24gZm9yIHRoZSB0YWIgc2Nyb2xsaW5nIGFuaW1hdGlvbi5cXG4vLy9cXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBTdHJpbmd9ICRkdXJhdGlvbi1tcyAtIER1cmF0aW9uIChpbiBtcykgb2YgdGhlIGFuaW1hdGlvbi5cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0aW1pbmctZnVuY3Rpb24gLSBPcHRpb25hbGx5IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uLlxcbi8vL1xcbkBtaXhpbiB0cmFuc2l0aW9uKFxcbiAgJGR1cmF0aW9uLW1zLFxcbiAgJHRpbWluZy1mdW5jdGlvbjogYW5pbWF0aW9uLXZhcmlhYmxlcy4kc3RhbmRhcmQtY3VydmUtdGltaW5nLWZ1bmN0aW9uLFxcbiAgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKClcXG4pIHtcXG4gICRmZWF0LWFuaW1hdGlvbjogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBhbmltYXRpb24pO1xcblxcbiAgJi5tZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtYW5pbWF0aW9uKSB7XFxuICAgICAgdHJhbnNpdGlvbjogJGR1cmF0aW9uLW1zIHRyYW5zZm9ybSAkdGltaW5nLWZ1bmN0aW9uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBjb3JlLXN0eWxlcygkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuICAkZmVhdC1hbmltYXRpb246IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgYW5pbWF0aW9uKTtcXG5cXG4gIC8vIHBvc3Rjc3MtYmVtLWxpbnRlcjogZGVmaW5lIHRhYi1zY3JvbGxlclxcbiAgLm1kYy10YWItc2Nyb2xsZXIge1xcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKFxcbiAgICAgICRkdXJhdGlvbi1tczogdmFyaWFibGVzLiR0cmFuc2l0aW9uLWR1cmF0aW9uLFxcbiAgICAgICRxdWVyeTogJHF1ZXJ5XFxuICAgICk7XFxuXFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gU2VsZWN0b3IgZm9yIHRlc3QgZWxlbWVudCB1c2VkIHRvIGZlYXR1cmUtZGV0ZWN0IGhvcml6b250YWwgc2Nyb2xsYmFyIGhlaWdodFxcbiAgLm1kYy10YWItc2Nyb2xsZXJfX3Rlc3Qge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtOTk5OXB4O1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuICB9XFxuXFxuICAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEsXFxuICAubWRjLXRhYi1zY3JvbGxlcl9fdGVzdCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBUaGlzIG1vZGlmaWVyIGNsYXNzIHdpbGwgYmUgYWRkZWQgaW4gSlMgYWZ0ZXIgY29tcHV0aW5nIHRoZSBPUyBzY3JvbGxiYXIgc2l6ZSBpbiBvcmRlciB0byBoaWRlIHRoZSBzY3JvbGxiYXIuXFxuICAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEtLXNjcm9sbCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gICAgQGluY2x1ZGUgc2Nyb2xsLWNvbnRlbnRfKCRxdWVyeSk7XFxuICB9XFxuXFxuICAubWRjLXRhYi1zY3JvbGxlci0tYWxpZ24tc3RhcnQgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuICB9XFxuXFxuICAubWRjLXRhYi1zY3JvbGxlci0tYWxpZ24tZW5kIC5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZGMtdGFiLXNjcm9sbGVyLS1hbGlnbi1jZW50ZXIgLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50IHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcge1xcbiAgICAubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEge1xcbiAgICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGVuZFxcbn1cXG5cXG4vL1xcbi8vIFByaXZhdGVcXG4vL1xcblxcbkBtaXhpbiBzY3JvbGwtY29udGVudF8oJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcbiAgJGZlYXQtYW5pbWF0aW9uOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGFuaW1hdGlvbik7XFxuXFxuICBAaW5jbHVkZSB0YWItbWl4aW5zLnBhcmVudC1wb3NpdGlvbmluZygkcXVlcnkpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIH1cXG59XFxuXCIsXCIvKipcXG4gKiBAbGljZW5zZVxcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuICpcXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuICpcXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbiAqXFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuICogVEhFIFNPRlRXQVJFLlxcbiAqL1xcblxcbkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5AaW5jbHVkZSBtaXhpbnMuY29yZS1zdHlsZXM7XFxuXCIsXCIvL1xcbi8vIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXFxuLy9cXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuLy9cXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbi8vXFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuLy8gVEhFIFNPRlRXQVJFLlxcbi8vXFxuXFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi92YXJpYWJsZXNcXFwiO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90aGVtZS9taXhpbnNcXFwiIGFzIHRoZW1lLW1peGlucztcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvZnVuY3Rpb25zXFxcIjtcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvbWl4aW5zXFxcIiBhcyBmZWF0dXJlLXRhcmdldGluZy1taXhpbnM7XFxuXFxuQG1peGluIGNvcmUtc3R5bGVzKCRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG4gICRmZWF0LWFuaW1hdGlvbjogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBhbmltYXRpb24pO1xcblxcbiAgLy8gcG9zdGNzcy1iZW0tbGludGVyOiBkZWZpbmUgdGFiLWluZGljYXRvclxcblxcbiAgLm1kYy10YWItaW5kaWNhdG9yIHtcXG4gICAgQGluY2x1ZGUgYmFzZV8oJHF1ZXJ5KTtcXG4gIH1cXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgICB9XFxuICB9XFxuXFxuICAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLWljb24ge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvci0tYWN0aXZlIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFNsaWRlIGJ5IGRlZmF1bHRcXG4gIC5tZGMtdGFiLWluZGljYXRvciAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgICB0cmFuc2l0aW9uOiAyNTBtcyB0cmFuc2Zvcm0gdmFyaWFibGVzLiRzdGFuZGFyZC1jdXJ2ZS10aW1pbmctZnVuY3Rpb247XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIC0tbm8tdHJhbnNpdGlvbiBpcyBhcHBsaWVkIGluIGNhc2VzIHdoZXJlIHN0eWxlcyBuZWVkIHRvIGJlIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IHVwIGEgdHJhbnNpdGlvblxcbiAgLm1kYy10YWItaW5kaWNhdG9yLS1uby10cmFuc2l0aW9uIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvci0tZmFkZSAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgICB0cmFuc2l0aW9uOiAxNTBtcyBvcGFjaXR5IGxpbmVhcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gcG9zdGNzcy1iZW0tbGludGVyOiBpZ25vcmVcXG4gIC5tZGMtdGFiLWluZGljYXRvci0tYWN0aXZlLm1kYy10YWItaW5kaWNhdG9yLS1mYWRlXFxuICAgIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGVuZFxcbn1cXG5cXG5AbWl4aW4gc3VyZmFjZSgkcXVlcnk6IGZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdW5kZXJsaW5lLWNvbG9yKCRjb2xvciwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LWNvbG9yOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtY29sb3IpIHtcXG4gICAgICBAaW5jbHVkZSB0aGVtZS1taXhpbnMucHJvcChib3JkZXItY29sb3IsICRjb2xvcik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIHVuZGVybGluZS1oZWlnaHQoJGhlaWdodCwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAkaGVpZ2h0O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiB1bmRlcmxpbmUtdG9wLWNvcm5lci1yYWRpdXMoJHJhZGl1cywgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLWNvbG9yKCRjb2xvciwgJHF1ZXJ5OiBmdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LWNvbG9yOiBmdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0taWNvbiB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWNvbG9yKSB7XFxuICAgICAgQGluY2x1ZGUgdGhlbWUtbWl4aW5zLnByb3AoY29sb3IsICRjb2xvcik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24taGVpZ2h0KCRoZWlnaHQsICRxdWVyeTogZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG5cXG4gIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0taWNvbiB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIGhlaWdodDogJGhlaWdodDtcXG4gICAgICBmb250LXNpemU6ICRoZWlnaHQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy9cXG4vLyBQcml2YXRlXFxuLy9cXG5cXG5AbWl4aW4gYmFzZV8oJHF1ZXJ5KSB7XFxuICAkZmVhdC1zdHJ1Y3R1cmU6IGZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgc3RydWN0dXJlKTtcXG5cXG4gIEBpbmNsdWRlIHVuZGVybGluZS1jb2xvcihwcmltYXJ5LCAkcXVlcnkpO1xcbiAgQGluY2x1ZGUgaWNvbi1jb2xvcihzZWNvbmRhcnksICRxdWVyeSk7XFxuICBAaW5jbHVkZSB1bmRlcmxpbmUtaGVpZ2h0KDJweCwgJHF1ZXJ5KTtcXG4gIEBpbmNsdWRlIGljb24taGVpZ2h0KDM0cHgsICRxdWVyeSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG59XFxuXCIsXCIvL1xcbi8vIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXFxuLy9cXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XFxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXFxcIlNvZnR3YXJlXFxcIiksIHRvIGRlYWxcXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXFxuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XFxuLy9cXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxcbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcbi8vXFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFxcXCJBUyBJU1xcXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXFxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXFxuLy8gVEhFIFNPRlRXQVJFLlxcbi8vXFxuXFxuQHVzZSBcXFwic2FzczptYXBcXFwiO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC9mZWF0dXJlLXRhcmdldGluZy9mdW5jdGlvbnNcXFwiIGFzIGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucztcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvbWl4aW5zXFxcIjtcXG5AdXNlIFxcXCIuL2N1c3RvbS1wcm9wZXJ0aWVzXFxcIjtcXG5AdXNlIFxcXCIuL2dzc1xcXCI7XFxuQHVzZSBcXFwiLi92YXJpYWJsZXNcXFwiO1xcblxcbkBtaXhpbiBjb3JlLXN0eWxlcygkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtY29sb3I6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgY29sb3IpO1xcblxcbiAgOnJvb3Qge1xcbiAgICBAaW5jbHVkZSBtaXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgIEBlYWNoICRzdHlsZSBpbiBtYXAua2V5cyh2YXJpYWJsZXMuJHByb3BlcnR5LXZhbHVlcykge1xcbiAgICAgICAgLS1tZGMtdGhlbWUtI3skc3R5bGV9OiAje21hcC5nZXQodmFyaWFibGVzLiRwcm9wZXJ0eS12YWx1ZXMsICRzdHlsZSl9O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgQGVhY2ggJHN0eWxlIGluIG1hcC5rZXlzKHZhcmlhYmxlcy4kcHJvcGVydHktdmFsdWVzKSB7XFxuICAgIEBpZiAkc3R5bGUgIT0gJ2JhY2tncm91bmQnIGFuZCAkc3R5bGUgIT0gJ3N1cmZhY2UnIHtcXG4gICAgICAubWRjLXRoZW1lLS0jeyRzdHlsZX0ge1xcbiAgICAgICAgQGluY2x1ZGUgbWl4aW5zLnRhcmdldHMoJGZlYXQtY29sb3IpIHtcXG4gICAgICAgICAgQGluY2x1ZGUgcHJvcChjb2xvciwgJHN0eWxlLCB0cnVlKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gQGVsc2Uge1xcbiAgICAgIC5tZGMtdGhlbWUtLSN7JHN0eWxlfSB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgICAgICBAaW5jbHVkZSBwcm9wKGJhY2tncm91bmQtY29sb3IsICRzdHlsZSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBDU1MgcnVsZXMgZm9yIHVzaW5nIHByaW1hcnkgYW5kIHNlY29uZGFyeSAocGx1cyBsaWdodC9kYXJrIHZhcmlhbnRzKSBhcyBiYWNrZ3JvdW5kIGNvbG9ycy5cXG4gIEBlYWNoICRzdHlsZSBpbiAoJ3ByaW1hcnknLCAnc2Vjb25kYXJ5Jykge1xcbiAgICAubWRjLXRoZW1lLS0jeyRzdHlsZX0tYmcge1xcbiAgICAgIEBpbmNsdWRlIG1peGlucy50YXJnZXRzKCRmZWF0LWNvbG9yKSB7XFxuICAgICAgICBAaW5jbHVkZSBwcm9wKGJhY2tncm91bmQtY29sb3IsICRzdHlsZSwgdHJ1ZSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vLyBBcHBsaWVzIGEgZHluYW1pYyB2YWx1ZSB0byB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LiBUaGlzIG1peGluIHNob3VsZCBiZSB1c2VkXFxuLy8vIGluIHRoZW1lIHN0eWxlIG1peGlucyB3aGVuIHNldHRpbmcgcHJvcGVydGllcy5cXG4vLy9cXG4vLy8gVGhlIHZhbHVlIG1heSBiZSBhbnkgb2YgdGhlIGZvbGxvd2luZzpcXG4vLy8gLSBhIHN0YW5kYXJkIENTUyB2YWx1ZVxcbi8vLyAtIGEgY3VzdG9tIHByb3BlcnR5IE1hcCwgZS5nLiAodmFybmFtZTogLS1tZGMtZm9vLCBmYWxsYmFjazogYmx1ZSlcXG4vLy8gLSBhIE1hdGVyaWFsIHRoZW1lIGtleSBTdHJpbmcsIGUuZy4gXFxcInByaW1hcnlcXFwiLCBcXFwib24tcHJpbWFyeVxcXCJcXG4vLy9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXFxuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyIHwgQ29sb3IgfCBMaXN0IHwgTWFwfSAkdmFsdWUgLSB0aGUgcHJvcGVydHkncyB2YWx1ZS5cXG4vLy8gQHBhcmFtIHtNYXB9ICRnc3MgLSBvcHRpb25hbCBNYXAgb2YgR1NTIGFubm90YXRpb25zIHRvIHNldC5cXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gc2V0IHRvIHRydWUgdG8gYWRkIGFuIGAhaW1wb3J0YW50YCBydWxlLiBEZWZhdWx0c1xcbi8vLyAgICAgdG8gZmFsc2UuXFxuQG1peGluIHByb3BlcnR5KCRwcm9wZXJ0eSwgJHZhbHVlLCAkZ3NzOiAoKSwgJGltcG9ydGFudDogZmFsc2UpIHtcXG4gICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyFpbXBvcnRhbnQnLCAnJyk7XFxuXFxuICBAaWYgY3VzdG9tLXByb3BlcnRpZXMuaXMtY3VzdG9tLXByb3AoJHZhbHVlKSB7XFxuICAgIC8vICR2YWx1ZSBpcyBhIGN1c3RvbSBwcm9wZXJ0eSBNYXBcXG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnRpZXMuYXBwbHkoXFxuICAgICAgJHByb3BlcnR5LFxcbiAgICAgICR2YWx1ZSxcXG4gICAgICAkZ3NzOiAkZ3NzLFxcbiAgICAgICRpbXBvcnRhbnQ6ICRpbXBvcnRhbnRcXG4gICAgKTtcXG4gIH0gQGVsc2UgaWYgbWFwLmhhcy1rZXkodmFyaWFibGVzLiRwcm9wZXJ0eS12YWx1ZXMsICR2YWx1ZSkge1xcbiAgICAvLyAkdmFsdWUgaXMgYSB0aGVtZSBwcm9wZXJ0eSBTdHJpbmdcXG4gICAgJGZhbGxiYWNrOiBtYXAuZ2V0KHZhcmlhYmxlcy4kcHJvcGVydHktdmFsdWVzLCAkdmFsdWUpO1xcbiAgICAkY3VzdG9tLXByb3A6IGN1c3RvbS1wcm9wZXJ0aWVzLmNyZWF0ZSgtLW1kYy10aGVtZS0jeyRzdHlsZX0sICRmYWxsYmFjayk7XFxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0aWVzLmFwcGx5KFxcbiAgICAgICRwcm9wZXJ0eSxcXG4gICAgICAkY3VzdG9tLXByb3AsXFxuICAgICAgJGdzczogJGdzcyxcXG4gICAgICAkaW1wb3J0YW50OiAkaW1wb3J0YW50XFxuICAgICk7XFxuICB9IEBlbHNlIHtcXG4gICAgLy8gJHZhbHVlIGlzIGEgc3RhbmRhcmQgQ1NTIHZhbHVlXFxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWUgI3skaW1wb3J0YW50LXJ1bGV9O1xcbiAgfVxcbn1cXG5cXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IHRoZW1lIGNvbG9yIHN0eWxlIHRvIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkuXFxuLy8gJHByb3BlcnR5IGlzIHR5cGljYWxseSBjb2xvciBvciBiYWNrZ3JvdW5kLWNvbG9yLCBidXQgY2FuIGJlIGFueSBDU1MgcHJvcGVydHkgdGhhdCBhY2NlcHRzIGNvbG9yIHZhbHVlcy5cXG4vLyAkc3R5bGUgc2hvdWxkIGJlIG9uZSBvZiB0aGUgbWFwIGtleXMgaW4gJG1kYy10aGVtZS1wcm9wZXJ0eS12YWx1ZXMgKF92YXJpYWJsZXMuc2NzcyksIG9yIGEgY29sb3IgdmFsdWUuXFxuLy8gQGRlcHJlY2F0ZWQgdXNlIHRoZSBgcHJvcGVydHkoKWAgbWl4aW4gaW5zdGVhZFxcbkBtaXhpbiBwcm9wKCRwcm9wZXJ0eSwgJHN0eWxlLCAkaW1wb3J0YW50OiBmYWxzZSkge1xcbiAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKTtcXG5cXG4gIEBpZiBjdXN0b20tcHJvcGVydGllcy5pcy1jdXN0b20tcHJvcCgkc3R5bGUpIHtcXG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnRpZXMuYXBwbHkoJHByb3BlcnR5LCAkc3R5bGUsICRpbXBvcnRhbnQ6ICRpbXBvcnRhbnQpO1xcbiAgfSBAZWxzZSBpZiB2YXJpYWJsZXMuaXMtdmFsaWQtdGhlbWUtcHJvcC12YWx1ZV8oJHN0eWxlKSB7XFxuICAgICN7JHByb3BlcnR5fTogJHN0eWxlICN7JGltcG9ydGFudC1ydWxlfTtcXG4gIH0gQGVsc2Uge1xcbiAgICBAaWYgbm90IG1hcC5oYXMta2V5KHZhcmlhYmxlcy4kcHJvcGVydHktdmFsdWVzLCAkc3R5bGUpIHtcXG4gICAgICBAZXJyb3IgXFxcIkludmFsaWQgc3R5bGU6ICcjeyRzdHlsZX0nLiBDaG9vc2Ugb25lIG9mOiAje21hcC5rZXlzKHZhcmlhYmxlcy4kcHJvcGVydHktdmFsdWVzKX1cXFwiO1xcbiAgICB9XFxuICAgICR2YWx1ZTogbWFwLmdldCh2YXJpYWJsZXMuJHByb3BlcnR5LXZhbHVlcywgJHN0eWxlKTtcXG5cXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWUgI3skaW1wb3J0YW50LXJ1bGV9O1xcbiAgICAvKiBAYWx0ZXJuYXRlICovXFxuICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKSAjeyRpbXBvcnRhbnQtcnVsZX07XFxuICB9XFxufVxcblwiLFwiLy9cXG4vLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxcbi8vXFxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFxcXCJTb2Z0d2FyZVxcXCIpLCB0byBkZWFsXFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxcbi8vXFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG4vL1xcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcXFwiQVMgSVNcXFwiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXFxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXFxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxcbi8vIFRIRSBTT0ZUV0FSRS5cXG4vL1xcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxuQHVzZSBcXFwic2FzczptYXBcXFwiO1xcbkB1c2UgXFxcInNhc3M6c3RyaW5nXFxcIjtcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvZnVuY3Rpb25zXFxcIiBhcyBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2ZlYXR1cmUtdGFyZ2V0aW5nL21peGluc1xcXCIgYXMgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90aGVtZS9taXhpbnNcXFwiIGFzIHRoZW1lLW1peGlucztcXG5AdXNlIFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIGNvcmUtc3R5bGVzKCRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAubWRjLXR5cG9ncmFwaHkge1xcbiAgICBAaW5jbHVkZSBiYXNlKCRxdWVyeTogJHF1ZXJ5KTtcXG4gIH1cXG5cXG4gIEBlYWNoICRzdHlsZSBpbiBtYXAua2V5cyh2YXJpYWJsZXMuJHN0eWxlcykge1xcbiAgICAubWRjLXR5cG9ncmFwaHktLSN7JHN0eWxlfSB7XFxuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkc3R5bGUsICRxdWVyeTogJHF1ZXJ5KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYmFzZSgkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtdHlwb2dyYXBoeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoXFxuICAgICRxdWVyeSxcXG4gICAgdHlwb2dyYXBoeVxcbiAgKTtcXG5cXG4gIEBpbmNsdWRlIHNtb290aC1mb250KCRxdWVyeTogJHF1ZXJ5KTtcXG4gIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXR5cG9ncmFwaHkpIHtcXG4gICAgQGluY2x1ZGUgdGhlbWUtbWl4aW5zLnByb3AoXFxuICAgICAgZm9udC1mYW1pbHksXFxuICAgICAgKFxcbiAgICAgICAgdmFybmFtZTogLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSxcXG4gICAgICAgIGZhbGxiYWNrOiBtYXAuZ2V0KHZhcmlhYmxlcy4kYmFzZSwgJ2ZvbnQtZmFtaWx5JyksXFxuICAgICAgKVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdHlwb2dyYXBoeShcXG4gICRzdHlsZSxcXG4gICRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpLFxcbiAgJGV4Y2x1ZGUtcHJvcHM6ICgpXFxuKSB7XFxuICAkZmVhdC10eXBvZ3JhcGh5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldChcXG4gICAgJHF1ZXJ5LFxcbiAgICB0eXBvZ3JhcGh5XFxuICApO1xcbiAgJHN0eWxlLXByb3BzOiBtYXAuZ2V0KHZhcmlhYmxlcy4kc3R5bGVzLCAkc3R5bGUpO1xcblxcbiAgQGlmIG5vdCBtYXAuaGFzLWtleSh2YXJpYWJsZXMuJHN0eWxlcywgJHN0eWxlKSB7XFxuICAgIEBlcnJvciBcXFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhICN7JHN0eWxlfSBkb2Vzbid0IGV4aXN0LiBDaG9vc2Ugb25lIG9mICN7bWFwLmtleXModmFyaWFibGVzLiRzdHlsZXMpfVxcXCI7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBzbW9vdGgtZm9udCgkcXVlcnk6ICRxdWVyeSk7XFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC10eXBvZ3JhcGh5KSB7XFxuICAgIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkc3R5bGUtcHJvcHMge1xcbiAgICAgIEBpZiBsaXN0LmluZGV4KCRleGNsdWRlLXByb3BzLCAka2V5KSA9PSBudWxsIHtcXG4gICAgICAgICRmYWxsYmFjazogJHZhbHVlO1xcbiAgICAgICAgQGlmICRrZXkgPT0gJ2ZvbnQtZmFtaWx5JyB7XFxuICAgICAgICAgIC8vIEVhY2ggc3R5bGUgaGFzIGl0cyBvd24gZm9udC1mYW1pbHkgY3VzdG9tIHByb3BlcnR5LCBidXQgc2hvdWxkXFxuICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGEgZ2VuZXJpYyBmb250LWZhbWlseSBwcm9wZXJ0eS4gVGhpcyBhbGxvd3NcXG4gICAgICAgICAgLy8gY3VzdG9taXppbmcgdGhlIGZvbnQtZmFtaWx5IGZvciBhbGwgc3R5bGVzIG9yIG9ubHkgc3BlY2lmaWMgb25lcy5cXG4gICAgICAgICAgJGZhbGxiYWNrOiAoXFxuICAgICAgICAgICAgdmFybmFtZTogLS1tZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseSxcXG4gICAgICAgICAgICBmYWxsYmFjazogJGZhbGxiYWNrLFxcbiAgICAgICAgICApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQGluY2x1ZGUgdGhlbWUtbWl4aW5zLnByb3AoXFxuICAgICAgICAgICRrZXksXFxuICAgICAgICAgIChcXG4gICAgICAgICAgICB2YXJuYW1lOiAtLW1kYy10eXBvZ3JhcGh5LSN7JHN0eWxlfS0jeyRrZXl9LFxcbiAgICAgICAgICAgIGZhbGxiYWNrOiAkZmFsbGJhY2ssXFxuICAgICAgICAgIClcXG4gICAgICAgICk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vLyBBcHBsaWVzIGFudGlhbGlhc2luZyB2aWEgZm9udC1zbW9vdGhpbmcgdG8gdGV4dC5cXG5AbWl4aW4gc21vb3RoLWZvbnQoJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXR5cG9ncmFwaHk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KFxcbiAgICAkcXVlcnksXFxuICAgIHR5cG9ncmFwaHlcXG4gICk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC10eXBvZ3JhcGh5KSB7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbn1cXG5cXG4vLyBFbGVtZW50IG11c3QgYmUgYGRpc3BsYXk6IGJsb2NrYCBvciBgZGlzcGxheTogaW5saW5lLWJsb2NrYCBmb3IgdGhpcyB0byB3b3JrLlxcbkBtaXhpbiBvdmVyZmxvdy1lbGxpcHNpcygkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi8vLyBTZXRzIGEgY29udGFpbmVyJ3MgYmFzZWxpbmUgdGhhdCB0ZXh0IGNvbnRlbnQgd2lsbCBhbGlnbiB0by5cXG4vLy9cXG4vLy8gSWYgdGhlIGAkZGlzcGxheWAgaXMgc2V0IHRvIGEgZmxleGJveCBkaXNwbGF5LCBvbmx5IGAkdG9wYCBiYXNlbGluZSBtYXkgYmVcXG4vLy8gc2V0LiBBIHNlcGFyYXRlIGVsZW1lbnQgbXVzdCBiZSBhZGRlZCBhcyBhIGNoaWxkIG9mIHRoZSBjb250YWluZXIgd2l0aCBhXFxuLy8vIGAkYm90dG9tYCBiYXNlbGluZS5cXG4vLy9cXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR0b3AgLSB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIG9mIHRoZSBjb250YWluZXIgdG8gdGhlXFxuLy8vICAgICB0ZXh0J3MgYmFzZWxpbmUuXFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkYm90dG9tIC0gdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRleHQncyBiYXNlbGluZSB0byB0aGVcXG4vLy8gICAgIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyLlxcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGRpc3BsYXkgLSB0aGUgZGlzcGxheSB0eXBlIG9mIHRoZSBjb250YWluZXIuIE1heSBiZSBgZmxleGAsXFxuLy8vICAgICBgaW5saW5lLWZsZXhgLCBgYmxvY2tgLCBvciBgaW5saW5lLWJsb2NrYC5cXG5AbWl4aW4gYmFzZWxpbmUoXFxuICAkdG9wOiAwLFxcbiAgJGJvdHRvbTogMCxcXG4gICRkaXNwbGF5OiBibG9jayxcXG4gICRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpXFxuKSB7XFxuICAkdmFsaWREaXNwbGF5VHlwZXM6IChmbGV4LCBpbmxpbmUtZmxleCwgYmxvY2ssIGlubGluZS1ibG9jayk7XFxuXFxuICBAaWYgbGlzdC5pbmRleCgkdmFsaWREaXNwbGF5VHlwZXMsICRkaXNwbGF5KSA9PSBudWxsIHtcXG4gICAgQGVycm9yIFxcXCJtZGMtdHlwb2dyYXBoeTogaW52YWxpZCBkaXNwbGF5IHNwZWNpZmllZCEgI3skZGlzcGxheX0gbXVzdCBiZSBvbmUgb2YgI3skdmFsaWREaXNwbGF5VHlwZXN9XFxcIjtcXG4gIH1cXG5cXG4gICRpc0ZsZXhib3g6ICRkaXNwbGF5ID09ICdmbGV4JyBvciAkZGlzcGxheSA9PSAnaW5saW5lLWZsZXgnO1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XFxuXFxuICAgIEBpZiAkaXNGbGV4Ym94IHtcXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBpZiAkdG9wID4gMCB7XFxuICAgIEBpbmNsdWRlIGJhc2VsaW5lLXRvcCgkdG9wLCAkcXVlcnk6ICRxdWVyeSk7XFxuICB9XFxuXFxuICBAaWYgJGJvdHRvbSA+IDAge1xcbiAgICBAaWYgJGlzRmxleGJveCB7XFxuICAgICAgQGVycm9yIFxcXCJtZGMtdHlwb2dyYXBoeTogaW52YWxpZCBiYXNlbGluZSB3aXRoIGRpc3BsYXkgdHlwZS4gI3skZGlzcGxheX0gY2Fubm90IHNwZWNpZml5ICRib3R0b20uIEFkZCBhIHNlcGFyYXRlIGNoaWxkIGVsZW1lbnQgd2l0aCBpdHMgb3duICRib3R0b20uXFxcIjtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBiYXNlbGluZS1ib3R0b20oJGJvdHRvbSwgJHF1ZXJ5OiAkcXVlcnkpO1xcbiAgfVxcbn1cXG5cXG4vLy8gU2V0cyB0aGUgYmFzZWxpbmUgb2YgZmxvdyB0ZXh0IGNvbnRlbnQuXFxuLy8vXFxuLy8vIFNlcGFyYXRlIGAkdG9wYCBhbmQgYCRib3R0b21gIGJhc2VsaW5lcyBtYXkgYmUgc3BlY2lmaWVkLiBZb3Ugc2hvdWxkIGVuc3VyZVxcbi8vLyB0aGF0IHRoZSBgJHRvcGAgYmFzZWxpbmUgbWF0Y2hlcyB0aGUgcHJldmlvdXMgdGV4dCBjb250ZW50J3MgJGJvdHRvbVxcbi8vLyBiYXNlbGluZSB0byBlbnN1cmUgdGV4dCBpcyBwb3NpdGlvbmVkIGFwcHJvcHJpYXRlbHkuXFxuLy8vXFxuLy8vIFNlZSBnby9jc3MtYmFzZWxpbmUgZm9yIHJlZmVyZW5jZSBvbiBob3cgdGhpcyBtaXhpbiB3b3Jrcy5cXG4vLy9cXG4vLy8gVGhpcyBpcyBpbnRlbmRlZCBmb3IgdGV4dCBmbG93IGNvbnRlbnQgb25seSAoZS5nLiBgPGgxPmAsIGA8cD5gLCBgPHNwYW4+YCxcXG4vLy8gb3IgYDxkaXY+YCB3aXRoIG9ubHkgdGV4dCBjb250ZW50KS4gVXNlIGBiYXNlbGluZSgpYCB0byBzZXQgdGhlIGJhc2VsaW5lIG9mXFxuLy8vIGNvbnRhaW5lcnMgdGhhdCBhcmUgZmxleGJveCBvciBoYXZlIG5vbi1mbG93IGNvbnRlbnQgY2hpbGRyZW4uXFxuLy8vXFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdG9wIC0gdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBvZiB0aGUgY29udGFpbmVyIHRvIHRoZVxcbi8vLyAgICAgdGV4dCdzIGJhc2VsaW5lLlxcbi8vLyBAcGFyYW0ge051bWJlcn0gJGJvdHRvbSAtIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0ZXh0J3MgYmFzZWxpbmUgdG8gdGhlXFxuLy8vICAgICBib3R0b20gb2YgdGhlIGNvbnRhaW5lci5cXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkbGluZUhlaWdodCAtIHRoZSBsaW5lLWhlaWdodCB0byB1c2UgZm9yIHRoZSB0ZXh0LiBUaGlzXFxuLy8vICAgICBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBiYXNlbGluZXMgb2YgbXVsdGlwbGUgbGluZXMgb2YgdGV4dC5cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRkaXNwbGF5IC0gdGhlIGRpc3BsYXkgdHlwZSBvZiB0aGUgY29udGFpbmVyLiBNYXkgYmUgYGJsb2NrYFxcbi8vLyAgICAgb3IgYGlubGluZS1ibG9ja2AuXFxuQG1peGluIHRleHQtYmFzZWxpbmUoXFxuICAkdG9wOiAwLFxcbiAgJGJvdHRvbTogMCxcXG4gICRkaXNwbGF5OiBibG9jayxcXG4gICRsaW5lSGVpZ2h0OiBub3JtYWwsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKVxcbikge1xcbiAgJHZhbGlkRGlzcGxheVR5cGVzOiAoYmxvY2ssIGlubGluZS1ibG9jayk7XFxuXFxuICBAaWYgbGlzdC5pbmRleCgkdmFsaWREaXNwbGF5VHlwZXMsICRkaXNwbGF5KSA9PSBudWxsIHtcXG4gICAgQGVycm9yIFxcXCJtZGMtdHlwb2dyYXBoeTogaW52YWxpZCBkaXNwbGF5IHNwZWNpZmllZCEgI3skZGlzcGxheX0gbXVzdCBiZSBvbmUgb2YgI3skdmFsaWREaXNwbGF5VHlwZXN9XFxcIjtcXG4gIH1cXG5cXG4gICRmZWF0LXN0cnVjdHVyZTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgYmFzZWxpbmUoXFxuICAgICRkaXNwbGF5OiAkZGlzcGxheSxcXG4gICAgJHRvcDogJHRvcCxcXG4gICAgJGJvdHRvbTogJGJvdHRvbSxcXG4gICAgJHF1ZXJ5OiAkcXVlcnlcXG4gICk7XFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgQGlmICR0b3AgPiAwIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgIC8qIEBhbHRlcm5hdGUgKi9cXG4gICAgICBsaW5lLWhlaWdodDogI3skbGluZUhlaWdodH07XFxuICAgIH1cXG5cXG4gICAgQGlmICRib3R0b20gPiAwIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMSAqICRib3R0b207XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8vIENyZWF0ZXMgYSBiYXNlbGluZSBzdHJ1dCBmcm9tIHRoZSB0b3Agb2YgYSBjb250YWluZXIuIFRoaXMgbWl4aW4gaXMgZm9yXFxuLy8vIGFkdmFuY2VkIHVzZXJzLCBwcmVmZXIgYGJhc2VsaW5lKClgLlxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJGRpc3RhbmNlIC0gVGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBvZiB0aGUgY29udGFpbmVyIHRvXFxuLy8vICAgICB0aGUgdGV4dCdzIGJhc2VsaW5lLlxcbkBtaXhpbiBiYXNlbGluZS10b3AoJGRpc3RhbmNlLCAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBAaW5jbHVkZSBiYXNlbGluZS1zdHJ1dF8oJGRpc3RhbmNlKTtcXG5cXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLy8gQ3JlYXRlcyBhIGJhc2VsaW5lIHN0cnV0IGZyb20gdGhlIGJhc2VsaW5lIHRvIHRoZSBib3R0b20gb2YgYSBjb250YWluZXIuXFxuLy8vIFRoaXMgbWl4aW4gaXMgZm9yIGFkdmFuY2VkIHVzZXJzLCBwcmVmZXIgYGJhc2VsaW5lKClgLlxcbi8vL1xcbi8vLyBAcGFyYW0ge051bWJlcn0gJGRpc3RhbmNlIC0gVGhlIGRpc3RhbmNlIGZyb20gdGhlIHRleHQncyBiYXNlbGluZSB0byB0aGVcXG4vLy8gICAgIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyLlxcbkBtaXhpbiBiYXNlbGluZS1ib3R0b20oJGRpc3RhbmNlLCAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSkge1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICAmOjphZnRlciB7XFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIEBpbmNsdWRlIGJhc2VsaW5lLXN0cnV0XygkZGlzdGFuY2UpO1xcblxcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAtMSAqICRkaXN0YW5jZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLy8gQWRkcyBhbiBpbnZpc2libGUsIHplcm8td2lkdGggcHJlZml4IHRvIGEgY29udGFpbmVyJ3MgdGV4dC5cXG4vLy8gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIGJhc2VsaW5lIGlzIGFsd2F5cyB3aGVyZSB0aGUgdGV4dCB3b3VsZCBiZSwgaW5zdGVhZFxcbi8vLyBvZiBkZWZhdWx0aW5nIHRvIHRoZSBjb250YWluZXIgYm90dG9tIHdoZW4gdGV4dCBpcyBlbXB0eS4gRG8gbm90IHVzZSB0aGlzXFxuLy8vIG1peGluIGlmIHRoZSBgYmFzZWxpbmVgIG1peGluIGlzIGFscmVhZHkgYXBwbGllZC5cXG5AbWl4aW4gemVyby13aWR0aC1wcmVmaXgoJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAgY29udGVudDogJ1xcXFwyMDBiJztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYmFzZWxpbmUtc3RydXRfKCRkaXN0YW5jZSkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6ICRkaXN0YW5jZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5AdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxuQHVzZSBcXFwic2FzczptZXRhXFxcIjtcXG5AdXNlIFxcXCIuL2dzc1xcXCI7XFxuXFxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGEgY3VzdG9tXFxuLy8vIHByb3BlcnR5J3MgYHZhcigpYCB0byBzdXBwb3J0IElFLiBDb25maWd1cmVcXG4vLy8gYEBtYXRlcmlhbC90aGVtZS9jdXN0b20tcHJvcGVydGllc2Agd2l0aCB0aGlzIHZhcmlhYmxlIHNldCB0byBmYWxzZSB0b1xcbi8vLyBkaXNhYmxlIElFIGZhbGxiYWNrIHZhbHVlcyBmb3IgY3VzdG9tIHByb3BlcnRpZXMuXFxuJGllLWZhbGxiYWNrOiB0cnVlICFkZWZhdWx0O1xcblxcbi8vLyBSZXR1cm5zIHRydWUgaWYgdGhlIHBhcmFtZXRlciBpcyBhIGN1c3RvbSBwcm9wZXJ0eSBNYXAuXFxuLy8vXFxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gdGhlIHZhbHVlIHRvIHRlc3QuXFxuLy8vIEByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBjdXN0b20gcHJvcGVydHkgTWFwLCBvciBmYWxzZSBpZiBub3QuXFxuQGZ1bmN0aW9uIGlzLWN1c3RvbS1wcm9wKCR2YWx1ZSkge1xcbiAgQHJldHVybiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBhbmQgbWFwLmhhcy1rZXkoJHZhbHVlLCAndmFybmFtZScpO1xcbn1cXG5cXG4vLy8gUmV0dXJucyB0cnVlIGlmICRwcm9wMSdzIHZhcm5hbWUgYW5kIGZhbGxiYWNrIHZhbHVlcyBhcmUgZGVlcGx5IGVxdWFsIHRvXFxuLy8vICRwcm9wMidzIHZhcm5hbWUgYW5kIGZhbGxiYWNrIHZhbHVlcy5cXG4vLy9cXG4vLy8gQHBhcmFtIHtNYXB9ICRwcm9wMSAtIHRoZSBmaXJzdCB2YWx1ZSB0byB0ZXN0Llxcbi8vLyBAcGFyYW0ge01hcH0gJHByb3AyIC0gdGhlIHNlY29uZCB2YWx1ZSB0byB0ZXN0Llxcbi8vLyBAcmV0dXJuIHRydWUgaWYgYm90aCBwcm9wZXJ0aWVzIGFyZSBkZWVwbHkgZXF1YWxcXG5AZnVuY3Rpb24gYXJlLWVxdWFsKCRwcm9wMSwgJHByb3AyKSB7XFxuICBAcmV0dXJuIGNyZWF0ZS12YXIoJHByb3AxKSA9PSBjcmVhdGUtdmFyKCRwcm9wMik7XFxufVxcblxcbi8vLyBDcmVhdGVzIGEgY3VzdG9tIHByb3BlcnR5IE1hcC5cXG4vLy9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR2YXJuYW1lIC0gdGhlIGN1c3RvbSBwcm9wZXJ0eSBuYW1lLlxcbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlciB8IE1hcH0gLSB0aGUgZmFsbGJhY2sgdmFsdWUgKG1heSBiZSBhbm90aGVyIGN1c3RvbVxcbi8vLyAgICAgcHJvcGVydHkgTWFwKS4gTWF5IGJlIG51bGwuXFxuLy8vIEByZXR1cm4gYSBjdXN0b20gcHJvcGVydHkgTWFwLlxcbkBmdW5jdGlvbiBjcmVhdGUoJHZhcm5hbWUsICRmYWxsYmFjazogbnVsbCkge1xcbiAgQHJldHVybiAodmFybmFtZTogJHZhcm5hbWUsIGZhbGxiYWNrOiAkZmFsbGJhY2spO1xcbn1cXG5cXG4vLy8gUmV0dXJucyB0aGUgY3VzdG9tIHByb3BlcnR5IHZhcmlhYmxlIG5hbWUgb2YgYSBjdXN0b20gcHJvcGVydHkgTWFwLlxcbi8vL1xcbi8vLyBAcGFyYW0ge01hcH0gJGN1c3RvbS1wcm9wIC0gYSBjdXN0b20gcHJvcGVydHkgTWFwLlxcbi8vLyBAcmV0dXJuIHRoZSBjdXN0b20gcHJvcGVydHkgdmFyaWFibGUgbmFtZSBkZWZpbmVkIGJ5IHRoZSBNYXAuXFxuQGZ1bmN0aW9uIGdldC12YXJuYW1lKCRjdXN0b20tcHJvcCkge1xcbiAgQHJldHVybiBtYXAuZ2V0KCRjdXN0b20tcHJvcCwgJ3Zhcm5hbWUnKTtcXG59XFxuXFxuLy8vIFJldHVybnMgdGhlIGZhbGxiYWNrIHZhbHVlIG9mIGEgY3VzdG9tIHByb3BlcnR5IE1hcC4gTWF5IGJlIG51bGwgaWYgdGhlXFxuLy8vIGN1c3RvbSBwcm9wZXJ0eSBkb2VzIG5vdCBoYXZlIGEgZmFsbGJhY2suXFxuLy8vXFxuLy8vIEBwYXJhbSB7TWFwfSAkY3VzdG9tLXByb3AgLSBhIGN1c3RvbSBwcm9wZXJ0eSBNYXAuXFxuLy8vIEBwYXJhbSB7Qm9vbH0gJHNoYWxsb3cgLSBpZiB0cnVlLCByZXR1cm4gdGhlIGZpcnN0IGZhbGxiYWNrIHZhbHVlLCB3aGljaFxcbi8vLyAgICAgbWF5IGJlIGFub3RoZXIgY3VzdG9tIHByb3BlcnR5IE1hcC4gRGVmYXVsdHMgdG8gZmFsc2UsIHdoaWNoIHdpbGwgcmV0dXJuXFxuLy8vICAgICB0aGUgZGVlcCBmaW5hbCBmYWxsYmFjayB2YWx1ZS5cXG4vLy8gQHJldHVybiB0aGUgZmFsbGJhY2sgdmFsdWUgb2YgYSBjdXN0b20gcHJvcGVydHkgTWFwLiBNYXkgYmUgbnVsbC5cXG5AZnVuY3Rpb24gZ2V0LWZhbGxiYWNrKCRjdXN0b20tcHJvcCwgJHNoYWxsb3c6IGZhbHNlKSB7XFxuICAkZmFsbGJhY2s6IG1hcC5nZXQoJGN1c3RvbS1wcm9wLCAnZmFsbGJhY2snKTtcXG4gIEBpZiBpcy1jdXN0b20tcHJvcCgkZmFsbGJhY2spIGFuZCBub3QgJHNoYWxsb3cge1xcbiAgICBAcmV0dXJuIGdldC1mYWxsYmFjaygkZmFsbGJhY2spO1xcbiAgfVxcblxcbiAgQHJldHVybiAkZmFsbGJhY2s7XFxufVxcblxcbi8vLyBDcmVhdGVzIGEgbmV3IGN1c3RvbSBwcm9wZXJ0eSBNYXAgYW5kIHJldHVybnMgaXQgd2l0aCB0aGUgc3BlY2lmaWVkIG5ld1xcbi8vLyBmYWxsYmFjayB2YWx1ZS5cXG4vLy9cXG4vLy8gQHBhcmFtIHtNYXB9ICRjdXN0b20tcHJvcCAtIHRoZSBjdXN0b20gcHJvcGVydHkgTWFwIHRvIGNvcHkuXFxuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyIHwgTWFwfSAkbmV3LWZhbGxiYWNrIC0gdGhlIG5ldyBmYWxsYmFjayB2YWx1ZSBvZiB0aGVcXG4vLy8gICAgIGN1c3RvbSBwcm9wZXJ0eSBNYXAuIE1heSBiZSBudWxsLlxcbi8vLyBAcGFyYW0ge0Jvb2x9ICRzaGFsbG93IC0gaWYgdHJ1ZSwgc2V0IHRoZSBmaXJzdCBmYWxsYmFjayB2YWx1ZS4gRGVmYXVsdHMgdG9cXG4vLy8gICAgIGZhbHNlLCB3aGljaCB3aWxsIHNldCB0aGUgZGVlcCBmaW5hbCBmYWxsYmFjayB2YWx1ZS5cXG4vLy8gQHJldHVybiBhIG5ldyBjdXN0b20gcHJvcGVydHkgTWFwIHdpdGggdGhlIG5ldyBmYWxsYmFjayB2YWx1ZS5cXG5AZnVuY3Rpb24gc2V0LWZhbGxiYWNrKCRjdXN0b20tcHJvcCwgJG5ldy1mYWxsYmFjaywgJHNoYWxsb3c6IGZhbHNlKSB7XFxuICAkdmFybmFtZTogZ2V0LXZhcm5hbWUoJGN1c3RvbS1wcm9wKTtcXG4gICRmaXJzdC1mYWxsYmFjazogZ2V0LWZhbGxiYWNrKCRjdXN0b20tcHJvcCwgJHNoYWxsb3c6IHRydWUpO1xcblxcbiAgQGlmIGlzLWN1c3RvbS1wcm9wKCRmaXJzdC1mYWxsYmFjaykgYW5kIG5vdCAkc2hhbGxvdyB7XFxuICAgIC8vIFRoZSBmaXJzdCBmYWxsYmFjayBpcyBhIGN1c3RvbSBwcm9wZXJ0eSBhbmQgJHNoYWxsb3cgaXMgZmFsc2UuIERlZXBseVxcbiAgICAvLyBzZXQgdGhlIGZhbGxiYWNrIHZhbHVlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgYW5kIGdldCB0aGUgbmV3IGN1c3RvbVxcbiAgICAvLyBwcm9wZXJ0eSBNYXAgcmV0dXJuZWQuXFxuICAgICRuZXctZmFsbGJhY2s6IHNldC1mYWxsYmFjaygkZmlyc3QtZmFsbGJhY2ssICRuZXctZmFsbGJhY2spO1xcbiAgfVxcblxcbiAgQHJldHVybiBjcmVhdGUoJHZhcm5hbWUsICRuZXctZmFsbGJhY2spO1xcbn1cXG5cXG4vLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGB2YXIoKWAgZnVuY3Rpb24gZGVjbGFyYXRpb24gcmVwcmVzZW50ZWQgYnkgdGhlXFxuLy8vIHByb3ZpZGVkIGN1c3RvbSBwcm9wZXJ0eSBNYXAuXFxuLy8vXFxuLy8vIEBwYXJhbSB7TWFwfSAkY3VzdG9tLXByb3AgLSBhIGN1c3RvbSBwcm9wZXJ0eSBNYXAuXFxuLy8vIEByZXR1cm4gYSBgdmFyKClgIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIHVzaW5nIHRoZSBjdXN0b20gcHJvcGVydHkgTWFwJ3NcXG4vLy8gICAgIHZhcm5hbWUgYW5kIGZhbGxiYWNrIHZhbHVlLlxcbkBmdW5jdGlvbiBjcmVhdGUtdmFyKCRjdXN0b20tcHJvcCkge1xcbiAgJHZhcm5hbWU6IGdldC12YXJuYW1lKCRjdXN0b20tcHJvcCk7XFxuICAkZmFsbGJhY2s6IGdldC1mYWxsYmFjaygkY3VzdG9tLXByb3AsICRzaGFsbG93OiB0cnVlKTtcXG5cXG4gIEBpZiBpcy1jdXN0b20tcHJvcCgkZmFsbGJhY2spIHtcXG4gICAgQHJldHVybiB2YXIoJHZhcm5hbWUsIGNyZWF0ZS12YXIoJGZhbGxiYWNrKSk7XFxuICB9IEBlbHNlIGlmICRmYWxsYmFjayAhPSBudWxsIHtcXG4gICAgQHJldHVybiB2YXIoJHZhcm5hbWUsICRmYWxsYmFjayk7XFxuICB9IEBlbHNlIHtcXG4gICAgQHJldHVybiB2YXIoJHZhcm5hbWUpO1xcbiAgfVxcbn1cXG5cXG4vLy8gQXBwbGllcyBhIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgc3BlY2lmaWVkIHByb3BlcnR5Llxcbi8vL1xcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cXG4vLy8gQHBhcmFtIHtNYXB9ICRjdXN0b20tcHJvcCAtIGEgY3VzdG9tIHByb3BlcnR5IE1hcCBmb3IgdGhlIHByb3BlcnR5J3MgdmFsdWUuXFxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBzZXQuXFxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIHNldCB0byB0cnVlIHRvIGFkZCBhbiBgIWltcG9ydGFudGAgcnVsZS4gRGVmYXVsdHNcXG4vLy8gICAgIHRvIGZhbHNlLlxcbkBtaXhpbiBhcHBseSgkcHJvcGVydHksICRjdXN0b20tcHJvcCwgJGdzczogKCksICRpbXBvcnRhbnQ6IGZhbHNlKSB7XFxuICBAaWYgbm90IGlzLWN1c3RvbS1wcm9wKCRjdXN0b20tcHJvcCkge1xcbiAgICBAZXJyb3IgXFxcIm1kYy10aGVtZTogSW52YWxpZCBjdXN0b20gcHJvcGVydHk6ICN7JGN1c3RvbS1wcm9wfS4gTXVzdCBiZSBhIE1hcCB3aXRoICd2YXJuYW1lJyBhbmQgJ2ZhbGxiYWNrJy5cXFwiO1xcbiAgfVxcblxcbiAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKTtcXG5cXG4gICRmYWxsYmFjazogZ2V0LWZhbGxiYWNrKCRjdXN0b20tcHJvcCk7XFxuICBAaWYgJGllLWZhbGxiYWNrIGFuZCAkZmFsbGJhY2sgIT0gbnVsbCB7XFxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcXG4gICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFja30gI3skaW1wb3J0YW50LXJ1bGV9O1xcblxcbiAgICAvLyBhZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9uc1xcbiAgICAkZ3NzOiBtYXAubWVyZ2UoXFxuICAgICAgJGdzcyxcXG4gICAgICAoXFxuICAgICAgICBhbHRlcm5hdGU6IHRydWUsXFxuICAgICAgKVxcbiAgICApO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xcbiAgI3skcHJvcGVydHl9OiBjcmVhdGUtdmFyKCRjdXN0b20tcHJvcCkgI3skaW1wb3J0YW50LXJ1bGV9O1xcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5AdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxuXFxuLy8vIEFkZHMgb3B0aW9uYWwgR1NTIGFubm90YXRpb24gY29tbWVudHMuIFVzZWZ1bCBmb3IgdGhlbWUgbWl4aW5zIHdoZXJlIG9uZSBvclxcbi8vLyBtb3JlIHByb3BlcnRpZXMgYXJlIHNldCBpbmRpcmVjdGx5Llxcbi8vL1xcbi8vLyBAZXhhbXBsZVxcbi8vLyAgIGBhbm5vdGF0ZSgobm9mbGlwOiB0cnVlKSkgPT4gLyogQG5vZmxpcCAqL2BcXG4vLy9cXG4vLy8gQHBhcmFtIHtNYXB9ICRhbm5vdGF0aW9ucyAtIE1hcCBvZiBhbm5vdGF0aW9ucy4gVmFsdWVzIG11c3QgYmUgc2V0IHRvIGB0cnVlYFxcbi8vLyAgICAgZm9yIGFuIGFubm90YXRpb24gdG8gYmUgYWRkZWQuXFxuQG1peGluIGFubm90YXRlKCRhbm5vdGF0aW9ucykge1xcbiAgQGlmIChtYXAuZ2V0KCRhbm5vdGF0aW9ucywgYWx0ZXJuYXRlKSA9PSB0cnVlKSB7XFxuICAgIC8qIEBhbHRlcm5hdGUgKi9cXG4gIH1cXG5cXG4gIC8vIG5vZmxpcCBtdXN0IGJlIHRoZSBsYXN0IHRhZyByaWdodCBiZWZvcmUgdGhlIHByb3BlcnR5XFxuICBAaWYgKG1hcC5nZXQoJGFubm90YXRpb25zLCBub2ZsaXApID09IHRydWUpIHtcXG4gICAgLyogQG5vZmxpcCAqL1xcbiAgfVxcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG5AdXNlIFxcXCJAbWF0ZXJpYWwvdGhlbWUvdmFyaWFibGVzXFxcIjsgLy8gZm9yIG1kYy10aGVtZS1wcm9wLXZhbHVlKClcXG5cXG4kaWNvbi1zaXplOiAyNHB4ICFkZWZhdWx0O1xcbiRoZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XFxuJHN0YWNrZWQtaGVpZ2h0OiA3MnB4ICFkZWZhdWx0O1xcbiRob3Jpem9udGFsLXBhZGRpbmc6IDI0cHggIWRlZmF1bHQ7XFxuJHRleHQtbGFiZWwtb3BhY2l0eTogMC42ICFkZWZhdWx0O1xcbiRpY29uLW9wYWNpdHk6IDAuNTQgIWRlZmF1bHQ7XFxuJHRleHQtbGFiZWwtY29sb3ItZGVmYXVsdDogcmdiYShcXG4gIHZhcmlhYmxlcy5wcm9wLXZhbHVlKG9uLXN1cmZhY2UpLFxcbiAgJHRleHQtbGFiZWwtb3BhY2l0eVxcbikgIWRlZmF1bHQ7XFxuJGljb24tY29sb3ItZGVmYXVsdDogcmdiYShcXG4gIHZhcmlhYmxlcy5wcm9wLXZhbHVlKG9uLXN1cmZhY2UpLFxcbiAgJGljb24tb3BhY2l0eVxcbikgIWRlZmF1bHQ7XFxuJHRleHQtbGFiZWwtY29sb3ItYWN0aXZlOiBwcmltYXJ5ICFkZWZhdWx0O1xcbiRpY29uLWNvbG9yLWFjdGl2ZTogcHJpbWFyeSAhZGVmYXVsdDtcXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90aGVtZS9taXhpbnNcXFwiIGFzIHRoZW1lO1xcbkB1c2UgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG5cXG4vLyBDcmVhdGVzIGEgcnVsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB3aGVuIGFuIE1EQyBXZWIgY29tcG9uZW50IGlzIHdpdGhpbiB0aGUgY29udGV4dCBvZiBhbiBSVEwgbGF5b3V0Llxcbi8vXFxuLy8gVXNhZ2UgRXhhbXBsZTpcXG4vL1xcbi8vIGBgYHNjc3NcXG4vLyAubWRjLWZvbyB7XFxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuLy8gICBsZWZ0OiAwO1xcbi8vXFxuLy8gICBAaW5jbHVkZSBydGwge1xcbi8vICAgICBsZWZ0OiBhdXRvO1xcbi8vICAgICByaWdodDogMDtcXG4vLyAgIH1cXG4vL1xcbi8vICAgJl9fYmFyIHtcXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4vLyAgICAgQGluY2x1ZGUgcnRsKFxcXCIubWRjLWZvb1xcXCIpIHtcXG4vLyAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4vLyAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4vLyAgICAgfVxcbi8vICAgfVxcbi8vIH1cXG4vL1xcbi8vIC5tZGMtZm9vLS1tb2Qge1xcbi8vICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuLy9cXG4vLyAgIEBpbmNsdWRlIHJ0bCB7XFxuLy8gICAgIHBhZGRpbmctbGVmdDogYXV0bztcXG4vLyAgICAgcGFkZGluZy1yaWdodDogNHB4O1xcbi8vICAgfVxcbi8vIH1cXG4vLyBgYGBcXG4vL1xcbi8vIE5vdGUgdGhhdCB0aGlzIG1peGluIHdvcmtzIGJ5IGNoZWNraW5nIGZvciBhbiBhbmNlc3RvciBlbGVtZW50IHdpdGggYFtkaXI9XFxcInJ0bFxcXCJdYC5cXG4vLyBBcyBhIHJlc3VsdCwgbmVzdGVkIGBkaXJgIHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZDpcXG4vL1xcbi8vIGBgYGh0bWxcXG4vLyA8aHRtbCBkaXI9XFxcInJ0bFxcXCI+XFxuLy8gICA8IS0tIC4uLiAtLT5cXG4vLyAgIDxkaXYgZGlyPVxcXCJsdHJcXFwiPlxcbi8vICAgICA8ZGl2IGNsYXNzPVxcXCJtZGMtZm9vXFxcIj5TdHlsZWQgaW5jb3JyZWN0bHkgYXMgUlRMITwvZGl2Plxcbi8vICAgPC9kaXY+XFxuLy8gPC9odG1sPlxcbi8vIGBgYFxcbi8vXFxuLy8gSW4gdGhlIGZ1dHVyZSwgc2VsZWN0b3JzIHN1Y2ggYXMgdGhlIGA6ZGlyYCBwc2V1ZG8tY2xhc3MgKGh0dHA6Ly9tZG4uaW8vY3NzLzpkaXIpIHdpbGwgaGVscCB1cyBtaXRpZ2F0ZSB0aGlzLlxcbkBtaXhpbiBydGwoJHJvb3Qtc2VsZWN0b3I6IG51bGwpIHtcXG4gIEBpZiAodmFyaWFibGVzLiRpbmNsdWRlKSB7XFxuICAgIEBpZiAoJHJvb3Qtc2VsZWN0b3IpIHtcXG4gICAgICBAYXQtcm9vdCB7XFxuICAgICAgICAjeyRyb290LXNlbGVjdG9yfVtkaXI9J3J0bCddICYsXFxuICAgICAgICBbZGlyPSdydGwnXSAjeyRyb290LXNlbGVjdG9yfSAmIHtcXG4gICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9IEBlbHNlIHtcXG4gICAgICBbZGlyPSdydGwnXSAmLFxcbiAgICAgICZbZGlyPSdydGwnXSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gVGFrZXMgYSBiYXNlIGJveC1tb2RlbCBwcm9wZXJ0eSBuYW1lIChgbWFyZ2luYCwgYGJvcmRlcmAsIGBwYWRkaW5nYCwgZXRjLikgYWxvbmcgd2l0aCBhXFxuLy8gZGVmYXVsdCBkaXJlY3Rpb24gKGBsZWZ0YCBvciBgcmlnaHRgKSBhbmQgdmFsdWUsIGFuZCBlbWl0cyBydWxlcyB3aGljaCBhcHBseSB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlXFxuLy8gc3BlY2lmaWVkIGRpcmVjdGlvbiBieSBkZWZhdWx0IGFuZCB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIGluIFJUTC5cXG4vL1xcbi8vIEZvciBleGFtcGxlOlxcbi8vXFxuLy8gYGBgc2Nzc1xcbi8vIC5tZGMtZm9vIHtcXG4vLyAgIEBpbmNsdWRlIHJ0bC1yZWZsZXhpdmUtYm94KG1hcmdpbiwgbGVmdCwgOHB4KTtcXG4vLyB9XFxuLy8gYGBgXFxuLy9cXG4vLyBpcyBlcXVpdmFsZW50IHRvOlxcbi8vXFxuLy8gYGBgc2Nzc1xcbi8vIC5tZGMtZm9vIHtcXG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuLy8gICBtYXJnaW4tcmlnaHQ6IDA7XFxuLy9cXG4vLyAgIEBpbmNsdWRlIHJ0bCB7XFxuLy8gICAgIG1hcmdpbi1sZWZ0OiAwO1xcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4vLyAgIH1cXG4vLyB9XFxuLy8gYGBgXFxuLy9cXG4vLyB3aGVyZWFzOlxcbi8vXFxuLy8gYGBgc2Nzc1xcbi8vIC5tZGMtZm9vIHtcXG4vLyAgIEBpbmNsdWRlIHJ0bC1yZWZsZXhpdmUtYm94KG1hcmdpbiwgcmlnaHQsIDhweCk7XFxuLy8gfVxcbi8vIGBgYFxcbi8vXFxuLy8gaXMgZXF1aXZhbGVudCB0bzpcXG4vL1xcbi8vIGBgYHNjc3NcXG4vLyAubWRjLWZvbyB7XFxuLy8gICBtYXJnaW4tbGVmdDogMDtcXG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xcbi8vXFxuLy8gICBAaW5jbHVkZSBydGwge1xcbi8vICAgICBtYXJnaW4tbGVmdDogOHB4O1xcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuLy8gICB9XFxuLy8gfVxcbi8vIGBgYFxcbi8vXFxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgNHRoIGAkcm9vdC1zZWxlY3RvcmAgYXJndW1lbnQgd2hpY2ggd2lsbCBiZSBmb3J3YXJkZWQgdG8gYG1kYy1ydGxgLFxcbi8vIGUuZy4gYEBpbmNsdWRlIHJ0bC1yZWZsZXhpdmUtYm94KG1hcmdpbiwgbGVmdCwgOHB4LCBcXFwiLm1kYy1jb21wb25lbnRcXFwiKWAuXFxuLy9cXG4vLyBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsIGFsd2F5cyB6ZXJvIG91dCB0aGUgb3JpZ2luYWwgdmFsdWUgaW4gYW4gUlRMIGNvbnRleHQuXFxuLy8gSWYgeW91J3JlIHRyeWluZyB0byBmbGlwIHRoZSB2YWx1ZXMsIHVzZSBgbWRjLXJ0bC1yZWZsZXhpdmUtcHJvcGVydHkoKWAgaW5zdGVhZC5cXG5AbWl4aW4gcmVmbGV4aXZlLWJveChcXG4gICRiYXNlLXByb3BlcnR5LFxcbiAgJGRlZmF1bHQtZGlyZWN0aW9uLFxcbiAgJHZhbHVlLFxcbiAgJHJvb3Qtc2VsZWN0b3I6IG51bGxcXG4pIHtcXG4gIEBpZiAobGlzdC5pbmRleCgocmlnaHQsIGxlZnQpLCAkZGVmYXVsdC1kaXJlY3Rpb24pID09IG51bGwpIHtcXG4gICAgQGVycm9yIFxcXCJJbnZhbGlkIGRlZmF1bHQgZGlyZWN0aW9uOiAnI3skZGVmYXVsdC1kaXJlY3Rpb259Jy4gUGxlYXNlIHNwZWNpZml5IGVpdGhlciAncmlnaHQnIG9yICdsZWZ0Jy5cXFwiO1xcbiAgfVxcblxcbiAgJGxlZnQtdmFsdWU6ICR2YWx1ZTtcXG4gICRyaWdodC12YWx1ZTogMDtcXG5cXG4gIEBpZiAoJGRlZmF1bHQtZGlyZWN0aW9uID09IHJpZ2h0KSB7XFxuICAgICRsZWZ0LXZhbHVlOiAwO1xcbiAgICAkcmlnaHQtdmFsdWU6ICR2YWx1ZTtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIHJlZmxleGl2ZS1wcm9wZXJ0eShcXG4gICAgJGJhc2UtcHJvcGVydHksXFxuICAgICRsZWZ0LXZhbHVlLFxcbiAgICAkcmlnaHQtdmFsdWUsXFxuICAgICRyb290LXNlbGVjdG9yXFxuICApO1xcbn1cXG5cXG4vLyBUYWtlcyBhIGJhc2UgcHJvcGVydHkgYW5kIGVtaXRzIHJ1bGVzIHRoYXQgYXNzaWduIDxiYXNlLXByb3BlcnR5Pi1sZWZ0IHRvIDxsZWZ0LXZhbHVlPiBhbmRcXG4vLyA8YmFzZS1wcm9wZXJ0eT4tcmlnaHQgdG8gPHJpZ2h0LXZhbHVlPiBpbiBhIExUUiBjb250ZXh0LCBhbmQgdmljZSB2ZXJzYSBpbiBhIFJUTCBjb250ZXh0Llxcbi8vIEZvciBleGFtcGxlOlxcbi8vXFxuLy8gYGBgc2Nzc1xcbi8vIC5tZGMtZm9vIHtcXG4vLyAgIEBpbmNsdWRlIHJ0bC1yZWZsZXhpdmUtcHJvcGVydHkobWFyZ2luLCBhdXRvLCAxMnB4KTtcXG4vLyB9XFxuLy8gYGBgXFxuLy9cXG4vLyBpcyBlcXVpdmFsZW50IHRvOlxcbi8vXFxuLy8gYGBgc2Nzc1xcbi8vIC5tZGMtZm9vIHtcXG4vLyAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbi8vXFxuLy8gICBAaW5jbHVkZSBydGwge1xcbi8vICAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbi8vICAgfVxcbi8vIH1cXG4vLyBgYGBcXG4vL1xcbi8vIEFuIG9wdGlvbmFsIDR0aCBgJHJvb3Qtc2VsZWN0b3JgIGFyZ3VtZW50IGNhbiBiZSBnaXZlbiwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYG1kYy1ydGxgLlxcbkBtaXhpbiByZWZsZXhpdmUtcHJvcGVydHkoXFxuICAkYmFzZS1wcm9wZXJ0eSxcXG4gICRsZWZ0LXZhbHVlLFxcbiAgJHJpZ2h0LXZhbHVlLFxcbiAgJHJvb3Qtc2VsZWN0b3I6IG51bGxcXG4pIHtcXG4gICRwcm9wLWxlZnQ6ICN7JGJhc2UtcHJvcGVydHl9LWxlZnQ7XFxuICAkcHJvcC1yaWdodDogI3skYmFzZS1wcm9wZXJ0eX0tcmlnaHQ7XFxuXFxuICBAaW5jbHVkZSByZWZsZXhpdmUoXFxuICAgICRwcm9wLWxlZnQsXFxuICAgICRsZWZ0LXZhbHVlLFxcbiAgICAkcHJvcC1yaWdodCxcXG4gICAgJHJpZ2h0LXZhbHVlLFxcbiAgICAkcm9vdC1zZWxlY3RvclxcbiAgKTtcXG59XFxuXFxuLy8gVGFrZXMgYW4gYXJndW1lbnQgc3BlY2lmeWluZyBhIGhvcml6b250YWwgcG9zaXRpb24gcHJvcGVydHkgKGVpdGhlciBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIikgYXMgd2VsbFxcbi8vIGFzIGEgdmFsdWUsIGFuZCBhcHBsaWVzIHRoYXQgdmFsdWUgdG8gdGhlIHNwZWNpZmllZCBwb3NpdGlvbiBpbiBhIExUUiBjb250ZXh0LCBhbmQgZmxpcHMgaXQgaW4gYVxcbi8vIFJUTCBjb250ZXh0LiBGb3IgZXhhbXBsZTpcXG4vL1xcbi8vIGBgYHNjc3NcXG4vLyAubWRjLWZvbyB7XFxuLy8gICBAaW5jbHVkZSBydGwtcmVmbGV4aXZlLXBvc2l0aW9uKGxlZnQsIDApO1xcbi8vIH1cXG4vLyBgYGBcXG4vL1xcbi8vIGlzIGVxdWl2YWxlbnQgdG86XFxuLy9cXG4vLyBgYGBzY3NzXFxuLy8gLm1kYy1mb28ge1xcbi8vICAgbGVmdDogMDtcXG4vLyAgIHJpZ2h0OiBpbml0aWFsO1xcbi8vXFxuLy8gICBAaW5jbHVkZSBydGwge1xcbi8vICAgICBsZWZ0OiBpbml0aWFsO1xcbi8vICAgICByaWdodDogMDtcXG4vLyAgIH1cXG4vLyB9XFxuLy8gYGBgXFxuLy9cXG4vLyBBbiBvcHRpb25hbCB0aGlyZCAkcm9vdC1zZWxlY3RvciBhcmd1bWVudCBtYXkgYWxzbyBiZSBnaXZlbiwgd2hpY2ggaXMgcGFzc2VkIHRvIGBtZGMtcnRsYC5cXG5AbWl4aW4gcmVmbGV4aXZlLXBvc2l0aW9uKCRwb3NpdGlvbi1wcm9wZXJ0eSwgJHZhbHVlLCAkcm9vdC1zZWxlY3RvcjogbnVsbCkge1xcbiAgQGlmIChsaXN0LmluZGV4KChyaWdodCwgbGVmdCksICRwb3NpdGlvbi1wcm9wZXJ0eSkgPT0gbnVsbCkge1xcbiAgICBAZXJyb3IgXFxcIkludmFsaWQgcG9zaXRpb24gI3twb3NpdGlvbi1wcm9wZXJ0eX0uIFBsZWFzZSBzcGVjaWZpeSBlaXRoZXIgcmlnaHQgb3IgbGVmdFxcXCI7XFxuICB9XFxuXFxuICAvLyBUT0RPOiBcXFwiaW5pdGlhbFxcXCIgaXMgbm90IHN1cHBvcnRlZCBpbiBJRSAxMS4gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtaW5pdGlhbC12YWx1ZVxcbiAgJGxlZnQtdmFsdWU6ICR2YWx1ZTtcXG4gICRyaWdodC12YWx1ZTogaW5pdGlhbDtcXG5cXG4gIEBpZiAoJHBvc2l0aW9uLXByb3BlcnR5ID09IHJpZ2h0KSB7XFxuICAgICRyaWdodC12YWx1ZTogJHZhbHVlO1xcbiAgICAkbGVmdC12YWx1ZTogaW5pdGlhbDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIHJlZmxleGl2ZShsZWZ0LCAkbGVmdC12YWx1ZSwgcmlnaHQsICRyaWdodC12YWx1ZSwgJHJvb3Qtc2VsZWN0b3IpO1xcbn1cXG5cXG4vLyBUYWtlcyBwYWlyIG9mIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgYXMgYXJndW1lbnRzIGFuZCBmbGlwcyBpdCBpbiBSVEwgY29udGV4dC5cXG4vLyBGb3IgZXhhbXBsZTpcXG4vL1xcbi8vIGBgYHNjc3NcXG4vLyAubWRjLWZvbyB7XFxuLy8gICBAaW5jbHVkZSBydGwtcmVmbGV4aXZlKGxlZnQsIDJweCwgcmlnaHQsIDVweCk7XFxuLy8gfVxcbi8vIGBgYFxcbi8vXFxuLy8gaXMgZXF1aXZhbGVudCB0bzpcXG4vL1xcbi8vIGBgYHNjc3NcXG4vLyAubWRjLWZvbyB7XFxuLy8gICBsZWZ0OiAycHg7XFxuLy8gICByaWdodDogNXB4O1xcbi8vXFxuLy8gICBAaW5jbHVkZSBydGwge1xcbi8vICAgICByaWdodDogMnB4O1xcbi8vICAgICBsZWZ0OiA1cHg7XFxuLy8gICB9XFxuLy8gfVxcbi8vIGBgYFxcbi8vXFxuLy8gQW4gb3B0aW9uYWwgZmlmdGggYCRyb290LXNlbGVjdG9yYCBhcmd1bWVudCBtYXkgYWxzbyBiZSBnaXZlbiwgd2hpY2ggaXMgcGFzc2VkIHRvIGBtZGMtcnRsYC5cXG5AbWl4aW4gcmVmbGV4aXZlKFxcbiAgJGxlZnQtcHJvcGVydHksXFxuICAkbGVmdC12YWx1ZSxcXG4gICRyaWdodC1wcm9wZXJ0eSxcXG4gICRyaWdodC12YWx1ZSxcXG4gICRyb290LXNlbGVjdG9yOiBudWxsXFxuKSB7XFxuICBAaW5jbHVkZSBwcm9wZXJ0eV8oJGxlZnQtcHJvcGVydHksICRsZWZ0LXZhbHVlKTtcXG4gIEBpbmNsdWRlIHByb3BlcnR5XygkcmlnaHQtcHJvcGVydHksICRyaWdodC12YWx1ZSk7XFxuXFxuICBAaW5jbHVkZSBydGwoJHJvb3Qtc2VsZWN0b3IpIHtcXG4gICAgQGluY2x1ZGUgcHJvcGVydHlfKCRsZWZ0LXByb3BlcnR5LCAkcmlnaHQtdmFsdWUpO1xcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eV8oJHJpZ2h0LXByb3BlcnR5LCAkbGVmdC12YWx1ZSk7XFxuICB9XFxufVxcblxcbi8vL1xcbi8vLyBBZGRzIGBAbm9mbGlwYCBhbm5vdGF0aW9uIHdoZW4gYCRtZGMtcnRsLWluY2x1ZGVgIGlzIHRydWUuXFxuLy8vXFxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHlcXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR2YWx1ZVxcbi8vLyBAYWNjZXNzIHByaXZhdGVcXG4vLy9cXG5AbWl4aW4gcHJvcGVydHlfKCRwcm9wZXJ0eSwgJHZhbHVlKSB7XFxuICBAaW5jbHVkZSB0aGVtZS5wcm9wZXJ0eShcXG4gICAgJHByb3BlcnR5LFxcbiAgICAkdmFsdWUsXFxuICAgICRnc3M6IChub2ZsaXA6IHZhcmlhYmxlcy4kaW5jbHVkZSlcXG4gICk7XFxufVxcblwiLFwiLy9cXG4vLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxcbi8vXFxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFxcXCJTb2Z0d2FyZVxcXCIpLCB0byBkZWFsXFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxcbi8vXFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cXG4vL1xcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcXFwiQVMgSVNcXFwiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXFxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXFxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxcbi8vIFRIRSBTT0ZUV0FSRS5cXG4vL1xcblxcbi8vIE1EQyBSaXBwbGUga2V5ZnJhbWVzIGFyZSBzcGxpdCBpbnRvIHRoZWlyIG93biBmaWxlIHNvIHRoYXQgX21peGlucy5zY3NzIGNhbiByZWx5IG9uIHRoZW0uXFxuXFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi92YXJpYWJsZXNcXFwiO1xcbkB1c2UgXFxcIi4vdmFyaWFibGVzXFxcIiBhcyB2YXJpYWJsZXMyO1xcblxcbkBtaXhpbiBrZXlmcmFtZXNfIHtcXG4gIEBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJHN0YW5kYXJkLWN1cnZlLXRpbWluZy1mdW5jdGlvbjtcXG4gICAgICAvLyBOT1RFOiBGb3IgdGhlc2Uga2V5ZnJhbWVzLCB3ZSBkbyBub3QgbmVlZCBjdXN0b20gcHJvcGVydHkgZmFsbGJhY2tzIGJlY2F1c2UgdGhleSBhcmUgb25seVxcbiAgICAgIC8vIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgLm1kYy1yaXBwbGUtdXBncmFkZWRgLiBTaW5jZSBNRENSaXBwbGVGb3VuZGF0aW9uIGNoZWNrcyB0byBlbnN1cmVcXG4gICAgICAvLyB0aGF0IGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBzdXBwb3J0ZWQgd2l0aGluIHRoZSBicm93c2VyIGJlZm9yZSBhZGRpbmcgdGhpcyBjbGFzcywgd2UgY2FuXFxuICAgICAgLy8gc2FmZWx5IHVzZSB0aGVtIHdpdGhvdXQgYSBmYWxsYmFjay5cXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKVxcbiAgICAgICAgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiB2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQge1xcbiAgICBmcm9tIHtcXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgICAgb3BhY2l0eTogdmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG4kZGVjZWxlcmF0aW9uLWN1cnZlLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XFxuJHN0YW5kYXJkLWN1cnZlLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcXG4kYWNjZWxlcmF0aW9uLWN1cnZlLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XFxuJHNoYXJwLWN1cnZlLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSAhZGVmYXVsdDtcXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG5AdXNlIFxcXCJzYXNzOmNvbG9yXFxcIjtcXG5AdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi9mdW5jdGlvbnNcXFwiIGFzIGZ1bmN0aW9uczI7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2FuaW1hdGlvbi92YXJpYWJsZXNcXFwiIGFzIHZhcmlhYmxlczI7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2Jhc2UvbWl4aW5zXFxcIiBhcyBiYXNlLW1peGlucztcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvZmVhdHVyZS10YXJnZXRpbmcvZnVuY3Rpb25zXFxcIiBhcyBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnM7XFxuQHVzZSBcXFwiQG1hdGVyaWFsL2ZlYXR1cmUtdGFyZ2V0aW5nL21peGluc1xcXCIgYXMgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zO1xcbkB1c2UgXFxcIkBtYXRlcmlhbC90aGVtZS9taXhpbnNcXFwiIGFzIHRoZW1lLW1peGlucztcXG5AdXNlIFxcXCIuL2Z1bmN0aW9uc1xcXCI7XFxuQHVzZSBcXFwiLi9rZXlmcmFtZXNcXFwiO1xcbkB1c2UgXFxcIi4vdmFyaWFibGVzXFxcIjtcXG5AdXNlIFxcXCJAbWF0ZXJpYWwvdGhlbWUvdmFyaWFibGVzXFxcIiBhcyB0aGVtZS12YXJpYWJsZXM7XFxuXFxuQG1peGluIGNvcmUtc3R5bGVzKCRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGRlZmluZSByaXBwbGUtc3VyZmFjZVxcblxcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICAubWRjLXJpcHBsZS1zdXJmYWNlIHtcXG4gICAgQGluY2x1ZGUgc3VyZmFjZSgkcXVlcnk6ICRxdWVyeSk7XFxuICAgIEBpbmNsdWRlIHN0YXRlcygkcXVlcnk6ICRxdWVyeSk7XFxuICAgIEBpbmNsdWRlIHJhZGl1cy1ib3VuZGVkKCRxdWVyeTogJHF1ZXJ5KTtcXG5cXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAmW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdIHtcXG4gICAgICBAaW5jbHVkZSByYWRpdXMtdW5ib3VuZGVkKCRxdWVyeTogJHF1ZXJ5KTtcXG5cXG4gICAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLS1wcmltYXJ5IHtcXG4gICAgICBAaW5jbHVkZSBzdGF0ZXMocHJpbWFyeSwgJHF1ZXJ5OiAkcXVlcnkpO1xcbiAgICB9XFxuXFxuICAgICYtLWFjY2VudCB7XFxuICAgICAgQGluY2x1ZGUgc3RhdGVzKHNlY29uZGFyeSwgJHF1ZXJ5OiAkcXVlcnkpO1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBwb3N0Y3NzLWJlbS1saW50ZXI6IGVuZFxcbn1cXG5cXG5AbWl4aW4gY29tbW9uKCRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpKSB7XFxuICAkZmVhdC1hbmltYXRpb246IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgYW5pbWF0aW9uKTtcXG5cXG4gIC8vIEVuc3VyZSB0aGF0IHN0eWxlcyBuZWVkZWQgYnkgYW55IGNvbXBvbmVudCB1c2luZyBNREMgUmlwcGxlIGFyZSBlbWl0dGVkLCBidXQgb25seSBvbmNlLlxcbiAgLy8gKEV2ZXJ5IGNvbXBvbmVudCB1c2luZyBNREMgUmlwcGxlIGltcG9ydHMgdGhlc2UgbWl4aW5zLCBidXQgZG9lc24ndCBuZWNlc3NhcmlseSBpbXBvcnRcXG4gIC8vIG1kYy1yaXBwbGUuc2Nzcy4pXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgQGluY2x1ZGUgYmFzZS1taXhpbnMuZW1pdC1vbmNlKCdtZGMtcmlwcGxlL2NvbW1vbi9hbmltYXRpb24nKSB7XFxuICAgICAgQGluY2x1ZGUga2V5ZnJhbWVzLmtleWZyYW1lc187XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIHN1cmZhY2UoJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCksICRyaXBwbGUtdGFyZ2V0OiAnJicpIHtcXG4gICRmZWF0LWFuaW1hdGlvbjogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBhbmltYXRpb24pO1xcbiAgJGZlYXQtc3RydWN0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgLS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7XFxuICAgIC0tbWRjLXJpcHBsZS1sZWZ0OiAwO1xcbiAgICAtLW1kYy1yaXBwbGUtdG9wOiAwO1xcbiAgICAtLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7XFxuICAgIC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwO1xcbiAgICAtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwO1xcblxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIC8vICEhRE8gTk9UIFJFTU9WRSEhIG1kYy1yaXBwbGUtd2lsbC1jaGFuZ2UtcmVwbGFjZXJcXG4gIH1cXG5cXG4gICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUsXFxuICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgIH1cXG4gIH1cXG5cXG4gICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgICAvLyBBbHNvIHRyYW5zaXRpb24gYmFja2dyb3VuZC1jb2xvciB0byBhdm9pZCB1bm5hdHVyYWwgY29sb3IgZmxhc2hlcyB3aGVuIHRvZ2dsaW5nIGFjdGl2YXRlZC9zZWxlY3RlZCBzdGF0ZVxcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyaWFibGVzLiRzdGF0ZXMtd2FzaC1kdXJhdGlvbiBsaW5lYXIsXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcmlhYmxlcy4kc3RhdGVzLXdhc2gtZHVyYXRpb24gbGluZWFyO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgIHotaW5kZXg6IDE7IC8vIEVuc3VyZSB0aGF0IHRoZSByaXBwbGUgd2FzaCBmb3IgaG92ZXIvZm9jdXMgc3RhdGVzIGlzIGRpc3BsYXllZCBvbiB0b3Agb2YgcG9zaXRpb25lZCBjaGlsZCBlbGVtZW50c1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBDb21tb24gc3R5bGVzIGZvciB1cGdyYWRlZCBzdXJmYWNlcyAoc29tZSBvZiB0aGVzZSBkZXBlbmQgb24gY3VzdG9tIHByb3BlcnRpZXMgc2V0IHZpYSBKUyBvciBvdGhlciBtaXhpbnMpXFxuXFxuICAmLm1kYy1yaXBwbGUtdXBncmFkZWQge1xcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YmVmb3JlIHtcXG4gICAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1zdHJ1Y3R1cmUpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgLyogQG5vZmxpcCAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQge1xcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LXN0cnVjdHVyZSkge1xcbiAgICAgICAgdG9wOiB2YXIoLS1tZGMtcmlwcGxlLXRvcCwgMCk7XFxuICAgICAgICAvKiBAbm9mbGlwICovXFxuICAgICAgICBsZWZ0OiB2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIDApO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24ge1xcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgICAgYW5pbWF0aW9uOiBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiB2YXJpYWJsZXMuJHRyYW5zbGF0ZS1kdXJhdGlvblxcbiAgICAgICAgICAgIGZvcndhcmRzLFxcbiAgICAgICAgICBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gdmFyaWFibGVzLiRmYWRlLWluLWR1cmF0aW9uIGZvcndhcmRzO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbiB7XFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjphZnRlciB7XFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtYW5pbWF0aW9uKSB7XFxuICAgICAgICBhbmltYXRpb246IG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgdmFyaWFibGVzLiRmYWRlLW91dC1kdXJhdGlvbjtcXG4gICAgICB9XFxuXFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgICAgICAvLyBSZXRhaW4gdHJhbnNmb3JtIGZyb20gbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gYWN0aXZhdGlvblxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSlcXG4gICAgICAgICAgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc3RhdGVzLWJhc2UtY29sb3IoXFxuICAkY29sb3IsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LWNvbG9yOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUsXFxuICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgIEBpZiBjb2xvci5hbHBoYSh0aGVtZS12YXJpYWJsZXMucHJvcC12YWx1ZSgkY29sb3IpKSA+IDAge1xcbiAgICAgICAgQGluY2x1ZGUgdGhlbWUtbWl4aW5zLnByb3AoYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yKTtcXG4gICAgICB9IEBlbHNlIHtcXG4gICAgICAgIC8vIElmIGEgY29sb3Igd2l0aCAwIGFscGhhIGlzIHNwZWNpZmllZCwgZG9uJ3QgcmVuZGVyIHRoZSByaXBwbGUgcHNldWRvLWVsZW1lbnRzIGF0IGFsbC5cXG4gICAgICAgIC8vIFRoaXMgYXZvaWRzIHVubmVjZXNzYXJ5IHRyYW5zaXRpb25zIGFuZCBvdmVyZmxvdy5cXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vL1xcbi8vLyBDdXN0b21pemVzIHJpcHBsZSBvcGFjaXRpZXMgaW4gYGhvdmVyYCwgYGZvY3VzYCwgb3IgYHByZXNzYCBzdGF0ZXNcXG4vLy8gQHBhcmFtIHttYXB9ICRvcGFjaXR5LW1hcCAtIG1hcCBzcGVjaWZ5aW5nIGN1c3RvbSBvcGFjaXR5IG9mIHplcm8gb3IgbW9yZSBzdGF0ZXNcXG4vLy8gQHBhcmFtIHtib29sfSAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudCAtIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBjb250YWlucyBhIGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSByb290XFxuLy8vIEBwYXJhbSB7c3RyaW5nfSAkcmlwcGxlLXRhcmdldCAtIHRoZSBvcHRpb25hbCBzZWxlY3RvciBmb3IgdGhlIHJpcHBsZSBlbGVtZW50XFxuLy8vXFxuQG1peGluIHN0YXRlcy1vcGFjaXRpZXMoXFxuICAkb3BhY2l0eS1tYXA6ICgpLFxcbiAgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQ6IGZhbHNlLFxcbiAgJHJpcHBsZS10YXJnZXQ6ICcmJyxcXG4gICRxdWVyeTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmFsbCgpXFxuKSB7XFxuICAvLyBFbnN1cmUgc3VmZmljaWVudCBzcGVjaWZpY2l0eSB0byBvdmVycmlkZSBiYXNlIHN0YXRlIG9wYWNpdGllc1xcbiAgQGlmIG1hcC5oYXMta2V5KCRvcGFjaXR5LW1hcCwgaG92ZXIpIHtcXG4gICAgQGluY2x1ZGUgc3RhdGVzLWhvdmVyLW9wYWNpdHkoXFxuICAgICAgbWFwLmdldCgkb3BhY2l0eS1tYXAsIGhvdmVyKSxcXG4gICAgICAkcmlwcGxlLXRhcmdldDogJHJpcHBsZS10YXJnZXQsXFxuICAgICAgJHF1ZXJ5OiAkcXVlcnlcXG4gICAgKTtcXG4gIH1cXG5cXG4gIEBpZiBtYXAuaGFzLWtleSgkb3BhY2l0eS1tYXAsIGZvY3VzKSB7XFxuICAgIEBpbmNsdWRlIHN0YXRlcy1mb2N1cy1vcGFjaXR5KFxcbiAgICAgIG1hcC5nZXQoJG9wYWNpdHktbWFwLCBmb2N1cyksXFxuICAgICAgJHJpcHBsZS10YXJnZXQ6ICRyaXBwbGUtdGFyZ2V0LFxcbiAgICAgICRoYXMtbmVzdGVkLWZvY3VzYWJsZS1lbGVtZW50OiAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudCxcXG4gICAgICAkcXVlcnk6ICRxdWVyeVxcbiAgICApO1xcbiAgfVxcblxcbiAgQGlmIG1hcC5oYXMta2V5KCRvcGFjaXR5LW1hcCwgcHJlc3MpIHtcXG4gICAgQGluY2x1ZGUgc3RhdGVzLXByZXNzLW9wYWNpdHkoXFxuICAgICAgbWFwLmdldCgkb3BhY2l0eS1tYXAsIHByZXNzKSxcXG4gICAgICAkcmlwcGxlLXRhcmdldDogJHJpcHBsZS10YXJnZXQsXFxuICAgICAgJHF1ZXJ5OiAkcXVlcnlcXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIHN0YXRlcy1ob3Zlci1vcGFjaXR5KFxcbiAgJG9wYWNpdHksXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LWNvbG9yOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gIC8vIEJhY2tncm91bmQgd2FzaCBzdHlsZXMsIGZvciBib3RoIENTUy1vbmx5IGFuZCB1cGdyYWRlZCBzdGF0ZWZ1bCBzdXJmYWNlc1xcbiAgJjpob3ZlciB7XFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUge1xcbiAgICAgIC8vIE9wYWNpdHkgZmFsbHMgdW5kZXIgY29sb3IgYmVjYXVzZSB0aGUgY2hvc2VuIG9wYWNpdHkgaXMgY29sb3ItZGVwZW5kZW50IGluIHR5cGljYWwgdXNhZ2VcXG4gICAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBzdGF0ZXMtZm9jdXMtb3BhY2l0eShcXG4gICRvcGFjaXR5LFxcbiAgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQ6IGZhbHNlLFxcbiAgJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCksXFxuICAkcmlwcGxlLXRhcmdldDogJyYnXFxuKSB7XFxuICAvLyBGb2N1cyBvdmVycmlkZXMgaG92ZXIgYnkgcmV1c2luZyB0aGUgOjpiZWZvcmUgcHNldWRvLWVsZW1lbnQuXFxuICAvLyA6Zm9jdXMtd2l0aGluIGdlbmVyYWxseSB3b3JrcyBvbiBub24tTVMgYnJvd3NlcnMgYW5kIG1hdGNoZXMgd2hlbiBhICpjaGlsZCogb2YgdGhlIGVsZW1lbnQgaGFzIGZvY3VzLlxcbiAgLy8gSXQgaXMgdXNlZnVsIGZvciBjYXNlcyB3aGVyZSBhIGNvbXBvbmVudCBoYXMgYSBmb2N1c2FibGUgZWxlbWVudCB3aXRoaW4gdGhlIHJvb3Qgbm9kZSwgZS5nLiB0ZXh0IGZpZWxkLFxcbiAgLy8gYnV0IHVuZGVzaXJhYmxlIGluIGdlbmVyYWwgaW4gY2FzZSBvZiBuZXN0ZWQgc3RhdGVmdWwgY29tcG9uZW50cy5cXG4gIC8vIFdlIHVzZSBhIG1vZGlmaWVyIGNsYXNzIGZvciBKUy1lbmFibGVkIHN1cmZhY2VzIHRvIHN1cHBvcnQgYWxsIHVzZSBjYXNlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICBAaWYgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQge1xcbiAgICAvLyBKUy1lbmFibGVkIHNlbGVjdG9ycy5cXG4gICAgJi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQsXFxuICAgICYubWRjLXJpcHBsZS11cGdyYWRlZDpmb2N1cy13aXRoaW4sXFxuICAgIC8vIENTUy1vbmx5IHNlbGVjdG9ycy5cXG4gICAgJjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzLFxcbiAgICAmOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXMtd2l0aGluIHtcXG4gICAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YmVmb3JlIHtcXG4gICAgICAgIEBpbmNsdWRlIHN0YXRlcy1mb2N1cy1vcGFjaXR5LXByb3BlcnRpZXNfKFxcbiAgICAgICAgICAkb3BhY2l0eTogJG9wYWNpdHksXFxuICAgICAgICAgICRxdWVyeTogJHF1ZXJ5XFxuICAgICAgICApO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSBAZWxzZSB7XFxuICAgIC8vIEpTLWVuYWJsZWQgc2VsZWN0b3JzLlxcbiAgICAmLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCxcXG4gICAgLy8gQ1NTLW9ubHkgc2VsZWN0b3JzLlxcbiAgICAmOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXMge1xcbiAgICAgICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUge1xcbiAgICAgICAgQGluY2x1ZGUgc3RhdGVzLWZvY3VzLW9wYWNpdHktcHJvcGVydGllc18oXFxuICAgICAgICAgICRvcGFjaXR5OiAkb3BhY2l0eSxcXG4gICAgICAgICAgJHF1ZXJ5OiAkcXVlcnlcXG4gICAgICAgICk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBzdGF0ZXMtZm9jdXMtb3BhY2l0eS1wcm9wZXJ0aWVzXygkb3BhY2l0eSwgJHF1ZXJ5KSB7XFxuICAkZmVhdC1hbmltYXRpb246IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgYW5pbWF0aW9uKTtcXG4gIC8vIE9wYWNpdHkgZmFsbHMgdW5kZXIgY29sb3IgYmVjYXVzZSB0aGUgY2hvc2VuIG9wYWNpdHkgaXMgY29sb3ItZGVwZW5kZW50IGluIHR5cGljYWwgdXNhZ2VcXG4gICRmZWF0LWNvbG9yOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG5cXG4gIC8vIE5vdGUgdGhhdCB0aGlzIGR1cmF0aW9uIGlzIG9ubHkgZWZmZWN0aXZlIG9uIGZvY3VzLCBub3QgYmx1clxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtYW5pbWF0aW9uKSB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcXG4gIH1cXG59XFxuXFxuQG1peGluIHN0YXRlcy1wcmVzcy1vcGFjaXR5KFxcbiAgJG9wYWNpdHksXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LWFuaW1hdGlvbjogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBhbmltYXRpb24pO1xcbiAgJGZlYXQtY29sb3I6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5jcmVhdGUtdGFyZ2V0KCRxdWVyeSwgY29sb3IpO1xcblxcbiAgLy8gU3R5bGVzIGZvciBub24tdXBncmFkZWQgKENTUy1vbmx5KSBzdGF0ZWZ1bCBzdXJmYWNlc1xcblxcbiAgJjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpIHtcXG4gICAgLy8gQXBwbHkgcHJlc3MgYWRkaXRpdmVseSBieSB1c2luZyB0aGUgOjphZnRlciBwc2V1ZG8tZWxlbWVudFxcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YWZ0ZXIge1xcbiAgICAgIEBpbmNsdWRlIGZlYXR1cmUtdGFyZ2V0aW5nLW1peGlucy50YXJnZXRzKCRmZWF0LWFuaW1hdGlvbikge1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXJpYWJsZXMuJGZhZGUtb3V0LWR1cmF0aW9uIGxpbmVhcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICN7JHJpcHBsZS10YXJnZXR9OjphZnRlciB7XFxuICAgICAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1hbmltYXRpb24pIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyaWFibGVzLiRmYWRlLWluLWR1cmF0aW9uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gT3BhY2l0eSBmYWxscyB1bmRlciBjb2xvciBiZWNhdXNlIHRoZSBjaG9zZW4gb3BhY2l0eSBpcyBjb2xvci1kZXBlbmRlbnQgaW4gdHlwaWNhbCB1c2FnZVxcbiAgICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtY29sb3IpIHtcXG4gICAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLm1kYy1yaXBwbGUtdXBncmFkZWQge1xcbiAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgIC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAjeyRvcGFjaXR5fTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBTaW1wbGUgbWl4aW4gZm9yIGJhc2Ugc3RhdGVzIHdoaWNoIGF1dG9tYXRpY2FsbHkgc2VsZWN0cyBvcGFjaXR5IHZhbHVlcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBpbmsgY29sb3IgaXNcXG4vLyBsaWdodCBvciBkYXJrLlxcbkBtaXhpbiBzdGF0ZXMoXFxuICAkY29sb3I6IHRoZW1lLXZhcmlhYmxlcy5wcm9wLXZhbHVlKG9uLXN1cmZhY2UpLFxcbiAgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQ6IGZhbHNlLFxcbiAgJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCksXFxuICAkcmlwcGxlLXRhcmdldDogJyYnXFxuKSB7XFxuICBAaW5jbHVkZSBzdGF0ZXMtaW50ZXJhY3Rpb25zXyhcXG4gICAgJGNvbG9yOiAkY29sb3IsXFxuICAgICRoYXMtbmVzdGVkLWZvY3VzYWJsZS1lbGVtZW50OiAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudCxcXG4gICAgJHF1ZXJ5OiAkcXVlcnksXFxuICAgICRyaXBwbGUtdGFyZ2V0OiAkcmlwcGxlLXRhcmdldFxcbiAgKTtcXG59XFxuXFxuLy8gU2ltcGxlIG1peGluIGZvciBhY3RpdmF0ZWQgc3RhdGVzIHdoaWNoIGF1dG9tYXRpY2FsbHkgc2VsZWN0cyBvcGFjaXR5IHZhbHVlcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBpbmsgY29sb3IgaXNcXG4vLyBsaWdodCBvciBkYXJrLlxcbkBtaXhpbiBzdGF0ZXMtYWN0aXZhdGVkKFxcbiAgJGNvbG9yLFxcbiAgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQ6IGZhbHNlLFxcbiAgJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCksXFxuICAkcmlwcGxlLXRhcmdldDogJyYnXFxuKSB7XFxuICAkZmVhdC1jb2xvcjogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBjb2xvcik7XFxuICAkYWN0aXZhdGVkLW9wYWNpdHk6IGZ1bmN0aW9ucy5zdGF0ZXMtb3BhY2l0eSgkY29sb3IsIGFjdGl2YXRlZCk7XFxuXFxuICAmLS1hY3RpdmF0ZWQge1xcbiAgICAvLyBTdHlsZWxpbnQgc2VlbXMgdG8gdGhpbmsgdGhhdCAnJicgcXVhbGlmaWVzIGFzIGEgdHlwZSBzZWxlY3RvciBoZXJlP1xcbiAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItbWF4LXR5cGVcXG4gICAgI3skcmlwcGxlLXRhcmdldH06OmJlZm9yZSB7XFxuICAgICAgLy8gT3BhY2l0eSBmYWxscyB1bmRlciBjb2xvciBiZWNhdXNlIHRoZSBjaG9zZW4gb3BhY2l0eSBpcyBjb2xvci1kZXBlbmRlbnQuXFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtY29sb3IpIHtcXG4gICAgICAgIG9wYWNpdHk6ICRhY3RpdmF0ZWQtb3BhY2l0eTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgc3RhdGVzLWludGVyYWN0aW9uc18oXFxuICAgICAgJGNvbG9yOiAkY29sb3IsXFxuICAgICAgJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQ6ICRoYXMtbmVzdGVkLWZvY3VzYWJsZS1lbGVtZW50LFxcbiAgICAgICRvcGFjaXR5LW1vZGlmaWVyOiAkYWN0aXZhdGVkLW9wYWNpdHksXFxuICAgICAgJHF1ZXJ5OiAkcXVlcnksXFxuICAgICAgJHJpcHBsZS10YXJnZXQ6ICRyaXBwbGUtdGFyZ2V0XFxuICAgICk7XFxuICB9XFxufVxcblxcbi8vIFNpbXBsZSBtaXhpbiBmb3Igc2VsZWN0ZWQgc3RhdGVzIHdoaWNoIGF1dG9tYXRpY2FsbHkgc2VsZWN0cyBvcGFjaXR5IHZhbHVlcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBpbmsgY29sb3IgaXNcXG4vLyBsaWdodCBvciBkYXJrLlxcbkBtaXhpbiBzdGF0ZXMtc2VsZWN0ZWQoXFxuICAkY29sb3IsXFxuICAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudDogZmFsc2UsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LWNvbG9yOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIGNvbG9yKTtcXG4gICRzZWxlY3RlZC1vcGFjaXR5OiBmdW5jdGlvbnMuc3RhdGVzLW9wYWNpdHkoJGNvbG9yLCBzZWxlY3RlZCk7XFxuXFxuICAmLS1zZWxlY3RlZCB7XFxuICAgIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1tYXgtdHlwZVxcbiAgICAjeyRyaXBwbGUtdGFyZ2V0fTo6YmVmb3JlIHtcXG4gICAgICAvLyBPcGFjaXR5IGZhbGxzIHVuZGVyIGNvbG9yIGJlY2F1c2UgdGhlIGNob3NlbiBvcGFjaXR5IGlzIGNvbG9yLWRlcGVuZGVudC5cXG4gICAgICBAaW5jbHVkZSBmZWF0dXJlLXRhcmdldGluZy1taXhpbnMudGFyZ2V0cygkZmVhdC1jb2xvcikge1xcbiAgICAgICAgb3BhY2l0eTogJHNlbGVjdGVkLW9wYWNpdHk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIHN0YXRlcy1pbnRlcmFjdGlvbnNfKFxcbiAgICAgICRjb2xvcjogJGNvbG9yLFxcbiAgICAgICRoYXMtbmVzdGVkLWZvY3VzYWJsZS1lbGVtZW50OiAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudCxcXG4gICAgICAkb3BhY2l0eS1tb2RpZmllcjogJHNlbGVjdGVkLW9wYWNpdHksXFxuICAgICAgJHF1ZXJ5OiAkcXVlcnksXFxuICAgICAgJHJpcHBsZS10YXJnZXQ6ICRyaXBwbGUtdGFyZ2V0XFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiByYWRpdXMtYm91bmRlZChcXG4gICRyYWRpdXM6IDEwMCUsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LXN0cnV0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICAjeyRyaXBwbGUtdGFyZ2V0fTo6YmVmb3JlLFxcbiAgI3skcmlwcGxlLXRhcmdldH06OmFmdGVyIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydXR1cmUpIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gI3skcmFkaXVzfSk7XFxuICAgICAgLyogQG5vZmxpcCAqL1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gI3skcmFkaXVzfSk7XFxuICAgICAgd2lkdGg6ICRyYWRpdXMgKiAyO1xcbiAgICAgIGhlaWdodDogJHJhZGl1cyAqIDI7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjphZnRlciB7XFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydXR1cmUpIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsICRyYWRpdXMpO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsICRyYWRpdXMpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gcmFkaXVzLXVuYm91bmRlZChcXG4gICRyYWRpdXM6IDEwMCUsXFxuICAkcXVlcnk6IGZlYXR1cmUtdGFyZ2V0aW5nLWZ1bmN0aW9ucy5hbGwoKSxcXG4gICRyaXBwbGUtdGFyZ2V0OiAnJidcXG4pIHtcXG4gICRmZWF0LXN0cnV0dXJlOiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuY3JlYXRlLXRhcmdldCgkcXVlcnksIHN0cnVjdHVyZSk7XFxuXFxuICAjeyRyaXBwbGUtdGFyZ2V0fTo6YmVmb3JlLFxcbiAgI3skcmlwcGxlLXRhcmdldH06OmFmdGVyIHtcXG4gICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydXR1cmUpIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gI3skcmFkaXVzIC8gMn0pO1xcbiAgICAgIC8qIEBub2ZsaXAgKi9cXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JHJhZGl1cyAvIDJ9KTtcXG4gICAgICB3aWR0aDogJHJhZGl1cztcXG4gICAgICBoZWlnaHQ6ICRyYWRpdXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubWRjLXJpcHBsZS11cGdyYWRlZCB7XFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjpiZWZvcmUsXFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjphZnRlciB7XFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydXR1cmUpIHtcXG4gICAgICAgIHRvcDogdmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gI3skcmFkaXVzIC8gMn0pKTtcXG4gICAgICAgIC8qIEBub2ZsaXAgKi9cXG4gICAgICAgIGxlZnQ6IHZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSAjeyRyYWRpdXMgLyAyfSkpO1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgJHJhZGl1cyk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgJHJhZGl1cyk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICN7JHJpcHBsZS10YXJnZXR9OjphZnRlciB7XFxuICAgICAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydXR1cmUpIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsICRyYWRpdXMpO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsICRyYWRpdXMpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc3RhdGVzLWludGVyYWN0aW9uc18oXFxuICAkY29sb3IsXFxuICAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudCxcXG4gICRvcGFjaXR5LW1vZGlmaWVyOiAwLFxcbiAgJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCksXFxuICAkcmlwcGxlLXRhcmdldDogJyYnXFxuKSB7XFxuICBAaW5jbHVkZSB0YXJnZXQtc2VsZWN0b3IoJHJpcHBsZS10YXJnZXQpIHtcXG4gICAgQGluY2x1ZGUgc3RhdGVzLWJhc2UtY29sb3IoJGNvbG9yLCAkcXVlcnkpO1xcbiAgfVxcblxcbiAgJG9wYWNpdHktbWFwOiAoXFxuICAgIGhvdmVyOiBmdW5jdGlvbnMuc3RhdGVzLW9wYWNpdHkoJGNvbG9yLCBob3ZlcikgKyAkb3BhY2l0eS1tb2RpZmllcixcXG4gICAgZm9jdXM6IGZ1bmN0aW9ucy5zdGF0ZXMtb3BhY2l0eSgkY29sb3IsIGZvY3VzKSArICRvcGFjaXR5LW1vZGlmaWVyLFxcbiAgICBwcmVzczogZnVuY3Rpb25zLnN0YXRlcy1vcGFjaXR5KCRjb2xvciwgcHJlc3MpICsgJG9wYWNpdHktbW9kaWZpZXIsXFxuICApO1xcblxcbiAgQGluY2x1ZGUgc3RhdGVzLW9wYWNpdGllcyhcXG4gICAgJG9wYWNpdHktbWFwLFxcbiAgICAkaGFzLW5lc3RlZC1mb2N1c2FibGUtZWxlbWVudDogJGhhcy1uZXN0ZWQtZm9jdXNhYmxlLWVsZW1lbnQsXFxuICAgICRyaXBwbGUtdGFyZ2V0OiAkcmlwcGxlLXRhcmdldCxcXG4gICAgJHF1ZXJ5OiAkcXVlcnlcXG4gICk7XFxufVxcblxcbi8vIFdyYXBzIGNvbnRlbnQgaW4gdGhlIGByaXBwbGUtdGFyZ2V0YCBzZWxlY3RvciBpZiBpdCBleGlzdHMuXFxuQG1peGluIHRhcmdldC1zZWxlY3RvcigkcmlwcGxlLXRhcmdldDogJyYnKSB7XFxuICBAaWYgJHJpcHBsZS10YXJnZXQgPT0gJyYnIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9IEBlbHNlIHtcXG4gICAgI3skcmlwcGxlLXRhcmdldH0ge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIENvbW1vbiBzdHlsZXMgZm9yIGEgcmlwcGxlIHRhcmdldCBlbGVtZW50Llxcbi8vIFVzZWQgZm9yIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBhbiBpbm5lciByaXBwbGUgdGFyZ2V0IGVsZW1lbnQuXFxuQG1peGluIHRhcmdldC1jb21tb24oJHF1ZXJ5OiBmZWF0dXJlLXRhcmdldGluZy1mdW5jdGlvbnMuYWxsKCkpIHtcXG4gICRmZWF0LXN0cnVjdHVyZTogZmVhdHVyZS10YXJnZXRpbmctZnVuY3Rpb25zLmNyZWF0ZS10YXJnZXQoJHF1ZXJ5LCBzdHJ1Y3R1cmUpO1xcblxcbiAgQGluY2x1ZGUgZmVhdHVyZS10YXJnZXRpbmctbWl4aW5zLnRhcmdldHMoJGZlYXQtc3RydWN0dXJlKSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvLyBOZWNlc3NhcnkgZm9yIGNsaWNrcyBvbiBvdGhlciBpbm5lciBlbGVtZW50cyAoZS5nLiBjbG9zZSBpY29uIGluIGNoaXApXFxuICAgIC8vIHRvIGdvIHRocm91Z2guXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG5cIixcIi8vXFxuLy8gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cXG4vL1xcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcXG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbFxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXFxuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcXG4vL1xcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXFxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXFxuLy9cXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cXG4vLyBUSEUgU09GVFdBUkUuXFxuLy9cXG5cXG4kZmFkZS1pbi1kdXJhdGlvbjogNzVtcyAhZGVmYXVsdDtcXG4kZmFkZS1vdXQtZHVyYXRpb246IDE1MG1zICFkZWZhdWx0O1xcbiR0cmFuc2xhdGUtZHVyYXRpb246IDIyNW1zICFkZWZhdWx0O1xcbiRzdGF0ZXMtd2FzaC1kdXJhdGlvbjogMTVtcyAhZGVmYXVsdDtcXG5cXG4vLyBOb3RlcyBvbiBzdGF0ZXM6XFxuLy8gKiBmb2N1cyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgaG92ZXIgKGkuZS4gaWYgYW4gZWxlbWVudCBpcyBib3RoIGZvY3VzZWQgYW5kIGhvdmVyZWQsIG9ubHkgZm9jdXMgdmFsdWUgYXBwbGllcylcXG4vLyAqIHByZXNzIHN0YXRlIGFwcGxpZXMgdG8gYSBzZXBhcmF0ZSBwc2V1ZG8tZWxlbWVudCwgc28gaXQgaGFzIGFuIGFkZGl0aXZlIGVmZmVjdCBvbiB0b3Agb2Ygb3RoZXIgc3RhdGVzXFxuLy8gKiBzZWxlY3RlZC9hY3RpdmF0ZWQgYXJlIGFwcGxpZWQgYWRkaXRpdmVseSB0byBob3Zlci9mb2N1cyB2aWEgY2FsY3VsYXRpb25zIGF0IHByZXByb2Nlc3NpbmcgdGltZVxcblxcbiRkYXJrLWluay1vcGFjaXRpZXM6IChcXG4gIGhvdmVyOiAwLjA0LFxcbiAgZm9jdXM6IDAuMTIsXFxuICBwcmVzczogMC4xMixcXG4gIHNlbGVjdGVkOiAwLjA4LFxcbiAgYWN0aXZhdGVkOiAwLjEyLFxcbikgIWRlZmF1bHQ7XFxuXFxuJGxpZ2h0LWluay1vcGFjaXRpZXM6IChcXG4gIGhvdmVyOiAwLjA4LFxcbiAgZm9jdXM6IDAuMjQsXFxuICBwcmVzczogMC4yNCxcXG4gIHNlbGVjdGVkOiAwLjE2LFxcbiAgYWN0aXZhdGVkOiAwLjI0LFxcbikgIWRlZmF1bHQ7XFxuXFxuLy8gTGVnYWN5XFxuXFxuJHByZXNzZWQtZGFyay1pbmstb3BhY2l0eTogMC4xNiAhZGVmYXVsdDtcXG4kcHJlc3NlZC1saWdodC1pbmstb3BhY2l0eTogMC4zMiAhZGVmYXVsdDtcXG5cIixcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZGMtdGFiLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OjE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gIH1cXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xcbiAgfVxcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA0OHB4O1xcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIkBpbXBvcnQgJy4vZm9udCc7XFxuXFxuJG1haW4tZm9udDogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xcbiRkZXNrdG9wLXdpZHRoOiAxNTAwcHg7XFxuXCIsXCIubG9nby1kaXYge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXCIsXCIuaGVyby1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDElO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAuaGVyby10ZXh0IHtcXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIHBhZGRpbmc6IDAuNSUgMCU7XFxuICBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gIH1cXG59XFxuXCIsXCIkcmVkOiByZ2IoMTY0LDE3LDkpO1xcbiRncmVlbjogcmdiKDIxOCwxOTQsMCk7XFxuJGJsdWU6IHJnYigwLDE3NCwyMzkpO1xcbiRwdXJwbGU6IHJnYigxNDMsMCwxMDIpO1xcbiRncmV5OiByZ2IoMTAyLDEwMiwxMDIpO1xcblwiLFwiLmhvdXJzLWFydGljbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLmFydGljbGUtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xcbi5ob3Vycy1hcnRpY2xlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCIsXCJhcnRpY2xlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxuICBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcGFkZGluZy1yaWdodDogNSU7XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIHBhZGRpbmc6IDElIDUlIDIlIDYlO1xcbiAgfVxcblxcbiAgdWwgbGk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCItXFxcIjtcXG4gICAgLyogQWRkIGNvbnRlbnQ6IFxcXFwyMDIyIGlzIHRoZSBDU1MgQ29kZS91bmljb2RlIGZvciBhIGJ1bGxldCAqL1xcbiAgICBjb2xvcjogJGJsdWU7XFxuICAgIC8qIENoYW5nZSB0aGUgY29sb3IgKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIElmIHlvdSB3YW50IGl0IHRvIGJlIGJvbGQgKi9cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAvKiBOZWVkZWQgdG8gYWRkIHNwYWNlIGJldHdlZW4gdGhlIGJ1bGxldCBhbmQgdGhlIHRleHQgKi9cXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgLyogQWxzbyBuZWVkZWQgZm9yIHNwYWNlICh0d2VhayBpZiBuZWVkZWQpICovXFxuXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvLyBSZW5kZXIgYW4gYXJ0aWNsZSBob2xkZXJcbmNvbnN0IHJlbmRlckFydGljbGUgPSAoY29udGVudCkgPT4ge1xuICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhcnRpY2xlKTtcbn1cblxuLy8gQ3JlYXRlIGEgc3RhbmRhcmQgdGl0bGUgKyBib2R5IGNhcmQgaW4gcGFnZSBjb2xvciwgcmV0dXJuIGJ1aWx0IGNhcmRcbmNvbnN0IGJ1aWxkQXJ0aWNsZUNhcmQgPSAodGl0bGUsIHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnRpY2xlLWNhcmQnKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgaGVhZC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgYm9keS5pbm5lckhUTUwgPSB0ZXh0O1xuICBoZWFkLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gIGhvbGRlci5hcHBlbmRDaGlsZChoZWFkKTtcbiAgaG9sZGVyLmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gIHJldHVybiBob2xkZXI7XG59XG5cbi8vIEFwcGVuZCB0aXRsZSB0byBhcnRpY2Ugb2JqZWN0LlxuY29uc3QgcmVuZGVyQXJ0aWNsZVRpdGxlID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIHRpdGxlLmlubmVySFRNTCA9IFwiIC0gXCIgKyB0ZXh0ICsgXCIgLSBcIjtcbiAgdGl0bGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblxuICBhcnRpY2xlLmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cblxuZXhwb3J0IHtcbiAgcmVuZGVyQXJ0aWNsZSxcbiAgYnVpbGRBcnRpY2xlQ2FyZCxcbiAgcmVuZGVyQXJ0aWNsZVRpdGxlLFxufVxuIiwiLy8gQnVpbGQgYSBuYXYgdGFiIHcgZ2l2ZW4gbmFtZSBhbmQgaW5kZXhcbmNvbnN0IGJ1aWxkVGFiID0gKG5hbWUsIGluZGV4KSA9PiB7XG4gIC8vIEJ1aWxkIGJhc2ljIGJ1dHRvbiAvdyBhdHRyaWJ1dGVzLCBzZXQgaW5kZXggdG8gZ2l2ZW4gaW5kZXhcbiAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGMtdGFiJyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gIHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgaW5kZXgpO1xuXG4gIC8vIGNvbnRlbnQgY29udGFpbmVyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0YWJDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWRjLXRhYl9fY29udGVudCcpO1xuXG4gIC8vIFRhYiB0ZXh0LCBzZXQgdGFiIG5hbWVcbiAgbGV0IHRhYlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRhYlRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGMtdGFiX190ZXh0LWxhYmVsJyk7XG4gIHRhYlRleHQuaW5uZXJIVE1MID0gbmFtZTtcblxuICAvLyBBZGQgdGV4dCB0byBjb250ZW50XG4gIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiVGV4dCk7XG5cbiAgLy8gQWRkaXRvbmFsIHRhYiBkZXNpZ24gZWxlbWVudHMsIGJ1aWxkaW5nIGFuZCBhZGRpbmcgcmVxdWlyZWQgYXR0cmlidXRlc1xuICBsZXQgdGFiSW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0YWJJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGMtdGFiLWluZGljYXRvcicpO1xuXG4gIGxldCB0YWJJbmRpY2F0b3JDbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRhYkluZGljYXRvckNudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUnKTtcbiAgdGFiSW5kaWNhdG9yLmFwcGVuZENoaWxkKHRhYkluZGljYXRvckNudCk7XG5cbiAgbGV0IHRhYlJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGFiUmlwcGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWRjLXRhYl9fcmlwcGxlJyk7XG5cbiAgLy8gUHV0IGFsbCB0aGUgZWxlbWVudHMgdG9nZXRoZXIgb24gYSB0YWJcbiAgdGFiLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICB0YWIuYXBwZW5kQ2hpbGQodGFiSW5kaWNhdG9yKTtcbiAgdGFiLmFwcGVuZENoaWxkKHRhYlJpcHBsZSk7XG5cbiAgLy8gcmV0dXJuIHRoZSBjb21wbGV0ZWQgdGFiIFxuICByZXR1cm4gdGFiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZFRhYjtcbiIsIi8vIEEgY29sb3IgbGlzdCBhbGxvd2luZyB1cyB0byBjb29yaWRuYXRlIHRhYi9wYWdlIHN0eWxlIGNvbG9yc1xuLy8gQ29sb3Igd2lsbCBiZSBhY2NvcmRpbmcgdG8gdGFiIG51bWJlciwgZ2l2ZSB0YWIgbnVtYmVyLCByZWNlaXZlIGNvbG9yXG4vLyBUYWJzIGdvIGZyb20gMS00LlxuY29uc3QgcmVkID0gXCJyZ2IoMTY0LDE3LDkpXCI7XG5jb25zdCBncmVlbiA9IFwicmdiKDIxOCwxOTQsMClcIjtcbmNvbnN0IGJsdWUgPSBcInJnYigwLDE3NCwyMzkpXCI7XG5jb25zdCBwdXJwbGUgPSBcInJnYigxNDMsMCwxMDIpXCI7XG5jb25zdCBncmV5ID0gXCJyZ2IoMTAyLDEwMiwxMDIpXCI7XG5cbmNvbnN0IHRhYkNvbG9ycyA9IFtyZWQsIHB1cnBsZSwgYmx1ZSwgZ3JlZW5dO1xuLy8gdGFiQ29sb3JzLmNvbmNhdChbcmVkLCBwdXJwbGUsIGJsdWUsIGdyZWVuXSk7XG5cbmNvbnN0IGNvbG9ycyA9IHRhYkNvbG9ycyArIFtncmV5XTtcblxuLy8gUmV0dXJuIGZ1bGwgbGlzdCBvZiBjb2xvcnNcbmNvbnN0IGNvbG9yTGlzdCA9ICgpID0+IHtcbiAgcmV0dXJuIGNvbG9ycztcbn1cblxuLy8gV2lsbCBiZSBmb3IgcXVpY2sgY29sb3IgcGlja2luZyBiYXNlZCBvbiB0YWIsIDEtNC5cbmNvbnN0IGNvbG9yUGlja2VyID0gKG51bWJlcikgPT4ge1xuICAgIC8vIGFkanVzdCBudW1iZXIgdG8gMCBpbmRleFxuICAgIG51bWJlciAtPSAxO1xuICAgIC8vIElmIHZhbGlkIHRhYiBudW1iZXItPmNvbG9yLCByZXR1cm4gdGFicyBjb2xvci5cbiAgICBpZiAobnVtYmVyID49IDAgJiYgbnVtYmVyIDw9IDMpIHtcbiAgICAgIHJldHVybiB0YWJDb2xvcnNbbnVtYmVyXTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgY29sb3JMaXN0LFxuICBjb2xvclBpY2tlcixcbn1cbiIsImNvbnN0IHJlbmRlckZvb3RlciA9IChib2R5KSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vdGVyJyk7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiwqkgVHJpYmUgMjAxOC4gQWxsIHJpZ2h0cyByZXNlcnZlZFwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5jb25zdCBjaGFuZ2VGb290ZXJDb2xvciA9IChjb2xvcikgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IGNvbG9yO1xufVxuXG5leHBvcnQge1xuICByZW5kZXJGb290ZXIsXG4gIGNoYW5nZUZvb3RlckNvbG9yLFxufVxuIiwiLy8gQ29uc3RydWN0IGEgaGVybyBpbWFnZSBlbGVtZW50IGFuZCBhZGQgdG8gcGFnZVxuY29uc3QgcmVuZGVySGVybyA9ICh0ZXh0LCBpbWFnZSwgY29udGVudCwgY29sb3IpID0+IHtcblxuICAvLyBCdWlsZCBpbWFnZSBiYWNrZ3JvdW5kXG4gIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVyby1pbWFnZScpO1xuICBpbWFnZURpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKCR7aW1hZ2V9KWA7XG4gIGltYWdlRGl2LnN0eWxlLmJvcmRlckJvdHRvbSA9IGAzcHggc29saWQgJHtjb2xvcn1gO1xuICAvLyBCdWlsZCB0ZXh0XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlcm8tdGV4dCcpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgdGl0bGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgLy8gUHV0IHRvZ2V0aGVyIGFuZCBhcHBlbmQgdG8gY29udGVudFxuICBpbWFnZURpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlRGl2KTtcblxufVxuXG5leHBvcnQge1xuICByZW5kZXJIZXJvLFxufVxuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1nL2xvZ28ucG5nJztcbmNvbnN0IHJlbmRlckxvZ28gPSAoY29udGVudCkgPT4ge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvZ28tZGl2Jyk7XG4gIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7TG9nb30pYDtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckxvZ287XG4iLCJpbXBvcnQgYnVpbGRUYWIgZnJvbSAnLi9idWlsZFRhYic7XG5cbmNvbnN0IHJlbmRlck5hdiA9IChjb250ZW50KSA9PiB7XG4gIC8vIENvbnN0cnVjdCBhIG1hdHJpYWwtdWkgdGFiIG5hdiBzdHlsZSBuYXZiYXIgYW5kIGFkZCB0byBjb250ZW50IGVsZW1lbnRcbiAgLy8gcGFzc2VkIGluXG5cbiAgLy8gTWFrZSB0YWJCYXJcbiAgbGV0IHRhYkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGMtdGFiLWJhcicpO1xuICB0YWJCYXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYmxpc3QnKTtcblxuICAvLyBNYWtlIHRhYlNjcm9sbGVyXG4gIGxldCB0YWJTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJTY3JvbGxlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21kYy10YWItc2Nyb2xsZXInKTtcblxuICAvLyBNYWtlIHRhYlNjcm9sbGVyU2FcbiAgbGV0IHRhYlNjcm9sbGVyU2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiU2Nyb2xsZXJTYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyk7XG5cbiAgLy8gTWFrZSB0YWJTY3JvbGxlclNjXG4gIGxldCB0YWJTY3JvbGxlclNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYlNjcm9sbGVyU2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcpO1xuXG5cbiAgLy8gQnVpbGQgdGFicyBmb3IgbWVudSwgcGFzc2luZyBpbiB0aGUgdGFiIG5hbWUgd2Ugd2FudCBhbmQgaW5kZXhcbiAgbGV0IGFib3V0VGFiID0gYnVpbGRUYWIoJ2hvdXJzJywgMCk7XG4gIGxldCBtZW51c1RhYiA9IGJ1aWxkVGFiKCdtZW51cycsIDEpO1xuICBsZXQgbWFuaWZlc3RvVGFiID0gYnVpbGRUYWIoJ21hbmlmZXN0bycsIDIpO1xuICBsZXQgY29udGFjdFRhYiA9IGJ1aWxkVGFiKCdjb250YWN0JywgMyk7XG5cblxuICAvLyBBZGQgbmV3IGJ1dHRvbnMgdG8gb3VyXG4gIHRhYlNjcm9sbGVyU2MuYXBwZW5kQ2hpbGQoYWJvdXRUYWIpO1xuICB0YWJTY3JvbGxlclNjLmFwcGVuZENoaWxkKG1lbnVzVGFiKTtcbiAgdGFiU2Nyb2xsZXJTYy5hcHBlbmRDaGlsZChtYW5pZmVzdG9UYWIpO1xuICB0YWJTY3JvbGxlclNjLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICAvLyBBZGQgdGhlIFNjIHRvIHRoZSBTYVxuICB0YWJTY3JvbGxlclNhLmFwcGVuZENoaWxkKHRhYlNjcm9sbGVyU2MpO1xuICAvLyBBZGQgdGhlIFNhIHRvIHRoZSBTY3JvbGxlclxuICB0YWJTY3JvbGxlci5hcHBlbmRDaGlsZCh0YWJTY3JvbGxlclNhKTtcbiAgLy8gQWRkIHNjcm9sbGVyIHRvIHRhYi9uYXYgQmFyXG4gIHRhYkJhci5hcHBlbmRDaGlsZCh0YWJTY3JvbGxlcik7XG5cbiAgLy8gQWRkIG91ciBjb21wbGV0ZWQgbmF2L3RhYiBCYXIgdG8gdGhlIGNvbnRlbnQgZGl2IHBhc3NlZCBpbi5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJCYXIpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdjtcbiIsIi8vIFJlc2V0ICNjb250ZW50IGZvciBuZXcgcGFnZSwgcmV0dXJucyBvdXIgbmV3IGNvbnRlbnQgc2VjdGlvbiB0byByZW5kZXIgaW5cbmNvbnN0IGNsZWFyQ29udGVudCA9IChib2R5KSA9PiB7XG4gIC8vIEdyYWIgb2xkIGNvbnRlbnQgYW5kIGRlbGV0ZSBpZiBwcmVzZW50XG4gIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBpZiAob2xkQ29udGVudCkge1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQob2xkQ29udGVudCk7XG4gIH1cbiAgLy8gQnVpbGQgYW5kIGFkZCBuZXcgY29udGFjdCwgcmV0dXJuaW5nIGl0IHNvIHdlIGNhbiByZW5kZXIgaW4gaXRcbiAgY29uc3QgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbmV3Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBib2R5Lmluc2VydEJlZm9yZShuZXdDb250ZW50LCBmb290ZXIpO1xuXG4gIHJldHVybiBuZXdDb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgcmVuZGVySG91cnMgZnJvbSAnLi4vcGFnZXMvcmVuZGVySG91cnMnO1xuaW1wb3J0IHJlbmRlck1lbnVzIGZyb20gJy4uL3BhZ2VzL3JlbmRlck1lbnVzJztcbmltcG9ydCByZW5kZXJNYW5pZmVzdG8gZnJvbSAnLi4vcGFnZXMvcmVuZGVyTWFuaWZlc3RvJztcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gJy4uL3BhZ2VzL3JlbmRlckNvbnRhY3QnO1xuXG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXJDb250ZW50JztcblxuLy8gR2l2ZW4gdGhlIGluZGV4IG9mIHRoZSBwYWdlLCBjYWxsIGFwcHJvcHJvYXRlIHJlbmRlciBmdW5jdGlvbiwgcGFzc2luZ1xuLy8gaW4gdGhlIG1haW4gYm9keSBjb250ZW50IGl0IHdpbGwgcmVuZGVyIHRvLlxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoaW5kZXgpID0+IHtcblxuICAvLyBSZXNldCAjY29udGVudCBmb3IgbmV3IHBhZ2UsIHJldHVybnMgb3VyIG5ldyBjb250ZW50IHNlY3Rpb25cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgbGV0IG5ld0NvbnRlbnQgPSBjbGVhckNvbnRlbnQoYm9keSk7XG5cbiAgLy8gU2Nyb2xsIHRvIHRvcCBvZiBwYWdlXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgLy8gUmVuZGVyIHBhZ2UgYmFzZWQgb24gaW5kZXhcbiAgc3dpdGNoIChpbmRleCkge1xuICAgIGNhc2UgKDApOlxuICAgICAgcmVuZGVySG91cnMobmV3Q29udGVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgxKTpcbiAgICAgIHJlbmRlck1lbnVzKG5ld0NvbnRlbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoMik6XG4gICAgICByZW5kZXJNYW5pZmVzdG8obmV3Q29udGVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgzKTpcbiAgICAgIHJlbmRlckNvbnRhY3QobmV3Q29udGVudCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCByZW5kZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9yZW5kZXJOYXYnO1xuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCB7TURDVGFiQmFyfSBmcm9tICdAbWF0ZXJpYWwvdGFiLWJhcic7XG5cblxuLy8gQmFzaWMgcGFnZSBlbGVtZW50IHNldHVwLCBsb2FkIG5hdiBhbmQgYWN0aXZhdGUgb3VyIGxhbmRpbmcgcGFnZVxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gIC8vIFdob2xlIHBhZ2UgaG9sZGVyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgLy8gcmVuZGVyTmF2IHdpbGwgc2V0dXAgbGlzdGVuZXIgYW5kIG5hdmJhciwgd2Ugd2lsbCBhY3RpdmF0ZSBvbmNlIHBhZ2Ugc2V0dXAgYmVsb3cuXG4gIHJlbmRlck5hdihib2R5KTtcblxuICAvLyBNYWluIGNvbnRlbnQgYm9keSAtLVRPRE86IFR1cm4gdGhpcyAqbWFrZSBtYWluKiBhY3Rpb24gaW50byBjb25zdHJ1Y3RvclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIC8vIHJlbmRlckZvb3RlciB3aWxsIGJ1aWxkIGFuZCBhcHBlbmQgZm9vdGVyIHRvIGJvZHkgZWxlbWVudFxuICByZW5kZXJGb290ZXIoYm9keSk7XG5cbiAgLy8gQWRkIGxpc3RlbmVyIHRvIGJvZHkgdGhhdCB3aWxsIGNhbGwgb3VyIGRpc3BsYXkgY29udHJvbGxlciB3aGVuIGl0IGhlYXJzXG4gIC8vIGEgdGFiIGFjdGl2YXRlZCBldmVudCBhbmQgcGFzcyBhbG9uZyBpbmZvIGZyb20gZXZlbnRcbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdNRENUYWJCYXI6YWN0aXZhdGVkJywgKGUpID0+IHtcbiAgICAvLyBQYXNzIGFsb25nIGluZGV4IG9mIGV2ZW50IHRvIGNvbnRyb2xsZXIgb3QgcmVuZGVyIGFzc29jaWF0ZWQgYm9keVxuICAgIGRpc3BsYXlDb250cm9sbGVyKGUuZGV0YWlsLmluZGV4KTtcbiAgfSlcblxuICAvLyBHcmFiIHRhYkJhciBhbmQgYWN0aXZhdGUgb3VyIGRlc2lyZWQgbGFuZGluZyBwYWdlIChIb3VycyBpbiBvdXIgY2FzZSlcbiAgY29uc3QgdGFiQmFyID0gbmV3IE1EQ1RhYkJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRhYi1iYXInKSk7XG4gIHRhYkJhci5hY3RpdmF0ZVRhYigwKTsgLy90cmlnZ2VyIGRlZmF1bHQgYWN0aXZhdGUgb24gbG9hZC5cblxufVxuXG5cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzZlOTRmYWIzM2FjOTk4MWJlZmZiZGNhNDAwMGQwMWQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU4NjlkYzNkZGJmOTIzYjIyNTRjMTlkZDU1MzEyMTI4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyY2YzMDE1NTFlMzg5ZDUyMzBlNDg5MWM2ZTM5M2NmOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzNlYTkxNWRkNWViMDc0MjdhNjE4YzFhMjBlMjI0YmQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVkODhhMDQ1M2UyZjY2YjM1NWVlZmY4NzdiYmZhMmM0LmpwZ1wiOyIsIi8vIEltcG9ydCBtZXRob2RzL2Z1bmN0aW9uYWxpdHlcbmltcG9ydCBwYWdlTG9hZCBmcm9tICcuL2NvbnRyb2xsZXJzL3BhZ2VMb2FkJztcblxuLy8gSW1wb3J0IHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlL3Jlc2V0LnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xuXG5cbi8vIE9uIGluaXRpYWwgcGFnZSBsb2FkLCBkbyBvdXIgZGVmYXVsdCBzZXR1cCwgd2hpY2ggd2lsbCBjaG9vc2Ugb3VyIGxhbmRpbmcgcGFnZVxuLy8gYW5kIGFkZCBsaXN0ZW5lcnMgZm9yIGZ1cnRoZXIgbmF2XG5kb2N1bWVudC5vbmxvYWQgPSBwYWdlTG9hZCgpO1xuIiwiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vaW1nL2NvbnRhY3RCYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQge1xuICByZW5kZXJIZXJvXG59IGZyb20gJy4uL2NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQge1xuICByZW5kZXJBcnRpY2xlXG59IGZyb20gJy4uL2NvbXBvbmVudHMvYXJ0aWNsZSc7XG5pbXBvcnQge1xuICBjaGFuZ2VGb290ZXJDb2xvclxufSBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgcmVuZGVyTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL3JlbmRlckxvZ28nO1xuaW1wb3J0IHtcbiAgY29sb3JQaWNrZXIsXG59IGZyb20gJy4uL2NvbXBvbmVudHMvY29sb3JzJztcblxuXG5cblxuY29uc3QgcmVuZGVyQ29udGFjdCA9IChjb250ZW50KSA9PiB7XG4gIC8vIFNldCBvdXIgdGV4dCBmb3Igb3VyIGhvdXJzIHBhZ2VcbiAgY29uc3QgaGVyb1RleHQgPSBcIkNPTlRBQ1RcIjtcbiAgY29uc3QgaGVyb1VSTCA9IEJhY2tncm91bmQ7XG5cbiAgLy8gQnVpbGRzIGEgaGVybyBlbGVtZW50IHdpdGggdGhlIHRleHQsIGJhY2tncm91bmQgaW1hZ2UsIGFuZCBhcHBlbmRzIHRvIG91ciBjb250ZW50XG4gIHJlbmRlckhlcm8oaGVyb1RleHQsIGhlcm9VUkwsIGNvbnRlbnQsIGNvbG9yUGlja2VyKDQpKTtcblxuICAvLyBSZW5kZXIgYXJ0aWNsZVxuICByZW5kZXJBcnRpY2xlKGNvbnRlbnQpO1xuXG4gIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuXG5cbiAgLy8gQWRkIGxvZ28gdG8gYm90dG9tIG9mIHBhZ2VcbiAgcmVuZGVyTG9nbyhhcnRpY2xlKTtcblxuICBjaGFuZ2VGb290ZXJDb2xvcihjb2xvclBpY2tlcig0KSk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0O1xuIiwiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vaW1nL2hvdXJzQmFja2dyb3VuZENsaXAuanBnJztcbmltcG9ydCB7XG4gIHJlbmRlckhlcm9cbn0gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJztcbmltcG9ydCB7XG4gIGNoYW5nZUZvb3RlckNvbG9yXG59IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7XG4gIHJlbmRlckFydGljbGUsXG4gIGJ1aWxkQXJ0aWNsZUNhcmQsXG59IGZyb20gJy4uL2NvbXBvbmVudHMvYXJ0aWNsZSc7XG5pbXBvcnQgcmVuZGVyTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL3JlbmRlckxvZ28nO1xuaW1wb3J0IHtcbiAgY29sb3JQaWNrZXIsXG59IGZyb20gJy4uL2NvbXBvbmVudHMvY29sb3JzJztcblxuXG5jb25zdCByZW5kZXJIb3VycyA9IChjb250ZW50KSA9PiB7XG5cbiAgLy8gU2V0IG91ciB0ZXh0IGZvciBvdXIgaG91cnMgcGFnZVxuICBjb25zdCBoZXJvVGV4dCA9IFwiV2UgYXJlIGEgY29udGVtcG9yYXJ5IHJlc3RhdXJhbnQgd2l0aCBhIG1pbmQgdG8gc291cmNlXCIgK1xuICAgIFwiIGxvY2FsLCBzZWFzb25hbCwgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGZvb2QgaW5zcGlyZWQgZnJvbSBhcm91bmQgdGhlIHdvcmxkLiBcIiArXG4gICAgXCJUZXJyeSwgUGF1bCBhbmQgQnJhbmRvbiBhcmUgdHJhdmVsbGVycyBhbmQgZm9vZGllcy4gV2UgbG92ZSByaWNoIGludGVuc2UgZmxhdm91cnMsIFwiICtcbiAgICBcImZyZXNoIHByb2R1Y3RzLCBhbmQgc3BpY2UsIHlldOKApiB3ZSB1bmRlcnN0YW5kIHRoYXQgd2UgbGl2ZSBpbiBSZWQgRGVlciBhbmQgcGVvcGxlIGhlcmUgYWxzbyBlbmpveSBjb21mb3J0IGZvb2QuXCI7XG4gIGNvbnN0IGhlcm9VUkwgPSBCYWNrZ3JvdW5kO1xuXG4gIC8vIEJ1aWxkcyBhIGhlcm8gZWxlbWVudCB3aXRoIHRoZSB0ZXh0LCBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgYXBwZW5kcyB0byBvdXIgY29udGVudFxuICByZW5kZXJIZXJvKGhlcm9UZXh0LCBoZXJvVVJMLCBjb250ZW50LCBjb2xvclBpY2tlcigxKSk7XG5cbiAgLy8gbGV0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1pbWFnZScpO1xuICAvLyBoZXJvLnN0eWxlLmJvcmRlckJvdHRvbSA9IGAzcHggc29saWQgJHtjb2xvclBpY2tlcigxKX1gO1xuXG4gIC8vIFJlbmRlciBhcnRpY2xlIGVsZW1lbnRcbiAgcmVuZGVyQXJ0aWNsZShjb250ZW50KTtcblxuICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKTtcblxuICBhcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaG91cnMtYXJ0aWNsZScpO1xuXG4gIC8vIENyZWF0ZSB0d28gY2FyZHMsIGFkZCB0aGVtIHRvIGFydGljZS5cblxuICAvLyBCdWlsZCBhZGRyZXNzIGNhcmRcbiAgbGV0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gIGFkZHJlc3NUZXh0ID1cbiAgXCIgICAgICAgNDkzMCBSb3NzIFN0LlxcblwiICtcbiAgXCJSZWQgRGVlciwgQUIgVDROIDFYN1xcblwiICtcbiAgXCJcXG5cIiArXG4gIFwiICAgICAgICAgICAgUGhvbmU6XFxuXCIgK1xuICBcIiAgICAgIDQwMy0zOTItMzA0NlxcblwiICtcbiAgXCIgICAgICAgICAgICBFbWFpbDpcXG5cIiArXG4gIFwiZWF0QHRyaWJlZmxhdG91dC5jb21cXG5cIlxuXG5cbiAgbGV0IGFkZHJlc3NDYXJkID0gYnVpbGRBcnRpY2xlQ2FyZCgnQWRkcmVzcycsIGFkZHJlc3NUZXh0LCBjb2xvclBpY2tlcigxKSk7XG4gIGFydGljbGUuYXBwZW5kQ2hpbGQoYWRkcmVzc0NhcmQpO1xuXG4gIC8vIEJ1aWxkIGhvdXJzIGNhcmRcbiAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAvLyBob3Vyc1RleHQgPVxuICAvLyBcIiAgIFR1ZXNkYXkgMTE6MzAgYS5tLiDigJMgMjozMCBwLm0uXFxuXCIgK1xuICAvLyBcIiAgICBXZWRuZXNkYXkgMTE6MzAgYS5tLiDigJMgTEFURVxcblwiICtcbiAgLy8gXCIgICAgIFRodXJzZGF5IDExOjMwIGEubS4g4oCTIExBVEVcXG5cIiArXG4gIC8vIFwiICAgICAgIEZyaWRheSAxMTozMCBhLm0uIOKAkyBMQVRFXFxuXCIgK1xuICAvLyBcIiAgICAgU2F0dXJkYXkgMTE6MzAgYS5tLiDigJMgTEFURVxcblwiICtcbiAgLy8gXCJcXG5cIiArXG4gIC8vIFwiSGFwcHkgSG91cjogMjozMCBwLm0uIOKAkyA0OjMwIHAubS5cIjtcblxuICBob3Vyc1RleHQgPVxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgVHVlc2RheTpcXG5cIiArXG4gIFwiICAgICAgICAgICAxMTozMCBhLm0uIOKAkyAyOjMwIHAubS5cXG5cIiArXG4gIFwiXFxuXCIgK1xuICBcIiAgICAgICAgICAgICBXZWQsIFRodXJzLCBGcmksIFNhdDpcXG5cIiArXG4gIFwiICAgICAgICAgICAgICAgMTE6MzAgYS5tLiDigJMgTEFURVxcblwiICtcbiAgXCJcXG5cIiArXG4gIFwiSGFwcHkgSG91cjogMjozMCBwLm0uIOKAkyA0OjMwIHAubS5cIjtcblxuXG4gIGxldCBob3Vyc0NhcmQgPSBidWlsZEFydGljbGVDYXJkKCdIb3VycycsIGhvdXJzVGV4dCwgY29sb3JQaWNrZXIoMSkpO1xuICBhcnRpY2xlLmFwcGVuZENoaWxkKGhvdXJzQ2FyZCk7XG5cbiAgLy8gQWRkIGxvZ28gdG8gYm90dG9tIG9mIHBhZ2VcbiAgcmVuZGVyTG9nbyhjb250ZW50KTtcbiAgLy8gQ2hhbmdlIG91ciBmb290ZXIgY29sb3IgdG8gb3VyIHBhZ2UgY29sb3JcbiAgY2hhbmdlRm9vdGVyQ29sb3IoY29sb3JQaWNrZXIoMSkpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvdXJzO1xuIiwiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vaW1nL21hbmlmZXN0b0JhY2tncm91bmRDbGlwLmpwZyc7XG5pbXBvcnQge1xuICByZW5kZXJIZXJvXG59IGZyb20gJy4uL2NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgcmVuZGVyTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL3JlbmRlckxvZ28nO1xuaW1wb3J0IHtcbiAgcmVuZGVyQXJ0aWNsZSxcbiAgcmVuZGVyQXJ0aWNsZVRpdGxlLFxufSBmcm9tICcuLi9jb21wb25lbnRzL2FydGljbGUnO1xuaW1wb3J0IHtcbiAgY2hhbmdlRm9vdGVyQ29sb3Jcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHtcbiAgY29sb3JQaWNrZXIsXG59IGZyb20gJy4uL2NvbXBvbmVudHMvY29sb3JzJztcblxuY29uc3QgcmVuZGVyTWFuaWZlc3RvID0gKGNvbnRlbnQpID0+IHtcbiAgLy8gU2V0IG91ciB0ZXh0IGZvciBvdXIgaG91cnMgcGFnZVxuICBjb25zdCBoZXJvVGV4dCA9IFwiTUFOSVNGRVNUT1wiO1xuICBjb25zdCBoZXJvVVJMID0gQmFja2dyb3VuZDtcblxuICAvLyBCdWlsZHMgYSBoZXJvIGVsZW1lbnQgd2l0aCB0aGUgdGV4dCwgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGFwcGVuZHMgdG8gb3VyIGNvbnRlbnRcbiAgcmVuZGVySGVybyhoZXJvVGV4dCwgaGVyb1VSTCwgY29udGVudCwgY29sb3JQaWNrZXIoMykpO1xuXG4gIC8vIFJlbmRlciBhcnRpY2xlXG4gIHJlbmRlckFydGljbGUoY29udGVudCk7XG5cbiAgLy8gQnVpbGQgYWJvdXQgdXMgc2VjdGlvblxuICByZW5kZXJBcnRpY2xlVGl0bGUoJ0Fib3V0IFVzJywgY29sb3JQaWNrZXIoMykpO1xuXG4gIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5pbm5lckhUTUwgPSBgQSBjb21taXR0ZWQgc29jaWFsIGdyb3VwIGNvbXByaXNpbmcgcmVsYXRpb25zIGFuZCBhZG9wdGVkIGAgK1xuICAgIGBzdHJhbmdlcnMuIFBlb3BsZSBjb25uZWN0ZWQgYnkgYSBzaGFyZWQgaW50ZXJlc3Qgc3VjaCBhcyBiZWVyLCBzaG9lcywga25pdHRpbmcsIGAgK1xuICAgIGBmYW5jeSBjaGlja2Vucywgc3RhciB0cmVrLCB5b2dhLCBxdWlkZGl0Y2gsIGNhbm5hYmlzLCBoZWlybG9vbSB2ZWdldGFibGVzLCBidWdzLCBgICtcbiAgICBgYnJlYWQtbWFraW5nLCBjYXRzLCB3b3JsZC13YW5kZXJpbmcsIGdsYXNzLWJsb3dpbmcsIGN1cmxpbmcsIGNhbmluZXMg4oCmIFlvdeKApiBhcmUgYCArXG4gICAgYHBhcnQgb2Ygb3VyIHRyaWJlLiBPbmUgdGhpbmcgdGhhdOKAmXMgY29tbW9uIGFtb25nIGh1bWFuaXR5IGlzIG91ciBsb3ZlIG9mIGZvb2QsIGAgK1xuICAgIGBkcmluaywgYW5kIHN0b3J5dGVsbGluZy4gSGVyZSBhdCBUcmliZSB3ZSBpbWFnaW5lIGFsbCBwZW9wbGUgcmVnYXJkbGVzcyBvZiBgICtcbiAgICBgY3VsdHVyZSwgYmFja2dyb3VuZCwgb3IgbGlmZSBwaGlsb3NvcGh5IGNvbWluZyB0b2dldGhlciB0byBlbmpveSBjcmFmdCBiZWVyIGFuZCBgICtcbiAgICBgb3VyIGludGVybmF0aW9uYWxseSBpbnNwaXJlZCBtZW51IHVzaW5nIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cyB3aGVuZXZlciB3ZSBgICtcbiAgICBgY2FuLCB0aG91Z2h0ZnVsbHkgY3JlYXRlZCBieSBjaGVmcyB0aGF0IGNhcmUgYWJvdXQgeW91ciBjdWxpbmFyeSBleHBlcmllbmNlLiBgICtcbiAgICBgSW5zcGlyZWQgYnkgb3VyIGFuY2VzdG9ycyBmcm9tIGFyb3VuZCB0aGUgd29ybGQgd2UgaW52aXRlIHlvdSB0byBlbmpveSBvdXIgYCArXG4gICAgYG9mZmVyaW5ncywgY2VsZWJyYXRlIG9uZSBhbm90aGVyIGFuZCBvdXIgZXF1YWxseSBkaXZlcnNlIGFuZCBiZWF1dGlmdWwgam91cm5leXMuIGAgK1xuICAgIGBXZSBsb29rIGZvcndhcmQgdG8gc2hhcmluZyBvdXIgd29ybGRzIHdpdGggeW91ciB3b3JsZHPigKYgaW4gYSBzZXh5IHNvcGhpc3RpY2F0ZWQgYCArXG4gICAgYHdheS4gUm9tYW5jZSBpc27igJl0IGp1c3QgZm9yIGxvdmVycyDigJAgaXTigJlzIHRvIGJlIHNoYXJlZCB3aXRoIGFsbCBvZiBodW1hbml0eS4gRWF0IGAgK1xuICAgIGBhIGxpdHRsZS4gRHJpbmsgYSBsaXR0bGUuIEZsaXJ0IGEgbGl0dGxlLiBUZWxsIHlvdXIgbW9zdCBhd2Vzb21lIHN0b3JpZXMuYFxuXG4gIGFydGljbGUuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgLy8gQnVpbGQgYWdyZWVtZW50IHNlY3Rpb25cbiAgcmVuZGVyQXJ0aWNsZVRpdGxlKCdBZ3JlZW1lbnQnLCBjb2xvclBpY2tlcigzKSk7XG5cbiAgbGV0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0Mi5pbm5lckhUTUwgPSBcIkRvbid0IHRoaW5rIG9mIHRoZXNlIGFzIGhvdXNlIHJ1bGVzLCBzbyBtdWNoIGFzIHN0cm9uZyBzdWdnZXN0aW9ucyBcIiArXG4gICAgXCJhYm91dCBob3cgeW91IG1pZ2h0IG1ha2UgeW91ciB0aW1lIGhlcmUgdG9nZXRoZXIgYSB0aGluZyBvZiBiZWF1dHkuXCI7XG5cbiAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgYWdyZWVtZW50cyA9IFtcIlByZXRlbmQgaXTigJlzIDE5NzAgYW5kIGNlbGwgcGhvbmVzIGRvbuKAmXQgZXhpc3QgYW5kIHdlIHRha2Ugb3VyIGhhdHMgb2ZmIGluc2lkZS5cIixcbiAgICBcIlNheSBvbmUgdGhpbmcgdGhhdCB0dXJucyB5b3Ugb24gYWJvdXQgbGlmZS5cIixcbiAgICBcIk5vdGljZSBob3cgc2V4eSB5b3VyIHNlcnZlciBpcyBhbmQgZmxpcnQgYSBsaXR0bGUuXCIsXG4gICAgXCJEcmVhbSBhYm91dCBhIGZvcmVpZ24gY291bnRyeSB5b3XigJlkIGxpa2UgdG8gdmlzaXQuXCIsXG4gICAgXCJDb25qdWdhdGUg4oCYdHJpYmXigJkgaW50byBhbiBhZHZlcmIgYW5kIGFkamVjdGl2ZSBhbmQgdXNlIGl0IGluIGEgY2xldmVyIHNlbnRlbmNlLlwiLFxuICAgIFwidGFrZSBhIG1vbWVudCB0byBhcHByZWNpYXRlIGFuZCBlbWJyYWNlIHlvdXIgdHJpYmUgd2l0aCBhIHRvYXN0LlwiLFxuICAgIFwiQmUgdW5pbmhpYml0ZWQgZm9yIGEgZmV3IG1vbWVudHPigKYgaW4gYSBraW5kIHdheS5cIixcbiAgICBcIlVzZSBleHByZXNzaXZlIGxhbmd1YWdlLiBJZiB5b3UgbXVzdCBzd2VhciwgdGhlIHRyaWJlIGNoYXJnZSBpcyAkMjAgYSB3b3JkLCBpZiBhbnkgb25lIG92ZXJoZWFycy5cIlxuICBdO1xuXG4gIC8vIEFkZCBhZ3JlZW1lbnRzIHRvIHVsIGluIGFydGljbGVcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZ3JlZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBhZ3JlZW1lbnRzW2ldO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIC8vIEFkZCBpdGVtcyB0byBhcnRpY2xlLlxuICBhcnRpY2xlLmFwcGVuZENoaWxkKHRleHQyKTtcbiAgYXJ0aWNsZS5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgLy8gQWRkIGxvZ28gdG8gYm90dG9tIG9mIHBhZ2VcbiAgcmVuZGVyTG9nbyhhcnRpY2xlKTtcbiAgLy8gVXBkYXRlIGZvb3RlciBjb2xvclxuICBjaGFuZ2VGb290ZXJDb2xvcihjb2xvclBpY2tlcigzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1hbmlmZXN0bztcbiIsImltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4uL2ltZy9tZW51QmFja2dyb3VuZENsaXAuanBnJztcbmltcG9ydCB7XG4gIHJlbmRlckhlcm9cbn0gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJztcbmltcG9ydCB7XG4gIHJlbmRlckFydGljbGVcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9hcnRpY2xlJztcbmltcG9ydCB7XG4gIGNoYW5nZUZvb3RlckNvbG9yXG59IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCByZW5kZXJMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvcmVuZGVyTG9nbyc7XG5pbXBvcnQge1xuICBjb2xvclBpY2tlcixcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9jb2xvcnMnO1xuXG5cblxuXG5jb25zdCByZW5kZXJNZW51cyA9IChjb250ZW50KSA9PiB7XG4gIC8vIFNldCBvdXIgdGV4dCBmb3Igb3VyIGhvdXJzIHBhZ2VcbiAgY29uc3QgaGVyb1RleHQgPSBcIk1FTlVTXCI7XG4gIGNvbnN0IGhlcm9VUkwgPSBCYWNrZ3JvdW5kO1xuXG4gIC8vIEJ1aWxkcyBhIGhlcm8gZWxlbWVudCB3aXRoIHRoZSB0ZXh0LCBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgYXBwZW5kcyB0byBvdXIgY29udGVudFxuICByZW5kZXJIZXJvKGhlcm9UZXh0LCBoZXJvVVJMLCBjb250ZW50LCBjb2xvclBpY2tlcigyKSk7XG5cblxuICAvLyByZW5kZXIgYXJ0aWNsZVxuICByZW5kZXJBcnRpY2xlKGNvbnRlbnQpO1xuXG4gIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuXG5cbiAgLy8gQWRkIGxvZ28gdG8gYm90dG9tIG9mIHBhZ2VcbiAgcmVuZGVyTG9nbyhhcnRpY2xlKTtcblxuXG4gIGNoYW5nZUZvb3RlckNvbG9yKGNvbG9yUGlja2VyKDIpKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0zIS4vcmVzZXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9